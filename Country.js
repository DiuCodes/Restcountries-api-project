export default function Country({ country, selected, onSelect, isDarkMode }) {
  return (
    <div
      className={`country ${isDarkMode ? "card-dark" : "card-white"}`}
      onClick={() => onSelect(country)}
    >
      <img src={`${country.flags.png}`} alt="country" />
      <div className="card-content">
        <h2 className="country-name">{country.name.common}</h2>
        <p>
          Population: <span>{country.population.toLocaleString()}</span>
        </p>
        <p>
          Region: <span>{country.region}</span>
        </p>
        <p>
          Capital:{" "}
          <span>
            {country.capital?.length > 0
              ? country.capital[0]
              : country.name.common}
          </span>
        </p>
      </div>
    </div>
  );
}
