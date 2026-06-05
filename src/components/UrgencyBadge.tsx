type Props = {
  level: 'Low' | 'Medium' | 'High';
  reason: string;
};

export default function UrgencyBadge({ level, reason }: Props) {
  const colors = {
    Low: 'bg-urgent-low-bg text-urgent-low-text',
    Medium: 'bg-urgent-med-bg text-urgent-med-text',
    High: 'bg-urgent-high-bg text-urgent-high-text',
  };

  return (
    <div className="flex items-center gap-3">
      <span className={`px-4 py-2 rounded-full text-sm font-semibold ${colors[level]}`}>
        {level}
      </span>
      <span className="text-muted">{reason}</span>
    </div>
  );
}
