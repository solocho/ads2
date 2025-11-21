import React from 'react';
import { Article } from '../types';
import Sidebar from '../components/Sidebar';
import AdSpace from '../components/AdSpace';
import { Coffee } from 'lucide-react';

const lifestyleArticles: Article[] = [
  {
    id: 201,
    title: "The Art of Digital Detoxing",
    category: "Wellness",
    summary: "In an always-on world, learning to disconnect is a superpower. Here is how to reclaim your attention span.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    author: "Emma Stone",
    date: "Oct 26, 2023",
    readTime: "7 min read"
  },
  {
    id: 202,
    title: "Smart Home, Peaceful Mind",
    category: "Home",
    summary: "Automating your lights and thermostat isn't just cool—it reduces decision fatigue. A guide to the calm smart home.",
    image: "https://images.unsplash.com/photo-1558002038-10914cbaeb7d?auto=format&fit=crop&w=800&q=80",
    author: "Ryan Gosling",
    date: "Oct 22, 2023",
    readTime: "6 min read"
  },
  {
    id: 203,
    title: "Coffee Culture: Third Wave Explained",
    category: "Food & Drink",
    summary: "Why your barista is weighing your beans, and why you should care. A deep dive into modern brewing.",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80",
    author: "Barista Bob",
    date: "Oct 15, 2023",
    readTime: "5 min read"
  }
];

const Lifestyle: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center">
             <div className="inline-flex items-center justify-center p-3 bg-green-600/20 rounded-full mb-4">
                <Coffee className="w-8 h-8 text-green-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Lifestyle</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Optimizing your life, one habit at a time.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
                 <div className="grid grid-cols-1 gap-8">
                    {lifestyleArticles.map((article, idx) => (
                        <div key={article.id} className="flex flex-col md:flex-row bg-slate-900 rounded-xl overflow-hidden border border-slate-800 group hover:bg-slate-800/50 transition">
                             <div className="md:w-1/3 h-48 md:h-auto relative">
                                <img src={article.image} alt={article.title} className="w-full h-full object-cover absolute inset-0" />
                             </div>
                             <div className="p-6 flex-1 flex flex-col justify-center">
                                <div className="text-green-400 text-xs font-bold uppercase mb-2">{article.category}</div>
                                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">{article.title}</h2>
                                <p className="text-slate-400 text-sm mb-4 line-clamp-2">{article.summary}</p>
                                <div className="text-slate-500 text-xs">{article.date} • {article.readTime}</div>
                             </div>
                        </div>
                    ))}
                 </div>
                 <div className="mt-8">
                    <AdSpace type="banner" />
                 </div>
            </div>

            <div className="lg:col-span-4">
                <Sidebar />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Lifestyle;