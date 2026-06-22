import { Router, type IRouter, type Request, type Response } from "express";
import { db, usersTable, subscriptionsTable, afipConfigsTable, afipComprobantesTable } from "@workspace/db";
import { getHealthAlertStatus, updateHealthAlertConfig, runHealthCheck, sendTestAlert, getAlertLogs } from "../lib/healthAlerts";
import { eq, desc, count, max } from "drizzle-orm";
import crypto from "crypto";
import forge from "node-forge";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";
import { refreshToken } from "../lib/afip/wsaa";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WORKSPACE_ROOT = path.resolve(__dirname, "../../..");
const DOCS_ROOT = WORKSPACE_ROOT;

const EXEC_WHITELIST: Record<string, { label: string; cmd: string; args: string[]; timeout: number }> = {
  "status":        { label: "Estado del servidor",    cmd: "bash", args: ["scripts-ubuntu-v10/monitoreo/status.sh"],                       timeout: 30000  },
  "health":        { label: "Health check completo",  cmd: "bash", args: ["scripts-ubuntu-v10/monitoreo/health-check.sh"],                 timeout: 60000  },
  "diagnostico":   { label: "Diagnóstico general",    cmd: "bash", args: ["scripts-ubuntu-v10/monitoreo/diagnostico.sh"],                  timeout: 60000  },
  "logs-api":      { label: "Logs API (últimas 100)", cmd: "bash", args: ["scripts-ubuntu-v10/monitoreo/logs.sh", "api", "--lines=100"],   timeout: 15000  },
  "logs-evo":      { label: "Logs Evolution",         cmd: "bash", args: ["scripts-ubuntu-v10/monitoreo/logs.sh", "evo", "--lines=100"],   timeout: 15000  },
  "migrate":       { label: "Aplicar migraciones DB", cmd: "pnpm", args: ["--filter", "@workspace/db", "run", "migrate"],                 timeout: 60000  },
  "rebuild":       { label: "Rebuild sin git pull",   cmd: "bash", args: ["scripts-ubuntu-v10/ops/rebuild.sh"],                           timeout: 120000 },
  "update":        { label: "git pull + build",       cmd: "bash", args: ["scripts-ubuntu-v10/ops/update.sh"],                            timeout: 180000 },
  "backup-db":     { label: "Backup PostgreSQL",      cmd: "bash", args: ["scripts-ubuntu-v10/db/backup-db.sh"],                          timeout: 60000  },
};

