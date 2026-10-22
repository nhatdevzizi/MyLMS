import { courses } from './mockCourses.js';

export const announcements = [
  {
    id: 'n1',
    title: 'A little extra practice for graph traversal',
    course: courses[0],
    author: courses[0].instructor,
    date: 'Oct 22, 2026',
    time: '2 hours ago',
    text: 'The Week 8 practice set is now available in Learning materials. Try the disconnected graph exercises before starting your assignment.',
  },
  {
    id: 'n2',
    title: 'Office hours this Friday',
    course: courses[1],
    author: courses[1].instructor,
    date: 'Oct 21, 2026',
    time: 'Yesterday',
    text: 'Bring your schema design questions to Room B204 on Friday, October 23, from 2:00 to 3:00 PM. We will work through normalization examples together.',
  },
  {
    id: 'n3',
    title: 'Your next build starts with a good foundation',
    course: courses[2],
    author: courses[2].instructor,
    date: 'Oct 20, 2026',
    time: 'Oct 20',
    text: 'The portfolio project brief and assessment rubric are ready. Start with your HTML structure before adding layout and styling.',
  },
];
