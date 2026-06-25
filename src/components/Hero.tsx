import { useEffect, useState } from 'react';
import { ArrowRight, FileText, Download, ChevronDown } from 'lucide-react';
import { USER_INFO } from '../data';
import { motion } from 'framer-motion';


interface HeroProps {
  onContactClick: () => void;
  onProjectsClick: () => void;
}

export default function Hero({ onContactClick, onProjectsClick }: HeroProps) {
  const [typedText, setTypedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Typing effect hook
  useEffect(() => {
    const handleTyping = () => {
      const currentWord = USER_INFO.typingWords[wordIndex];
      if (!isDeleting) {
        setTypedText(currentWord.substring(0, typedText.length + 1));
        setTypingSpeed(100);

        if (typedText === currentWord) {
          // Pause at the end of the word
          setIsDeleting(true);
          setTypingSpeed(1500); // Wait 1.5s before deleting
        }
      } else {
        setTypedText(currentWord.substring(0, typedText.length - 1));
        setTypingSpeed(50);

        if (typedText === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % USER_INFO.typingWords.length);
          setTypingSpeed(500); // Small delay before starting next word
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex, typingSpeed]);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 120,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 px-6 select-none"
    >
      {/* Visual background lights (ambient neon lime glow) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-blue-500/10 rounded-full blur-[100px] md:blur-[160px] pointer-events-none -z-10 animate-pulse"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-white/5 rounded-full blur-[100px] md:blur-[160px] pointer-events-none -z-10"
      />

      {/* Main Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center"
      >
        {/* Headshot Avatar with Spotlight glow */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          className="relative mb-8 group cursor-pointer"
          id="hero-avatar-container"
        >
          <div className="absolute inset-0 bg-blue-400/20 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 scale-95" />
          <div className="relative z-10 w-32 h-32 md:w-44 md:h-44 p-0.5 bg-blue-400 border border-white/10 shadow-[0_0_30px_rgba(204,255,0,0.15)] group-hover:shadow-[0_0_40px_rgba(204,255,0,0.3)] transition-all duration-300">
            <img
              src={USER_INFO.avatar}
              alt={USER_INFO.name}
              id="hero-headshot-img"
              className="w-full h-full object-cover border border-black"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Active indicator */}
          <span className="absolute bottom-1 right-2 w-4 h-4 bg-blue-400 border-2 border-black animate-pulse z-20" />
        </motion.div>

        {/* Greetings */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-4xl md:text-8xl font-extrabold tracking-tighter text-white mb-2 uppercase leading-none"
        >
          Hi, I'm <span className="text-blue-400 hover:text-white transition-colors duration-300">{USER_INFO.name.split(' ')[0]}</span>
        </motion.h1>

        {/* Typing Headline */}
        <motion.p
          variants={itemVariants}
          className="font-mono text-xs md:text-sm tracking-widest uppercase font-semibold text-blue-400 min-h-[36px] mb-8"
          id="typing-container"
        >
          <span>{typedText}</span>
          <span className="inline-block w-[3px] h-[14px] md:h-[16px] bg-blue-400 ml-1 align-middle animate-[blink_1s_infinite]" />
        </motion.p>

        {/* Short Bio Tagline */}
        <motion.p
          variants={itemVariants}
          className="font-sans text-neutral-400 text-sm md:text-base max-w-2xl leading-relaxed mb-12 uppercase tracking-wide"
        >
          {USER_INFO.bio}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full sm:w-auto"
          id="hero-action-buttons"
        >
          <button
            onClick={onProjectsClick}
            id="view-projects-btn"
            className="w-full sm:w-auto px-8 py-4 bg-blue-400 hover:bg-white text-black font-mono text-xs tracking-widest uppercase font-semibold transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group border border-blue-400 cursor-pointer"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={USER_INFO.resumeUrl}
            download
            id="download-resume-btn"
            className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-blue-400 text-white hover:text-black font-mono text-xs tracking-widest uppercase font-semibold border border-white/20 hover:border-blue-400 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>

          <button
            onClick={onContactClick}
            id="hero-contact-btn"
            className="w-full sm:w-auto text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-blue-400 underline-offset-8 hover:underline decoration-blue-400 transition-colors py-2 cursor-pointer"
          >
            Contact Me
          </button>
        </motion.div>
      </motion.div>

      {/* Scrolling Bounce Arrow indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        onClick={handleScrollDown}
        id="scroll-indicator-btn"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 p-2 hover:bg-white/5 transition-colors animate-bounce cursor-pointer border border-white/10 z-20"
        aria-label="Scroll down to About section"
      >
        <ChevronDown className="w-5 h-5 text-neutral-400 hover:text-white" />
      </motion.button>
    </section>
  );
}
