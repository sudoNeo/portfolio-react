import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import MermaidDiagram from '../components/MermaidDiagram';
import ImageSlideshow from '../components/ImageSlideshow';
import { projects } from '../data/projects';

export default function Project() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div>
        <Header />
        <main className="mx-auto max-w-6xl px-5 py-7">
          <p className="text-slate-500 dark:text-slate-400">Project not found.</p>
          <Link className="text-sky-500" to="/">← Back to Projects</Link>
        </main>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main className="mx-auto max-w-6xl px-5 py-7">
        <Link className="text-sky-500" to="/">← Back to Projects</Link>
        <h1 className="mt-2 text-3xl font-bold">{project.title}</h1>
        <p className="text-slate-500 dark:text-slate-400">{project.description}</p>
        {project.hero && project.video ? (
          <div className="my-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left column - Main hero image */}
              <div className="lg:col-span-1">
                <h2 className="mb-3 text-xl font-semibold">Project Overview</h2>
                <img 
                  src={Array.isArray(project.hero) ? project.hero[0] : project.hero} 
                  alt={`${project.title} - Main Image`} 
                  className="w-full rounded-2xl border border-slate-200 dark:border-slate-800"
                />
              </div>
              
              {/* Right column - Video and small images */}
              <div className="lg:col-span-2">
                <h2 className="mb-3 text-xl font-semibold">Demo Video</h2>
                <div className="aspect-video overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 mb-4">
                  <iframe
                    src={`https://www.youtube.com/embed/${project.video.split('v=')[1]?.split('&')[0]}`}
                    title={`${project.title} Demo`}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                
                {/* Small images underneath video */}
                {Array.isArray(project.hero) && project.hero.length > 1 && (
                  <div className="grid grid-cols-2 gap-3">
                    {project.hero.slice(1).map((image, index) => (
                      <img 
                        key={index}
                        src={image} 
                        alt={`${project.title} - Image ${index + 2}`} 
                        className="w-full rounded-2xl border border-slate-200 dark:border-slate-800"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <>
            {project.hero && (
              <div className="my-4">
                {Array.isArray(project.hero) ? (
                  project.slug === 'daq' ? (
                    <ImageSlideshow images={project.hero} title={project.title} />
                  ) : (
                    <div className="grid grid-cols-1 gap-3">
                      {project.hero.map((image, index) => (
                        <img 
                          key={index}
                          src={image} 
                          alt={`${project.title} - Image ${index + 1}`} 
                          className={`rounded-2xl border border-slate-200 dark:border-slate-800 ${index === 0 ? 'w-full' : 'w-1/2 mx-auto'}`}
                        />
                      ))}
                    </div>
                  )
                ) : (
                  <img src={project.hero} alt={project.title} className="rounded-2xl border border-slate-200 dark:border-slate-800" />
                )}
              </div>
            )}
            {project.video && (
              <div className="my-6">
                <h2 className="mb-3 text-2xl font-semibold">Demo Video</h2>
                <div className="aspect-video overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                  <iframe
                    src={`https://www.youtube.com/embed/${project.video.split('v=')[1]?.split('&')[0]}`}
                    title={`${project.title} Demo`}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </>
        )}
        {project.sections?.map(section => (
          <section key={section.heading} className="mt-5">
            <h2 className="text-2xl font-semibold">{section.heading}</h2>
            <p className="text-slate-500 dark:text-slate-400">{section.body}</p>
          </section>
        ))}
        {project.mermaid && (
          <MermaidDiagram 
            chart={project.mermaid} 
            title="System Architecture" 
          />
        )}
        {project.repo && (
          <p className="mt-5 flex gap-2">
            <a className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-900 px-4 py-2 text-sm font-semibold text-white dark:border-slate-700 dark:bg-slate-100 dark:text-slate-900" href={project.repo} target="_blank" rel="noreferrer">Source</a>
            <Link className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm dark:border-slate-700 dark:bg-slate-900" to="/">Back to Projects</Link>
          </p>
        )}
      </main>
    </div>
  );
}


