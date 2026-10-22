import AppShell from './components/layout/AppShell.jsx';
import { previewPages } from './previewPages.jsx';

const preview = previewPages.studentDashboard;

export default function App() {
  const Page = preview.component;
  return preview.standalone ? (
    <Page {...preview.props} />
  ) : (
    <AppShell
      role={preview.role}
      active={preview.active}
    >
      <Page {...preview.props} />
    </AppShell>
  );
}
