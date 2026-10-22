import { Plus } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader.jsx';
import Button from '../../components/common/Button.jsx';
import SearchInput from '../../components/common/SearchInput.jsx';
import FilterSelect from '../../components/common/FilterSelect.jsx';
import Tabs from '../../components/common/Tabs.jsx';
import AssignmentTable from '../../components/assignments/AssignmentTable.jsx';
import Pagination from '../../components/common/Pagination.jsx';
import { assignments } from '../../data/mockAssignments.js';
const items = assignments.filter((item) => item.course.instructor.id === 'i1');
export default function AssignmentManagement() {
  return (
    <>
      <PageHeader
        title="Assignment management"
        description="Plan meaningful work. Give useful feedback."
      >
        <Button>
          <Plus size={16} /> Create assignment
        </Button>
      </PageHeader>
      <Tabs
        items={['All assignments (4)', 'Needs grading (2)', 'Graded (2)']}
        active="All assignments (4)"
      />
      <div className="toolbar">
        <SearchInput
          id="manage-assignment-search"
          placeholder="Search assignments..."
        />
        <FilterSelect
          id="manage-course"
          label="Course"
          options={['All your courses', 'CS 201', 'CS 204']}
        />
        <FilterSelect
          id="manage-status"
          label="Grading status"
          options={['All statuses', 'Needs grading', 'Graded']}
        />
      </div>
      <div className="surface">
        <AssignmentTable
          assignments={items}
          management
        />
        <Pagination
          count={items.length}
          label="assignments"
        />
      </div>
    </>
  );
}
