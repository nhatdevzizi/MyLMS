import { LayoutGrid, List } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader.jsx';
import SearchInput from '../../components/common/SearchInput.jsx';
import FilterSelect from '../../components/common/FilterSelect.jsx';
import Tabs from '../../components/common/Tabs.jsx';
import Button from '../../components/common/Button.jsx';
import CourseCard from '../../components/courses/CourseCard.jsx';
import { courses } from '../../data/mockCourses.js';
export default function MyCourses() {
  return (
    <>
      <PageHeader
        title="My courses"
        description="Your classroom, all in one place."
      />
      <Tabs
        items={['All courses (5)', 'In progress (4)', 'Completed (1)']}
        active="All courses (5)"
      />
      <div className="toolbar">
        <SearchInput
          id="course-search"
          label="Search courses"
          placeholder="Search by course name or code..."
        />
        <FilterSelect
          id="course-category"
          label="Course category"
          options={[
            'All categories',
            'Computer science',
            'Development',
            'Infrastructure',
          ]}
        />
        <FilterSelect
          id="course-term"
          label="Term"
          options={['Fall 2026', 'Spring 2026']}
        />
        <div className="view-switch">
          <Button
            variant="secondary"
            aria-label="Grid view"
            aria-pressed="true"
          >
            <LayoutGrid size={17} />
          </Button>
          <Button
            variant="secondary"
            aria-label="List view"
            aria-pressed="false"
          >
            <List size={17} />
          </Button>
        </div>
      </div>
      <p className="result-count">5 courses in your learning journey</p>
      <div className="course-grid">
        {courses.map((course) => (
          <CourseCard
            course={course}
            detailed
            key={course.id}
          />
        ))}
      </div>
    </>
  );
}
