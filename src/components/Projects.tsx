"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, projectCategories } from "@/data/projects";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projectsData
        : projectsData.filter(project => project.category === activeCategory);

    // --- 1. Helper for Dynamic Styles ---
    const getCategoryStyle = (category: string) => {
        switch (category) {
            case "Frontend":
                return {
                    badge: "text-cyan-400 border-cyan-500/50 bg-black/80 shadow-[0_0_10px_rgba(34,211,238,0.2)]",
                    borderHover: "group-hover:border-cyan-400",
                    glow: "group-hover:shadow-[0_0_20px_-5px_rgba(34,211,238,0.5)]",
                    textHover: "group-hover:text-cyan-300"
                };
            case "WordPress":
                return {
                    badge: "text-blue-400 border-blue-500/50 bg-black/80 shadow-[0_0_10px_rgba(96,165,250,0.2)]",
                    borderHover: "group-hover:border-blue-400",
                    glow: "group-hover:shadow-[0_0_20px_-5px_rgba(96,165,250,0.5)]",
                    textHover: "group-hover:text-blue-300"
                };
            case "UI Design":
                return {
                    badge: "text-pink-400 border-pink-500/50 bg-black/80 shadow-[0_0_10px_rgba(244,114,182,0.2)]",
                    borderHover: "group-hover:border-pink-400",
                    glow: "group-hover:shadow-[0_0_20px_-5px_rgba(244,114,182,0.5)]",
                    textHover: "group-hover:text-pink-300"
                };
            default:
                return {
                    badge: "text-purple-400 border-purple-500/50 bg-black/80 shadow-[0_0_10px_rgba(168,85,247,0.2)]",
                    borderHover: "group-hover:border-purple-400",
                    glow: "group-hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.5)]",
                    textHover: "group-hover:text-purple-300"
                };
        }
    };

    // --- 2. Bento Logic ---
    const getBentoClass = (index: number) => {
        if (activeCategory !== "All") return "md:col-span-1 md:row-span-1";

        const patternIndex = index % 6;

        if (patternIndex === 0 || patternIndex === 5) return "md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-1"; // Wide

        return "md:col-span-1 md:row-span-1"; // Normal
    };

    return (
        <section id="projects" className="py-24 bg-[#050505] text-white relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-white/10 pb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                            <span className="text-purple-400 font-mono tracking-[0.2em] uppercase text-xs">Project Archive</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                            SELECTED <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">WORK</span>
                        </h2>
                    </div>

                    {/* Filter Pills */}
                    <div className="flex flex-wrap gap-2">
                        {projectCategories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 rounded-lg text-xs font-mono font-bold border transition-all duration-300 ${activeCategory === category
                                    ? "bg-white text-black border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
                                    : "bg-transparent text-gray-500 border-white/10 hover:border-white/40 hover:text-white"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* --- GRID --- */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[350px]"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => {
                            const styleProps = getCategoryStyle(project.category);
                            const isWide = getBentoClass(index).includes("col-span-2");

                            return (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    key={project.id}
                                    className={`group relative rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a] transition-all duration-500 ${getBentoClass(index)} ${styleProps.borderHover} ${styleProps.glow}`}
                                >
                                    {/* 1. Image Background - Link wrapper */}
                                    <a href={`/projects/${project.slug}`} className="absolute inset-0 w-full h-full cursor-pointer z-10" aria-label={`View ${project.title}`}>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-60"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
                                    </a>

                                    {/* 2. Project Index Number */}
                                    <div className="absolute top-4 right-6 z-20 pointer-events-none">
                                        <span className="text-5xl font-black text-white/5 select-none group-hover:text-white/10 transition-colors">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    {/* 3. Content Overlay */}
                                    <div className="absolute inset-0 p-6 flex flex-col justify-end z-20 pointer-events-none">

                                        {/* Top Left: Category Badge Only */}
                                        <div className="absolute top-6 left-6">
                                            <span className={`font-mono text-[10px] uppercase tracking-widest border px-3 py-1.5 rounded-md backdrop-blur-xl font-bold ${styleProps.badge}`}>
                                                {project.category}
                                            </span>
                                        </div>

                                        {/* Bottom Section: Details */}
                                        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">

                                            {/* Title & Live Button Row */}
                                            <div className="flex items-center gap-3 mb-3 pointer-events-auto">
                                                <a href={`/projects/${project.slug}`} className={`font-bold text-white leading-tight transition-colors ${isWide ? "text-2xl md:text-3xl" : "text-xl"} ${styleProps.textHover}`}>
                                                    {project.title}
                                                </a>

                                                {/* Live Button (Always Visible) */}
                                                {project.liveUrl && (
                                                    <a
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white hover:bg-white hover:text-black transition-all hover:scale-110 backdrop-blur-md shrink-0 relative z-30"
                                                        title="View Live"
                                                    >
                                                        <FaArrowUpRightFromSquare size={12} />
                                                    </a>
                                                )}
                                            </div>

                                            <p className="text-gray-400 text-sm line-clamp-2 mb-4 font-light group-hover:text-gray-300">
                                                {project.description}
                                            </p>

                                            {/* Tech Stack */}
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies?.slice(0, 3).map((tech, i) => (
                                                    <span key={i} className="px-2.5 py-1 rounded text-[10px] bg-black/50 border border-white/10 text-gray-300 font-mono backdrop-blur-sm">
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.technologies && project.technologies.length > 3 && (
                                                    <span className="px-2.5 py-1 rounded text-[10px] bg-black/50 border border-white/10 text-gray-500 font-mono backdrop-blur-sm">
                                                        +{project.technologies.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* Footer Link */}
                <div className="mt-20 flex justify-center">
                    <a href="https://github.com/yourusername" target="_blank" className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all">
                        <span className="text-sm font-mono text-gray-400 group-hover:text-white uppercase tracking-widest">View All Projects</span>
                        <FaArrowRight className="text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;