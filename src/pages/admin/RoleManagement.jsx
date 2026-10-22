import { Check, Minus } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader.jsx';
import Panel from '../../components/common/Panel.jsx';
import DataTable from '../../components/common/DataTable.jsx';
import Button from '../../components/common/Button.jsx';
import FormField from '../../components/common/FormField.jsx';
const permissions = [
  {
    id: 'read',
    permission: 'View enrolled course materials',
    student: true,
    instructor: true,
    admin: true,
  },
  {
    id: 'submit',
    permission: 'Submit assignments',
    student: true,
    instructor: false,
    admin: false,
  },
  {
    id: 'manage',
    permission: 'Manage own courses & assignments',
    student: false,
    instructor: true,
    admin: true,
  },
  {
    id: 'grade',
    permission: 'Grade course submissions',
    student: false,
    instructor: true,
    admin: false,
  },
  {
    id: 'users',
    permission: 'Manage users & roles',
    student: false,
    instructor: false,
    admin: true,
  },
  {
    id: 'settings',
    permission: 'Configure workspace settings',
    student: false,
    instructor: false,
    admin: true,
  },
];
const permissionIcon = (allowed) => (
  <span
    className={`permission-icon ${allowed ? 'is-allowed' : ''}`}
    aria-label={allowed ? 'Allowed' : 'Not allowed'}
  >
    {allowed ? <Check size={18} /> : <Minus size={18} />}
  </span>
);
export default function RoleManagement() {
  return (
    <>
      <PageHeader
        title="Roles & permissions"
        description="Clear responsibilities for a connected academy."
      />
      <div className="three-grid">
        {[
          {
            title: 'Students',
            count: 4,
            detail: 'Learn, submit work, and track progress.',
          },
          {
            title: 'Instructors',
            count: 3,
            detail: 'Teach, assess, and give useful feedback.',
          },
          {
            title: 'Administrators',
            count: 1,
            detail: 'Keep the workspace organized and secure.',
          },
        ].map((item) => (
          <article
            className="role-card surface"
            key={item.title}
          >
            <h2>{item.title}</h2>
            <strong>{item.count}</strong>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
      <Panel
        title="Permission reference"
        description="Proposed role behavior for future backend integration"
      >
        <DataTable
          caption="Proposed role permissions"
          rows={permissions}
          columns={[
            { key: 'permission', label: 'Permission' },
            ...['student', 'instructor', 'admin'].map((key) => ({
              key,
              label:
                key === 'admin'
                  ? 'Administrator'
                  : key[0].toUpperCase() + key.slice(1),
              render: (item) => permissionIcon(item[key]),
            })),
          ]}
        />
      </Panel>
      <Panel title="Assign a role">
        <div className="panel__body form-grid">
          <FormField
            id="assign-user"
            label="User"
            options={[
              'Alex Morgan',
              'Jamie Chen',
              'Sam Rivera',
              'Taylor Brooks',
            ]}
          />
          <FormField
            id="assign-role"
            label="Role"
            options={['Student', 'Instructor', 'Administrator']}
          />
          <div>
            <Button>Save role</Button>
          </div>
        </div>
      </Panel>
    </>
  );
}
