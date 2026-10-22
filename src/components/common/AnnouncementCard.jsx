import { Megaphone } from 'lucide-react';
import UserAvatar from './UserAvatar.jsx';
export default function AnnouncementCard({ announcement, compact = false }) {
  return <article className={`announcement-card ${compact ? 'announcement-card--compact' : ''}`}><div className="announcement-card__meta"><span className={`course-label tone-${announcement.course.color}`}>{announcement.course.code}</span><time>{announcement.time}</time></div><h3><Megaphone size={16} aria-hidden="true" />{announcement.title}</h3><p>{announcement.text}</p><div className="person-row"><UserAvatar user={announcement.author} size="small" /><span>{announcement.author.name}</span></div></article>;
}
