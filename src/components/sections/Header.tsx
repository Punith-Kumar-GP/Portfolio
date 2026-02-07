"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export function Header() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme | null) ?? "dark";
    setTheme(saved);
    document.documentElement.dataset.theme = saved;
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.dataset.theme = next;
  };

  return (
    <header className="site-header">
      <nav className="nav">
        <div className="logo">Punith</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#achievements">Highlights</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="theme-toggle" onClick={toggleTheme} type="button">
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </nav>
    </header>
  );
}
