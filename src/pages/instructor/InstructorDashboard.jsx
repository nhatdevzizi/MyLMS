import {
  BookOpen,
  Users,
  ClipboardCheck,
  FileCheck2,
  Plus,
  ArrowRight,
} from 'lucide-react';
import PageHeader from '../../components/common/PageHeader.jsx';
import StatCard from '../../components/common/StatCard.jsx';
import Panel from '../../components/common/Panel.jsx';
import Button from '../../components/common/Button.jsx';
import CourseCard from '../../components/courses/CourseCard.jsx';
import DataTable from '../../components/common/DataTable.jsx';
import UserAvatar from '../../components/common/UserAvatar.jsx';
import StatusBadge from '../../components/common/StatusBadge.jsx';
import ActivityFeed from '../../components/common/ActivityFeed.jsx';
import DeadlineCard from '../../components/assignments/DeadlineCard.jsx';
import ProgressBar from '../../components/common/ProgressBar.jsx';
import { instructorCourses } from '../../data/mockCourses.js';
import { assignments, submissions } from '../../data/mockAssignments.js';
const courseAssignments = assignments.filter(
  (item) => item.course.instructor.id === 'i1',
);
export default function InstructorDashboard() {
  return (
    <>
      <PageHeader
        title="Good morning, Dr. Wilson"
        description="A clear view of your classroom, and the work ahead."
      >
        <Button>
          <Plus size={16} /> Create assignment
        </Button>
      </PageHeader>
      <div className="stats-grid">
        <StatCard
          icon={BookOpen}
          label="Active courses"
          value={2}
          detail="Fall 2026"
        />
        <StatCard
          icon={Users}
          label="Course enrollments"
          value={56}
          detail="32 in CS 201 · 24 in CS 204"
          color="teal"
        />
        <StatCard
          icon={ClipboardCheck}
          label="Pending grading"
          value={14}
          detail="8 graph traversal · 6 TCP analysis"
          color="orange"
        />
        <StatCard
          icon={FileCheck2}
          label="Recent submissions"
          value={submissions.length}
          detail="In the submission preview"
          color="rose"
        />
      </div>
      <div className="dashboard-columns">
        <div className="stack">
          <Panel
            title="Your classroom"
            action={
              <Button variant="text">
                Manage courses <ArrowRight size={14} />
              </Button>
            }
            className="panel--transparent"
          >
            <div className="two-grid">
              {instructorCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                />
              ))}
            </div>
          </Panel>
          <Panel title="Recent submissions">
            <DataTable
              caption="Recent student submissions"
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
                  render: (item) => (
                    <div className="stacked-cell">
                      <span>{item.assignment.title}</span>
                      <small>{item.submitted}</small>
                    </div>
                  ),
                },
                {
                  key: 'status',
                  label: 'Status',
                  render: (item) => <StatusBadge status={item.status} />,
                },
                {
                  key: 'action',
                  label: 'Action',
                  render: () => <Button variant="text">Review</Button>,
                },
              ]}
            />
          </Panel>
          <Panel title="Classroom activity">
            <ActivityFeed
              items={[
                {
                  title: 'Sam Rivera submitted an assignment',
                  detail: 'Graph traversal implementation',
                  time: '9:18 AM',
                  color: 'blue',
                },
                {
                  title: 'Learning materials published',
                  detail: 'Week 8 · Graph traversal lecture notes',
                  time: '8:30 AM',
                  color: 'teal',
                },
              ]}
            />
          </Panel>
        </div>
        <aside className="stack">
          <Panel title="Upcoming assignments">
            {courseAssignments
              .filter((item) => item.id === 'a1')
              .map((item) => (
                <DeadlineCard
                  key={item.id}
                  assignment={item}
                />
              ))}
          </Panel>
          <Panel
            title="Submission progress"
            description="Current assignments"
          >
            <div className="panel__body stack">
              {courseAssignments.slice(0, 2).map((item) => (
                <ProgressBar
                  key={item.id}
                  label={item.title}
                  value={Math.round(
                    (item.submitted / item.course.students) * 100,
                  )}
                  color={item.course.color}
                />
              ))}
            </div>
          </Panel>
        </aside>
      </div>
    </>
  );
}
