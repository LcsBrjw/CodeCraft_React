export const SelectTag = ({ themes, selectedTag, onChange }) => {
  return (
    <select className="bg-white rounded-sm text-[var(--dark)] px-3" value={selectedTag} onChange={e => onChange(e.target.value)}>
      <option className="text-[var(--dark)]" value="">-- Choisissez un thème --</option>
      {themes.map(theme => (
        <option key={theme} value={theme}>
          {theme}
        </option>
      ))}
    </select>
  );
};