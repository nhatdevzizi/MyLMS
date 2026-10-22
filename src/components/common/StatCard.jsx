export default function StatCard({ icon: Icon, label, value, detail, color = 'blue' }) {
  return <article className="stat-card"><div className={`stat-card__icon tone-${color}`}><Icon size={20} strokeWidth={1.7} aria-hidden="true" /></div><span className="stat-card__label">{label}</span><strong className="stat-card__value">{value}</strong><span className="stat-card__detail">{detail}</span></article>;
}
