import { useContext, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

function App() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.title = darkMode
      ? "Dark Theme Enabled"
      : "Light Theme Enabled";
  }, [darkMode]);

  return (
    <div className={darkMode ? "container dark" : "container light"}>
      <h1>React Hooks Demo</h1>

      <div className="card">
        <img
          src="https://i.pravatar.cc/150"
          alt="Profile"
        />

        <h2>John Doe</h2>

        <p>Frontend Developer</p>

        <button onClick={toggleTheme}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default App;