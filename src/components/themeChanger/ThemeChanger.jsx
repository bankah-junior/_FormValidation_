import { React, useState, useEffect } from "react";

const ThemeChanger = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light"); // Getting the value of "theme" from local storage and assigning it to theme state

  useEffect(() => {
    localStorage.setItem("theme", theme); // Setting the value of "theme" in the local storage to the theme state
    // document.documentElement.setAttribute('data-theme', theme);
    // document.body.setAttribute('data-theme', theme);
    document.body.className = theme; // Adding a class attribute with value of theme from the local storage to the body element
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"; // Assigning either 'dark' or 'light' to theme state also to newTheme
    setTheme(newTheme); // Assigning the value of newTheme to setTheme state
  };

  return (
    <div>
      <button data-button="toggle-btn" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeChanger;
