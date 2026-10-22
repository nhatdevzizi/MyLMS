You are a senior frontend UI/UX engineer specializing in modern educational web applications. Design Taste Frontend Gpt Taste 
 
Your task is to design and implement the **complete visual frontend of a Learning Management System (LMS)**. 
 
This project is intended for a developer who wants to implement the ReactJS logic, backend APIs, authentication, routing, and state management independently. 
 
**Your responsibility is strictly UI implementation, component structure, HTML/JSX markup, and CSS styling.** 
 
## 1. Technology Stack 
 
Use: 
- ReactJS with Vite 
- JavaScript (JSX), not TypeScript 
- Semantic HTML5 through JSX 
- Plain CSS3 
- CSS variables for theming 
- CSS Grid and Flexbox 
- Lucide React for icons 
 
Do NOT use: 
- Tailwind CSS 
- Bootstrap 
- Material UI 
- Shadcn/UI 
- Styled Components 
- Redux, Zustand, or Context API 
- React Router 
- Axios, TanStack Query, or backend integrations 
- Any UI component library 
 
Use plain CSS for all visual styling. 
 
## 2. Critical Rules 
 
**I want to implement the React logic myself.** 
 
Therefore: 
 
1. Focus exclusively on static, high-quality UI. 
2. Create React components containing JSX and CSS. 
3. Use static mock data stored in separate files. 
4. Do not implement event handlers such as onClick, onSubmit, or onChange. 
5. Do not implement useState, useEffect, useReducer, useContext, or custom hooks. 
6. Do not implement authentication or authorization logic. 
7. Do not implement API requests or backend functionality. 
8. Do not implement real form submission, file uploading, grading, or course enrollment. 
9. Do not implement navigation or routing logic. 
10. Do not implement fake functionality that pretends to communicate with a backend. 
11. Do not add unnecessary dependencies. 
12. Avoid putting all UI in a single large component. 
13. Priority of scalability is the first, most important of the system.
 
Buttons, links, dropdowns, forms, and other controls should be visually complete but intentionally nonfunctional. 
A developer should be able to attach React logic to these components later without redesigning their markup. 
 
## 3. Design Direction 
 
Create a professional, modern LMS interface inspired by the usability of Canvas LMS, Moodle, Google Classroom, and Linear. 
 
Do not clone any existing product. 
 
Visual requirements: 
- Clean, academic SaaS dashboard. Get references from existing products
- Light theme as the primary design 
- Professional typography using Inter 
- Soft neutral page backgrounds 
- White cards and restrained accent colors 
- Blue or indigo as the primary accent 
- Consistent spacing and alignment 
- Subtle borders and shadows 
- Clear visual hierarchy 
- Well-designed empty states 
- High-quality forms and tables 
- Responsive layouts for mobile, tablet, and desktop 
 
Avoid excessive gradients, glassmorphism, or flashy animations. 
 
The design should suitable for a classroom, or small educational organization. 
 
## 4. User Roles 
 
Design separate interfaces for three user roles. 
 
### Student 
 
Students should be able to visually access: 
- Dashboard 
- My Courses 
- Course Details 
- Assignments 
- Assignment Details 
- Assignment Submission 
- Grades 
- Announcements 
- Profile 
 
### Instructor 
 
Instructors should have: 
- Dashboard 
- My Courses 
- Course Details 
- Create Course form 
- Assignment Management 
- Create Assignment form 
- Student Submissions 
- Grade Submission interface 
- Student Performance overview 
- Announcements 
 
### Administrator 
 
Administrators should have: 
- Dashboard 
- User Management 
- Course Management 
- Role Management 
- System Overview 
- Activity Logs 
- Settings 
 
All pages should be visually consistent while reflecting the needs of their respective roles. 
 
## 5. Pages to Design 
 
### A. Authentication 
 
Create: 
- Login page 
- Registration page 
- Forgot Password page 
 
Include realistic fields, validation-message placeholders, password visibility icon, and appropriate layout. 
 
Do not implement authentication or validation logic. 
 
### B. Student Dashboard 
 
