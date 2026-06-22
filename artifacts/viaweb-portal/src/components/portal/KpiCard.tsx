import { type LucideIcon } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
  iconColor?: string;
  progress?: number;
  progressLabel?: string;
  badge?: string;
  badgeColor?: string;
}

export function KpiCard({
  title,
  value,
  subtitle,
  icon: Icon,
  iconColor = "text-sky-600",
  progress,
  progressLabel,
  badge,
  badgeColor = "bg-green-100 text-green-700",
}: KpiCardProps) {
  return (
    <div className="bg-white rounded-xl border border-border p-5 flex flex-col gap-3" data-testid={`kpi-${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">{title}</p>
          <p className="text-2xl font-bold font-display text-foreground">{value}</p>
          {subtitle && <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>}
        </div>
        <div className={`w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0 ${iconColor}`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>

      {badge && (
        <span className={`self-start text-xs font-medium px-2 py-0.5 rounded-full ${badgeColor}`}>
          {badge}
        </span>
      )}

      {progress !== undefined && (
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-xs text-muted-foreground">{progressLabel}</p>
            <p className="text-xs font-semibold text-foreground">{progress}%</p>
          </div>
          <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-sky-500 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
