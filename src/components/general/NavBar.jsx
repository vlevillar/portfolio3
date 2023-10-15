import React, { useState, useEffect } from 'react';
import { createLogo } from "../../utils";

const moonIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className="feather feather-moon"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

const sunIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className="feather feather-sun"
  >
    {/* Icon paths go here */}
  </svg>
);

const NavBar = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    updateTheme(newTheme);
  };

  const updateTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    const themeButton = document.getElementById('theme-button');
    const browserTheme = document.querySelector('[name="theme-color"]');
    if (theme === 'dark') {
      themeButton.innerHTML = sunIcon;
      browserTheme.content = '#111111';
    } else {
      themeButton.innerHTML = moonIcon;
      browserTheme.content = '#FFFFFF';
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = storedTheme || preferredTheme;

    updateTheme(initialTheme);
    setIsDark(initialTheme === 'dark');
    localStorage.setItem('theme', initialTheme);
  }, []);

  return (
    <header className="container flex items-center justify-between h-[80px] sm:h-[123px]">
      <a
        className="text-2xl dark:text-light font-semibold dark:font-semibold font-outfit"
        href="/"
      >
        {createLogo("Valentino Villar")}.
      </a>
      <nav>
        <ul className="flex items-center">
          <li>
            <a className="p-4 dark:text-light block text-lg" href="/projects">
              Projects
            </a>
          </li>
          <li>
            <a className="p-4 dark:text-light block text-lg" href="/contact">
              Contact
            </a>
          </li>
          <li>
            <button
              aria-label="theme-button"
              id="theme-button"
              className="dark:text-light rounded-lg p-4 ml-2 bg-slate-100 dark:bg-[#202020]"
              onClick={toggleTheme}
            >
              {isDark ? sunIcon : moonIcon}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