Include: 
- Welcome section 
- Enrolled course statistics 
- Pending assignments 
- Completed assignments 
- Average grade 
- Upcoming deadlines 
- Recent announcements 
- Course progress cards 
- Recent activity section 
 
Use realistic educational mock data. 
 
### C. My Courses 
 
Include: 
- Course cards 
- Course code 
- Instructor name 
- Enrollment information 
- Course description 
- Progress indicator 
- Search input 
- Category filter 
- Course status badges 
 
All controls remain static. 
 
### D. Course Detail 
 
Include: 
- Course banner 
- Course title and description 
- Instructor information 
- Course metadata 
- Course navigation tabs 
- Overview section 
- Learning materials 
- Assignments list 
- Announcements 
- Enrolled students preview 
 
### E. Assignment List 
 
Include: 
- Assignment title 
- Associated course 
- Due date 
- Maximum points 
- Submission status 
- Grading status 
- Search and filter controls 
 
Represent different statuses visually: 
- Not Started 
- In Progress 
- Submitted 
- Late 
- Graded 
 
### F. Assignment Detail 
 
Include: 
- Assignment description 
- Instructions 
- Due date 
- Maximum score 
- Submission requirements 
- Allowed file formats 
- Attached resources 
- Submission status 
- File upload drop zone 
- Optional text submission area 
- Submit button 
 
The upload area and submit button are visual only. 
 
### G. Grades 
 
Include: 
- Course grade summary 
- Assignment grade table 
- Earned points 
- Maximum points 
- Instructor feedback 
- Grade distribution visualization 
- Overall performance cards 
 
Use CSS-only progress bars and simple visual representations. 
 
Do not install charting libraries. 
 
### H. Instructor Dashboard 
 
Include: 
- Active courses 
- Total students 
- Pending grading 
- Recent submissions 
- Upcoming assignments 
- Activity feed 
- Course performance summary 
 
### I. Assignment Management 
 
Include: 
- Assignment table 
- Assignment status 
- Due dates 
- Submission count 
- Pending grading count 
- Create Assignment button 
- Assignment creation form 
 
The form should visually support: 
- Title 
- Description 
- Course selection 
- Due date 
- Maximum score 
- File requirements 
- Submission instructions 
 
### J. Submission Grading 
 
Design a detailed instructor grading interface with: 
- Student information 
- Assignment information 
- Submitted files 
- Submission timestamp 
- Submission preview area 
- Numeric grade input 
- Written feedback textarea 
- Grading rubric 
- Save Grade button 
- Previous/Next Submission controls 
 
All interactions must remain unimplemented. 
 
### K. Admin Dashboard 
 
Include: 
- Total users 
- Active students 
- Active instructors 
- Active courses 
- Recent activity 
- User growth visualization 
- Course statistics 
- Platform overview 
 
### L. User Management 
 
Include: 
- User table 
- User avatar 
- Full name 
- Email 
- Role 
- Account status 
- Registration date 
- Search 
- Filters 
- Add User form 
- Edit User interface 
- Delete confirmation modal design 
 
Do not implement modal opening or closing behavior. 
 
## 6. Reusable Component Architecture 
 
Create reusable UI components such as: 
 
- AppShell 
- Sidebar 
- Topbar 
- PageHeader 
- Breadcrumbs 
- StatCard 
- CourseCard 
- AssignmentCard 
- AssignmentTable 
- StatusBadge 
- ProgressBar 
- UserAvatar 
- DataTable 
- FormField 
- SearchInput 
- FilterSelect 
- Modal 
- EmptyState 
- FileUploadZone 
- GradeCard 
- AnnouncementCard 
- DeadlineCard 
- Pagination 
 
Each reusable component should: 
- Have its own JSX file 
- Have an associated CSS file when necessary 
- Accept simple presentation props where appropriate 
- Avoid internal state or business logic 
- Use semantic HTML 
- Have accessible labels where applicable 
 
Use descriptive, meaningful CSS class names. Do not write comments.
 
## 7. Recommended Folder Structure 
 
