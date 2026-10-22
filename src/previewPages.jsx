import Login from './pages/auth/Login.jsx';
import Register from './pages/auth/Register.jsx';
import ForgotPassword from './pages/auth/ForgotPassword.jsx';
import StudentDashboard from './pages/student/StudentDashboard.jsx';
import MyCourses from './pages/student/MyCourses.jsx';
import CourseDetail from './pages/student/CourseDetail.jsx';
import Assignments from './pages/student/Assignments.jsx';
import AssignmentDetail from './pages/student/AssignmentDetail.jsx';
import Grades from './pages/student/Grades.jsx';
import Announcements from './pages/student/Announcements.jsx';
import Profile from './pages/student/Profile.jsx';
import InstructorDashboard from './pages/instructor/InstructorDashboard.jsx';
import InstructorCourses from './pages/instructor/InstructorCourses.jsx';
import CreateCourse from './pages/instructor/CreateCourse.jsx';
import AssignmentManagement from './pages/instructor/AssignmentManagement.jsx';
import CreateAssignment from './pages/instructor/CreateAssignment.jsx';
import Submissions from './pages/instructor/Submissions.jsx';
import GradeSubmission from './pages/instructor/GradeSubmission.jsx';
import StudentPerformance from './pages/instructor/StudentPerformance.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import UserManagement from './pages/admin/UserManagement.jsx';
import UserForm from './pages/admin/UserForm.jsx';
import DeleteUser from './pages/admin/DeleteUser.jsx';
import CourseManagement from './pages/admin/CourseManagement.jsx';
import RoleManagement from './pages/admin/RoleManagement.jsx';
import SystemOverview from './pages/admin/SystemOverview.jsx';
import ActivityLogs from './pages/admin/ActivityLogs.jsx';
import Settings from './pages/admin/Settings.jsx';

export const previewPages = {
  login: { component: Login, standalone: true },
  register: { component: Register, standalone: true },
  forgotPassword: { component: ForgotPassword, standalone: true },
  studentDashboard: {
    component: StudentDashboard,
    role: 'student',
    active: 'Dashboard',
  },
  myCourses: { component: MyCourses, role: 'student', active: 'My courses' },
  courseDetail: {
    component: CourseDetail,
    role: 'student',
    active: 'My courses',
  },
  assignments: {
    component: Assignments,
    role: 'student',
    active: 'Assignments',
  },
  assignmentDetail: {
    component: AssignmentDetail,
    role: 'student',
    active: 'Assignments',
  },
  assignmentSubmission: {
    component: AssignmentDetail,
    props: { submission: true },
    role: 'student',
    active: 'Assignments',
  },
  grades: { component: Grades, role: 'student', active: 'Grades' },
  announcements: {
    component: Announcements,
    role: 'student',
    active: 'Announcements',
  },
  profile: { component: Profile, role: 'student', active: 'Profile' },
  instructorDashboard: {
    component: InstructorDashboard,
    role: 'instructor',
    active: 'Dashboard',
  },
  instructorCourses: {
    component: InstructorCourses,
    role: 'instructor',
    active: 'My courses',
  },
  instructorCourseDetail: {
    component: CourseDetail,
    props: { instructor: true },
    role: 'instructor',
    active: 'My courses',
  },
  createCourse: {
    component: CreateCourse,
    role: 'instructor',
    active: 'Create course',
  },
  assignmentManagement: {
    component: AssignmentManagement,
    role: 'instructor',
    active: 'Assignments',
  },
  createAssignment: {
    component: CreateAssignment,
    role: 'instructor',
    active: 'Assignments',
  },
  submissions: {
    component: Submissions,
    role: 'instructor',
    active: 'Submissions',
  },
  gradeSubmission: {
    component: GradeSubmission,
    role: 'instructor',
    active: 'Submissions',
  },
  studentPerformance: {
    component: StudentPerformance,
    role: 'instructor',
    active: 'Student performance',
  },
  instructorAnnouncements: {
    component: Announcements,
    props: { instructor: true },
    role: 'instructor',
    active: 'Announcements',
  },
  adminDashboard: {
    component: AdminDashboard,
    role: 'admin',
    active: 'Dashboard',
  },
  userManagement: { component: UserManagement, role: 'admin', active: 'Users' },
  addUser: { component: UserForm, role: 'admin', active: 'Users' },
  editUser: {
    component: UserForm,
    props: { edit: true },
    role: 'admin',
    active: 'Users',
  },
  deleteUser: { component: DeleteUser, role: 'admin', active: 'Users' },
  courseManagement: {
    component: CourseManagement,
    role: 'admin',
    active: 'Courses',
  },
  roleManagement: { component: RoleManagement, role: 'admin', active: 'Roles' },
  systemOverview: {
    component: SystemOverview,
    role: 'admin',
    active: 'System overview',
  },
  activityLogs: {
    component: ActivityLogs,
    role: 'admin',
    active: 'Activity logs',
  },
  settings: { component: Settings, role: 'admin', active: 'Settings' },
};
