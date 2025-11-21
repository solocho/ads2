import React from 'react';
import { Zap, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-1.5 bg-indigo-600 rounded-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black text-white tracking-tighter">NOVA<span className="text-indigo-500">ZINE</span></span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500 mb-6">
              Your daily source for technology news, lifestyle hacks, and digital culture. We bring the future to your screen today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-500 hover:text-white transition"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-white transition"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-white transition"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-white transition"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition">Technology</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Startups</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Lifestyle</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Travel</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Gear</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition">About NovaZine</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Advertise with Us</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Write for Us</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Advertise</h3>
            <p className="text-sm text-slate-500 mb-4">
                Reach millions of tech-savvy readers. Display your ads on our premium placements.
            </p>
            <button className="bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold py-2 px-4 rounded transition">
                Download Media Kit
            </button>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} NovaZine Media Group. All rights reserved.</p>
          <p>Designed with ❤️ and ☕</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;