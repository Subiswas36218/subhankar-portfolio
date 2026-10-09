import SectionHeading from './SectionHeading'

const groups = {
  Programming: ['Python', 'SQL', 'Bash', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  'Data Engineering': ['Pandas', 'SQLAlchemy', 'Airflow', 'ETL / ELT', 'Data Validation', 'Data Modeling', 'Data Warehousing', 'Data Lakes'],
  Databases: ['MariaDB', 'PostgreSQL', 'MongoDB', 'Qdrant', 'Vector Databases'],
  'AI / ML': ['Scikit-learn', 'NLP', 'LLMs', 'Generative AI', 'Embeddings', 'LangChain', 'OpenAI API', 'Hugging Face'],
  Infrastructure: ['Docker', 'Docker Compose', 'Git', 'GitHub', 'Terraform', 'Linux', 'CI/CD'],
  Cloud: ['AWS', 'EC2', 'RDS', 'S3', 'Cloud Architecture', 'Cloud Security', 'Cloud Cost Optimization'],
  Analytics: ['Data Visualization', 'Power BI', 'Tableau', 'Looker', 'Metabase'],
  Other: ['Agile Methodologies', 'Project Management', 'Team Collaboration']
}
export default function Skills() {
  return <section id="skills" className="scroll-mt-24 border-y border-slate-200 bg-slate-50 py-24 dark:border-slate-800 dark:bg-slate-900/30">
    <div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeading eyebrow="Technical toolkit" title="Skills organized around how I build." />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{Object.entries(groups).map(([group, skills]) => <div key={group} className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"><h3 className="font-bold text-slate-950 dark:text-white">{group}</h3><div className="mt-5 flex flex-wrap gap-2">{skills.map(skill => <span key={skill} className="rounded-full border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300">{skill}</span>)}</div></div>)}</div>
    </div>
  </section>
}
