import { X } from 'lucide-react';
import Button from './Button.jsx';
export default function Modal({ title, children, actions }) {
  return (
    <section
      className="modal-preview"
      aria-labelledby="modal-title"
    >
      <header>
        <h2 id="modal-title">{title}</h2>
        <Button
          variant="icon"
          aria-label="Close dialog"
        >
          <X size={20} />
        </Button>
      </header>
      <div className="modal-preview__body">{children}</div>
      <footer>{actions}</footer>
    </section>
  );
}