const ALLOWED_DOCS: Record<string, string> = {
  // ── docs/ ────────────────────────────────────────────────────────────────
  "docs/produccion-checklist.md":          "Checklist producción",
  "docs/CHECKLIST.md":                     "CHECKLIST general",
  "docs/comandos-rapidos.md":              "Comandos rápidos",
  "docs/setup-local.md":                   "Setup local",
  "docs/PUBLICAR-CLOUDFLARE.md":           "Publicar en Cloudflare",
  "docs/setup-evolution.md":              "Setup Evolution API",
  "docs/CLEANUP-LOG.md":                   "Cleanup Log",
  "docs/afip/informe-afip-parte1.md":      "AFIP — Parte 1",
  "docs/afip/informe-afip-parte2.md":      "AFIP — Parte 2",
  "docs/afip/conector_afip_api.py":        "AFIP — Conector .py",
  "docs/frappe/frappe-estrategia.md":      "Frappe — Estrategia",
  "docs/frappe/frappe-repos.md":           "Frappe — Repos completo",
  "docs/frappe/frappe-repos-resumen.md":   "Frappe — Repos resumen",
  "docs/brand/brand-style-guide.html":     "Brand — Style Guide",
  "docs/brand/brand-preview.html":         "Brand — Preview",
  "docs/brand/pasted-react-component.txt": "Brand — Componente React",
  // ── scripts-ubuntu-v10/ ──────────────────────────────────────────────────
  "scripts-ubuntu-v10/README.md":                               "README",
  "scripts-ubuntu-v10/Makefile":                                "Makefile",
  "scripts-ubuntu-v10/.env.example":                            ".env example",
  "scripts-ubuntu-v10/.env.production.example":                 ".env producción",
  "scripts-ubuntu-v10/ubuntu-local.env.example":                ".env local Ubuntu",
  "scripts-ubuntu-v10/evolution.env.example":                   "Evolution .env",
  "scripts-ubuntu-v10/setup/setup-completo.sh":                 "setup-completo.sh",
  "scripts-ubuntu-v10/setup/instalar-servicios.sh":             "instalar-servicios.sh",
  "scripts-ubuntu-v10/setup/setup-nginx.sh":                    "setup-nginx.sh",
  "scripts-ubuntu-v10/setup/setup-tunnel.sh":                   "setup-tunnel.sh",
  "scripts-ubuntu-v10/ops/start.sh":                            "start.sh",
  "scripts-ubuntu-v10/ops/stop.sh":                             "stop.sh",
  "scripts-ubuntu-v10/ops/rebuild.sh":                          "rebuild.sh",
  "scripts-ubuntu-v10/ops/update.sh":                           "update.sh",
  "scripts-ubuntu-v10/monitoreo/status.sh":                     "status.sh",
  "scripts-ubuntu-v10/monitoreo/health-check.sh":               "health-check.sh",
  "scripts-ubuntu-v10/monitoreo/diagnostico.sh":                "diagnostico.sh",
  "scripts-ubuntu-v10/monitoreo/logs.sh":                       "logs.sh",
  "scripts-ubuntu-v10/monitoreo/monitoreo.sh":                  "monitoreo.sh",
  "scripts-ubuntu-v10/monitoreo/reporte-diario.sh":             "reporte-diario.sh",
  "scripts-ubuntu-v10/db/backup-db.sh":                         "backup-db.sh",
  "scripts-ubuntu-v10/db/restore-db.sh":                        "restore-db.sh",
  "scripts-ubuntu-v10/whatsapp/instalar-evolution-lite.sh":     "instalar-evolution-lite.sh",
  "scripts-ubuntu-v10/whatsapp/instalar-evolution.sh":          "instalar-evolution.sh",
  "scripts-ubuntu-v10/whatsapp/actualizar-evolution-lite.sh":   "actualizar-evolution-lite.sh",
  "scripts-ubuntu-v10/whatsapp/conectar-whatsapp.sh":           "conectar-whatsapp.sh",
  "scripts-ubuntu-v10/services/clientum-api.service":           "clientum-api.service",
  "scripts-ubuntu-v10/services/clientum-proxy.service":         "clientum-proxy.service",
  "scripts-ubuntu-v10/services/clientum-vite.service":          "clientum-vite.service",
  "scripts-ubuntu-v10/services/evolution-api-lite.service":     "evolution-api-lite.service",
  "scripts-ubuntu-v10/services/evolution-api.service":          "evolution-api.service",
};

const router: IRouter = Router();

function guardAdmin(req: Request, res: Response): boolean {
  if (!req.isAuthenticated()) { res.status(401).json({ error: "No autenticado" }); return false; }
  if (req.user.role !== "admin") { res.status(403).json({ error: "Acceso denegado" }); return false; }
  return true;
}

function parseCertDays(certPem: string | null): number | null {
  if (!certPem) return null;
  try {
    const cert = forge.pki.certificateFromPem(certPem);
    const expiry = cert.validity.notAfter;
    const diffMs = expiry.getTime() - Date.now();
    return Math.floor(diffMs / (1000 * 60 * 60 * 24));
  } catch {
    return null;
  }
}

// ── GET /api/admin/users ───────────────────────────────────────────────────────

