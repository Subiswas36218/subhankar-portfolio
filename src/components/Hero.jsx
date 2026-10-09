import { ArrowDown, ArrowUpRight, Github, Linkedin, Sparkles } from 'lucide-react'

export default function Hero() {
  return <section id="home" className="relative isolate overflow-hidden pt-32">
    <div className="absolute inset-0 -z-10 grid-bg" />
    <div className="absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl animate-glow" />
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-16 lg:px-8 lg:pb-32 lg:pt-24">
      <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm dark:border-indigo-500/20 dark:bg-slate-900/80 dark:text-indigo-300"><Sparkles size={16}/> Data Engineering · AI · Analytics</div>
          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">Building data systems that turn <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">data into value.</span></h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl dark:text-slate-300">I’m <strong className="text-slate-900 dark:text-white">Subhankar Biswas</strong>, an M.Sc. Data Engineering student focused on data pipelines, databases, analytics, AI/ML, NLP and intelligent data platforms.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-600 dark:bg-white dark:text-slate-950 dark:hover:bg-indigo-200">Explore Projects <ArrowUpRight size={18}/></a>
            <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-indigo-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">Download Resume <ArrowDown size={18}/></a>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <a href="https://github.com/Subiswas36218" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"><Github size={18}/> GitHub</a>
            <span className="text-slate-300 dark:text-slate-700">/</span>
            <a href="https://www.linkedin.com/in/subhankar-biswas-086830169/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"><Linkedin size={18}/> LinkedIn</a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-indigo-500/20 to-cyan-500/10 blur-2xl animate-glow" />
          <div className="relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-5 dark:border-slate-800"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 font-bold text-white">SB</div><div><p className="font-bold text-slate-950 dark:text-white">Subhankar Biswas</p><p className="text-sm text-slate-500">M.Sc. Data Engineering</p></div></div>
            <div className="grid grid-cols-2 gap-3 py-6">
              {[['27', 'Repositories'], ['Python', 'Core language'], ['SQL', 'Data foundation'], ['AI + Data', 'Focus']].map(([a,b]) => <div key={b} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/60"><p className="text-xl font-black text-slate-950 dark:text-white">{a}</p><p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{b}</p></div>)}
            </div>
            <div className="rounded-2xl bg-slate-950 p-5 text-white dark:bg-white dark:text-slate-950"><p className="text-sm font-semibold opacity-70">Currently exploring</p><p className="mt-1 text-lg font-bold">Data platforms · LLM applications · Cloud engineering</p></div>
          </div>
        </div>
      </div>
    </div>
  </section>
}
