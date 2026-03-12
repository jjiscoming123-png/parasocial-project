export default function Logo({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="100" height="100" rx="12" fill="#0e0b14" />
      {/* Two circles - connected and disconnected */}
      <circle cx="36" cy="45" r="16" stroke="#ff6b9d" strokeWidth="2" fill="none" />
      <circle cx="64" cy="45" r="16" stroke="#ff6b9d" strokeWidth="2" fill="none" opacity="0.2" strokeDasharray="4 3" />
      {/* Arrow pointing one way */}
      <path d="M52 45 L56 45" stroke="#ff6b9d" strokeWidth="1.5" opacity="0.4" />
      <path d="M54 42 L58 45 L54 48" stroke="#ff6b9d" strokeWidth="1.5" fill="none" opacity="0.4" />
      {/* Label */}
      <text x="50" y="78" fill="#ff6b9d" fontFamily="system-ui" fontWeight="600" fontSize="8" textAnchor="middle" opacity="0.5">ONE WAY</text>
    </svg>
  );
}
