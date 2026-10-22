export default function Panel({ title, description, action, children, className = '' }) {
  return <section className={`panel ${className}`}><div className="panel__header"><div><h2>{title}</h2>{description && <p>{description}</p>}</div>{action}</div>{children}</section>;
}
