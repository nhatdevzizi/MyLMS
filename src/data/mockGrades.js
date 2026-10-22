import { assignments } from './mockAssignments.js';

export const grades = [
  { assignment: assignments[4], earned: 92, feedback: 'Strong implementation. Add a test for deleting the root node.' },
  { assignment: assignments[6], earned: 88, feedback: 'Good analysis. Explain the worst-case memory usage in more detail.' },
  { assignment: assignments[7], earned: 96, feedback: 'Excellent semantic structure and accessible form labels.' },
];
export const averageGrade = Math.round(grades.reduce((sum, grade) => sum + grade.earned / grade.assignment.points * 100, 0) / grades.length);
export const gradeDistribution = [
  { label: '90–100', count: grades.filter(grade => grade.earned >= 90).length },
  { label: '80–89', count: grades.filter(grade => grade.earned >= 80 && grade.earned < 90).length },
  { label: '70–79', count: 0 },
  { label: 'Below 70', count: 0 },
];
