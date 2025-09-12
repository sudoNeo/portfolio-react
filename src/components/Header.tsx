import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { SunIcon, MoonIcon } from './Icons';

export default function Header() {
  const { isDark, toggle } = useTheme();
  return (
    <div className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur dark:border-slate-800 dark:bg-gray-950/70">
      <div className="mx-auto max-w-6xl px-5 py-3 flex items-center justify-between gap-4">
        <div className="font-bold"><Link to="/">Marlon Lopez</Link></div>
        <nav className="flex items-center gap-2 text-sm">
          <a href="#projects" className="px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">Projects</a>
          <a href="#about" className="px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">About</a>
          <a href="#contact" className="px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">Contact</a>
          <button aria-label="Toggle theme" onClick={toggle} className="px-3 py-2 rounded-full border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
        </nav>
      </div>
    </div>
  );
}


