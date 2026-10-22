export default function ProgressBar({ value, label, color = 'blue' }) {
  return <div className="progress"><div className="progress__labels"><span>{label}</span><strong>{value}%</strong></div><div className={`progress__track tone-${color}`} role="progressbar" aria-label={label} aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}><span style={{ width: `${value}%` }} /></div></div>;
}
