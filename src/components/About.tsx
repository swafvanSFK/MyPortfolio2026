import { CheckCircle2 } from 'lucide-react';
import { TIMELINE, USER_INFO } from '../data';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6 md:px-12 relative border-b border-white/10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Bio Text Column */}
        <motion.div
          id="about-text-column"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="font-mono text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3 block">
            About Me
          </span>
          <h2 className="font-display text-3xl md:text-6xl font-extrabold tracking-tighter text-white mb-6 uppercase leading-none">
            Building digital experiences <span className="text-blue-400">that I love</span>
          </h2>
          <div className="space-y-6 text-neutral-400 font-sans text-sm md:text-base leading-relaxed uppercase tracking-wide">
            <p>
              I am a professional Full Stack Developer specializing in the modern MERN ecosystem. With over 3 years of solid, hands-on industry experience, I excel in creating cohesive architectures that connect high-performance, complex backends with fluid, accessible frontends.
            </p>
            <p>
              My coding philosophy values structured type systems, test-driven logic boundaries, and responsive, fluid design. I spend my time optimizing rendering runtimes, containerizing distributed components, and writing clean, scalable TypeScript codebase structures.
            </p>
          </div>

          {/* Quick core values / stats list */}
          <div className="grid grid-cols-2 gap-4 mt-10 border-t border-white/10 pt-8" id="about-stats-grid">
            <div className="border border-white/10 p-5 bg-neutral-900/30 rounded-none hover:border-blue-400 transition-colors duration-300">
              <p className="font-display text-4xl font-extrabold text-blue-400">3+</p>
              <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest mt-1">Years of Experience</p>
            </div>
            <div className="border border-white/10 p-5 bg-neutral-900/30 rounded-none hover:border-blue-400 transition-colors duration-300">
              <p className="font-display text-4xl font-extrabold text-white">15+</p>
              <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest mt-1">Projects Delivered</p>
            </div>
          </div>
        </motion.div>

        {/* Milestone Timeline Column */}
        <motion.div
          id="about-timeline-column"
          className="relative py-8 border border-white/10 p-8 bg-neutral-900/20 rounded-none"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="font-display text-sm font-bold tracking-widest uppercase text-neutral-200 mb-8 flex items-center gap-2">
            My Journey <span className="text-[10px] text-blue-400 font-mono">// TIMELINE</span>
          </h3>

          <div className="relative border-l border-white/15 pl-6 space-y-10">

            {/* 2022 Full Stack Node */}
            <div className="relative group" id="timeline-node-2022">
              <span className="absolute -left-[31px] top-1.5 w-3 h-3 bg-white border border-black rounded-none" />
              <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest mb-1 block">Present</span>
              <h4 className="font-display text-base font-bold text-white group-hover:text-blue-400 transition-colors uppercase">
                Full Stack Developer & React Native Developer
              </h4>
              <p className="text-xs text-neutral-500 font-mono uppercase tracking-wider">Auxwall Software Solutions</p>
            </div>

            {/* 2020 Junior Dev Node */}
            <div className="relative group" id="timeline-node-2020">
              <span className="absolute -left-[31px] top-1.5 w-3 h-3 bg-neutral-800 border border-black rounded-none" />
              <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-1 block">2024</span>
              <h4 className="font-display text-base font-bold text-neutral-300 group-hover:text-blue-400 transition-colors uppercase">
                Full Stack Developer
              </h4>
              <p className="text-xs text-neutral-500 font-mono uppercase tracking-wider">First Consulting Group (FCG)</p>
            </div>

            {/* 2018 Intern Node */}
            <div className="relative group" id="timeline-node-2018">
              <span className="absolute -left-[31px] top-1.5 w-3 h-3 bg-neutral-900 border border-black rounded-none" />
              <span className="font-mono text-[10px] text-neutral-600 uppercase tracking-widest mb-1 block">2023</span>
              <h4 className="font-display text-base font-bold text-neutral-400 group-hover:text-blue-400 transition-colors uppercase">
                Software Engineering Intern
              </h4>
              <p className="text-xs text-neutral-500 font-mono uppercase tracking-wider">Entry Learning App</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
