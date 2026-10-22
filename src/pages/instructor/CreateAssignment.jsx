import PageHeader from '../../components/common/PageHeader.jsx';
import Breadcrumbs from '../../components/common/Breadcrumbs.jsx';
import Panel from '../../components/common/Panel.jsx';
import FormField from '../../components/common/FormField.jsx';
import Button from '../../components/common/Button.jsx';
import { rubric } from '../../data/mockAssignments.js';
export default function CreateAssignment() {
  return (
    <>
      <Breadcrumbs items={['Assignments', 'Create assignment']} />
      <PageHeader
        title="Create an assignment"
        description="Set clear expectations so students can do their best work."
      />
      <div className="content-columns">
        <Panel title="Assignment information">
          <div className="panel__body stack">
            <FormField
              id="create-assignment-title"
              label="Assignment title"
              placeholder="e.g. Graph traversal implementation"
              required
            />
            <FormField
              id="create-assignment-course"
              label="Course"
              options={[
                'CS 201 · Data Structures & Algorithms',
                'CS 204 · Computer Networks',
              ]}
              required
            />
            <FormField
              id="create-assignment-description"
              label="Description"
              multiline
              placeholder="Explain the goal of this assignment."
              required
            />
            <FormField
              id="create-assignment-instructions"
              label="Submission instructions"
              multiline
              placeholder="Describe what students need to submit and how to organize it."
            />
            <div className="form-grid">
              <FormField
                id="create-assignment-date"
                label="Due date"
                type="date"
                required
              />
              <FormField
                id="create-assignment-time"
                label="Due time"
                type="time"
                value="23:59"
              />
              <FormField
                id="create-assignment-points"
                label="Maximum points"
                type="number"
                value="100"
                required
              />
              <FormField
                id="create-assignment-size"
                label="Maximum file size (MB)"
                type="number"
                value="10"
              />
            </div>
            <fieldset className="plain-fieldset">
              <legend>Accepted file formats</legend>
              <div className="checkbox-group">
                {['ZIP', 'PDF', 'TXT'].map((format) => (
                  <label
                    className="checkbox-label"
                    key={format}
                  >
                    <input
                      type="checkbox"
                      defaultChecked
                    />
                    {format}
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="form-actions">
              <Button variant="secondary">Save draft</Button>
              <Button>Publish assignment</Button>
            </div>
          </div>
        </Panel>
        <Panel
          title="Example rubric"
          description="100 points in total"
        >
          <div className="rubric-list">
            {rubric.map((item) => (
              <div key={item.title}>
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.points} pts</span>
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </>
  );
}
