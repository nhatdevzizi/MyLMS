import { ArrowUpRight, BookOpen, MoreHorizontal } from 'lucide-react';
import { courseArtwork } from '../../assets/courseArtwork.js';
import ProgressBar from '../common/ProgressBar.jsx';
import UserAvatar from '../common/UserAvatar.jsx';
import Button from '../common/Button.jsx';
export default function CourseCard({ course, detailed = false }) {
  return (
    <article className="course-card">
      <div className={`course-card__cover tone-${course.color}`}>
        <span className="course-card__code">{course.code}</span>
        <img
          src={courseArtwork[course.artwork]}
          alt=""
        />
        <Button
          variant="icon"
          aria-label={`More options for ${course.title}`}
        >
          <MoreHorizontal size={19} />
        </Button>
      </div>
      <div className="course-card__body">
        <span className="course-card__category">{course.category}</span>
        <h3>{course.title}</h3>
        <div className="person-row">
          <UserAvatar
            user={course.instructor}
            size="small"
          />
          <span>{course.instructor.name}</span>
        </div>
        {detailed && <p>{course.description}</p>}
        <ProgressBar
          value={course.progress}
          label="Course progress"
          color={course.color}
        />
        <div className="course-card__footer">
          <span>
            <BookOpen
              size={14}
              aria-hidden="true"
            />{' '}
            {course.completed} of {course.modules} modules
          </span>
          <button
            type="button"
            aria-label={`Continue ${course.title}`}
          >
            <ArrowUpRight size={18} />
          </button>
        </div>
        {detailed && (
          <span className="course-card__enrollment">
            {course.students} students Â· Fall 2026
          </span>
        )}
      </div>
    </article>
  );
}
