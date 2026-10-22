import { FileText } from 'lucide-react';
import DataTable from '../common/DataTable.jsx';
import StatusBadge from '../common/StatusBadge.jsx';
import Button from '../common/Button.jsx';
export default function AssignmentTable({ assignments, management = false }) {
  const columns = [
    {
      key: 'title',
      label: 'Assignment',
      render: (item) => (
        <div className="table-title">
          <span className={`table-icon tone-${item.course.color}`}>
            <FileText
              size={17}
              aria-hidden="true"
            />
          </span>
          <div>
            <strong>{item.title}</strong>
            <span>{item.course.title}</span>
          </div>
        </div>
      ),
    },
    {
      key: 'due',
      label: 'Due date',
      render: (item) => (
        <div className="stacked-cell">
          <span>{item.due}</span>
          <small>{item.time}</small>
        </div>
      ),
    },
    { key: 'points', label: 'Points' },
    {
      key: 'status',
      label: 'Status',
      render: (item) => (
        <StatusBadge
          status={
            management
              ? item.pending
                ? 'Needs grading'
                : 'Graded'
              : item.status
          }
        />
      ),
    },
    ...(management
      ? [
          {
            key: 'submitted',
            label: 'Submissions',
            render: (item) => `${item.submitted} / ${item.course.students}`,
          },
          { key: 'pending', label: 'To grade' },
        ]
      : [{ key: 'grading', label: 'Grade' }]),
    {
      key: 'action',
      label: 'Action',
      render: () => (
        <Button variant="text">{management ? 'Review' : 'View'}</Button>
      ),
    },
  ];
  return (
    <DataTable
      columns={columns}
      rows={assignments}
      caption={management ? 'Assignment management' : 'Your assignments'}
    />
  );
}
