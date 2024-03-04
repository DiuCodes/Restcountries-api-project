import { useState } from "react";
import Header from "./Header";
import MainApp from "./MainApp";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  function handleMode() {
    setIsDarkMode((mode) => !mode);
  }

  return (
    <div className="app">
      <Header onMode={handleMode} isDarkMode={isDarkMode} />
      <MainApp isDarkMode={isDarkMode} />
    </div>
  );
}
