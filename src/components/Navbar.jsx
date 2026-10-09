import { useState } from 'react'
import { Github, Linkedin, Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navItems = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Education', '#education'], ['Experience', '#experience'], ['Contact', '#contact']]

export default function Navbar({ dark, onToggle }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/75 glass dark:border-slate-800/70 dark:bg-slate-950/75">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" onClick={close} className="group flex items-center gap-3 font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-slate-950 text-sm text-white shadow-lg shadow-indigo-500/10 dark:bg-white dark:text-slate-950">SB</span>
          <span className="hidden sm:block text-slate-900 dark:text-white">Subhankar Biswas</span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map(([label, href]) => <a key={href} href={href} className="text-sm font-medium text-slate-600 transition hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400">{label}</a>)}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a aria-label="GitHub" href="https://github.com/Subiswas36218" target="_blank" rel="noreferrer" className="rounded-xl p-2.5 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"><Github size={18}/></a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/subhankar-biswas-086830169/" target="_blank" rel="noreferrer" className="rounded-xl p-2.5 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"><Linkedin size={18}/></a>
          <ThemeToggle dark={dark} onToggle={onToggle}/>
          <a href="/resume.pdf" className="ml-1 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-600 dark:bg-white dark:text-slate-950 dark:hover:bg-indigo-200">Resume</a>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle dark={dark} onToggle={onToggle}/>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="rounded-xl p-2.5 text-slate-700 dark:text-slate-200">{open ? <X/> : <Menu/>}</button>
        </div>
      </div>
      {open && <div className="border-t border-slate-200 bg-white px-5 py-4 dark:border-slate-800 dark:bg-slate-950 lg:hidden">
        <nav className="flex flex-col gap-1">
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={close} className="rounded-lg px-3 py-3 font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900">{label}</a>)}
          <div className="mt-2 flex gap-2 border-t border-slate-200 pt-3 dark:border-slate-800">
            <a href="https://github.com/Subiswas36218" target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-100 py-3 dark:bg-slate-900"><Github size={17}/> GitHub</a>
            <a href="https://www.linkedin.com/in/subhankar-biswas-086830169/" target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-100 py-3 dark:bg-slate-900"><Linkedin size={17}/> LinkedIn</a>
          </div>
          <a href="/resume.pdf" className="mt-2 rounded-lg bg-indigo-600 py-3 text-center font-semibold text-white">Download Resume</a>
        </nav>
      </div>}
    </header>
  )
}
