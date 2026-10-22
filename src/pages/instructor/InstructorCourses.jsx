import { Plus } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader.jsx';
import SearchInput from '../../components/common/SearchInput.jsx';
import FilterSelect from '../../components/common/FilterSelect.jsx';
import Button from '../../components/common/Button.jsx';
import CourseCard from '../../components/courses/CourseCard.jsx';
import { instructorCourses } from '../../data/mockCourses.js';
export default function InstructorCourses() {
  return <><PageHeader title="My courses" description="Build a classroom that brings learning to life."><Button><Plus size={16} /> Create course</Button></PageHeader><div className="toolbar"><SearchInput id="instructor-course-search" placeholder="Search your courses..." /><FilterSelect id="instructor-course-term" label="Term" options={['Fall 2026', 'Spring 2026']} /></div><div className="course-grid">{instructorCourses.map(course => <CourseCard course={course} detailed key={course.id} />)}</div></>;
}
