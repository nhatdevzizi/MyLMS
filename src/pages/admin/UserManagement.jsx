import { Plus, Download } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader.jsx';
import Button from '../../components/common/Button.jsx';
import SearchInput from '../../components/common/SearchInput.jsx';
import FilterSelect from '../../components/common/FilterSelect.jsx';
import UserTable from '../../components/users/UserTable.jsx';
import Pagination from '../../components/common/Pagination.jsx';
import Tabs from '../../components/common/Tabs.jsx';
import { users } from '../../data/mockUsers.js';
export default function UserManagement() {
  return (
    <>
      <PageHeader
        title="People make the difference"
        description="Manage the students and instructors in your academy."
      >
        <Button variant="secondary">
          <Download size={15} /> Export
        </Button>
        <Button>
          <Plus size={16} /> Add user
        </Button>
      </PageHeader>
      <Tabs
        items={[
          'All users (8)',
          'Students (4)',
          'Instructors (3)',
          'Administrators (1)',
        ]}
        active="All users (8)"
      />
      <div className="toolbar">
        <SearchInput
          id="users-search"
          label="Search users"
          placeholder="Search by name or email..."
        />
        <FilterSelect
          id="users-role"
          label="Role"
          options={['All roles', 'Student', 'Instructor', 'Administrator']}
        />
        <FilterSelect
          id="users-status"
          label="Account status"
          options={['All statuses', 'Active', 'Invited', 'Suspended']}
        />
      </div>
      <div className="surface">
        <UserTable users={users} />
        <Pagination
          count={users.length}
          label="users"
        />
      </div>
    </>
  );
}
