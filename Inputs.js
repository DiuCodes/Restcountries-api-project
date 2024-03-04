export default function Inputs({
  name,
  setName,
  region,
  onSetRegion,
  onSetName,
  isDarkMode,
}) {
  return (
    <div className="inputs">
      <input
        type="text"
        placeholder="Search for a country"
        value={name}
        className={` ${isDarkMode ? "input-dark" : ""}`}
        onChange={(e) => onSetName(e.target.value)}
      />
      <select
        value={region}
        onChange={(e) => onSetRegion(e.target.value)}
        className={`${isDarkMode ? "input-dark" : ""}`}
      >
        <option hidden>Filter by region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}
