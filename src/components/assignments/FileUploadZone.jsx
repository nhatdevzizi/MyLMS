import { UploadCloud } from 'lucide-react';
export default function FileUploadZone({ id = 'assignment-files' }) {
  return (
    <div className="file-upload-zone">
      <UploadCloud
        size={30}
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <strong>Drop your files here, or browse</strong>
      <p>ZIP, PDF, or TXT · Up to 10 MB per file</p>
      <button
        type="button"
        className="button button--secondary"
        aria-describedby={`${id}-note`}
      >
        Browse files
      </button>
      <span
        id={`${id}-note`}
        className="field-hint"
      >
        Visual preview · File upload is not connected.
      </span>
    </div>
  );
}
