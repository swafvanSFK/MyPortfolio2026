import React, { useState } from 'react';
import { PROJECTS } from '../data';
import { ProjectCategory } from '../types';
import { ExternalLink, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const filters = [
    { value: 'all', label: 'All' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  // Spotlight Mouse Move Effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-6 md:px-12 relative z-10 border-b border-white/10">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-400/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />

      {/* Header */}
      <motion.header 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-mono text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3 block">
          Portfolio
        </span>
        <h1 className="font-display text-4xl md:text-8xl font-extrabold tracking-tighter text-white mb-6 max-w-3xl uppercase leading-none">
          Selected Projects
        </h1>
        <p className="text-neutral-400 text-sm md:text-base max-w-2xl leading-relaxed uppercase tracking-wide">
          Crafting solutions with code and creativity. A curated collection of enterprise applications, open-source tools, and experimental interfaces built during my decade in software engineering.
        </p>
      </motion.header>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 mb-12" id="projects-filter-bar">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            id={`project-filter-btn-${filter.value}`}
            className={`px-5 py-2.5 rounded-none border text-xs font-mono transition-all duration-300 tracking-widest uppercase cursor-pointer ${
              activeFilter === filter.value
                ? 'bg-blue-400 border-blue-400 text-black font-bold'
                : 'bg-neutral-900/40 border-white/10 text-neutral-400 hover:bg-neutral-900 hover:text-white'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" 
        id="projects-grid"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.article
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 150, damping: 20 }}
              key={project.id}
              id={`project-card-${project.id}`}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setHoveredCardId(project.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              className="group relative bg-neutral-950/40 backdrop-blur-xl rounded-none border border-white/10 hover:border-blue-400 shadow-none overflow-hidden transition-all duration-500 flex flex-col justify-between"
            >
              {/* Spotlight Glow Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(300px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(204, 255, 0, 0.12), transparent 80%)`,
                  zIndex: 1,
                }}
              />

              <div>
                {/* Image Frame */}
                <div className="relative aspect-video w-full overflow-hidden bg-neutral-900 border-b border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    id={`project-img-${project.id}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 z-10" />
                </div>

                {/* Content Panel */}
                <div className="p-6 relative z-10">
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[9px] font-mono tracking-widest bg-blue-500/10 text-blue-400 border border-blue-400/20 rounded-none uppercase"
                      >
                        {tag.toUpperCase()}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-0.5 text-[9px] font-mono tracking-widest text-neutral-500 uppercase">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-lg font-bold text-neutral-100 mb-2 group-hover:text-blue-400 transition-colors uppercase tracking-wider">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 font-sans text-xs leading-relaxed uppercase tracking-wider line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Link Footer */}
              <div className="p-6 pt-0 relative z-20 flex items-center gap-6 mt-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  id={`project-live-btn-${project.id}`}
                  className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-mono font-bold text-blue-400 hover:text-white transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  id={`project-code-btn-${project.id}`}
                  className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-mono text-neutral-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <Code2 className="w-4 h-4" /> Source
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
