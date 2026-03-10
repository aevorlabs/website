export default function SectionTag({
  label,
  variant = 'light',
}: {
  label: string;
  variant?: 'light' | 'dark';
}) {
  const styles =
    variant === 'light' ? 'bg-indigo-50 text-indigo-500' : 'bg-slate-800 text-indigo-300';

  return (
    <div>
      <span className={`inline-block rounded-full px-4 py-1.5 text-xs font-semibold ${styles}`}>
        {label}
      </span>
    </div>
  );
}
