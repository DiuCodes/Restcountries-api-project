import Country from "./Country";

export default function Countries({
  countries,
  selected,
  onSelect,
  isDarkMode,
}) {
  return (
    <div className="countries">
      {countries.map((country) => (
        <Country
          country={country}
          key={country.name.common}
          selected={selected}
          onSelect={onSelect}
          isDarkMode={isDarkMode}
        />
      ))}
    </div>
  );
}
