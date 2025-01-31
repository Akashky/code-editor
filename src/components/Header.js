import React, { useState } from "react";
import {
  FiMenu,
  FiX,
  FiShare2,
  FiUser,
  FiMoon,
  FiSun,
  FiCode,
} from "react-icons/fi";
import LanguagesDropdown from "./LanguagesDropdown";
import ThemeDropdown from "./ThemeDropdown";

const Header = ({ onSelectChange, handleThemeChange, theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="w-full bg-secondary dark:bg-dark-secondary border-b border-border dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <div className="p-2 bg-primary rounded-md">
              <FiCode className="h-8 w-8 text-primary-foreground" />
            </div>
            <span className="ml-2 text-lg font-heading text-foreground dark:text-dark-foreground">
              Code Compiler
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <div className="flex space-x-4">
              <LanguagesDropdown onSelectChange={onSelectChange} />
              <ThemeDropdown
                handleThemeChange={handleThemeChange}
                theme={theme}
              />
            </div>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-md text-accent hover:text-primary dark:text-dark-accent dark:hover:text-dark-primary transition-colors duration-200">
              <FiShare2 />
            </button>
            <button className="p-2 rounded-md text-accent hover:text-primary dark:text-dark-accent dark:hover:text-dark-primary transition-colors duration-200">
              <FiUser />
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-accent hover:text-primary dark:text-dark-accent dark:hover:text-dark-primary transition-colors duration-200"
            >
              {isDarkMode ? <FiSun /> : <FiMoon />}
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-accent hover:text-primary dark:text-dark-accent dark:hover:text-dark-primary transition-colors duration-200"
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4">
                <button className="p-2 rounded-md text-accent hover:text-primary dark:text-dark-accent dark:hover:text-dark-primary transition-colors duration-200">
                  <FiShare2 />
                </button>
                <button className="p-2 rounded-md text-accent hover:text-primary dark:text-dark-accent dark:hover:text-dark-primary transition-colors duration-200">
                  <FiUser />
                </button>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-md text-accent hover:text-primary dark:text-dark-accent dark:hover:text-dark-primary transition-colors duration-200"
                >
                  {isDarkMode ? <FiSun /> : <FiMoon />}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
