import React from 'react';
import { motion } from 'framer-motion';
import { ProfileData } from '../types';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';

interface ContactProps {
  data: ProfileData;
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Footer background gradient */}
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
            {/* Contact Info */}
            <div>
                <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
                <p className="text-gray-400 mb-8 text-lg">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="space-y-6">
                    <a href={`mailto:${data.contact.email}`} className="flex items-center gap-4 glass-card p-4 rounded-xl hover:bg-white/5 transition-all group">
                        <div className="p-3 bg-blue-500/10 text-blue-400 rounded-full group-hover:bg-blue-500 group-hover:text-white transition-all">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Email</p>
                            <p className="text-white font-medium break-all">{data.contact.email}</p>
                        </div>
                    </a>

                    <div className="flex items-center gap-4 glass-card p-4 rounded-xl hover:bg-white/5 transition-all group">
                        <div className="p-3 bg-green-500/10 text-green-400 rounded-full group-hover:bg-green-500 group-hover:text-white transition-all">
                            <Phone size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Phone</p>
                            <p className="text-white font-medium">{data.contact.phone}</p>
                        </div>
                    </div>

                    <a href={data.contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 glass-card p-4 rounded-xl hover:bg-white/5 transition-all group">
                        <div className="p-3 bg-blue-700/10 text-blue-600 rounded-full group-hover:bg-blue-700 group-hover:text-white transition-all">
                            <Linkedin size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">LinkedIn</p>
                            <p className="text-white font-medium">Connect on LinkedIn</p>
                        </div>
                    </a>
                </div>
            </div>

            {/* Simple Form */}
            <form className="glass-card p-8 rounded-3xl space-y-4" onSubmit={(e) => e.preventDefault()}>
                <h3 className="text-xl font-bold text-white mb-4">Send a Message</h3>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                    <input 
                        type="text" 
                        className="w-full bg-slate-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Your Name"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                    <input 
                        type="email" 
                        className="w-full bg-slate-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="john@example.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                    <textarea 
                        rows={4}
                        className="w-full bg-slate-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Hello, I'd like to discuss..."
                    ></textarea>
                </div>
                <button 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                    <Send size={18} />
                    Send Message
                </button>
            </form>
        </motion.div>

        <div className="mt-20 border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Suvodeep Roy. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;