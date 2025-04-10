import { useState, useEffect } from "react";
import sunIcon from "@/assets/icons/sun.png";
import moonIcon from "@/assets/icons/moon.png";

if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "dark");
}

export default function ThemeSwitch() {
  const getLocalTheme = () => {
    const theme = localStorage.getItem("theme");
    return theme === "light" ? "light" : "dark";
  };

  const [theme, setTheme] = useState(getLocalTheme());

  useEffect(() => {
    // Aplica o tema ao carregar
    document.getElementById("root")?.setAttribute("data-theme", theme);
  }, [theme]);

  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return (
    <button
      onClick={switchTheme}
      className="w-10 p-2 rounded-lg cursor-pointer 
     hover:bg-neutral-300 dark:hover:bg-neutral-600
      transition-all duration-300 ease-in-out"
    >
      <img src={theme === "light" ? sunIcon : moonIcon} />
    </button>
  );
}
