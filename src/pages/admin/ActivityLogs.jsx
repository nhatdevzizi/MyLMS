import PageHeader from '../../components/common/PageHeader.jsx';
import SearchInput from '../../components/common/SearchInput.jsx';
import FilterSelect from '../../components/common/FilterSelect.jsx';
import DataTable from '../../components/common/DataTable.jsx';
import StatusBadge from '../../components/common/StatusBadge.jsx';
import Pagination from '../../components/common/Pagination.jsx';
import { activityLogs } from '../../data/mockActivity.js';
export default function ActivityLogs() {
  return <><PageHeader title="Activity logs" description="A record of what happens across your workspace." /><div className="toolbar"><SearchInput id="log-search" placeholder="Search people, events, or resources..." /><FilterSelect id="log-type" label="Event type" options={['All events', 'Content', 'Submission', 'User']} /><FilterSelect id="log-date" label="Date range" options={['Last 7 days', 'Last 30 days', 'This term']} /></div><div className="surface"><DataTable caption="Workspace activity log" rows={activityLogs} columns={[{ key: 'actor', label: 'Person' }, { key: 'event', label: 'Event' }, { key: 'resource', label: 'Resource' }, { key: 'type', label: 'Type', render: item => <StatusBadge status={item.type} /> }, { key: 'date', label: 'Date & time (UTC+7)' }]} /><Pagination count={activityLogs.length} label="events" /></div></>;
}
