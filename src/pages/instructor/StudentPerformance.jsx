import PageHeader from '../../components/common/PageHeader.jsx';
import Panel from '../../components/common/Panel.jsx';
import FilterSelect from '../../components/common/FilterSelect.jsx';
import DataTable from '../../components/common/DataTable.jsx';
import UserAvatar from '../../components/common/UserAvatar.jsx';
import GradeCard from '../../components/grades/GradeCard.jsx';
import { grades } from '../../data/mockGrades.js';
import { currentStudent } from '../../data/mockUsers.js';
export default function StudentPerformance() {
  const assessed = grades.filter(
    (item) => item.assignment.course.id === 'cs201',
  );
  return (
    <>
      <PageHeader
        title="Student performance"
        description="A closer look at learning, beyond the numbers."
      >
        <FilterSelect
          id="performance-course"
          label="Course"
          options={[
            'CS 201 · Data Structures & Algorithms',
            'CS 204 · Computer Networks',
          ]}
        />
      </PageHeader>
      <div className="three-grid">
        <GradeCard
          title="Sample student average"
          score="90%"
          detail="Alex Morgan · 2 graded CS 201 assignments"
        />
        <GradeCard
          title="Assessed points"
          score="180 / 200"
          detail="Across the available sample grade records"
        />
        <GradeCard
          title="Latest score"
          score="92%"
          detail="Binary search tree operations"
        />
      </div>
      <Panel
        title="Student overview"
        description="Available sample grade records"
      >
        <DataTable
          caption="Student course performance"
          rows={[currentStudent]}
          columns={[
            {
              key: 'student',
              label: 'Student',
              render: (user) => (
                <div className="person-row">
                  <UserAvatar user={user} />
                  <strong>{user.name}</strong>
                </div>
              ),
            },
            {
              key: 'assignments',
              label: 'Graded assignments',
              render: () => assessed.length,
            },
            { key: 'points', label: 'Points', render: () => '180 / 200' },
            { key: 'average', label: 'Average', render: () => '90%' },
            {
              key: 'note',
              label: 'Focus area',
              render: () => 'Memory complexity & edge cases',
            },
          ]}
        />
      </Panel>
      <Panel title="Assignment breakdown">
        <DataTable
          caption="CS 201 grade records"
          rows={assessed}
          columns={[
            {
              key: 'title',
              label: 'Assignment',
              render: (item) => item.assignment.title,
            },
            { key: 'earned', label: 'Score' },
            {
              key: 'max',
              label: 'Maximum',
              render: (item) => item.assignment.points,
            },
            { key: 'feedback', label: 'Feedback' },
          ]}
        />
      </Panel>
    </>
  );
}
