export default function FilterSelect({ label, options, id }) {
  return (
    <div className="filter-select">
      <label
        className="sr-only"
        htmlFor={id}
      >
        {label}
      </label>
      <select
        id={id}
        defaultValue={options[0]}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
