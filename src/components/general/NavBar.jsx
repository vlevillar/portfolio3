import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import sunIcon from '../../../public/assets/images/sunIcon.svg';
import moonIcon from '../../../public/assets/images/moonIcon.svg';
import Link from 'next/link';

const NavBar = ({ currentLanguage, handleLanguageChange }) => {
  const [isDark, setIsDark] = useState(false);
  const [isCVMenuOpen, setIsCVMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = (event) => {
      if (event.target.closest('button') !== document.querySelector('.cv-button')) {
        setIsCVMenuOpen(false);
      }
    };
  
    document.addEventListener('click', closeMenu);
  
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, []);

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

  const handleCVButtonClick = () => {
    setIsCVMenuOpen(!isCVMenuOpen);
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
      <Link
        className="text-2xl dark:text-light font-semibold dark:font-semibold font-outfit"
        href="/"
      >
        VV.
      </Link>
      <nav>
        <ul className="flex items-center">
          <li>
            <Link className="p-4 dark:text-light block text-lg" href="/projects">
              {currentLanguage === "ESP" ? "Proyectos" : "Projects"}
            </Link>
          </li>
          <li>
            <Link className="p-4 dark:text-light block text-lg" href="/contact">
              {currentLanguage === "ESP" ? "Contacto" : "Contact"}
            </Link>
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
              className="dark:text-light rounded-lg p-[13px] ml-2 bg-slate-100 dark:bg-[#202020]"
              onClick={handleLanguageChange}
            >
              {currentLanguage}
            </button>
          </li>
          <li>
            <button
              className="cv-button dark:text-light rounded-lg p-[13px] ml-2 bg-slate-100 dark:bg-[#202020]"
              onClick={handleCVButtonClick}
            >
              CV
            </button>
            {isCVMenuOpen && (
              <div className="absolute dark:text-light rounded-lg bg-slate-100 dark:bg-[#202020] mt-2">
                <a
                  href="https://drive.google.com/file/d/1kUEttJ9udVtriprFCdBC3wJIn4Fz1fzi/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-gray-800 rounded-lg dark:text-white hover:bg-gray dark:hover:bg-dark-gray "
                >
                  ESP
                </a>
                <a
                  href="https://drive.google.com/file/d/1V-YIyTheKUtPnKhzVI6_9LK1Hrx8J1t9/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-gray-800 rounded-lg dark:text-white hover:bg-gray dark:hover:bg-dark-gray"
                >
                  ENG
                </a>
              </div>
            )}

          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