router.get("/admin/users", async (req: Request, res: Response) => {
  if (!guardAdmin(req, res)) return;

  const users = await db.select({
    id: usersTable.id,
    email: usersTable.email,
    firstName: usersTable.firstName,
    lastName: usersTable.lastName,
    role: usersTable.role,
    createdAt: usersTable.createdAt,
  }).from(usersTable).orderBy(desc(usersTable.createdAt));

  const subs = await db.select().from(subscriptionsTable);
  const subsByUser = new Map(subs.map((s) => [s.userId, s]));

  const result = users.map((u) => {
    const sub = subsByUser.get(u.id);
    return {
      ...u,
      plan: sub?.plan ?? "free",
      status: sub?.status ?? "none",
      currentPeriodEnd: sub?.currentPeriodEnd ?? null,
      mpPaymentId: sub?.mpPaymentId ?? null,
    };
  });

  res.json({ users: result, total: result.length });
});

// ── PATCH /api/admin/users/:id/role ───────────────────────────────────────────

router.patch("/admin/users/:id/role", async (req: Request, res: Response) => {
  if (!guardAdmin(req, res)) return;

  const id = String(req.params["id"]);
  const { role } = req.body as { role?: string };

  if (!role || !["user", "admin"].includes(role)) {
    res.status(400).json({ error: "role debe ser 'user' o 'admin'" });
    return;
  }

  const [updated] = await db
    .update(usersTable)
    .set({ role: role as "user" | "admin", updatedAt: new Date() })
    .where(eq(usersTable.id, id))
    .returning({ id: usersTable.id, role: usersTable.role });

  if (!updated) {
    res.status(404).json({ error: "Usuario no encontrado" });
    return;
  }

  res.json({ ok: true, user: updated });
});

// ── PATCH /api/admin/users/:id/plan ───────────────────────────────────────────

router.patch("/admin/users/:id/plan", async (req: Request, res: Response) => {
  if (!guardAdmin(req, res)) return;

  const id = String(req.params["id"]);
  const { plan, status } = req.body as { plan?: string; status?: string };

  if (!plan && !status) { res.status(400).json({ error: "plan o status requerido" }); return; }

  const validPlans = ["free", "starter", "pro", "business", "enterprise"];
  if (plan && !validPlans.includes(plan)) { res.status(400).json({ error: "Plan inválido" }); return; }

  const [existing] = await db.select({ id: subscriptionsTable.id })
    .from(subscriptionsTable).where(eq(subscriptionsTable.userId, id)).limit(1);

  const periodEnd = new Date(Date.now() + 100 * 365 * 24 * 60 * 60 * 1000);

  if (existing) {
    await db.update(subscriptionsTable).set({
      ...(plan && { plan }),
      ...(status && { status }),
      currentPeriodEnd: periodEnd,
    }).where(eq(subscriptionsTable.userId, id));
  } else {
    await db.insert(subscriptionsTable).values({
      id: crypto.randomUUID(),
      userId: id,
      plan: plan ?? "free",
      status: status ?? "active",
      currentPeriodEnd: periodEnd,
    });
  }

  res.json({ ok: true });
});

// ── GET /api/admin/afip ────────────────────────────────────────────────────────

