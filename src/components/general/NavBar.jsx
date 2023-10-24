import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import sunIcon from '../../../public/assets/images/sunIcon.svg';
import moonIcon from '../../../public/assets/images/moonIcon.svg';
import Link from 'next/link';

const NavBar = ( {currentLanguage, handleLanguageChange} ) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    updateTheme(newTheme);
  };

  const updateTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    const browserTheme = document.querySelector('[name="theme-color"]');
    if (theme === 'dark') {
      browserTheme.content = '#111111';
    } else {
      browserTheme.content = '#FFFFFF';
    }
  };

  const scrollToExperience = () => {
    const experienceElement = document.getElementById('experience'); // Asigna un id al componente Experience
    if (experienceElement) {
      experienceElement.scrollIntoView({ behavior: 'smooth' });
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
        VV.
      </a>
      <nav>
        <ul className="flex items-center">
          <li>
            <a className="p-4 dark:text-light block text-lg" href="/projects">
              {currentLanguage === "ESP" ? "Proyectos" : "Projects"}
            </a>
          </li>
          <li>
            <a className="p-4 dark:text-light block text-lg" href="/contact">
            {currentLanguage === "ESP" ? "Contacto" : "Contact"}
            </a>
          </li>
          <li>
            <button
              aria-label="theme-button"
              id="theme-button"
              className="dark:text-light rounded-lg p-4 ml-2 bg-slate-100 dark:bg-[#202020]"
              onClick={toggleTheme}
            >
              {isDark ? <Image src={sunIcon} alt='sun' /> : <Image src={moonIcon} alt='moon' />}
            </button>
          </li>
          <li>
            <button
              // aria-label="theme-button"
              // id="theme-button"
              className="dark:text-light rounded-lg p-[13px] ml-2 bg-slate-100 dark:bg-[#202020]"
              onClick={handleLanguageChange}
            >
              {currentLanguage}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
