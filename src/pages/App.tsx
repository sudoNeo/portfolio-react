import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function App() {
  return (
    <div>
      <Header />
      <main className="mx-auto grid max-w-6xl grid-cols-1 gap-7 px-5 py-7 md:grid-cols-[280px_1fr]">
        <Sidebar />
        <section className="content">
          <header>
            <h1 className="mb-2 text-3xl font-bold">Projects</h1>
            <p className="text-slate-500 dark:text-slate-400">Liquid Bi-Propellant Rocket, Laboratory Daemon.</p>
          </header>
          <div id="projects" className="mt-5 grid grid-cols-1 gap-5">
            {projects.map(p => (
              <ProjectCard key={p.slug} slug={p.slug} title={p.title} description={p.description} image={p.image} repo={p.repo} />
            ))}
          </div>

          <section id="about" className="mt-9">
            <h2 className="text-2xl font-semibold">About</h2>
            <p className="text-slate-500 dark:text-slate-400">Computer Engineer with hands-on experience in real-time embedded systems development, data acquisition, and sensor integration. Proven track record of optimizing system performance and building robust software solutions for safety-critical aerospace applications.
            </p>
          </section>

          <section id="contact" className="mt-5">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p>
              Email <a className="text-sky-500" href="mailto:mlope589@ucr.edu">mlope589@ucr.edu</a> or message me on <a className="text-sky-500" href="https://www.linkedin.com/in/marlon-l" target="_blank" rel="noreferrer">LinkedIn</a>.
            </p>
          </section>
        </section>
      </main>
      <footer className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 text-slate-500 dark:text-slate-400">
          <div>© <span id="y"></span> Marlon Lopez</div>
          <div>Built with React + Tailwind</div>
        </div>
      </footer>
      <script dangerouslySetInnerHTML={{__html: `document.getElementById('y').textContent = new Date().getFullYear();`}} />
    </div>
  );
}


