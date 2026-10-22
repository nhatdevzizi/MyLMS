import PageHeader from '../../components/common/PageHeader.jsx';
import Tabs from '../../components/common/Tabs.jsx';
import SearchInput from '../../components/common/SearchInput.jsx';
import FilterSelect from '../../components/common/FilterSelect.jsx';
import AssignmentTable from '../../components/assignments/AssignmentTable.jsx';
import Pagination from '../../components/common/Pagination.jsx';
import { assignments } from '../../data/mockAssignments.js';
export default function Assignments() {
  return (
    <>
      <PageHeader
        title="Assignments"
        description="Make space for your next piece of good work."
      />
      <Tabs
        items={[
          'All assignments (8)',
          'To do (4)',
          'Submitted (1)',
          'Graded (3)',
        ]}
        active="All assignments (8)"
      />
      <div className="toolbar">
        <SearchInput
          id="assignment-search"
          label="Search assignments"
          placeholder="Search assignments..."
        />
        <FilterSelect
          id="assignment-course"
          label="Filter by course"
          options={['All courses', 'CS 201', 'CS 202', 'CS 203', 'CS 204']}
        />
        <FilterSelect
          id="assignment-status"
          label="Filter by status"
          options={[
            'All statuses',
            'Not started',
            'In progress',
            'Submitted',
            'Late',
            'Graded',
          ]}
        />
      </div>
      <div className="surface">
        <AssignmentTable assignments={assignments} />
        <Pagination
          count={assignments.length}
          label="assignments"
        />
      </div>
    </>
  );
}
