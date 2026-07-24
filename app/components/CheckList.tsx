/** Bulleted feature list with navy check marks, used across the service pages. */
export default function CheckList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-3 mb-8">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <svg className="w-5 h-5 text-navy shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M16.7 5.3a1 1 0 010 1.4l-7 7a1 1 0 01-1.4 0l-3-3a1 1 0 111.4-1.4l2.3 2.3 6.3-6.3a1 1 0 011.4 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-body leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}
