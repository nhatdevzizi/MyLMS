const positive = ['Active', 'Completed', 'Graded', 'Published', 'Operational'];
const warning = ['Late', 'Needs grading', 'Pending', 'Invited'];
export default function StatusBadge({ status }) {
  const tone = positive.includes(status) ? 'green' : warning.includes(status) ? 'orange' : ['In progress', 'Submitted', 'Instructor'].includes(status) ? 'blue' : 'neutral';
  return <span className={`status-badge status-badge--${tone}`}><span aria-hidden="true" />{status}</span>;
}
