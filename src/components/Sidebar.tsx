import { EmailIcon, GitHubIcon, LinkedInIcon } from './Icons';
import CircularHeadshot from './CircularHeadshot';

export default function Sidebar() {
  return (
    <aside className="sticky top-[76px] self-start">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow dark:border-slate-800 dark:bg-slate-900">
        <div className="flex justify-center">
          <CircularHeadshot />
        </div>
        <div className="mt-3">
          <h3 className="m-0 text-lg font-semibold">Marlon Lopez</h3>
          <div className="text-slate-500 dark:text-slate-400">Computer Engineering</div>
          <div className="mt-2 flex flex-wrap gap-2 text-sm">
            <span className="rounded-full border border-slate-200 px-3 py-1 transition-all duration-300 ease-out hover:scale-110 hover:shadow-md dark:border-slate-700">C/C++</span>
            <span className="rounded-full border border-slate-200 px-3 py-1 transition-all duration-300 ease-out hover:scale-110 hover:shadow-md dark:border-slate-700">Python</span>
            <span className="rounded-full border border-slate-200 px-3 py-1 transition-all duration-300 ease-out hover:scale-110 hover:shadow-md dark:border-slate-700">Network Programming</span>
            <span className="rounded-full border border-slate-200 px-3 py-1 transition-all duration-300 ease-out hover:scale-110 hover:shadow-md dark:border-slate-700">Data Acquisition</span>
            <span className="rounded-full border border-slate-200 px-3 py-1 transition-all duration-300 ease-out hover:scale-110 hover:shadow-md dark:border-slate-700">RTOS</span>
            <span className="rounded-full border border-slate-200 px-3 py-1 transition-all duration-300 ease-out hover:scale-110 hover:shadow-md dark:border-slate-700">Multi-threaded/Processes</span>
            <span className="rounded-full border border-slate-200 px-3 py-1 transition-all duration-300 ease-out hover:scale-110 hover:shadow-md dark:border-slate-700">Kernel Tuning</span>
          </div>
          <p className="mt-3 text-slate-500 dark:text-slate-400">Passionate about problem-solving and building practical solutions. Physics enthusiast, Judoka, and amateur cook.</p>
        
          <p className="mt-2 flex flex-wrap gap-2">
            <a className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800" href="mailto:mlope589@ucr.edu">
              <EmailIcon />
              Email
            </a>
            <a className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800" href="https://github.com/sudoNeo" target="_blank" rel="noreferrer">
              <GitHubIcon />
              GitHub
            </a>
            <a className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800" href="https://www.linkedin.com/in/marlon-l" target="_blank" rel="noreferrer">
              <LinkedInIcon />
              LinkedIn
            </a>
            <a className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-110 dark:border-slate-700 dark:bg-slate-100 dark:text-slate-900" href="/assets/resume/Marlon_Lopez_Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          </p>
        </div>
      </div>
    </aside>
  );
}


