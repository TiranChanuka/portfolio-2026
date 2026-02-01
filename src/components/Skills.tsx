"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillsData, Skill } from "@/data/skills";
import { FaCode, FaWordpress, FaPalette, FaLaptopCode } from "react-icons/fa";

const getFallbackIcon = (category: string) => {
    switch (category) {
        case "Frontend Development": return <FaCode />;
        case "WordPress Development": return <FaWordpress />;
        case "Other Skills": return <FaPalette />;
        default: return <FaLaptopCode />;
    }
};

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group h-full"
        >
            {/* Background Glow on Hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />

            <div className="relative bg-[#0d0d0d]/40 backdrop-blur-2xl border border-white/10 p-8 rounded-2xl h-full flex flex-col items-center text-center hover:border-white/20 transition-all duration-500 shadow-2xl">

                {/* Modern Level Indicator Ring */}
                <div className="absolute top-4 right-4 w-10 h-10">
                    <svg className="w-full h-full transform -rotate-90">
                        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" fill="transparent" className="text-white/5" />
                        <motion.circle
                            cx="20" cy="20" r="18" stroke="url(#skillGradient)" strokeWidth="2.5" fill="transparent"
                            strokeDasharray="113"
                            initial={{ strokeDashoffset: 113 }}
                            whileInView={{ strokeDashoffset: 113 - (113 * skill.level) / 100 }}
                            transition={{ duration: 1.5, ease: "circOut" }}
                            strokeLinecap="round"
                        />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-gray-400 group-hover:text-white transition-colors">
                        {skill.level}%
                    </span>
                </div>

                {/* Skill Icon - Full Color from Start */}
                <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-white/5 blur-2xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity" />

                    <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center p-4 border border-white/5 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 ease-out">
                        {skill.icon ? (
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]"
                            />
                        ) : (
                            <span className="text-4xl text-purple-400">{getFallbackIcon("")}</span>
                        )}
                    </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:tracking-wide transition-all duration-300">{skill.name}</h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light group-hover:text-gray-200 transition-colors">
                    {skill.description || "Building high-performance modern web solutions."}
                </p>

                {skill.yearsExperience && (
                    <div className="mt-auto w-full">
                        <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] uppercase tracking-widest text-gray-500 group-hover:text-cyan-400 group-hover:border-cyan-400/30 transition-all">
                            {skill.yearsExperience} Years Exp
                        </div>
                    </div>
                )}
            </div>

            {/* SVG Gradient Defs */}
            <svg className="absolute w-0 h-0">
                <defs>
                    <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                </defs>
            </svg>
        </motion.div>
    );
};

const BackgroundShapes = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* 1. Slow Spinning Gradient (Center) */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20"
                style={{
                    background: 'conic-gradient(from 0deg, transparent 0deg, #a855f7 120deg, transparent 180deg, #06b6d4 300deg, transparent 360deg)',
                    filter: 'blur(80px)',
                }}
            />

            {/* 2. Floating Blob (Left - Purple) */}
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[100px]"
            />

            {/* 3. Floating Blob (Right - Cyan) */}
            <motion.div
                animate={{
                    x: [0, -30, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-[10%] -right-[10%] w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[100px]"
            />

            {/* 4. Grid Pattern Overlay (Low Opacity) */}
            <div className="absolute inset-0 z-0 opacity-[0.03]"
                style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '60px 60px' }}
            />
        </div>
    );
};

const Skills = () => {
    const categories = Object.keys(skillsData);
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    return (
        <section id="skills" className="py-32 bg-[#050505] text-white relative overflow-hidden">

            {/* New Animated Background */}
            <BackgroundShapes />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-xl"
                    >
                        <span className="text-cyan-400 font-mono tracking-[0.3em] uppercase text-xs mb-4 block">Capabilities</span>
                        <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
                            TECH <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">STACK</span>
                        </h2>
                        <p className="text-gray-400 text-lg font-light leading-relaxed">
                            A comprehensive look at my technical expertise as a <span className="text-white">Frontend & WordPress Developer</span> with 1.6 years of industry experience.
                        </p>
                    </motion.div>

                    {/* Minimalist Tab Switcher */}
                    <div className="flex flex-wrap gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${activeCategory === category
                                        ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-105"
                                        : "text-gray-500 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                {category.split(' ')[0]}
                            </button>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {(skillsData as any)[activeCategory].map((skill: Skill, idx: number) => (
                            <SkillCard key={skill.id} skill={skill} index={idx} />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Skills;