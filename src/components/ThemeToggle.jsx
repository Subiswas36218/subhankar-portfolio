import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ dark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Light mode' : 'Dark mode'}
      className="rounded-xl border border-slate-200/80 bg-white/80 p-2.5 text-slate-700 transition hover:-translate-y-0.5 hover:border-indigo-300 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
