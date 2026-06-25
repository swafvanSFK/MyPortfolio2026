import { useState } from 'react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';
import { Search, Clock, Calendar, ArrowRight, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BlogProps {
  onSelectPost: (post: BlogPost) => void;
}

export default function Blog({ onSelectPost }: BlogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Architecture', 'Performance', 'Tutorial', 'Security'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = BLOG_POSTS[0]; // first post is featured

  // Exclude featured post from the grid if showing "All" and no search query,
  // otherwise show whatever fits
  const gridPosts = filteredPosts.filter((post) => {
    if (selectedCategory === 'All' && searchQuery === '') {
      return post.id !== featuredPost.id;
    }
    return true;
  });

  return (
    <section id="blog" className="max-w-7xl mx-auto px-6 md:px-12 relative border-b border-white/10">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />

      {/* Header */}
      <motion.header 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-mono text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3 block">
          Engineered Insights
        </span>
        <h1 className="font-display text-4xl md:text-8xl font-extrabold tracking-tighter text-white mb-6 uppercase leading-none">
          Technical Blog
        </h1>
        <p className="text-neutral-400 text-sm md:text-base max-w-2xl leading-relaxed uppercase tracking-wide">
          Deep dives into distributed systems, frontend architecture, and performance optimization for the modern web.
        </p>
      </motion.header>

      {/* Filter and Search Bar Toolbar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12" id="blog-toolbar">
        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto" id="blog-categories">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              id={`blog-category-btn-${cat}`}
              className={`px-5 py-2.5 rounded-none border text-xs font-mono transition-all uppercase tracking-widest cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-400 border-blue-400 text-black font-bold'
                  : 'bg-neutral-900/40 border-white/10 text-neutral-400 hover:bg-neutral-900 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-80" id="blog-search-container">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-neutral-400">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            id="blog-search-input"
            className="w-full pl-10 pr-4 py-3 bg-neutral-900/40 border border-white/10 focus:border-blue-400 rounded-none font-mono text-xs uppercase tracking-widest text-neutral-100 placeholder-neutral-600 focus:outline-none transition-all"
          />
        </div>
      </div>

      {/* Featured Post Card (only visible when in "All" view with no active search query) */}
      {selectedCategory === 'All' && searchQuery === '' && featuredPost && (
        <motion.article
          onClick={() => onSelectPost(featuredPost)}
          id="featured-blog-post"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 bg-neutral-950/40 backdrop-blur-md rounded-none border border-white/10 hover:border-blue-400 transition-all duration-300 shadow-none overflow-hidden cursor-pointer group"
        >
          {/* Cover Frame */}
          <div className="lg:col-span-7 h-64 lg:h-auto min-h-[380px] relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              id="featured-blog-cover-img"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/30 lg:bg-black/20" />
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-blue-500/10 border border-blue-400/20 text-blue-400 font-mono text-[9px] uppercase tracking-widest rounded-none">
                {featuredPost.category}
              </span>
              <span className="flex items-center gap-1.5 text-neutral-400 font-mono text-[10px] uppercase tracking-widest">
                <Clock className="w-3.5 h-3.5 text-blue-400" /> {featuredPost.readTime}
              </span>
            </div>

            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-neutral-100 mb-4 group-hover:text-blue-400 transition-colors uppercase tracking-wider">
              {featuredPost.title}
            </h2>

            <p className="text-neutral-400 font-sans text-xs uppercase tracking-wide leading-relaxed mb-8">
              {featuredPost.description}
            </p>

            {/* Author details */}
            <div className="flex items-center gap-3">
              <img
                src={featuredPost.authorImage}
                alt={featuredPost.author}
                className="w-10 h-10 rounded-none object-cover border border-white/10"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="font-mono text-[10px] font-semibold text-neutral-200 uppercase tracking-wider">{featuredPost.author}</p>
                <p className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">{featuredPost.date}</p>
              </div>
            </div>
          </div>
        </motion.article>
      )}

      {/* Feed Grid */}
      {gridPosts.length > 0 ? (
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20" 
          id="blog-grid"
        >
          <AnimatePresence mode="popLayout">
            {gridPosts.map((post) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={post.id}
                onClick={() => onSelectPost(post)}
                id={`blog-card-${post.id}`}
                className="flex flex-col bg-neutral-950/40 backdrop-blur-md rounded-none border border-white/10 hover:border-blue-400 shadow-none overflow-hidden transition-all duration-300 cursor-pointer group"
              >
                {/* Cover */}
                <div className="h-48 relative overflow-hidden bg-neutral-900 border-b border-white/10">
                  <img
                    src={post.image}
                    alt={post.title}
                    id={`blog-cover-img-${post.id}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Card content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 font-mono text-[9px] uppercase tracking-widest rounded-none border border-blue-400/20">
                        {post.category}
                      </span>
                      <span className="text-neutral-400 font-mono text-[10px] uppercase tracking-widest flex items-center gap-1">
                        <Clock className="w-3 h-3 text-blue-400" /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-display text-base font-bold text-neutral-200 mb-3 group-hover:text-blue-400 transition-colors uppercase tracking-wider">
                      {post.title}
                    </h3>
                    <p className="text-neutral-400 font-sans text-xs leading-relaxed uppercase tracking-wider line-clamp-3 mb-6">
                      {post.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">{post.date}</span>
                    <span className="text-[10px] uppercase tracking-widest font-mono font-bold text-blue-400 flex items-center gap-1 group-hover:text-white transition-colors">
                      Read Post <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="text-center py-16 bg-neutral-900/40 border border-dashed border-white/10 rounded-none mb-20" id="blog-empty-state">
          <p className="text-neutral-500 font-mono text-xs uppercase tracking-widest">No technical articles match your search criteria.</p>
        </div>
      )}
    </section>
  );
}
