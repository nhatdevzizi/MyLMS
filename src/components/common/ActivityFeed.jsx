export default function ActivityFeed({ items }) {
  return <ol className="activity-feed">{items.map(item => <li key={item.title}><span className={`activity-feed__dot tone-${item.color || 'blue'}`} aria-hidden="true" /><div><strong>{item.title}</strong><p>{item.detail}</p></div><time>{item.time}</time></li>)}</ol>;
}
