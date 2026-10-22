import { Plus, MoreHorizontal } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader.jsx';
import DataTable from '../../components/common/DataTable.jsx';
import Button from '../../components/common/Button.jsx';
import StatusBadge from '../../components/common/StatusBadge.jsx';
import SearchInput from '../../components/common/SearchInput.jsx';
import FilterSelect from '../../components/common/FilterSelect.jsx';
import Pagination from '../../components/common/Pagination.jsx';
import { courses } from '../../data/mockCourses.js';
export default function CourseManagement() {
  return (
    <>
      <PageHeader
        title="Course management"
        description="A well-organized home for every course."
      >
        <Button>
          <Plus size={16} /> Add course
        </Button>
      </PageHeader>
      <div className="toolbar">
        <SearchInput
          id="admin-course-search"
          placeholder="Search courses or instructors..."
        />
        <FilterSelect
          id="admin-course-status"
          label="Course status"
          options={['All courses', 'Active', 'Completed']}
        />
      </div>
      <div className="surface">
        <DataTable
          caption="All academy courses"
          rows={courses}
          columns={[
            {
              key: 'title',
              label: 'Course',
              render: (course) => (
                <div className="stacked-cell">
                  <strong>{course.title}</strong>
                  <small>{course.code} · Fall 2026</small>
                </div>
              ),
            },
            {
              key: 'instructor',
              label: 'Instructor',
              render: (course) => course.instructor.name,
            },
            { key: 'students', label: 'Students' },
            { key: 'modules', label: 'Modules' },
            {
              key: 'status',
              label: 'Status',
              render: (course) => (
                <StatusBadge
                  status={
                    course.status === 'Completed' ? 'Completed' : 'Active'
                  }
                />
              ),
            },
            {
              key: 'action',
              label: 'Actions',
              render: (course) => (
                <Button
                  variant="icon"
                  aria-label={`Manage ${course.title}`}
                >
                  <MoreHorizontal size={18} />
                </Button>
              ),
            },
          ]}
        />
        <Pagination
          count={courses.length}
          label="courses"
        />
      </div>
    </>
  );
}
