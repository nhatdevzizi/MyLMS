import {
  GraduationCap,
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  BarChart3,
  Megaphone,
  Settings,
  CircleHelp,
  ChevronDown,
  ArrowUpRight,
  Users,
  ShieldCheck,
  Activity,
  Server,
  Plus,
  UserRound,
} from 'lucide-react';
import UserAvatar from '../common/UserAvatar.jsx';
import {
  currentStudent,
  currentInstructor,
  administrator,
} from '../../data/mockUsers.js';

const navigation = {
  student: [
    [LayoutDashboard, 'Dashboard'],
    [BookOpen, 'My courses', '5'],
    [ClipboardList, 'Assignments', '4'],
    [BarChart3, 'Grades'],
    [Megaphone, 'Announcements'],
    [UserRound, 'Profile'],
  ],
  instructor: [
    [LayoutDashboard, 'Dashboard'],
    [BookOpen, 'My courses', '2'],
    [Plus, 'Create course'],
    [ClipboardList, 'Assignments'],
    [Users, 'Submissions'],
    [BarChart3, 'Student performance'],
    [Megaphone, 'Announcements'],
  ],
  admin: [
    [LayoutDashboard, 'Dashboard'],
    [Users, 'Users', '8'],
    [BookOpen, 'Courses', '5'],
    [ShieldCheck, 'Roles'],
    [Server, 'System overview'],
    [Activity, 'Activity logs'],
    [Settings, 'Settings'],
  ],
};
export default function Sidebar({ role, active }) {
  const user =
    role === 'student'
      ? currentStudent
      : role === 'instructor'
        ? currentInstructor
        : administrator;
  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand__mark">
          <GraduationCap
            size={25}
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </span>
        <span>
          MyLMS<span className="brand__dot">.</span>
        </span>
      </div>
      <div className="workspace-switch">
        <span className="workspace-switch__mark">N</span>
        <div>
          <strong>Northstar Academy</strong>
          <span>Learning workspace</span>
        </div>
        <ChevronDown
          size={15}
          aria-hidden="true"
        />
      </div>
      <span className="sidebar__section-label">Workspace</span>
      <nav
        className="sidebar__nav"
        aria-label={`${role} navigation`}
      >
        {navigation[role].map(([Icon, label, count]) => (
          <button
            type="button"
            key={label}
            className={`sidebar__link ${label === active ? 'is-active' : ''}`}
            aria-current={label === active ? 'page' : undefined}
          >
            <Icon
              size={19}
              strokeWidth={1.8}
              aria-hidden="true"
            />
            <span>{label}</span>
            {count && <small>{count}</small>}
          </button>
        ))}
      </nav>
      <div className="sidebar__bottom">
        <div className="support-card">
          <span className="support-card__icon">
            <CircleHelp
              size={20}
              aria-hidden="true"
            />
          </span>
          <strong>A little help goes a long way.</strong>
          <p>Find answers and get back to what matters.</p>
          <button type="button">
            Visit the help center{' '}
            <ArrowUpRight
              size={15}
              aria-hidden="true"
            />
          </button>
        </div>
        <button
          type="button"
          className="sidebar__profile"
        >
          <UserAvatar user={user} />
          <span>
            <strong>{user.name}</strong>
            <small>{user.role}</small>
          </span>
          <ChevronDown
            size={15}
            aria-hidden="true"
          />
        </button>
      </div>
    </aside>
  );
}
