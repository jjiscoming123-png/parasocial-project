export default function Logo({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="100" height="100" rx="12" fill="#12121f" />
      {/* Broken heart / one-way connection */}
      <circle cx="35" cy="45" r="14" stroke="#ff6b9d" strokeWidth="2" fill="none" />
      <circle cx="65" cy="45" r="14" stroke="#ff6b9d" strokeWidth="2" fill="none" opacity="0.3" strokeDasharray="4 3" />
      <line x1="49" y1="45" x2="51" y2="45" stroke="#ff6b9d" strokeWidth="2" opacity="0.5" />
      <path d="M44 45 L56 45" stroke="#ff6b9d" strokeWidth="1.5" opacity="0.4" markerEnd="url(#arrow)" />
      <text x="50" y="80" fill="#ff6b9d" fontFamily="system-ui" fontWeight="700" fontSize="10" textAnchor="middle" opacity="0.6">PARA</text>
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#ff6b9d" opacity="0.4" />
        </marker>
      </defs>
    </svg>
  );
}
