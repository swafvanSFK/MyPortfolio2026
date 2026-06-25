import { BlogPost } from '../types';
import { X, Clock, Calendar, ChevronLeft } from 'lucide-react';

interface BlogDetailModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export default function BlogDetailModal({ post, onClose }: BlogDetailModalProps) {
  if (!post) return null;

  return (
    <div
      id="blog-detail-overlay"
      className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex justify-center items-center p-4 overflow-y-auto select-none pointer-events-auto"
      onClick={onClose}
    >
      {/* Modal Card */}
      <div
        id="blog-detail-card"
        className="relative bg-black border border-white/10 rounded-none max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-none transition-all scale-100 animate-[fade-in_0.3s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cover image */}
        <div className="relative h-64 md:h-80 w-full overflow-hidden border-b border-white/10">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30" />

          {/* Close button inside cover */}
          <button
            onClick={onClose}
            id="close-blog-modal-btn"
            className="absolute top-4 right-4 p-2 bg-neutral-950 border border-white/10 text-neutral-300 hover:text-white rounded-none transition-all cursor-pointer z-20"
            aria-label="Close article modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Content frame */}
        <div className="p-6 md:p-10">
          {/* Post metadata */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-blue-500/10 border border-blue-400/20 text-blue-400 font-mono text-[9px] uppercase tracking-widest rounded-none">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-neutral-400 font-mono text-[10px] uppercase tracking-widest">
              <Clock className="w-4 h-4 text-blue-400" /> {post.readTime}
            </span>
            <span className="text-neutral-600 font-mono text-xs">•</span>
            <span className="text-neutral-400 font-mono text-[10px] uppercase tracking-widest">{post.date}</span>
          </div>

          <h1 className="font-display text-2xl md:text-4xl font-extrabold text-white mb-8 leading-tight uppercase tracking-wider">
            {post.title}
          </h1>

          {/* Author info strip */}
          <div className="flex items-center gap-4 border-b border-white/10 pb-8 mb-8" id="modal-author-strip">
            <img
              src={post.authorImage}
              alt={post.author}
              className="w-12 h-12 rounded-none object-cover border border-white/10"
              referrerPolicy="no-referrer"
            />
            <div>
              <p className="font-mono text-xs font-semibold text-neutral-200 uppercase tracking-wider">{post.author}</p>
              <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">Senior Fullstack Writer &amp; Engineer</p>
            </div>
          </div>

          {/* Body Content */}
          <div className="font-mono text-xs uppercase tracking-wide leading-relaxed text-neutral-400 space-y-6" id="blog-modal-body">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="font-mono text-sm md:text-base font-bold text-blue-400 pt-4 uppercase tracking-widest">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <ul key={index} className="list-disc pl-6 space-y-2 text-neutral-400 font-mono text-xs uppercase tracking-wider">
                    {paragraph.split('\n').map((item, idx) => (
                      <li key={idx}>{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ') || paragraph.startsWith('3. ')) {
                return (
                  <ol key={index} className="list-decimal pl-6 space-y-3 text-neutral-400 font-mono text-xs uppercase tracking-wider">
                    {paragraph.split('\n').map((item, idx) => (
                      <li key={idx}>{item.replace(/^\d+\.\s/, '')}</li>
                    ))}
                  </ol>
                );
              }
              return (
                <p key={index} className="whitespace-pre-line">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Bottom Back Button */}
          <div className="mt-12 pt-8 border-t border-white/10 flex justify-start">
            <button
              onClick={onClose}
              id="back-to-feed-btn"
              className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-mono text-blue-400 hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" /> Back to Feed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
