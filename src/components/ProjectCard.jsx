import { ArrowUpRight, Github } from 'lucide-react'

export default function ProjectCard({ project }) {
  return <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-500/10 dark:border-slate-800 dark:bg-slate-900">
    <div className={`relative h-2 bg-gradient-to-r ${project.accent}`} />
    <div className="flex flex-1 flex-col p-6">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-100 font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200">{project.title.split(' ').map(w => w[0]).slice(0,2).join('')}</div>
        {project.featured && <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">Featured</span>}
      </div>
      <h3 className="text-xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
      <p className="mt-3 text-sm font-medium leading-6 text-slate-600 dark:text-slate-300">{project.short}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.slice(0,5).map(tag => <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">{tag}</span>)}
      </div>
      <div className="mt-auto flex gap-3 pt-7">
        <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-600 dark:bg-white dark:text-slate-950 dark:hover:bg-indigo-200"><Github size={16}/> GitHub</a>
        {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-indigo-500 dark:hover:text-indigo-400"><ArrowUpRight size={16}/> Live Demo</a>}
      </div>
    </div>
  </article>
}