router.get("/admin/afip", async (req: Request, res: Response) => {
  if (!guardAdmin(req, res)) return;

  const configs = await db.select({
    userId:      afipConfigsTable.userId,
    cuit:        afipConfigsTable.cuit,
    razonSocial: afipConfigsTable.razonSocial,
    puntoVenta:  afipConfigsTable.puntoVenta,
    environment: afipConfigsTable.environment,
    tokenExpiry: afipConfigsTable.tokenExpiry,
    certPem:     afipConfigsTable.certPem,
    updatedAt:   afipConfigsTable.updatedAt,
  }).from(afipConfigsTable);

  const users = await db.select({
    id:        usersTable.id,
    email:     usersTable.email,
    firstName: usersTable.firstName,
    lastName:  usersTable.lastName,
  }).from(usersTable);
  const userById = new Map(users.map(u => [u.id, u]));

  const compRows = await db.select({
    userId: afipComprobantesTable.userId,
    total:  count(afipComprobantesTable.id),
    last:   max(afipComprobantesTable.createdAt),
  }).from(afipComprobantesTable).groupBy(afipComprobantesTable.userId);
  const compByUser = new Map(compRows.map(r => [r.userId, r]));

  const result = configs.map(c => {
    const u = userById.get(c.userId);
    const comp = compByUser.get(c.userId);

    const tokenMs  = c.tokenExpiry ? c.tokenExpiry.getTime() - Date.now() : null;
    const tokenH   = tokenMs != null ? Math.floor(tokenMs / (1000 * 60 * 60)) : null;
    const certDays = parseCertDays(c.certPem);

    return {
      userId:              c.userId,
      email:               u?.email ?? null,
      firstName:           u?.firstName ?? null,
      lastName:            u?.lastName ?? null,
      cuit:                c.cuit,
      razonSocial:         c.razonSocial,
      puntoVenta:          c.puntoVenta,
      environment:         c.environment,
      tokenExpiry:         c.tokenExpiry?.toISOString() ?? null,
      tokenHorasRestantes: tokenH,
      certDiasRestantes:   certDays,
      hasCert:             !!c.certPem,
      totalComprobantes:   comp ? Number(comp.total) : 0,
      ultimoComprobante:   comp?.last?.toISOString() ?? null,
      updatedAt:           c.updatedAt.toISOString(),
    };
  });

  res.json({ configs: result, total: result.length });
});

// ── POST /api/admin/afip/:userId/renovar-token ─────────────────────────────────

router.post("/admin/afip/:userId/renovar-token", async (req: Request, res: Response) => {
  if (!guardAdmin(req, res)) return;

  const userId = String(req.params["userId"]);

  const [cfg] = await db.select({ id: afipConfigsTable.id })
    .from(afipConfigsTable)
    .where(eq(afipConfigsTable.userId, userId))
    .limit(1);

  if (!cfg) { res.status(404).json({ error: "Config AFIP no encontrada" }); return; }

  await refreshToken(userId);
  res.json({ ok: true });
});

// ── POST /api/admin/afip/renovar-todos ────────────────────────────────────────

router.post("/admin/afip/renovar-todos", async (req: Request, res: Response) => {
  if (!guardAdmin(req, res)) return;

  const configs = await db.select({ userId: afipConfigsTable.userId })
    .from(afipConfigsTable);

  const results: { userId: string; ok: boolean; error?: string }[] = [];

  for (const c of configs) {
    try {
      await refreshToken(c.userId);
      results.push({ userId: c.userId, ok: true });
    } catch (err) {
      results.push({ userId: c.userId, ok: false, error: String(err) });
    }
  }

  const ok    = results.filter(r => r.ok).length;
  const error = results.filter(r => !r.ok).length;
  res.json({ ok, error, results });
});

// ── GET /api/admin/health-alerts ─────────────────────────────────────────────
router.get("/admin/health-alerts", (req: Request, res: Response) => {
  if (!guardAdmin(req, res)) return;
  res.json(getHealthAlertStatus());
});

// ── PATCH /api/admin/health-alerts ───────────────────────────────────────────
router.patch("/admin/health-alerts", (req: Request, res: Response) => {
  if (!guardAdmin(req, res)) return;
  const { enabled, phone } = req.body as { enabled?: boolean; phone?: string };
  updateHealthAlertConfig({ enabled, phone });
  res.json(getHealthAlertStatus());
});

// ── POST /api/admin/health-alerts/test ───────────────────────────────────────
router.post("/admin/health-alerts/test", async (req: Request, res: Response) => {
  if (!guardAdmin(req, res)) return;
  try {
    await sendTestAlert();
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : "Error enviando alerta" });
  }
});

