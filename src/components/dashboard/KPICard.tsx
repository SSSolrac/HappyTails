import { StatusChip } from "@/components/ui";
import type { DashboardStat } from "@/types/dashboard";

interface KPICardProps {
  stat: DashboardStat;
}

export default function KPICard({ stat }: KPICardProps) {
  return (
    <div className="card">
      <h3>{stat.label}</h3>
      <p>{stat.value}</p>
      {stat.tone ? <StatusChip label={stat.tone.toUpperCase()} tone={stat.tone} /> : null}
    </div>
  );
}
