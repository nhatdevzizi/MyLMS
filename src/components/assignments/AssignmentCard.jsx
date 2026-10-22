import { FileText } from 'lucide-react';
import StatusBadge from '../common/StatusBadge.jsx';
export default function AssignmentCard({ assignment }) {
  return (
    <article className="assignment-card">
      <span className={`assignment-card__icon tone-${assignment.course.color}`}>
        <FileText
          size={20}
          aria-hidden="true"
        />
      </span>
      <div>
        <h3>{assignment.title}</h3>
        <p>
          {assignment.course.code} · Due {assignment.due} · {assignment.points}{' '}
          points
        </p>
      </div>
      <StatusBadge status={assignment.status} />
    </article>
  );
}
