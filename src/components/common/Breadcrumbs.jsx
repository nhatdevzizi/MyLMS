import { ChevronRight } from 'lucide-react';
export default function Breadcrumbs({ items }) {
  return (
    <nav
      className="breadcrumbs"
      aria-label="Breadcrumb"
    >
      <ol>
        {items.map((item, index) => (
          <li key={item}>
            {index > 0 && (
              <ChevronRight
                size={12}
                aria-hidden="true"
              />
            )}
            <span
              aria-current={index === items.length - 1 ? 'page' : undefined}
            >
              {item}
            </span>
          </li>
        ))}
      </ol>
    </nav>
  );
}
