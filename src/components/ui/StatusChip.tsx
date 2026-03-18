interface StatusChipProps {
  label: string;
  tone?: "default" | "warning" | "success";
}

export default function StatusChip({ label, tone = "default" }: StatusChipProps) {
  return <span className={`status-chip status-chip--${tone}`}>{label}</span>;
}
