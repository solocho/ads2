import React from 'react';
import BlogGenerator from '../components/AdGenerator';
import { PenLine } from 'lucide-react';

const WriterPage: React.FC = () => {
  return (
    <div className="pt-20 pb-24 min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-500/10 rounded-full mb-6">
            <PenLine className="w-6 h-6 text-indigo-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Writer's Studio</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Need content for your ad-supported blog? Generate articles instantly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
           <BlogGenerator />
        </div>
      </div>
    </div>
  );
};

export default WriterPage;