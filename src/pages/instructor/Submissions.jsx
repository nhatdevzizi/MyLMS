import PageHeader from '../../components/common/PageHeader.jsx';
import SearchInput from '../../components/common/SearchInput.jsx';
import FilterSelect from '../../components/common/FilterSelect.jsx';
import DataTable from '../../components/common/DataTable.jsx';
import UserAvatar from '../../components/common/UserAvatar.jsx';
import Button from '../../components/common/Button.jsx';
import StatusBadge from '../../components/common/StatusBadge.jsx';
import Pagination from '../../components/common/Pagination.jsx';
import { submissions } from '../../data/mockAssignments.js';
export default function Submissions() {
  return (
    <>
      <PageHeader
        title="Student submissions"
        description="Thoughtful feedback starts with a closer look."
      />
      <div className="toolbar">
        <SearchInput
          id="submission-search"
          placeholder="Search by student or assignment..."
        />
        <FilterSelect
          id="submission-filter"
          label="Submission status"
          options={['All submissions', 'Needs grading', 'Graded']}
        />
      </div>
      <div className="surface">
        <DataTable
          caption="Student assignment submissions"
          rows={submissions}
          columns={[
            {
              key: 'student',
              label: 'Student',
              render: (item) => (
                <div className="person-row">
                  <UserAvatar user={item.student} />
                  <strong>{item.student.name}</strong>
                </div>
              ),
            },
            {
              key: 'assignment',
              label: 'Assignment',
              render: (item) => item.assignment.title,
            },
            { key: 'submitted', label: 'Submitted' },
            {
              key: 'status',
              label: 'Status',
              render: (item) => <StatusBadge status={item.status} />,
            },
            {
              key: 'actions',
              label: 'Action',
              render: () => <Button variant="text">Grade submission</Button>,
            },
          ]}
        />
        <Pagination
          count={submissions.length}
          label="submissions"
        />
      </div>
    </>
  );
}
