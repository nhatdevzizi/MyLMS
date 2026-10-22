import learningIllustration from '../../assets/learning.svg';
import { BookOpen, ClipboardList, CircleCheck, TrendingUp, ArrowRight, ArrowUpRight, CalendarDays } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader.jsx';
import StatCard from '../../components/common/StatCard.jsx';
import Panel from '../../components/common/Panel.jsx';
import Button from '../../components/common/Button.jsx';
import CourseCard from '../../components/courses/CourseCard.jsx';
import DeadlineCard from '../../components/assignments/DeadlineCard.jsx';
import AnnouncementCard from '../../components/common/AnnouncementCard.jsx';
import ActivityFeed from '../../components/common/ActivityFeed.jsx';
import AssignmentTable from '../../components/assignments/AssignmentTable.jsx';
import { courses } from '../../data/mockCourses.js';
import { assignments } from '../../data/mockAssignments.js';
import { averageGrade } from '../../data/mockGrades.js';
import { announcements } from '../../data/mockAnnouncements.js';
import { studentActivity } from '../../data/mockActivity.js';

export default function StudentDashboard() {
  return <><PageHeader title="Welcome back, Alex" description="A fresh day to learn something new. Let’s make it count." date /><div className="stats-grid"><StatCard icon={BookOpen} label="Enrolled courses" value={courses.length} detail="4 in progress · 1 completed" /><StatCard icon={ClipboardList} label="Pending assignments" value={4} detail="Your next deadline is tomorrow" color="orange" /><StatCard icon={CircleCheck} label="Completed assignments" value={4} detail="3 graded · 1 awaiting review" color="teal" /><StatCard icon={TrendingUp} label="Average grade" value={`${averageGrade}%`} detail="Across 3 graded assignments" color="rose" /></div><div className="dashboard-columns"><div className="dashboard-main"><section className="continue-banner"><div><span className="continue-banner__label"><BookOpen size={15} aria-hidden="true" /> Pick up where you left off</span><h2>A little progress.<br />A lot of possibility.</h2><p>Continue with Graph traversal &amp; shortest paths.</p><Button>Continue learning <ArrowRight size={15} aria-hidden="true" /></Button></div><img src={learningIllustration} alt="An open book beside a connected learning path" /></section><Panel title="Your courses" description="Keep your momentum going." action={<Button variant="text">All courses <ArrowRight size={14} aria-hidden="true" /></Button>} className="panel--transparent"><div className="course-grid course-grid--dashboard">{courses.slice(0, 3).map(course => <CourseCard course={course} key={course.id} />)}</div></Panel><Panel title="Assignments at a glance" action={<Button variant="text">View all <ArrowUpRight size={14} aria-hidden="true" /></Button>}><AssignmentTable assignments={assignments.slice(0, 3)} /></Panel><Panel title="Recent activity"><ActivityFeed items={studentActivity} /></Panel></div><aside className="dashboard-rail" aria-label="Deadlines and announcements"><Panel title="Upcoming deadlines" action={<span className="count-badge">3</span>}><div className="deadline-list">{assignments.slice(0, 3).map(item => <DeadlineCard assignment={item} key={item.id} />)}</div><Button variant="secondary" className="button--full"><CalendarDays size={15} aria-hidden="true" /> View all assignments</Button></Panel><Panel title="Announcements" action={<span className="unread-dot" aria-label="Unread announcements" />}><div className="announcement-list">{announcements.slice(0, 2).map(item => <AnnouncementCard compact announcement={item} key={item.id} />)}</div><Button variant="text" className="button--full">All announcements <ArrowRight size={14} aria-hidden="true" /></Button></Panel><div className="learning-note"><span className="learning-note__symbol">“</span><p>The beautiful thing about learning is that no one can take it away from you.</p><span>B. B. King</span></div></aside></div></>;
}
