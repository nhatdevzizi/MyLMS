export default function Tabs({ items, active }) {
  return (
    <nav
      className="tabs"
      aria-label="Page sections"
    >
      {items.map((item) => (
        <button
          type="button"
          className={active === item ? 'is-active' : ''}
          aria-current={active === item ? 'page' : undefined}
          key={item}
        >
          {item}
        </button>
      ))}
    </nav>
  );
}
