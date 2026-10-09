export default function SectionHeading({ eyebrow, title, text }) {
  return <div className="mb-12 max-w-3xl">
    <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">{eyebrow}</p>
    <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white">{title}</h2>
    {text && <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">{text}</p>}
  </div>
}
