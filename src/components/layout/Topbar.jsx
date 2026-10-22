import { Bell, ChevronDown } from 'lucide-react';
import SearchInput from '../common/SearchInput.jsx';
import Button from '../common/Button.jsx';
export default function Topbar({ active }) {
  return <header className="topbar"><div className="topbar__location"><span>Workspace</span><span>/</span><strong>{active}</strong></div><div className="topbar__tools"><SearchInput id="workspace-search" label="Search workspace" placeholder="Search anything..." /><span className="term-label">Fall 2026 <ChevronDown size={13} aria-hidden="true" /></span><Button variant="icon" aria-label="Notifications, 3 unread"><span className="notification-icon"><Bell size={20} /><span /></span></Button></div></header>;
}
