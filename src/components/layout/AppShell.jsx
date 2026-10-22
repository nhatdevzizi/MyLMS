import Sidebar from './Sidebar.jsx';
import Topbar from './Topbar.jsx';
import './AppShell.css';
export default function AppShell({ children, role = 'student', active = 'Dashboard' }) {
  return <div className="app-shell"><a href="#main-content" className="skip-link">Skip to content</a><Sidebar role={role} active={active} /><div className="app-shell__workspace"><Topbar active={active} /><main className="page-content" id="main-content" tabIndex={-1}>{children}<footer className="workspace-footer"><span>MyLMS · A little progress, every day.</span><span>Static UI preview · Fall 2026</span></footer></main></div></div>;
}
