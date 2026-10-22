import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './Button.jsx';
export default function Pagination({ count, label = 'items' }) {
  return (
    <div className="pagination">
      <span>
        Showing {count ? 1 : 0}–{count} of {count} {label}
      </span>
      <div>
        <Button
          variant="secondary"
          disabled
          aria-label="Previous page"
        >
          <ChevronLeft size={16} />
        </Button>
        <Button
          variant="secondary"
          aria-current="page"
        >
          1
        </Button>
        <Button
          variant="secondary"
          disabled
          aria-label="Next page"
        >
          <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  );
}
