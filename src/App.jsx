import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Experience from './components/Experience'
import ResumeCTA from './components/ResumeCTA'
import Footer from './components/Footer'

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')
  useEffect(() => { document.documentElement.classList.toggle('dark', dark); localStorage.setItem('theme', dark ? 'dark' : 'light') }, [dark])
  return <div className="min-h-screen bg-white text-slate-900 transition-colors dark:bg-slate-950 dark:text-white">
    <Navbar dark={dark} onToggle={() => setDark(v => !v)} />
    <main><Hero/><About/><Skills/><Projects/><Education/><Experience/><ResumeCTA/></main>
    <Footer/>
  </div>
}
