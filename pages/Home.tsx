import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import AdSpace from '../components/AdSpace';
import Sidebar from '../components/Sidebar';
import { Article } from '../types';

const featuredArticle: Article = {
  id: 1,
  title: "The Future of Quantum Computing: Are We Ready?",
  category: "Technology",
  summary: "As major tech giants race to build stable quantum processors, we explore the implications for cryptography, medicine, and artificial intelligence.",
  image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80",
  author: "Alex Mercer",
  date: "Oct 24, 2023",
  readTime: "8 min read"
};

const recentArticles: Article[] = [
  {
    id: 2,
    title: "Minimalist Desk Setups That Boost Productivity",
    category: "Lifestyle",
    summary: "Clean your space, clear your mind. Here are the top 5 desk configurations used by remote workers in 2024.",
    image: "https://images.unsplash.com/photo-1486946255434-2466348c2166?auto=format&fit=crop&w=800&q=80",
    author: "Sarah Jenkins",
    date: "Oct 23, 2023",
    readTime: "5 min read"
  },
  {
    id: 3,
    title: "Why Rust is Becoming the Go-To Language for Systems Programming",
    category: "Development",
    summary: "Memory safety without garbage collection? We dive deep into why developers are switching to Rust.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80",
    author: "David Chen",
    date: "Oct 22, 2023",
    readTime: "12 min read"
  },
  {
    id: 4,
    title: "Top 10 Hidden Gems in Southeast Asia for Digital Nomads",
    category: "Travel",
    summary: "Move over Bali. These affordable and connected locations are the next big hubs for remote work.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    author: "Elena Rodriguez",
    date: "Oct 21, 2023",
    readTime: "6 min read"
  },
  {
    id: 5,
    title: "Review: The New AR Glasses That Actually Look Good",
    category: "Reviews",
    summary: "Augmented reality has always been clunky. Until now. A look at the new Specter V2 glasses.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    author: "Mike Ross",
    date: "Oct 20, 2023",
    readTime: "4 min read"
  }
];

const Home: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Top Ad */}
      <div className="py-6 border-b border-slate-800 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <AdSpace type="leaderboard" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative group overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-auto lg:h-[500px]">
              <img 
                src={featuredArticle.image} 
                alt={featuredArticle.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
            </div>
            <div className="flex flex-col justify-center p-4">
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  Featured
                </span>
                <span className="text-slate-400 text-xs font-medium flex items-center">
                  <Clock className="w-3 h-3 mr-1" /> {featuredArticle.readTime}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight hover:text-indigo-400 transition-colors cursor-pointer">
                {featuredArticle.title}
              </h1>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                {featuredArticle.summary}
              </p>
              <div className="flex items-center justify-between border-t border-slate-800 pt-6">
                <div className="flex items-center space-x-3">
                   <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-indigo-500 font-bold">
                      {featuredArticle.author.charAt(0)}
                   </div>
                   <div>
                      <div className="text-white text-sm font-bold">{featuredArticle.author}</div>
                      <div className="text-slate-500 text-xs">{featuredArticle.date}</div>
                   </div>
                </div>
                <Link to="/tech" className="text-indigo-400 hover:text-white transition font-bold flex items-center">
                    Read Now <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <h2 className="text-2xl font-bold text-white">Latest Stories</h2>
                <Link to="/tech" className="text-sm text-indigo-400 hover:text-indigo-300">View All</Link>
            </div>

            <div className="grid grid-cols-1 gap-10">
                {recentArticles.map((article) => (
                    <div key={article.id} className="flex flex-col md:flex-row gap-6 group">
                        <div className="w-full md:w-1/3 aspect-video rounded-xl overflow-hidden bg-slate-900">
                            <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                                <span className="text-indigo-400 text-xs font-bold uppercase tracking-wider">{article.category}</span>
                                <span className="text-slate-600">•</span>
                                <span className="text-slate-500 text-xs">{article.date}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors cursor-pointer">
                                {article.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                                {article.summary}
                            </p>
                             <div className="flex items-center text-xs text-slate-500 font-medium">
                                <span>By {article.author}</span>
                                <span className="mx-2">|</span>
                                <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {article.readTime}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* In-feed Ad */}
            <div className="py-8">
                <AdSpace type="banner" />
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

export default Home;