import React from 'react';
import AdSpace from './AdSpace';
import { TrendingUp, Mail, Hash } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Search Widget could go here */}
      
      {/* Ad Widget */}
      <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 shadow-lg">
         <AdSpace type="rectangle" />
      </div>

      {/* Newsletter */}
      <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl p-6 border border-indigo-500/20 backdrop-blur-sm">
        <div className="flex items-center space-x-2 mb-4">
          <Mail className="w-5 h-5 text-indigo-400" />
          <h3 className="font-bold text-white">Daily Digest</h3>
        </div>
        <p className="text-sm text-slate-400 mb-4 leading-relaxed">Get the latest tech and lifestyle news delivered straight to your inbox every morning.</p>
        <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address..." className="w-full bg-slate-950/80 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:ring-2 focus:ring-indigo-500 outline-none placeholder:text-slate-600" />
            <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold py-2.5 rounded-lg transition-all shadow-lg shadow-indigo-500/20">Subscribe Now</button>
        </form>
      </div>

      {/* Trending */}
      <div className="bg-slate-950 rounded-xl p-6 border border-slate-800">
        <div className="flex items-center space-x-2 mb-6">
          <TrendingUp className="w-5 h-5 text-indigo-400" />
          <h3 className="font-bold text-white">Trending Now</h3>
        </div>
        <ul className="space-y-5">
          {[
            { cat: 'Tech', title: 'The Rise of Quantum Computing in 2025' },
            { cat: 'Lifestyle', title: '10 Minimalist Desk Setups for Productivity' },
            { cat: 'Crypto', title: 'Bitcoin Halving: What You Need to Know' },
            { cat: 'Travel', title: 'Digital Nomad Visas: Top Countries Ranked' }
          ].map((item, i) => (
            <li key={i} className="group cursor-pointer">
              <div className="flex items-center space-x-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{item.cat}</span>
              </div>
              <div className="text-sm font-medium text-slate-300 group-hover:text-white transition line-clamp-2">
                {item.title}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div className="bg-slate-950 rounded-xl p-6 border border-slate-800">
        <div className="flex items-center space-x-2 mb-4">
          <Hash className="w-4 h-4 text-indigo-400" />
          <h3 className="font-bold text-white">Categories</h3>
        </div>
        <div className="flex flex-wrap gap-2">
            {['AI', 'Gadgets', 'Coding', 'Startups', 'Health', 'Travel', 'Design'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-slate-900 text-slate-400 text-xs rounded-full border border-slate-800 hover:border-indigo-500 hover:text-indigo-400 cursor-pointer transition">#{tag}</span>
            ))}
        </div>
      </div>

      {/* Sticky Ad */}
      <div className="sticky top-24 bg-slate-950 rounded-xl p-4 border border-slate-800">
        <AdSpace type="rectangle" />
      </div>
    </div>
  );
};

export default Sidebar;