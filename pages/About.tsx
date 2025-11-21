import React from 'react';
import { Sidebar } from 'lucide-react'; // Mistake in import but I'll fix by using normal sidebar
import SideBarComponent from '../components/Sidebar'; // Naming conflict resolution

const About: React.FC = () => {
  return (
    <div className="pt-20 pb-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
                <h1 className="text-4xl md:text-6xl font-black text-white mb-8">About <span className="text-indigo-500">NovaZine</span></h1>
                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="lead text-xl text-slate-300 mb-6">
                        NovaZine is a digital-first publication dedicated to the intersection of technology, culture, and future living.
                    </p>
                    <p>
                        Founded in 2024, we set out to build a different kind of tech magazine. One that doesn't just list specs, but explores what technology actually <em>feels</em> like to live with. From the ethics of AI to the ergonomics of your home office, we cover it all.
                    </p>
                    <h3 className="text-white font-bold text-2xl mt-8 mb-4">Our Mission</h3>
                    <p>
                        To inform, inspire, and provoke thought in an increasingly digital world. We believe in quality journalism, impartial reviews, and storytelling that puts the human experience first.
                    </p>
                    <h3 className="text-white font-bold text-2xl mt-8 mb-4">Editorial Standards</h3>
                    <p>
                        We are supported by advertising, but our editorial content is never for sale. Our reviews are independent, and our opinions are our own. We label all sponsored content clearly.
                    </p>
                </div>
                
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                        <div className="text-4xl font-bold text-white mb-2">500k+</div>
                        <div className="text-slate-500 text-sm uppercase tracking-wider">Monthly Readers</div>
                    </div>
                    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                        <div className="text-4xl font-bold text-white mb-2">120+</div>
                        <div className="text-slate-500 text-sm uppercase tracking-wider">Countries Reached</div>
                    </div>
                </div>
            </div>
            
            <div className="lg:col-span-4">
                <SideBarComponent />
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;