import PageHeader from '../../components/common/PageHeader.jsx';
import Breadcrumbs from '../../components/common/Breadcrumbs.jsx';
import Panel from '../../components/common/Panel.jsx';
import FormField from '../../components/common/FormField.jsx';
import Button from '../../components/common/Button.jsx';
export default function CreateCourse() {
  return (
    <>
      <Breadcrumbs items={['My courses', 'Create course']} />
      <PageHeader
        title="Make room for new ideas"
        description="Set up the essentials for your next course."
      />
      <div className="content-columns">
        <Panel title="Course information">
          <div className="panel__body stack">
            <FormField
              id="new-course-title"
              label="Course title"
              placeholder="e.g. Introduction to Computer Science"
              required
            />
            <div className="form-grid">
              <FormField
                id="new-course-code"
                label="Course code"
                placeholder="e.g. CS 101"
                required
              />
              <FormField
                id="new-course-category"
                label="Category"
                options={['Computer science', 'Development', 'Infrastructure']}
              />
            </div>
            <FormField
              id="new-course-description"
              label="Description"
              multiline
              placeholder="Introduce the course and what students will learn."
              required
            />
            <FormField
              id="new-course-outcomes"
              label="Learning outcomes"
              multiline
              placeholder="List the skills and knowledge students will gain."
            />
            <div className="form-grid">
              <FormField
                id="new-course-term"
                label="Term"
                options={['Fall 2026', 'Spring 2027']}
              />
              <FormField
                id="new-course-capacity"
                label="Student capacity"
                type="number"
                placeholder="30"
              />
              <FormField
                id="new-course-start"
                label="Start date"
                type="date"
              />
              <FormField
                id="new-course-end"
                label="End date"
                type="date"
              />
            </div>
            <div className="form-actions">
              <Button variant="secondary">Save as draft</Button>
              <Button>Create course</Button>
            </div>
          </div>
        </Panel>
        <Panel title="A good place to start">
          <div className="panel__body prose">
            <p>Give your course a clear title and a practical description.</p>
            <p>
              Learning outcomes help students understand what they will achieve.
              You can add materials and assignments after the course is created.
            </p>
            <div className="info-note">
              This is a form design. Course creation will be connected later.
            </div>
          </div>
        </Panel>
      </div>
    </>
  );
}
