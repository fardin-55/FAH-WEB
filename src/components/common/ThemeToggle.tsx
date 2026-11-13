import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl glass-panel dark:glass-panel-light hover:scale-105 transition-transform text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400"
      aria-label="Toggle theme"
      title="Toggle dark/light mode"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-amber-400" />
      ) : (
        <Moon className="w-5 h-5 text-indigo-600" />
      )}
    </button>
  );
}
