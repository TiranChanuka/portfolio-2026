"use client";

import React from "react";
import { motion } from "framer-motion";
import { experienceData, educationData, certificationData } from "@/data/experience";
import { FaGraduationCap, FaBriefcase, FaCertificate, FaDownload, FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const About = () => {
    // Social Links Data
    const socialLinks = [
        { icon: <FaGithub />, url: "https://github.com/", color: "hover:text-white" },
        { icon: <FaLinkedin />, url: "https://linkedin.com/", color: "hover:text-blue-400" },
        { icon: <FaFacebook />, url: "https://facebook.com/", color: "hover:text-blue-600" },
        { icon: <FaInstagram />, url: "https://instagram.com/", color: "hover:text-pink-500" },
        { icon: <FaTwitter />, url: "https://twitter.com/", color: "hover:text-sky-400" },
    ];

    return (
        <section id="about" className="py-24 bg-[#050505] text-white relative">

            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
            />

            {/* Ambient Glows (Positioned carefully to not break sticky) */}
            <div className="absolute top-20 right-0 md:w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-20 left-0 md:w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-cyan-400 font-mono tracking-widest uppercase mb-2 block text-xs">Who I Am</span>
                    <h2 className="text-5xl md:text-6xl font-black tracking-tighter">
                        ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">ME</span>
                    </h2>
                </motion.div>

                {/* --- MAIN GRID LAYOUT --- */}
                {/* 'items-start' is crucial for sticky to work in a grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* --- LEFT COLUMN: Sticky Profile (Span 4) --- */}
                    <div className="lg:col-span-4 lg:sticky lg:top-24">
                        <div className="space-y-6">

                            {/* 1. Profile Card */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 text-center relative overflow-hidden group shadow-2xl"
                            >
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="w-32 h-32 mx-auto mb-6 rounded-full border-2 border-white/10 p-1">
                                        <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
                                            <img src="/images/avatar-3d.png" alt="Profile" className="w-full h-full object-cover" />
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-1">Tiran Chanuka</h3>
                                    <p className="text-purple-400 font-mono text-sm mb-6">Full Stack Developer</p>

                                    {/* Stats Row */}
                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                                            <span className="block text-2xl font-bold text-white">1.6+</span>
                                            <span className="text-[10px] text-gray-400 uppercase tracking-wider">Years Exp</span>
                                        </div>
                                        <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                                            <span className="block text-2xl font-bold text-white">50+</span>
                                            <span className="text-[10px] text-gray-400 uppercase tracking-wider">Projects</span>
                                        </div>
                                    </div>

                                    {/* CV Button */}
                                    <button className="w-full py-3 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-900/20 mb-6">
                                        <FaDownload /> Download CV
                                    </button>

                                    {/* Social Links (New Addition) */}
                                    <div className="flex justify-center gap-4 pt-4 border-t border-white/10">
                                        {socialLinks.map((link, index) => (
                                            <a
                                                key={index}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`text-gray-400 text-xl transition-colors duration-300 ${link.color}`}
                                            >
                                                {link.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* 2. Status Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-5 flex items-center gap-4 shadow-lg"
                            >
                                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 text-xl shrink-0">
                                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">Current Status</p>
                                    <p className="text-white font-medium text-sm">Open for Opportunities</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* --- RIGHT COLUMN: Content (Span 8) --- */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* 1. Bio Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="prose prose-invert max-w-none"
                        >
                            <p className="text-xl text-gray-300 leading-relaxed font-light">
                                I am a forward-thinking developer bridging the gap between <span className="text-white font-medium">design</span> and <span className="text-white font-medium">engineering</span>.
                                With a strong foundation in modern web technologies like React, Next.js, and WordPress, I create seamless digital solutions that solve real-world problems.
                            </p>
                        </motion.div>

                        {/* 2. Experience Timeline */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <FaBriefcase className="text-cyan-400" /> Experience Log
                            </h3>
                            <div className="relative border-l border-white/10 ml-3 space-y-12 pb-4">
                                {experienceData.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative pl-10"
                                    >
                                        {/* Timeline Node */}
                                        <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-gray-800 border border-gray-600 ring-4 ring-[#050505]" />
                                        <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-cyan-500 blur-md opacity-50" />

                                        {/* Card */}
                                        <div className="group relative bg-white/5 border border-white/5 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300">
                                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                                                <div>
                                                    <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{item.title}</h4>
                                                    <p className="text-purple-400 font-mono text-sm">{item.company}</p>
                                                </div>
                                                <span className="text-xs font-bold text-gray-500 bg-black/50 px-3 py-1 rounded border border-white/10 whitespace-nowrap">
                                                    {item.period}
                                                </span>
                                            </div>
                                            <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* 3. Education & Certifications */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <FaGraduationCap className="text-purple-400" /> Education & Certifications
                            </h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Education */}
                                {educationData.map((item, index) => (
                                    <motion.div
                                        key={`edu-${index}`}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all group"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                                            <FaGraduationCap />
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-1">{item.degree}</h4>
                                        <p className="text-gray-500 text-sm mb-3">{item.institution}</p>
                                        <span className="text-[10px] uppercase tracking-widest text-purple-400/80 font-bold border border-purple-500/20 px-2 py-1 rounded">
                                            {item.period}
                                        </span>
                                    </motion.div>
                                ))}

                                {/* Certifications */}
                                {certificationData.map((item, index) => (
                                    <motion.div
                                        key={`cert-${index}`}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 hover:border-pink-500/30 transition-all group"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 mb-4 group-hover:scale-110 transition-transform">
                                            <FaCertificate />
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-1 line-clamp-1" title={item.name}>{item.name}</h4>
                                        <p className="text-gray-500 text-sm mb-3">{item.issuer}</p>
                                        <span className="text-[10px] uppercase tracking-widest text-pink-400/80 font-bold border border-pink-500/20 px-2 py-1 rounded">
                                            {item.year}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;