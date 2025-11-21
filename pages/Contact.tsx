import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const Contact: React.FC = () => {
  return (
    <div className="pt-20 pb-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main */}
          <div className="lg:col-span-8">
            <h1 className="text-4xl font-black text-white mb-6">Contact Us</h1>
            <p className="text-xl text-slate-400 mb-12">
              Have a tip? Want to advertise? Just want to say hello?
            </p>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 mb-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Name</label>
                    <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                    <input type="email" className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Subject</label>
                  <select className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none">
                    <option>Editorial Tip</option>
                    <option>Advertising Inquiry</option>
                    <option>Report a Bug</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                  <textarea rows={5} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none resize-none"></textarea>
                </div>

                <button type="button" className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-8 rounded-lg transition-colors">
                  Send Message
                </button>
              </form>
            </div>

            <div className="flex space-x-8 text-slate-400">
                <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-indigo-500" />
                    <span>hello@novazine.com</span>
                </div>
                 <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-indigo-500" />
                    <span>San Francisco, CA</span>
                </div>
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

export default Contact;