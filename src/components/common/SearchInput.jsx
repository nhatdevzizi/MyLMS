import { Search } from 'lucide-react';
export default function SearchInput({ label = 'Search', placeholder = 'Search...', id = 'search' }) {
  return <div className="search-input"><label className="sr-only" htmlFor={id}>{label}</label><Search size={17} aria-hidden="true" /><input id={id} type="search" placeholder={placeholder} /></div>;
}