src/ 
  assets/ 
  components/ 
    layout/ 
    common/ 
    courses/ 
    assignments/ 
    grades/ 
    users/ 
  pages/ 
    auth/ 
    student/ 
    instructor/ 
    admin/ 
  data/ 
    mockCourses.js 
    mockAssignments.js 
    mockUsers.js 
    mockGrades.js 
    mockAnnouncements.js 
  styles/ 
    global.css 
    variables.css 
    typography.css 
    responsive.css 
  App.jsx 
  main.jsx 
 
You may adjust this structure if there is a strong organizational reason, but keep the project simple and understandable. 
 
## 8. Responsive Design 
 
Support three main viewport categories: 
- Mobile: 320px–767px 
- Tablet: 768px–1023px 
- Desktop: 1024px and above 
 
Requirements: 
- Responsive sidebar layouts 
- Readable data tables on small screens 
- Mobile-friendly course cards 
- Responsive forms 
- Adaptive grid layouts 
- Proper spacing and typography 
- No horizontal page overflow 
- Accessible form labels 
- Visible keyboard focus states 
 
Use CSS media queries. 
 
Do not implement JavaScript-based responsive behavior. 
 
## 9. Mock Data 
 
Create separate mock data files containing realistic examples of: 
- Students 
- Instructors 
- Administrators 
- Courses 
- Assignments 
- Submissions 
- Grades 
- Announcements 
 
Example courses: 
- Data Structures and Algorithms 
- Database Management Systems 
- Computer Networks 
- Operating Systems 
- Web Development 
 
Mock data should be consistent across pages. 
 
For example, an assignment shown on the dashboard should use the same title, course, and deadline as its corresponding detail page. 
 
Mock data is only for presentation. Do not build a data management system. 
 
## 10. Frontend Architecture for Future Integration 
 
This UI will eventually connect to a backend, potentially FastAPI, with React controlling the frontend. 
 
Design JSX so I can later add: 
- React Router navigation 
- Authentication and user sessions 
- API data fetching 
- Form handling 
- Assignment file submissions 
- Submission grading 
- Role-based access control 
- Notifications 
- Search and filtering 
- Pagination 
- Loading and error states 
 
Do not implement any of these features now. 
 
## 11. Preview and Development Requirements 
 
Because React Router is intentionally excluded, create a simple static preview mechanism that allows me to inspect the different page designs during development. 
 
A manually configurable page component in App.jsx is sufficient. 
 
For example, I should be able to replace the rendered page component in App.jsx to preview a different screen. 
 
Do not implement a custom routing system or complex interactive page selector. 
 
## 12. Quality Expectations 
 
The UI should be: 
- Complete and visually polished 
- Component-based 
- Consistent across pages 
- Accessible 
- Responsive 
- Easy to maintain 
- Easy to connect to React logic later 
 
Pay particular attention to assignment submission and instructor grading workflows because these are the core features of this LMS. 
 
Do not leave major pages as empty placeholders. 
 
## 13. Development Order 
Implement the frontend incrementally:

Phase 1:

Project setup

Design tokens

Typography

Global CSS

App shell

Sidebar

Topbar

Reusable base components

Phase 2:

Authentication pages

Student dashboard

Course pages

Assignment pages

Submission UI

Grades

Phase 3:

Instructor dashboard

Assignment management

Grading interface

Phase 4:

Administrator dashboard

User management

Remaining administration pages

Phase 5:

Responsive refinement

Accessibility

Cross-page visual consistency

Cleanup and documentation

14. Final Deliverables

Provide:

A working React + Vite project.

Complete static JSX components.

Plain CSS stylesheets.

Consistent mock data.

All described page designs.

Responsive layouts.

A README explaining the folder structure and how to preview each page.

A list of components where React logic should be added later.

Final instruction:

Do not implement functionality on my behalf.

I want to learn ReactJS and backend integration by writing that logic myself.

Your job is to deliver a beautiful, production-quality visual foundation that I can build upon.

Begin by inspecting the existing repository. Preserve any existing useful code and configuration. Then implement the UI in the development order above.