import { Link } from 'react-router-dom';

export type ProjectCardProps = {
  slug: string;
  title: string;
  description: string;
  image: string;
  repo?: string;
};

export default function ProjectCard({ slug, title, description, image, repo }: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow transition-all duration-300 ease-out hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <div className="aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img src={image} alt={title} className="h-full w-full origin-center scale-100 object-cover transition-all duration-300 ease-out group-hover:scale-105" />
      </div>
      <div className="p-4 transition-all duration-300 ease-out">
        <h2 className="mb-1 text-xl font-semibold transition-all duration-300 ease-out group-hover:tracking-tight">
          {title}
        </h2>
        <p className="m-0 text-slate-500 transition-all duration-300 ease-out dark:text-slate-400">{description}</p>
        <div className="mt-3 flex gap-2">
          <Link className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-110 dark:border-slate-700 dark:bg-slate-100 dark:text-slate-900" to={`/projects/${slug}`}>
            Learn more
          </Link>
          {repo && (
            <a className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800" href={repo} target="_blank" rel="noreferrer">
              Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}


