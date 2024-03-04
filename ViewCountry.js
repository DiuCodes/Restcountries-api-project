export default function ViewCountry({
  selected,
  setIsOpen,
  setSelected,
  isDarkMode,
}) {
  function getAllLanguages() {
    if (!selected.languages) return [];
    return Object.entries(selected.languages).map(([code, language]) => ({
      code,
      language,
    }));
    // Return an array of objects containing both language code and language name
  }
  const langs = getAllLanguages();

  function getAllCurrencies() {
    if (!selected.currencies) return [];
    return Object.entries(selected.currencies).map(([code, currency]) => ({
      code,
      currency,
    }));
  }
  const curs = getAllCurrencies();

  function handleBackWard() {
    setIsOpen(false);
    setSelected({});
  }

  return (
    <div className="margin-top">
      <button
        className={`back ${isDarkMode ? "back-dark" : ""}`}
        onClick={handleBackWard}
      >
        &larr; Back
      </button>
      <div className={`view-country ${isDarkMode ? "view-dark" : ""}`}>
        <img src={`${selected.flags?.png}`} alt="country flag" />
        <div className="country-details">
          <p className="name">{selected.name?.common}</p>
          <div className="details">
            <div>
              <p>
                Native name: <span>{selected.name?.common}</span>
              </p>
              <p>
                Population: <span>{selected.population?.toLocaleString()}</span>
              </p>
              <p>
                Region: <span>{selected?.region}</span>
              </p>
              <p>
                Sub region: <span>{selected?.subregion}</span>
              </p>
              <p>
                Capital: <span>{selected?.capital}</span>
              </p>
            </div>

            <div>
              <p>
                Top level Domain:
                <span>{selected.tld?.[0]}</span>
              </p>
              <p>
                Currencies:
                {curs.map((cur) => (
                  <span key={Math.random()}>{cur.currency.name}</span>
                ))}
              </p>
              <div className="languages">
                <p>Languages: </p>
                {langs.map((lang) => (
                  <span key={Math.random()}>
                    <p> {lang.language}, </p>
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className={`borders ${isDarkMode ? "border-dark" : ""}`}>
            <p className="border">Border countries: </p>

            {selected.borders?.length === 0 ? (
              <p>None</p>
            ) : (
              selected.borders?.map((border, i) => (
                <p key={Math.random()}>{border}</p>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
