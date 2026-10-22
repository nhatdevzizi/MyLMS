import { Inbox } from 'lucide-react';
export default function EmptyState({ title, description }) {
  return <div className="empty-state"><span className="empty-state__icon"><Inbox size={28} strokeWidth={1.5} aria-hidden="true" /></span><h3>{title}</h3><p>{description}</p></div>;
}
