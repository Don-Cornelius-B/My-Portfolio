'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

const spring = { type: 'spring', stiffness: 120, damping: 16 };

const projects = [
  {
    id: 'akon',
    title: 'AKON',
    description:
      'P2P security gateway bridging mobile sockets with RF hardware for emergency response. Designed for reliability with automated build/test checks for mobile socket messaging using GitHub Actions.',
    tags: ['Python', 'C++', 'ESP32'],
  },
  {
    id: 'virspace',
    title: 'VirSpace',
    description:
      'Scalable multi-user virtual world with 3D digital twins. Built around real-time state synchronization and low-latency data flow using Supabase.',
    tags: ['React', 'Supabase', 'Three.js'],
  },
  {
    id: 'ecosphere',
    title: 'EcoSphere',
    description:
      '2D eco-simulation game engineered in Unity with dynamic logic loops and continuous feedback systems to model evolving environmental states.',
    tags: ['Unity', 'Piskel'],
  },
  {
    id: 'resqtap',
    title: 'ResQTap',
    description:
      'SOS GPS tracking workflow integrating ESP32 nodes with Telegram Bot API to route emergency location data quickly and clearly.',
    tags: ['ESP32', 'Arduino'],
  },
];

const timeline = [
  { year: '2019 - 2021', stage: 'ZION', text: 'Higher Secondary foundation with strong focus on computing logic.' },
  {
    year: '2023 - Present',
    stage: 'Sathyabama B.E CSE',
    text: '3rd Year CSE building cloud-native systems, creative technology products, and automation-first workflows.',
  },
];

