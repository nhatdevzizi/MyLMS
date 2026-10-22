import { MoreHorizontal } from 'lucide-react';
import UserAvatar from '../common/UserAvatar.jsx';
import DataTable from '../common/DataTable.jsx';
import StatusBadge from '../common/StatusBadge.jsx';
import Button from '../common/Button.jsx';
export default function UserTable({ users }) {
  return <DataTable caption="Workspace users" rows={users} columns={[
    { key: 'name', label: 'Name', render: user => <div className="person-row"><UserAvatar user={user} /><div className="stacked-cell"><strong>{user.name}</strong><small>{user.email}</small></div></div> },
    { key: 'role', label: 'Role' },
    { key: 'status', label: 'Status', render: user => <StatusBadge status={user.status} /> },
    { key: 'registered', label: 'Joined' },
    { key: 'actions', label: 'Actions', render: user => <Button variant="icon" aria-label={`Manage ${user.name}`}><MoreHorizontal size={19} /></Button> },
  ]} />;
}
