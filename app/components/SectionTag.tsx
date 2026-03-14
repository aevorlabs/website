import { Badge } from '@/components/ui/badge';

export default function SectionTag({
  label,
  variant = 'light',
}: {
  label: string;
  variant?: 'light' | 'dark';
}) {
  const styles =
    variant === 'light'
      ? 'bg-indigo-50 text-indigo-500 hover:bg-indigo-50'
      : 'bg-slate-800 text-indigo-300 hover:bg-slate-800';

  return (
    <Badge className={`rounded-full px-4 py-1.5 text-xs font-semibold ${styles}`}>
      {label}
    </Badge>
  );
}
