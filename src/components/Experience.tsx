import { TIMELINE, CERTIFICATIONS, SKILLS, USER_INFO } from '../data';
import { Briefcase, Cloud, ShieldAlert, Award, Terminal, Server, Layers, GitBranch, Download, Mail, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Experience() {
  const languages = SKILLS.filter(s => s.category === 'language').map(s => s.name).join(', ');
  const devops = SKILLS.filter(s => s.category === 'devops').map(s => s.name).join(', ');
  const frontend = SKILLS.filter(s => s.category === 'frontend').map(s => s.name).join(', ');
  const backendAndDb = SKILLS.filter(s => s.category === 'backend' || s.category === 'database').map(s => s.name).join(', ');

  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cloud': return <Cloud className="w-7 h-7 text-blue-400 animate-pulse" />;
      case 'ShieldAlert': return <ShieldAlert className="w-7 h-7 text-teal-400" />;
      case 'Award': return <Award className="w-7 h-7 text-purple-400" />;
      default: return <Award className="w-7 h-7 text-neutral-400" />;
    }
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="experience" className="py-24 max-w-7xl mx-auto px-6 md:px-12 relative overflow-hidden border-b border-white/10">
      {/* Dynamic Background Spotlight */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" />

      {/* Header */}
      <motion.header 
        className="mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <span className="font-mono text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3 block">
            Expertise Timeline
          </span>
          <h1 className="font-display text-4xl md:text-8xl font-extrabold tracking-tighter text-white mb-4 uppercase leading-none">
            Experience<span className="text-blue-400">.</span>
          </h1>
          <p className="text-neutral-400 text-sm md:text-base max-w-xl leading-relaxed uppercase tracking-wide">
            A decade of building scalable architectures and leading cross-functional teams in high-growth technology environments.
          </p>
        </div>

        {/* Buttons Action bar */}
        <div className="flex flex-wrap gap-4" id="experience-actions">
          <a
            href={USER_INFO.resumeUrl}
            download
            className="flex items-center gap-2 bg-blue-400 hover:bg-white text-black px-6 py-3.5 rounded-none font-mono text-xs font-bold transition-all duration-300 border border-blue-400 cursor-pointer uppercase tracking-widest"
          >
            <Download className="w-4 h-4" /> Download Resume
          </a>
          <button
            onClick={handleContactClick}
            className="flex items-center gap-2 bg-transparent hover:bg-blue-400 border border-white/20 hover:border-blue-400 px-6 py-3.5 rounded-none font-mono text-xs font-bold text-neutral-200 hover:text-black transition-all duration-300 cursor-pointer uppercase tracking-widest"
          >
            <Mail className="w-4 h-4" /> Hire Me
          </button>
        </div>
      </motion.header>

      {/* Timeline Section */}
      <div className="relative mt-12 mb-28" id="experience-timeline">
        {/* Central timeline line (desktop only) */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/15 transform -translate-x-1/2" />

        <div className="space-y-12">
          {TIMELINE.map((item, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <div
                key={item.id}
                id={`timeline-item-${item.id}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative items-center"
              >
                {/* Milestone content side (Alternating left/right in desktop) */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`lg:col-span-5 ${
                    isLeft ? 'lg:text-right lg:order-1' : 'lg:order-3'
                  }`}
                >
                  <div className="group relative p-8 bg-neutral-950/40 backdrop-blur-md rounded-none border border-white/10 hover:border-blue-400 transition-all duration-300 shadow-none overflow-hidden">
                    {/* Lateral accent color */}
                    <div
                      className={`absolute top-0 bottom-0 w-[3px] bg-blue-400 transition-all duration-300 ${
                        isLeft ? 'right-0' : 'left-0'
                      }`}
                    />

                    <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest mb-2 block">
                      {item.year}
                    </span>
                    <h3 className="font-display text-lg font-bold text-white mb-1 uppercase tracking-wider">
                      {item.title}
                    </h3>
                    <p className="font-mono text-neutral-400 font-semibold text-xs mb-6 uppercase tracking-widest">
                      {item.company}
                    </p>

                    {/* Description bullet list */}
                    <ul className={`space-y-3 font-sans text-xs uppercase tracking-wide text-neutral-400 leading-relaxed ${isLeft ? 'lg:ml-auto' : ''}`}>
                      {item.description.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className={`flex items-start gap-2.5 ${isLeft ? 'lg:justify-end' : 'justify-start'}`}
                        >
                          {!isLeft && <CheckCircle2 className="w-4.5 h-4.5 text-blue-400 shrink-0 mt-0.5" />}
                          <span className={isLeft ? 'text-right' : 'text-left'}>{bullet}</span>
                          {isLeft && <CheckCircle2 className="w-4.5 h-4.5 text-blue-400 shrink-0 mt-0.5" />}
                        </li>
                      ))}
                    </ul>

                    {/* Skill tags */}
                    <div className={`mt-6 flex flex-wrap gap-2 ${isLeft ? 'lg:justify-end' : 'justify-start'}`}>
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 bg-neutral-900 border border-white/10 rounded-none font-mono text-[9px] text-neutral-400 uppercase tracking-widest"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Central Circle Node (desktop only) */}
                <div className="hidden lg:flex lg:col-span-2 justify-center relative z-20 lg:order-2">
                  <div className="w-3 h-3 bg-blue-400 border border-black rounded-none shadow-[0_0_15px_rgba(204,255,0,0.4)] relative">
                    <div className="absolute inset-0 bg-blue-400 rounded-none scale-150 opacity-20 animate-ping" />
                  </div>
                </div>

                {/* Empty buffer columns */}
                <div className={`hidden lg:block lg:col-span-5 ${isLeft ? 'lg:order-3' : 'lg:order-1'}`} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Certifications and Awards */}
      <div className="mt-24" id="experience-certifications">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-display text-2xl md:text-4xl font-extrabold tracking-tighter text-white uppercase">
              Certifications <span className="text-blue-400">&amp;</span> Recognition
            </h2>
            <p className="text-neutral-400 font-sans text-xs mt-2 uppercase tracking-wide">
              Continuous learning, external audits, and professional validations.
            </p>
          </div>
          <span className="hidden md:block font-mono text-xs text-neutral-500 tracking-widest uppercase border-b border-white/10 pb-1">
            Validated Credentials
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={cert.id}
              id={`cert-card-${cert.id}`}
              className="group p-6 bg-neutral-950/40 backdrop-blur-md rounded-none border border-white/10 hover:border-blue-400 transition-all duration-300 shadow-none flex items-center gap-5"
            >
              <div className="p-4 bg-white/5 rounded-none border border-white/10 group-hover:bg-blue-400/10 group-hover:border-blue-400 transition-all shrink-0">
                {getCertIcon(cert.iconName)}
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-neutral-200 group-hover:text-white transition-colors uppercase tracking-wider">
                  {cert.title}
                </h4>
                <p className="text-[10px] text-neutral-400 font-mono mt-1 font-medium uppercase tracking-widest">
                  {cert.issuer} • <span className="text-blue-400 font-bold">{cert.year}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technology Ecosystem snapshot breakdown card */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-24 p-8 md:p-12 bg-neutral-950/40 backdrop-blur-md border border-white/10 rounded-none relative overflow-hidden" 
        id="tech-ecosystem-card"
      >
        {/* Glow corner */}
        <div className="absolute -right-24 -top-24 w-64 h-64 bg-blue-400/[0.02] rounded-full blur-[80px]" />

        <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-white mb-4 uppercase tracking-tighter">
              The Technical Ecosystem
            </h2>
            <p className="text-neutral-400 font-sans text-xs leading-relaxed mb-8 uppercase tracking-wide">
              A curated selection of languages, platforms, patterns, and system components I leverage to deliver performant, safe client and backend systems.
            </p>
            <div className="flex items-center gap-4 text-[10px] font-mono text-blue-400 border-t border-white/10 pt-6 uppercase tracking-widest">
              <span>● MULTI-PLATFORM</span>
              <span>● CLOUD NATIVE</span>
              <span>● COMPILER SAFE</span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h5 className="font-mono text-[10px] font-bold text-blue-400 tracking-widest uppercase flex items-center gap-2">
                <Terminal className="w-4 h-4" /> Languages
              </h5>
              <p className="text-xs uppercase tracking-wide text-neutral-400 font-mono">
                {languages}
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="font-mono text-[10px] font-bold text-blue-400 tracking-widest uppercase flex items-center gap-2">
                <GitBranch className="w-4 h-4" /> DevOps &amp; Cloud
              </h5>
              <p className="text-xs uppercase tracking-wide text-neutral-400 font-mono">
                {devops}
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="font-mono text-[10px] font-bold text-blue-400 tracking-widest uppercase flex items-center gap-2">
                <Layers className="w-4 h-4" /> Frontend stack
              </h5>
              <p className="text-xs uppercase tracking-wide text-neutral-400 font-mono">
                {frontend}
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="font-mono text-[10px] font-bold text-blue-400 tracking-widest uppercase flex items-center gap-2">
                <Server className="w-4 h-4" /> Databases &amp; Backend
              </h5>
              <p className="text-xs uppercase tracking-wide text-neutral-400 font-mono">
                {backendAndDb}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
