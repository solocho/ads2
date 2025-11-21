import React, { useState } from 'react';
import { generateBlogPost } from '../services/geminiService';
import { BlogPost } from '../types';
import { PenTool, Loader2, FileText, Check, RotateCcw } from 'lucide-react';

const BlogGenerator: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState<BlogPost | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic) return;
    
    setLoading(true);
    setPost(null);
    
    const generated = await generateBlogPost(topic);
    setPost(generated);
    setLoading(false);
  };

  return (
    <div className="w-full bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
      <div className="bg-indigo-600 p-4 flex items-center space-x-2">
        <PenTool className="w-5 h-5 text-white" />
        <h2 className="text-white font-semibold">AI Article Assistant</h2>
      </div>
      
      <div className="p-6">
        {!post ? (
          <form onSubmit={handleGenerate} className="space-y-4 max-w-xl mx-auto py-10">
             <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">What should we write about today?</h3>
                <p className="text-slate-400">Enter a topic and let Gemini draft your next viral post.</p>
             </div>
            <div className="relative">
              <input
                type="text"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition shadow-inner"
                placeholder="e.g., The future of electric aviation..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
              <button
                type="submit"
                disabled={loading || !topic}
                className="absolute right-2 top-2 bottom-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-6 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <span className="flex items-center">Draft <FileText className="ml-2 w-4 h-4" /></span>}
              </button>
            </div>
            <p className="text-center text-xs text-slate-500">Powered by Google Gemini 2.5 Flash</p>
          </form>
        ) : (
          <div className="animate-fadeIn">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-800">
               <button 
                onClick={() => setPost(null)}
                className="text-slate-400 hover:text-white flex items-center text-sm"
               >
                <RotateCcw className="w-4 h-4 mr-2" /> Write Another
               </button>
               <button className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center">
                <Check className="w-4 h-4 mr-2" /> Publish Draft
               </button>
            </div>
            
            <article className="prose prose-invert max-w-none">
              <h1 className="text-3xl font-black text-white mb-6">{post.title}</h1>
              <div 
                className="text-slate-300 leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: post.content }} 
              />
            </article>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogGenerator;