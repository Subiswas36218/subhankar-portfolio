import { Database, GraduationCap, Network, Workflow } from 'lucide-react'
import SectionHeading from './SectionHeading'

const items = [
  [GraduationCap, 'M.Sc. Data Engineering', 'Constructor University, Bremen'],
  [Workflow, 'Data Pipelines', 'ETL/ELT, orchestration and processing'],
  [Database, 'Data Platforms', 'SQL, NoSQL and vector databases'],
  [Network, 'Intelligent Systems', 'NLP, LLMs and knowledge graphs'],
]
export default function About() {
  return <section id="about" className="scroll-mt-24 py-24">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <SectionHeading eyebrow="About me" title="A data engineer with a scientific foundation." />
      <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
        <div className="space-y-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          <p>I am an M.Sc. Data Engineering student at Constructor University with a background in Physics and a strong interest in building data-driven systems.</p>
          <p>My work spans data pipelines, databases, analytics, machine learning, natural language processing, knowledge graphs and generative AI. I enjoy taking messy or complex data and turning it into reliable, structured and useful systems.</p>
          <p>I am currently focused on Data Engineering, Research Engineering, Data/AI internships and student opportunities where I can contribute to real-world data-intensive systems.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map(([Icon, title, text]) => <div key={title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"><Icon className="text-indigo-600 dark:text-indigo-400"/><h3 className="mt-5 font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{text}</p></div>)}
        </div>
      </div>
    </div>
  </section>
}
