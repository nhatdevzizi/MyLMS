import PageHeader from '../../components/common/PageHeader.jsx';
import Breadcrumbs from '../../components/common/Breadcrumbs.jsx';
import Panel from '../../components/common/Panel.jsx';
import FormField from '../../components/common/FormField.jsx';
import Button from '../../components/common/Button.jsx';
import { students } from '../../data/mockUsers.js';
export default function UserForm({ edit = false }) {
  const user = students[0];
  return (
    <>
      <Breadcrumbs
        items={['User management', edit ? 'Edit user' : 'Add user']}
      />
      <PageHeader
        title={edit ? 'Edit user details' : 'Welcome someone new'}
        description={
          edit
            ? 'Keep account details clear and up to date.'
            : 'Give a new member a place in your learning workspace.'
        }
      />
      <div className="content-columns">
        <Panel title="Account details">
          <div className="panel__body stack">
            <div className="form-grid">
              <FormField
                id="user-first"
                label="First name"
                value={edit ? 'Alex' : undefined}
                placeholder="First name"
                required
              />
              <FormField
                id="user-last"
                label="Last name"
                value={edit ? 'Morgan' : undefined}
                placeholder="Last name"
                required
              />
            </div>
            <FormField
              id="user-email"
              label="Email address"
              type="email"
              value={edit ? user.email : undefined}
              placeholder="name@northstar.edu"
              required
            />
            <div className="form-grid">
              <FormField
                id="user-role"
                label="Role"
                options={['Student', 'Instructor', 'Administrator']}
              />
              <FormField
                id="user-status"
                label="Status"
                options={
                  edit
                    ? ['Active', 'Suspended', 'Invited']
                    : ['Invited', 'Active']
                }
              />
            </div>
            <FormField
              id="user-department"
              label="Department"
              placeholder="Computer science"
              value={edit ? 'Computer science' : undefined}
            />
            <FormField
              id="user-note"
              label="Administrator note"
              multiline
              placeholder="Internal notes about this account"
              hint="Visible to administrators only after integration."
            />
            <div className="form-actions">
              <Button variant="secondary">Cancel</Button>
              <Button>{edit ? 'Save changes' : 'Add user'}</Button>
            </div>
          </div>
        </Panel>
        <Panel title="Choose the right role">
          <div className="panel__body prose">
            <h3>Student</h3>
            <p>Access courses, submit assignments, and view grades.</p>
            <h3>Instructor</h3>
            <p>Manage courses, publish assignments, and provide feedback.</p>
            <h3>Administrator</h3>
            <p>Manage users, roles, courses, and workspace settings.</p>
            <div className="info-note">
              This preview does not create accounts or send invitations.
            </div>
          </div>
        </Panel>
      </div>
    </>
  );
}
