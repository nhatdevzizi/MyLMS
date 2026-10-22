import { instructors } from './mockUsers.js';

export const courses = [
  {
    id: 'cs201',
    code: 'CS 201',
    title: 'Data Structures & Algorithms',
    description:
      'Build efficient solutions with trees, graphs, and the algorithms that connect them.',
    instructor: instructors[0],
    category: 'Computer science',
    progress: 68,
    modules: 12,
    completed: 8,
    students: 32,
    status: 'In progress',
    color: 'blue',
    artwork: 'algorithms',
    nextLesson: 'Graph traversal & shortest paths',
  },
  {
    id: 'cs202',
    code: 'CS 202',
    title: 'Database Management Systems',
    description:
      'Design reliable data models and turn complex questions into clear SQL queries.',
    instructor: instructors[1],
    category: 'Computer science',
    progress: 42,
    modules: 10,
    completed: 4,
    students: 28,
    status: 'In progress',
    color: 'teal',
    artwork: 'database',
    nextLesson: 'Normalization & functional dependencies',
  },
  {
    id: 'cs203',
    code: 'CS 203',
    title: 'Web Development',
    description:
      'Create accessible web experiences with HTML, CSS, and modern JavaScript.',
    instructor: instructors[2],
    category: 'Development',
    progress: 75,
    modules: 12,
    completed: 9,
    students: 36,
    status: 'In progress',
    color: 'orange',
    artwork: 'web',
    nextLesson: 'Responsive layouts with CSS Grid',
  },
  {
    id: 'cs204',
    code: 'CS 204',
    title: 'Computer Networks',
    description:
      'Understand the protocols, layers, and infrastructure behind connected systems.',
    instructor: instructors[0],
    category: 'Infrastructure',
    progress: 25,
    modules: 8,
    completed: 2,
    students: 24,
    status: 'In progress',
    color: 'rose',
    artwork: 'networks',
    nextLesson: 'Transport layer & reliable delivery',
  },
  {
    id: 'cs205',
    code: 'CS 205',
    title: 'Operating Systems',
    description:
      'Explore processes, memory, concurrency, and the foundations of modern computing.',
    instructor: instructors[1],
    category: 'Infrastructure',
    progress: 100,
    modules: 10,
    completed: 10,
    students: 30,
    status: 'Completed',
    color: 'slate',
    artwork: 'systems',
    nextLesson: 'Course complete',
  },
];
export const instructorCourses = courses.filter(
  (course) => course.instructor.id === 'i1',
);
export const learningMaterials = [
  {
    title: 'Graph traversal lecture notes',
    detail: 'PDF · 2.4 MB · Updated Oct 20',
    type: 'Document',
  },
  {
    title: 'Breadth-first search walkthrough',
    detail: 'Video · 18 min · Week 8',
    type: 'Video',
  },
  {
    title: 'Algorithm complexity reference',
    detail: 'PDF · 840 KB · Week 8',
    type: 'Document',
  },
];
