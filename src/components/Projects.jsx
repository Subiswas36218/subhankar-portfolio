import { useMemo, useState } from 'react'
import { categories, projects } from '../data/projects'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const filtered = useMemo(() => filter === 'All' ? projects : projects.filter(p => p.categories.includes(filter)), [filter])
  return <section id="projects" className="scroll-mt-24 bg-slate-50 py-24 dark:bg-slate-950">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <SectionHeading eyebrow="Selected work" title="Projects that show how I build." text="A selection of data engineering, analytics, AI/ML and research projects. Each project is designed to demonstrate practical problem solving and technical breadth." />
      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map(category => <button key={category} onClick={() => setFilter(category)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${filter === category ? 'bg-slate-950 text-white shadow-lg dark:bg-white dark:text-slate-950' : 'border border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-indigo-500'}`}>{category}</button>)}
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map(project => <ProjectCard key={project.id} project={project} />)}
      </div>
    </div>
  </section>
}
