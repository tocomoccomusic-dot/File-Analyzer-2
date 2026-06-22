import { pgTable, serial, text, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const afipConfigsTable = pgTable("afip_configs", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull().unique(),
  cuit: text("cuit").notNull(),
  certPem: text("cert_pem"),
  privateKeyPem: text("private_key_pem"),
  token: text("token"),
  sign: text("sign"),
  tokenExpiry: timestamp("token_expiry", { withTimezone: true }),
  certExpiry: timestamp("cert_expiry", { withTimezone: true }),
  renewalAttempts: integer("renewal_attempts").notNull().default(0),
  lastRenewalError: text("last_renewal_error"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow().$onUpdate(() => new Date()),
});

export const insertAfipConfigSchema = createInsertSchema(afipConfigsTable).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export type InsertAfipConfig = z.infer<typeof insertAfipConfigSchema>;
export type AfipConfig = typeof afipConfigsTable.$inferSelect;