function Orbit() {
  const items = useMemo(
    () => [
      { name: 'Python', angle: 0 },
      { name: 'Unity', angle: 120 },
      { name: 'Docker / GHA', angle: 240 },
    ],
    []
  );

  return (
    <div className="relative mx-auto h-64 w-64">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 14, ease: 'linear' }}
        className="absolute inset-0"
      >
        {items.map((item) => (
          <motion.div
            key={item.name}
            className="absolute left-1/2 top-1/2"
            style={{ transform: `rotate(${item.angle}deg) translateY(-112px)` }}
            whileHover={{ scale: 1.1 }}
            transition={spring}
          >
            <div className="-translate-x-1/2 rounded-full border border-cyan-300/50 bg-slate-900/80 px-3 py-1 text-xs text-cyan-200">
              {item.name}
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={spring}
        className="glass absolute left-1/2 top-1/2 -ml-14 -mt-14 grid h-28 w-28 place-items-center rounded-full text-center text-sm font-semibold text-cyan-100"
      >
        Tech Stack Core
      </motion.div>
    </div>
  );
}

function ArchitectureDiagram() {
  return (
    <div className="architecture glass mt-4 rounded-xl p-3">
      <div className="node left-2 top-3">Client Layer</div>
      <div className="node left-[40%] top-3">Gateway API</div>
      <div className="node right-2 top-3">Telemetry</div>
      <div className="node left-[18%] bottom-3">Processing</div>
      <div className="node right-[14%] bottom-3">Hardware / DB</div>
      <div className="line left-[22%] top-[38%] h-[2px] w-[24%]" />
      <div className="line left-[60%] top-[38%] h-[2px] w-[23%]" />
      <div className="line left-[36%] top-[46%] h-[33%] w-[2px]" />
      <div className="line left-[65%] top-[46%] h-[33%] w-[2px]" />
    </div>
  );
}

export default function Home() {
  const [activeProject, setActiveProject] = useState(null);
  const [showLogs, setShowLogs] = useState(false);

  return (
    <main className="mx-auto max-w-6xl px-4 pb-14 pt-10 sm:px-6">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={spring}
        className="accent-border glass rounded-2xl p-8"
      >
        <p className="mb-3 text-sm uppercase tracking-[0.22em] text-cyan-300">Creative Technologist</p>
        <h1 className="text-3xl font-bold leading-tight text-slate-50 sm:text-5xl">
          Don Cornelius B — Bridging Software Logic with Creative Technology
        </h1>
        <p className="mt-4 text-base text-slate-300 sm:text-lg">
          3rd Year CSE at Sathyabama Institute of Science and Technology
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://linkedin.com/in/don-cornelius-livi/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-cyan-300/50 px-4 py-2 text-sm text-cyan-200 transition hover:bg-cyan-300/10"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Don-Cornelius-B"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-violet-300/50 px-4 py-2 text-sm text-violet-200 transition hover:bg-violet-300/10"
          >
            GitHub
          </a>
        </div>
      </motion.section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
        <div className="glass rounded-2xl p-6">
          <h2 className="mb-4 text-xl font-semibold text-cyan-200">The Agnostic Project Grid</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ ...spring, delay: index * 0.06 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group accent-border glass cursor-pointer rounded-xl p-4"
                onClick={() => setActiveProject(project)}
              >
                <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2 opacity-0 transition group-hover:opacity-100">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-cyan-300/50 px-2 py-1 text-xs text-cyan-200">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setShowLogs(true);
                    setActiveProject(project);
                  }}
                  className="mt-4 rounded-md border border-slate-400/40 px-3 py-2 text-xs text-slate-200 transition hover:bg-white/10"
                >
                  View Technical Specs
                </button>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <h2 className="mb-4 text-xl font-semibold text-cyan-200">Tech Stack Orbit</h2>
          <Orbit />
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={spring}
          className="glass rounded-2xl p-6"
        >
          <h2 className="mb-4 text-xl font-semibold text-cyan-200">Skill Matrix</h2>
          <div className="grid gap-4">
            <div className="glass rounded-xl p-4">
              <h3 className="text-sm uppercase tracking-wide text-cyan-300">Languages</h3>
              <p className="mt-2 text-slate-200">Python (Kivy), C++, JavaScript</p>
            </div>
            <div className="glass rounded-xl p-4">
              <h3 className="text-sm uppercase tracking-wide text-cyan-300">Specialized</h3>
              <p className="mt-2 text-slate-200">Unity, Blender, UI/UX (Figma), Web Development</p>
            </div>
            <div className="glass rounded-xl p-4">
              <h3 className="text-sm uppercase tracking-wide text-cyan-300">Systems &amp; Automation</h3>
              <p className="mt-2 text-slate-200">GitHub Actions (CI/CD), Git, Linux, Buildozer</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...spring, delay: 0.08 }}
          className="glass rounded-2xl p-6"
        >
          <h2 className="mb-4 text-xl font-semibold text-cyan-200">Interactive Timeline</h2>
          <div className="relative pl-6">
            <div className="absolute left-[11px] top-0 h-full w-[2px] bg-gradient-to-b from-cyan-300 to-violet-400" />
            {timeline.map((item) => (
              <div key={item.stage} className="relative mb-6 last:mb-0">
                <div className="absolute -left-[19px] top-1 h-4 w-4 rounded-full border border-cyan-300 bg-slate-950" />
                <p className="text-xs text-slate-400">{item.year}</p>
                <h3 className="text-base font-semibold text-slate-100">{item.stage}</h3>
                <p className="text-sm text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <footer className="mt-10 glass rounded-2xl p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-slate-300">© {new Date().getFullYear()} Don Cornelius B</p>
          <a
            href="https://github.com/Don-Cornelius-B/My-Portfolio/actions/workflows/main.yml"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg border border-emerald-300/50 px-3 py-2 text-xs text-emerald-200"
          >
            <Image
              src="https://github.com/Don-Cornelius-B/My-Portfolio/actions/workflows/main.yml/badge.svg"
              alt="Deployment Status"
              width={110}
              height={20}
              className="h-5"
            />
            Deployment Status
          </a>
        </div>
      </footer>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 grid place-items-center bg-black/70 p-4"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ y: 24, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={spring}
              onClick={(event) => event.stopPropagation()}
              className="glass max-h-[88vh] w-full max-w-2xl overflow-auto rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold text-slate-100">{activeProject.title} — Project Deep Dive</h3>
              <p className="mt-2 text-slate-300">{activeProject.description}</p>
              <ArchitectureDiagram />
              <div className="mt-4 flex flex-wrap gap-2">
                {activeProject.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-cyan-300/40 px-2 py-1 text-xs text-cyan-200">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="mt-5 rounded-lg border border-slate-400/50 px-4 py-2 text-sm text-slate-100"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showLogs && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-4"
            onClick={() => setShowLogs(false)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              transition={spring}
              onClick={(event) => event.stopPropagation()}
              className="scanline w-full max-w-3xl rounded-xl border border-emerald-400/40 bg-black/90 p-4 font-mono text-xs text-emerald-300"
            >
              <div className="mb-3 flex items-center justify-between border-b border-emerald-500/30 pb-2">
                <span>SYSTEM LOGS :: {activeProject?.title || 'Project'} :: TECHNICAL SPECS</span>
                <button type="button" className="text-emerald-200" onClick={() => setShowLogs(false)}>
                  EXIT
                </button>
              </div>
              <pre className="whitespace-pre-wrap leading-relaxed">
{`[INFO] Initializing diagnostics pipeline...
[INFO] Build validation: PASS
[INFO] Runtime checks: PASS
[INFO] Telemetry stream: ACTIVE
[INFO] Integrity monitor: STABLE
[INFO] Last deployment source: GitHub Actions / main.yml
[READY] Technical profile rendered successfully.`}
              </pre>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}