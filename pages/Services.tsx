import React from 'react';
import { Article } from '../types';
import Sidebar from '../components/Sidebar';
import AdSpace from '../components/AdSpace';
import { Cpu, Chip } from 'lucide-react';

const techArticles: Article[] = [
  {
    id: 101,
    title: "Apple Vision Pro: Six Months Later",
    category: "Reviews",
    summary: "The hype has settled. Is spatial computing truly the future, or just an expensive novelty? We revisit Apple's boldest product in years.",
    image: "https://images.unsplash.com/photo-1621768216002-5ac171876625?auto=format&fit=crop&w=800&q=80",
    author: "Marcus Brown",
    date: "Oct 25, 2023",
    readTime: "10 min read"
  },
  {
    id: 102,
    title: "Understanding LLMs: A Guide for Non-Engineers",
    category: "AI",
    summary: "From transformers to tokens, we break down the technology behind ChatGPT and Gemini in plain English.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    author: "Jennifer Wu",
    date: "Oct 24, 2023",
    readTime: "15 min read"
  },
  {
    id: 103,
    title: "The End of Silicon: What Comes Next?",
    category: "Hardware",
    summary: "As Moore's Law slows down, researchers are looking at graphene and biological computing as the next frontier.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    author: "Dr. Alan Grant",
    date: "Oct 20, 2023",
    readTime: "8 min read"
  },
  {
    id: 104,
    title: "Best Mechanical Keyboards for Coding in 2024",
    category: "Gear",
    summary: "We tested over 50 keyboards to find the perfect thock. Here are our top picks for developers.",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80",
    author: "Kevin Spacy",
    date: "Oct 18, 2023",
    readTime: "6 min read"
  }
];

const Tech: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-blue-600/20 rounded-full mb-4">
                <Cpu className="w-8 h-8 text-blue-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Technology</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Deep dives into the code, gadgets, and algorithms shaping our reality.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Content */}
            <div className="lg:col-span-8">
                 <div className="grid grid-cols-1 gap-12">
                    {techArticles.map((article, idx) => (
                        <React.Fragment key={article.id}>
                            <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all group shadow-xl">
                                <div className="aspect-[21/9] overflow-hidden">
                                    <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded text-xs font-bold uppercase">{article.category}</span>
                                        <span className="text-slate-500 text-xs">{article.readTime}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{article.title}</h2>
                                    <p className="text-slate-400 leading-relaxed mb-6">{article.summary}</p>
                                    <div className="flex items-center space-x-3 border-t border-slate-800 pt-4">
                                        <div className="text-sm font-bold text-white">{article.author}</div>
                                        <span className="text-slate-600">•</span>
                                        <div className="text-sm text-slate-500">{article.date}</div>
                                    </div>
                                </div>
                            </div>
                            {/* Insert Ad after second item */}
                            {idx === 1 && (
                                <div className="py-4">
                                    <AdSpace type="banner" />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                 </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
                <Sidebar />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;