// ── POST /api/admin/health-alerts/check ──────────────────────────────────────
router.post("/admin/health-alerts/check", async (req: Request, res: Response) => {
  if (!guardAdmin(req, res)) return;
  const status = await runHealthCheck();
  res.json({ status, ...getHealthAlertStatus() });
});

// ── GET /api/admin/health-alerts/logs ─────────────────────────────────────────
router.get("/admin/health-alerts/logs", async (req: Request, res: Response) => {
  if (!guardAdmin(req, res)) return;
  const limit = Math.min(Number(req.query["limit"] ?? 50), 200);
  const logs = await getAlertLogs(isNaN(limit) ? 50 : limit);
  res.json({ logs });
});

// ── GET /api/admin/exec (SSE) ─────────────────────────────────────────────────
router.get("/admin/exec", (req: Request, res: Response) => {
  if (!guardAdmin(req, res)) return;
  const script = String(req.query["script"] ?? "");
  const def = EXEC_WHITELIST[script];
  if (!def) { res.status(400).json({ error: "Comando no permitido" }); return; }

  res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
  res.setHeader("Cache-Control", "no-cache, no-transform");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("X-Accel-Buffering", "no");
  res.flushHeaders();

  const send = (line: string) => {
    res.write(`data: ${JSON.stringify(line)}\n\n`);
    (res as unknown as { flush?: () => void }).flush?.();
  };

  send(`▶  ${def.cmd} ${def.args.join(" ")}`);
  send("─".repeat(64));

  const child = spawn(def.cmd, def.args, {
    cwd: WORKSPACE_ROOT,
    env: { ...process.env },
    stdio: ["ignore", "pipe", "pipe"],
  });

  let buf = "";
  const flush = (raw: string, prefix = "") => {
    (buf + raw).split("\n").forEach((l, i, arr) => {
      if (i < arr.length - 1) send(prefix + l);
      else buf = l;
    });
  };

  child.stdout.on("data", (chunk: Buffer) => flush(chunk.toString()));
  child.stderr.on("data", (chunk: Buffer) => flush(chunk.toString(), "⚠ "));

  const timer = setTimeout(() => {
    send(""); send("⏱  Tiempo agotado — proceso terminado.");
    child.kill("SIGTERM");
  }, def.timeout);

  child.on("close", (code) => {
    clearTimeout(timer);
    if (buf) send(buf);
    send("─".repeat(64));
    send(`✓  Terminado (código ${code ?? 0})`);
    res.write("data: __EOF__\n\n");
    res.end();
  });

  req.on("close", () => { clearTimeout(timer); child.kill("SIGTERM"); });
});

// ── GET /api/admin/exec/list ──────────────────────────────────────────────────
router.get("/admin/exec/list", (req: Request, res: Response) => {
  if (!guardAdmin(req, res)) return;
  res.json({
    commands: Object.entries(EXEC_WHITELIST).map(([key, def]) => ({ key, label: def.label })),
  });
});

// ── GET /api/admin/docs ────────────────────────────────────────────────────────
router.get("/admin/docs", (req: Request, res: Response) => {
  if (!guardAdmin(req, res)) return;
  res.json({ docs: Object.entries(ALLOWED_DOCS).map(([file, title]) => ({ file, title })) });
});

// ── GET /api/admin/docs/:file ──────────────────────────────────────────────────
router.get("/admin/docs/{*file}", async (req: Request, res: Response) => {
  if (!guardAdmin(req, res)) return;
  const file = String(req.params["file"]);
  if (!Object.prototype.hasOwnProperty.call(ALLOWED_DOCS, file)) {
    res.status(404).json({ error: "Archivo no encontrado" }); return;
  }
  try {
    const content = await fs.readFile(path.join(DOCS_ROOT, file), "utf-8");
    const contentType = file.endsWith(".html")
      ? "text/html; charset=utf-8"
      : "text/plain; charset=utf-8";
    res.type(contentType).send(content);
  } catch {
    res.status(404).json({ error: "No se pudo leer el archivo" });
  }
});

export default router;
