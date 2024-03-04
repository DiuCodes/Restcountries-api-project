export default function Header({ onMode, isDarkMode }) {
  return (
    <div className={`header ${isDarkMode ? "header-dark" : ""}`}>
      <h2>Where in the world</h2>
      <p className="mode" onClick={onMode}>
        {isDarkMode ? "💡" : "🌙"} {isDarkMode ? "Light mode" : "Dark mode"}
      </p>
    </div>
  );
}
