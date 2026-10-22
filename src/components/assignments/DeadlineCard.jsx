import { ArrowUpRight } from 'lucide-react';
export default function DeadlineCard({ assignment }) {
  return (
    <article className="deadline-card">
      <div className="deadline-card__date">
        <span>Oct</span>
        <strong>{assignment.due.split(' ')[1].replace(',', '')}</strong>
      </div>
      <div>
        <span className={`course-label tone-${assignment.course.color}`}>
          {assignment.course.code}
        </span>
        <h3>{assignment.title}</h3>
        <p
          className={
            assignment.relative === 'Tomorrow' ? 'deadline-urgent' : ''
          }
        >
          {assignment.relative} · {assignment.time}
        </p>
      </div>
      <button
        type="button"
        aria-label={`View ${assignment.title}`}
      >
        <ArrowUpRight size={16} />
      </button>
    </article>
  );
}
