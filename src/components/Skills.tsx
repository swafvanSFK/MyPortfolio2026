import { useState } from 'react';
import { SKILLS } from '../data';
import { SkillCategory } from '../types';
import { Terminal, Layers, Database, Code2, Rocket, Server, Cpu, GitBranch, Search, Container, Kanban, Smartphone, Coffee, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'language', label: 'Languages' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'database', label: 'Databases' },
    { value: 'devops', label: 'DevOps & Tools' }
  ];

  // Helper to map icon name to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal': return <Terminal className="w-5 h-5 text-blue-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-purple-400" />;
      case 'Database': return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Rocket': return <Rocket className="w-5 h-5 text-amber-400" />;
      case 'Server': return <Server className="w-5 h-5 text-indigo-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-pink-400" />;
      case 'Docker':
      case 'Container': return <Container className="w-5 h-5 text-cyan-500" />;
      case 'Kanban': return <Kanban className="w-5 h-5 text-blue-500" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-emerald-400" />;
      case 'Coffee': return <Coffee className="w-5 h-5 text-amber-600" />;
      case 'Monitor': return <Monitor className="w-5 h-5 text-indigo-400" />;
      default: return <Code2 className="w-5 h-5 text-neutral-400" />;
    }
  };

  const filteredSkills = SKILLS.filter(skill => {
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 bg-black relative overflow-hidden border-b border-white/10">
      {/* Background decoration elements */}
      <div className="absolute top-1/2 left-0 w-full h-96 bg-blue-400/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10" id="skills-container">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3 block">
            Expertise
          </span>
          <h2 className="font-display text-3xl md:text-6xl font-extrabold tracking-tighter text-white uppercase leading-none">
            Technical Arsenal
          </h2>
          <p className="text-neutral-400 mt-4 max-w-xl mx-auto font-sans uppercase tracking-wide text-xs">
            A comprehensive, modular collection of languages, frameworks, databases, and tooling pipelines I master.
          </p>
        </motion.div>

        {/* Filters and Search toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12" id="skills-toolbar">
          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto" id="skills-category-filters">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                id={`skill-filter-btn-${cat.value}`}
                className={`px-5 py-2.5 rounded-none border text-xs font-mono transition-all uppercase tracking-widest cursor-pointer ${
                  selectedCategory === cat.value
                    ? 'bg-blue-400 text-black border-blue-400 font-bold'
                    : 'bg-neutral-900/40 border-white/10 text-neutral-400 hover:bg-neutral-900 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80" id="skills-search-container">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-neutral-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search skill (e.g. React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              id="skills-search-input"
              className="w-full pl-10 pr-4 py-3 bg-neutral-900/40 border border-white/10 focus:border-blue-400 rounded-none font-mono text-xs uppercase tracking-widest text-neutral-100 placeholder-neutral-600 focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        {filteredSkills.length > 0 ? (
          <motion.div 
            layout 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" 
            id="skills-grid"
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={skill.id}
                  id={`skill-card-${skill.id}`}
                  className="group relative p-6 bg-neutral-950/40 backdrop-blur-md rounded-none border border-white/10 hover:border-blue-400 transition-all duration-300 shadow-none overflow-hidden flex flex-col justify-between"
                >
                  {/* Spotlighting effect gradient */}
                  <div className="absolute inset-0 bg-blue-400/[0.02] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div>
                    {/* Skill header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2.5 rounded-none bg-white/5 border border-white/10 group-hover:bg-blue-400/10 group-hover:border-blue-400 transition-all">
                        {getIcon(skill.iconName)}
                      </div>
                      <div>
                        <h4 className="font-display text-sm font-bold text-neutral-200 group-hover:text-white uppercase tracking-wider transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest mt-0.5 block">
                          {skill.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-1.5 text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                      <span>Proficiency</span>
                      <span className="text-blue-400 group-hover:text-white font-bold transition-colors">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress track */}
                    <div className="h-1.5 w-full bg-neutral-900 rounded-none overflow-hidden border border-white/5">
                      <motion.div
                        className="h-full bg-blue-400 rounded-none origin-left"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-16 bg-neutral-900/40 border border-dashed border-white/10 rounded-none" id="skills-empty-state">
            <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
              No matching skills found in the technical arsenal.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
