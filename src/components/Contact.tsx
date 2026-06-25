import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Twitter, CheckCircle2, BookOpen, AlertCircle } from 'lucide-react';
import { USER_INFO } from '../data';
import { motion } from 'framer-motion';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setError(null);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setError("Web3Forms Access Key is not configured in the environment.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          message,
          subject: `New Message from Portfolio - ${name}`,
          from_name: name
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSuccess(true);
        setName('');
        setEmail('');
        setMessage('');

        // Auto clear success banner after 5s
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } else {
        setError(data.message || "Failed to transmit message. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError("A network error occurred. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6 md:px-12 relative overflow-hidden">
      {/* Visual background sphere */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/5 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" />

      {/* Grid container */}
      <div className="grid lg:grid-cols-12 gap-16 items-start" id="contact-grid">
        {/* Contact info column */}
        <motion.div 
          className="lg:col-span-5" 
          id="contact-info-col"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="font-mono text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3 block">
            Let's connect
          </span>
          <h2 className="font-display text-4xl md:text-8xl font-extrabold text-white mb-6 uppercase tracking-tighter leading-none">
            Contact<span className="text-blue-400">.</span>
          </h2>
          <p className="text-neutral-400 font-sans text-xs uppercase tracking-wide leading-relaxed mb-10">
            Have a project in mind, an opportunity, or just want to chat about system architectures? Feel free to reach out. I try to reply to all queries within 24 hours.
          </p>

          <div className="space-y-4 mb-12" id="contact-details">
            <div className="flex items-center gap-4 text-neutral-300">
              <div className="p-3 bg-white/5 border border-white/10 text-blue-400 rounded-none">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">Email Address</p>
                <a href={`mailto:${USER_INFO.email}`} id="contact-email-link" className="font-mono text-xs uppercase tracking-widest text-neutral-200 hover:text-blue-400 transition-colors">
                  {USER_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-neutral-300">
              <div className="p-3 bg-white/5 border border-white/10 text-blue-400 rounded-none">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">Base Location</p>
                <p className="font-mono text-xs uppercase tracking-widest text-neutral-200">
                  {USER_INFO.location}
                </p>
              </div>
            </div>
          </div>

          {/* Social connections */}
          <div>
            <p className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest mb-4">Follow Social Networks</p>
            <div className="flex gap-2">
              <a
                href={USER_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                id="social-github"
                className="p-3.5 bg-neutral-900/40 hover:bg-neutral-900 border border-white/10 hover:border-blue-400 text-neutral-400 hover:text-white rounded-none transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={USER_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                id="social-linkedin"
                className="p-3.5 bg-neutral-900/40 hover:bg-neutral-900 border border-white/10 hover:border-blue-400 text-neutral-400 hover:text-white rounded-none transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={USER_INFO.socials.twitter}
                target="_blank"
                rel="noreferrer"
                id="social-twitter"
                className="p-3.5 bg-neutral-900/40 hover:bg-neutral-900 border border-white/10 hover:border-blue-400 text-neutral-400 hover:text-white rounded-none transition-all duration-300"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
              {USER_INFO.socials.devto && (
                <a
                  href={USER_INFO.socials.devto}
                  target="_blank"
                  rel="noreferrer"
                  id="social-devto"
                  className="p-3.5 bg-neutral-900/40 hover:bg-neutral-900 border border-white/10 hover:border-blue-400 text-neutral-400 hover:text-white rounded-none transition-all duration-300"
                  aria-label="Dev.to Profile"
                >
                  <BookOpen className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Contact form column */}
        <motion.div 
          className="lg:col-span-7" 
          id="contact-form-col"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="p-8 md:p-10 bg-neutral-950/40 backdrop-blur-xl border border-white/10 rounded-none shadow-none relative overflow-hidden">
            <h3 className="font-display text-base font-bold text-white mb-6 uppercase tracking-wider">
              Send a Secure Message
            </h3>

            {isSuccess && (
              <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-none flex items-center gap-3 text-emerald-400 font-mono text-xs uppercase tracking-widest" id="contact-success-banner">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Message submitted successfully! I will get back to you shortly.</span>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-rose-500/10 border border-rose-500/20 rounded-none flex items-center gap-3 text-rose-400 font-mono text-xs uppercase tracking-widest" id="contact-error-banner">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
              {/* Name field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">Your Name</label>
                <input
                  type="text"
                  id="contact-name"
                  required
                  placeholder="Your Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-4 py-3 bg-black border border-white/10 focus:border-blue-400 rounded-none font-mono text-xs uppercase tracking-widest text-neutral-100 placeholder-neutral-700 focus:outline-none transition-all"
                />
              </div>

              {/* Email field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">Email Address</label>
                <input
                  type="email"
                  id="contact-email"
                  required
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 bg-black border border-white/10 focus:border-blue-400 rounded-none font-mono text-xs uppercase tracking-widest text-neutral-100 placeholder-neutral-700 focus:outline-none transition-all"
                />
              </div>

              {/* Message field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-message" className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">Message Content</label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="What would you like to build?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="px-4 py-3 bg-black border border-white/10 focus:border-blue-400 rounded-none font-mono text-xs uppercase tracking-widest text-neutral-100 placeholder-neutral-700 focus:outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                id="contact-submit-btn"
                className="w-full px-6 py-4 bg-blue-400 hover:bg-white disabled:bg-neutral-900 disabled:text-neutral-600 disabled:border-white/5 text-black font-mono text-xs font-bold uppercase tracking-widest rounded-none shadow-none active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer border border-blue-400 hover:border-white"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Transmitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Transmit Message
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
