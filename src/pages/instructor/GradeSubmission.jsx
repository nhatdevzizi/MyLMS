import {
  ChevronLeft,
  ChevronRight,
  FileArchive,
  Download,
  FileText,
  Maximize2,
} from 'lucide-react';
import PageHeader from '../../components/common/PageHeader.jsx';
import Breadcrumbs from '../../components/common/Breadcrumbs.jsx';
import Panel from '../../components/common/Panel.jsx';
import Button from '../../components/common/Button.jsx';
import UserAvatar from '../../components/common/UserAvatar.jsx';
import StatusBadge from '../../components/common/StatusBadge.jsx';
import FormField from '../../components/common/FormField.jsx';
import { submissions, rubric } from '../../data/mockAssignments.js';
export default function GradeSubmission() {
  const submission = submissions[0];
  return (
    <>
      <Breadcrumbs
        items={['Assignments', 'Graph traversal', 'Grade submission']}
      />
      <PageHeader
        title="Give the next step forward"
        description="CS 201 · Graph traversal implementation"
      >
        <div className="submission-switch">
          <Button
            variant="secondary"
            disabled
            aria-label="Previous submission"
          >
            <ChevronLeft size={16} />
          </Button>
          <span>1 of 3 submissions</span>
          <Button
            variant="secondary"
            aria-label="Next submission"
          >
            <ChevronRight size={16} />
          </Button>
        </div>
      </PageHeader>
      <div className="grading-layout">
        <div className="stack">
          <section className="submission-identity surface">
            <div className="person-row">
              <UserAvatar
                user={submission.student}
                size="large"
              />
              <div>
                <h2>{submission.student.name}</h2>
                <p>{submission.student.email}</p>
                <span>Submitted {submission.submitted}</span>
              </div>
            </div>
            <StatusBadge status={submission.status} />
          </section>
          <Panel
            title="Submitted files"
            action={
              <Button variant="text">
                <Download size={15} /> Download all
              </Button>
            }
          >
            <div className="resource-row">
              <span className="resource-icon">
                <FileArchive size={24} />
              </span>
              <div>
                <strong>{submission.file}</strong>
                <p>{submission.size} · Source code, tests, and README</p>
              </div>
              <Button
                variant="icon"
                aria-label="Download submitted ZIP"
              >
                <Download size={18} />
              </Button>
            </div>
          </Panel>
          <Panel
            title="Submission preview"
            action={
              <Button
                variant="icon"
                aria-label="Expand submission preview"
              >
                <Maximize2 size={17} />
              </Button>
            }
          >
            <div className="document-toolbar">
              <FileText size={15} />
              <span>README.txt</span>
              <span>Text preview</span>
            </div>
            <article className="document-preview">
              <span className="document-preview__course">
                CS 201 · Assignment report
              </span>
              <h2>Graph traversal implementation</h2>
              <p>{submission.student.name} · October 22, 2026</p>
              <h3>Approach</h3>
              <p>
                The graph uses an adjacency list. Breadth-first search uses a
                queue to visit vertices by level. Depth-first search uses a
                stack to explore each branch.
              </p>
              <h3>Complexity</h3>
              <p>
                Both traversals visit each vertex and inspect each edge. Their
                time complexity is O(V + E). The visited set and traversal
                structure require O(V) space.
              </p>
              <h3>Test coverage</h3>
              <ul>
                <li>Connected and disconnected graphs</li>
                <li>Cycles and repeated edges</li>
                <li>Empty graphs and a single vertex</li>
              </ul>
              <p className="document-preview__note">
                Static example of a student document
              </p>
            </article>
          </Panel>
          <Panel title="Student note">
            <div className="panel__body prose">
              <p>
                Run the tests with python -m unittest. The README includes
                instructions and the expected traversal order for each example.
              </p>
            </div>
          </Panel>
        </div>
        <aside className="stack">
          <Panel
            title="Assessment"
            description="Give clear, practical feedback."
          >
            <div className="panel__body stack">
              <FormField
                id="grade-score"
                label="Score"
                type="number"
                placeholder="0"
                hint="Out of 100 points. No grade has been saved."
              />
              <FormField
                id="grade-feedback"
                label="Written feedback"
                multiline
                placeholder="What worked well? What should the student try next?"
              />
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  defaultChecked
                />{' '}
                Release feedback to student
              </label>
              <Button className="button--full">Save grade</Button>
              <Button
                variant="secondary"
                className="button--full"
              >
                Save & next submission
              </Button>
            </div>
          </Panel>
          <Panel title="Grading rubric">
            <div className="rubric-list">
              {rubric.map((item, index) => (
                <div key={item.title}>
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.points} pts</span>
                  </div>
                  <p>{item.description}</p>
                  <FormField
                    id={`rubric-score-${index}`}
                    label={`${item.title} score`}
                    type="number"
                    placeholder={`0–${item.points}`}
                  />
                </div>
              ))}
            </div>
          </Panel>
        </aside>
      </div>
    </>
  );
}
