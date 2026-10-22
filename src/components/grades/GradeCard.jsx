import { Award } from 'lucide-react';
export default function GradeCard({ title, score, detail }) {
  return <article className="grade-card"><span><Award size={20} aria-hidden="true" />{title}</span><strong>{score}</strong><p>{detail}</p></article>;
}
