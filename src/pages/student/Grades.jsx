import { Download } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader.jsx';
import Panel from '../../components/common/Panel.jsx';
import GradeCard from '../../components/grades/GradeCard.jsx';
import DataTable from '../../components/common/DataTable.jsx';
import FilterSelect from '../../components/common/FilterSelect.jsx';
import Button from '../../components/common/Button.jsx';
import ProgressBar from '../../components/common/ProgressBar.jsx';
import { grades, averageGrade, gradeDistribution } from '../../data/mockGrades.js';
import { courses } from '../../data/mockCourses.js';
export default function Grades() {
  return <><PageHeader title="Grades & feedback" description="See how far you’ve come, and what comes next."><Button variant="secondary"><Download size={16} /> Export grades</Button></PageHeader><div className="three-grid"><GradeCard title="Overall average" score={`${averageGrade}%`} detail="Mean score across 3 graded assignments" /><GradeCard title="Points earned" score="276 / 300" detail="From your assessed work this term" /><GradeCard title="Awaiting feedback" score="1" detail="SQL query practice · Submitted Oct 20" /></div><div className="content-columns"><Panel title="Course performance"><div className="panel__body stack">{courses.slice(0, 3).map(course => { const courseGrades = grades.filter(item => item.assignment.course.id === course.id); const value = courseGrades.length ? Math.round(courseGrades.reduce((sum, item) => sum + item.earned, 0) / courseGrades.length) : 0; return <div key={course.id}>{courseGrades.length ? <ProgressBar value={value} label={course.title} color={course.color} /> : <div className="ungraded-course"><span>{course.title}</span><small>No graded work yet</small></div>}</div>; })}</div></Panel><Panel title="Your grade distribution" description="3 graded assignments · Score bands"><div className="distribution-chart" role="img" aria-label="90 to 100: 2 assignments. 80 to 89: 1 assignment. Below 80: 0 assignments.">{gradeDistribution.map(item => <div key={item.label}><span>{item.label}</span><div><span style={{ width: `${item.count / grades.length * 100}%` }} /></div><strong>{item.count}</strong></div>)}</div></Panel></div><Panel title="Assignment grades" action={<FilterSelect id="grade-course" label="Filter grades by course" options={['All courses', 'CS 201', 'CS 203']} />}><DataTable caption="Assignment scores and feedback" rows={grades} columns={[
    { key: 'assignment', label: 'Assignment', render: item => <div className="stacked-cell"><strong>{item.assignment.title}</strong><small>{item.assignment.course.code}</small></div> },
    { key: 'due', label: 'Due date', render: item => item.assignment.due },
    { key: 'earned', label: 'Earned points' },
    { key: 'maximum', label: 'Maximum points', render: item => item.assignment.points },
    { key: 'feedback', label: 'Instructor feedback' },
  ]} /></Panel></>;
}
