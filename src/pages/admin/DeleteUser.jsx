import { AlertTriangle } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader.jsx';
import Modal from '../../components/common/Modal.jsx';
import Button from '../../components/common/Button.jsx';
import UserAvatar from '../../components/common/UserAvatar.jsx';
import { students } from '../../data/mockUsers.js';
export default function DeleteUser() {
  return <><PageHeader title="Delete confirmation" description="Static confirmation dialog specimen. No action is connected." /><div className="modal-stage"><Modal title="Delete this user?" actions={<><Button variant="secondary">Keep user</Button><Button variant="danger">Delete user</Button></>}><span className="danger-icon"><AlertTriangle size={26} aria-hidden="true" /></span><p>Removing this account will prevent the user from accessing the workspace. Review related submissions and grade records before you continue.</p><div className="delete-person"><UserAvatar user={students[0]} /><div><strong>{students[0].name}</strong><p>{students[0].email}</p></div></div><p className="secondary-text">This design does not delete data.</p></Modal></div></>;
}
