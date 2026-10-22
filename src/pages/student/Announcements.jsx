import PageHeader from '../../components/common/PageHeader.jsx';
import SearchInput from '../../components/common/SearchInput.jsx';
import FilterSelect from '../../components/common/FilterSelect.jsx';
import AnnouncementCard from '../../components/common/AnnouncementCard.jsx';
import Button from '../../components/common/Button.jsx';
import FormField from '../../components/common/FormField.jsx';
import Panel from '../../components/common/Panel.jsx';
import { announcements } from '../../data/mockAnnouncements.js';
export default function Announcements({ instructor = false }) {
  return <><PageHeader title="Announcements" description={instructor ? 'Keep your classroom informed and connected.' : 'The latest from your classroom.'}>{instructor && <Button>New announcement</Button>}</PageHeader><div className="toolbar"><SearchInput id="announcement-search" label="Search announcements" placeholder="Search announcements..." /><FilterSelect id="announcement-course" label="Filter by course" options={['All courses', 'CS 201', 'CS 202', 'CS 203']} /></div><div className="content-columns"><div className="stack">{announcements.filter(item => !instructor || item.author.id === 'i1').map(item => <div className="surface" key={item.id}><AnnouncementCard announcement={item} /></div>)}</div>{instructor ? <Panel title="Create announcement"><div className="panel__body stack"><FormField id="announcement-title" label="Title" placeholder="Give your announcement a clear title" required /><FormField id="announcement-class" label="Course" options={['CS 201 · Data Structures & Algorithms', 'CS 204 · Computer Networks']} /><FormField id="announcement-message" label="Message" multiline placeholder="What should your students know?" /><Button>Publish announcement</Button></div></Panel> : <Panel title="Stay in the loop"><div className="panel__body prose"><p>Course announcements bring together new materials, office hours, and important updates.</p><p>Check assignment deadlines in your Assignments view.</p></div></Panel>}</div></>;
}
