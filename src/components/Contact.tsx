"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser'; // 1. Import EmailJS
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setSuccess(false);

        if (!formRef.current) return;

        // 2. Replace these with your actual EmailJS IDs
        // Service ID, Template ID, Public Key, Form Reference
        emailjs.sendForm(
            'service_fpnv1bq',    // Get from EmailJS Dashboard
            'template_f14vx7k',   // Get from EmailJS Dashboard
            formRef.current,
            '_yW25iHGzAzr-rk7w'     // Get from EmailJS Account > API Keys
        )
            .then((result) => {
                console.log(result.text);
                setSuccess(true);
                setLoading(false);
                formRef.current?.reset(); // Clear form after success

                // Remove success message after 5 seconds
                setTimeout(() => setSuccess(false), 5000);
            }, (error) => {
                console.log(error.text);
                setError(true);
                setLoading(false);
            });
    };

    return (
        <section id="contact" className="py-32 bg-[#050505] text-white relative overflow-hidden">
            {/* ... (Background elements remain same) ... */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="text-cyan-400 font-mono tracking-widest uppercase mb-2 block text-xs">Get In Touch</span>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
                            LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">CONNECT</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-stretch">

                        {/* --- LEFT: Contact Info Card (Same as before) --- */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group"
                        >
                            {/* ... (Keep your existing Left Side content here) ... */}
                            {/* Decorative Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-cyan-500/10 transition-colors duration-500" />

                            <div>
                                <h3 className="text-3xl font-bold text-white mb-6">Let's build something amazing together.</h3>
                                <p className="text-gray-400 leading-relaxed mb-10">
                                    Whether you have a project in mind, need technical advice, or just want to say hi, I'm always open to chatting.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 group/item">
                                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-300 group-hover/item:text-cyan-400 group-hover/item:border-cyan-400/30 transition-all">
                                            <FaEnvelope />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Email</p>
                                            <p className="text-white font-medium group-hover/item:text-cyan-400 transition-colors">tiranchanukaw@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 group/item">
                                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-300 group-hover/item:text-cyan-400 group-hover/item:border-cyan-400/30 transition-all">
                                            <FaPhone />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Phone Number</p>
                                            <p className="text-white font-medium group-hover/item:text-cyan-400 transition-colors">+94 71 749 4134</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 group/item">
                                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-300 group-hover/item:text-purple-400 group-hover/item:border-purple-400/30 transition-all">
                                            <FaMapMarkerAlt />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Location</p>
                                            <p className="text-white font-medium group-hover/item:text-purple-400 transition-colors">Sri Lanka (Remote Available)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-4">Socials</p>
                                <div className="flex gap-3">
                                    {[FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
                                        <a key={i} href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all">
                                            <Icon size={18} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* --- RIGHT: Modern Form (Updated Logic) --- */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 relative"
                        >
                            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-1">Name</label>
                                        <input
                                            type="text"
                                            name="user_name" // Must match EmailJS template variable
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all placeholder-gray-600"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-1">Email</label>
                                        <input
                                            type="email"
                                            name="user_email" // Must match EmailJS template variable
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all placeholder-gray-600"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-1">Subject</label>
                                    <input
                                        type="text"
                                        name="subject" // Must match EmailJS template variable
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all placeholder-gray-600"
                                        placeholder="Project Inquiry..."
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-1">Message</label>
                                    <textarea
                                        rows={4}
                                        name="message" // Must match EmailJS template variable
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all placeholder-gray-600 resize-none"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-4 rounded-xl bg-white text-black font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? 'Sending...' : 'Send Message'}
                                    {!loading && <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                                </button>

                                {/* Success/Error Messages */}
                                {success && <p className="text-green-400 text-sm text-center mt-2">Message sent successfully!</p>}
                                {error && <p className="text-red-400 text-sm text-center mt-2">Something went wrong. Please try again.</p>}
                            </form>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;