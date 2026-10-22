export default function UserAvatar({ user, size = 'medium' }) {
  return <span className={`avatar avatar--${user.color || 'blue'} avatar--${size}`} role="img" aria-label={user.name}>{user.initials}</span>;
}
