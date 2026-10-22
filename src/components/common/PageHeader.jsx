import { CalendarDays } from 'lucide-react';
export default function PageHeader({ title, description, children, date = false }) {
  return <header className="page-header"><div><h1>{title}</h1>{description && <p>{description}</p>}</div><div className="page-header__actions">{date && <span className="date-label"><CalendarDays size={16} aria-hidden="true" /> Thursday, October 22, 2026</span>}{children}</div></header>;
}
