"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation"; // Correct import for Next.js App Router
import { projectsData } from "@/data/projects";
import { FaArrowLeft, FaGithub, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const ProjectSingle = () => {
    const params = useParams();
    const router = useRouter();
    const slug = params?.slug as string;

    const project = projectsData.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#050505] text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <p className="text-gray-400 mb-8">The project you are looking for does not exist.</p>
                    <Link
                        href="/"
                        className="px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        );
    }

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-purple-500/30 selection:text-white">
            {/* Background Noise/Gradient */}
            <div className="fixed inset-0 z-0 opacity-20 pointer-events-none bg-[url('/noise.png')] opacity-[0.03]" />
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px]" />
            </div>

            <article className="relative z-10">
                {/* Header / Nav */}
                <nav className="container mx-auto px-6 py-8 flex justify-between items-center">
                    <Link
                        href="/#projects"
                        className="group flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-white transition-colors"
                    >
                        <div className="p-2 rounded-full border border-white/10 group-hover:border-white/30 bg-white/5 backdrop-blur-md transition-all group-hover:-translate-x-1">
                            <FaArrowLeft />
                        </div>
                        <span>BACK TO PROJECTS</span>
                    </Link>
                </nav>

                {/* Hero Section */}
                <header className="container mx-auto px-6 pt-10 pb-20">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="max-w-5xl mx-auto"
                    >
                        {/* Category & Date */}
                        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
                            <span className="px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-900/10 text-cyan-400 text-xs font-mono tracking-wider uppercase">
                                {project.category}
                            </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500"
                        >
                            {project.title}
                        </motion.h1>

                        {/* Tech Stack & Links */}
                        <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-t border-white/10 pt-8 mt-12">
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/10 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                    >
                                        <FaGlobe />
                                        <span>Live Demo</span>
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </header>

                {/* Main Image */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="container mx-auto px-4 md:px-6 mb-24"
                >
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/10">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                    </div>
                </motion.section>

                {/* Content Grid */}
                <section className="container mx-auto px-6 mb-32">
                    <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">

                        {/* Story Column */}
                        <div className="md:col-span-2 space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-8 h-[2px] bg-purple-500" />
                                    The Story
                                </h3>
                                <div className="prose prose-invert prose-lg text-gray-300 leading-relaxed">
                                    <p>{project.story || project.description}</p>
                                    <p className="mt-4">
                                        Designed with a focus on user experience and visual hierarchy,
                                        this project represents a deep dive into modern web technologies.
                                        The goal was to create something that not only functions perfectly
                                        but also leaves a lasting impression on the user.
                                        Every interaction is micro-managed to ensure smoothness
                                        and reliability.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Features List (Mock for now or derive from description) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-8"
                            >
                                <h4 className="text-xl font-bold mb-6 text-white">Key Features</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3 text-gray-300">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                                        <span>Responsive Design for all devices</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-300">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                                        <span>Optimized performance and fast load times</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-300">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0" />
                                        <span>Modern UI/UX principles applied</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>

                        {/* Sidebar Info */}
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/10 sticky top-10"
                            >
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Category</p>
                                        <p className="font-medium text-white">{project.category}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Year</p>
                                        <p className="font-medium text-white">2024</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Tech Stack</p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {project.technologies.map(t => (
                                                <span key={t} className="text-sm text-gray-300 bg-white/5 px-2 py-1 rounded">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                {project.gallery && project.gallery.length > 0 && (
                    <section className="container mx-auto px-6 mb-32">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <h3 className="text-3xl md:text-5xl font-black text-center mb-16">
                                PROJECT <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">GALLERY</span>
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {project.gallery.map((img, idx) => (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        key={idx}
                                        className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group cursor-zoom-in"
                                    >
                                        <Image
                                            src={img}
                                            alt={`Gallery image ${idx + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <span className="text-white font-mono text-sm tracking-widest border border-white/30 px-4 py-2 rounded-full backdrop-blur-md">VIEW</span>
                                        </div>
                                    </motion.div>
                                ))}
                                {/* Add a placeholder "More coming soon" if gallery is small, or repeat images to fill grid for demo */}
                                {project.gallery.length === 1 && (
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 bg-white/5 flex items-center justify-center">
                                        <p className="text-gray-500 font-mono text-sm">More shots coming soon</p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </section>
                )}

                {/* Next Project (Navigation) */}
                <section className="border-t border-white/10">
                    <div className="container mx-auto px-6 py-20">
                        <div className="text-center">
                            <p className="text-gray-500 font-mono mb-4 text-sm">NEXT PROJECT</p>
                            {/* Ideally logic to find next project, for now linking to home or a static one */}
                            <Link href="/#projects" className="text-4xl md:text-6xl font-black hover:text-purple-400 transition-colors">
                                View All Work
                            </Link>
                        </div>
                    </div>
                </section>

            </article>
        </main>
    );
};

export default ProjectSingle;
