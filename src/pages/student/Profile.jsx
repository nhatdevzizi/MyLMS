import PageHeader from '../../components/common/PageHeader.jsx';
import Panel from '../../components/common/Panel.jsx';
import FormField from '../../components/common/FormField.jsx';
import UserAvatar from '../../components/common/UserAvatar.jsx';
import Button from '../../components/common/Button.jsx';
import StatusBadge from '../../components/common/StatusBadge.jsx';
import { currentStudent } from '../../data/mockUsers.js';
export default function Profile() {
  return (
    <>
      <PageHeader
        title="Your profile"
        description="A few details that make this space yours."
      />
      <div className="content-columns">
        <div className="stack">
          <Panel title="Personal information">
            <div className="panel__body">
              <div className="profile-identity">
                <UserAvatar
                  user={currentStudent}
                  size="large"
                />
                <div>
                  <h3>{currentStudent.name}</h3>
                  <p>Student · Northstar Academy</p>
                  <Button variant="secondary">Change photo</Button>
                </div>
              </div>
              <div className="form-grid">
                <FormField
                  id="profile-first"
                  label="First name"
                  value="Alex"
                />
                <FormField
                  id="profile-last"
                  label="Last name"
                  value="Morgan"
                />
                <FormField
                  id="profile-email"
                  label="Email address"
                  type="email"
                  value={currentStudent.email}
                />
                <FormField
                  id="profile-id"
                  label="Student ID"
                  value="NS-2026-001"
                />
                <FormField
                  id="profile-department"
                  label="Department"
                  value="Computer science"
                />
                <FormField
                  id="profile-timezone"
                  label="Time zone"
                  options={['UTC+7 · Ho Chi Minh City', 'UTC · London']}
                />
              </div>
              <div className="form-actions">
                <Button>Save changes</Button>
              </div>
            </div>
          </Panel>
          <Panel title="Security">
            <div className="panel__body form-grid">
              <FormField
                id="profile-old-password"
                label="Current password"
                type="password"
              />
              <FormField
                id="profile-new-password"
                label="New password"
                type="password"
                hint="Use at least 12 characters."
              />
              <Button variant="secondary">Update password</Button>
            </div>
          </Panel>
        </div>
        <Panel title="Account overview">
          <dl className="detail-list">
            <div>
              <dt>Account status</dt>
              <dd>
                <StatusBadge status="Active" />
              </dd>
            </div>
            <div>
              <dt>Joined</dt>
              <dd>{currentStudent.registered}</dd>
            </div>
            <div>
              <dt>Current term</dt>
              <dd>Fall 2026</dd>
            </div>
            <div>
              <dt>Enrolled courses</dt>
              <dd>5 courses</dd>
            </div>
          </dl>
        </Panel>
      </div>
    </>
  );
}
