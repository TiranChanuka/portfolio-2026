"use client";

import React, { Suspense, useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles, Text, Image as DreiImage, Environment, Line, Html } from "@react-three/drei";
import { motion, useMotionValue, useSpring } from "framer-motion";
import * as THREE from "three";
import { socials } from "@/data/socials";





// --- 3. Tech Icon on Orbit (Unchanged) ---
const OrbitingIcon = ({ url, radius, speed, initialAngle, scale = 1 }: any) => {
    const iconRef = useRef<THREE.Group>(null);

    useFrame(({ clock }) => {
        if (iconRef.current) {
            const t = clock.getElapsedTime() * speed;
            const angle = t + initialAngle;
            iconRef.current.position.x = Math.cos(angle) * radius;
            iconRef.current.position.y = Math.sin(angle) * radius;
        }
    });

    return (
        <group ref={iconRef}>
            <DreiImage url={url} transparent opacity={0.8} scale={scale} />
        </group>
    );
};

// --- 4. Orbit Ring (Unchanged) ---
const OrbitRing = ({ radius }: { radius: number }) => {
    const points = useMemo(() => {
        const pts = [];
        for (let i = 0; i <= 64; i++) {
            const angle = (i / 64) * Math.PI * 2;
            pts.push(new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0));
        }
        return pts;
    }, [radius]);

    return (
        <Line
            points={points}
            color="#475569" // Slate-600
            opacity={0.5}
            transparent
            lineWidth={0.5}
            dashed={true}
            dashScale={20}
            dashSize={0.1}
            gapSize={0.1}
            position={[0, 0, 0]}
        />
    );
};

// --- 5. The Solar System Group (Unchanged) ---
const NewTechSolarSystem = () => {
    return (
        <group position={[0, 0, 0]}>
            <Html center>
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-cyan-500/10 border border-cyan-500/30 animate-pulse backdrop-blur-sm">
                    <span className="text-cyan-400 font-bold text-[8px]">&lt;/&gt;</span>
                </div>
            </Html>

            <OrbitRing radius={0.6} />
            <PlanetIcon url="/Icons/react.png" radius={0.6} speed={0.5} initialAngle={0} size={0.3} />

            <OrbitRing radius={1} />
            <PlanetIcon url="/Icons/NextJs.png" radius={1} speed={0.4} initialAngle={2} size={0.3} />

            <OrbitRing radius={1.5} />
            <PlanetIcon url="/Icons/JS.png" radius={1.5} speed={0.3} initialAngle={1} size={0.3} />
            <PlanetIcon url="/Icons/TypeScript.png" radius={1.5} speed={0.3} initialAngle={4} size={0.3} />

            <OrbitRing radius={2} />
            <PlanetIcon url="/Icons/Wordpress.png" radius={2} speed={0.2} initialAngle={3} size={0.35} />
            <PlanetIcon url="/Icons/Tailwind.png" radius={2} speed={0.2} initialAngle={6} size={0.35} />
        </group>
    );
};

const PlanetIcon = ({ url, radius, speed, initialAngle, size = 0.6 }: any) => {
    const iconRef = useRef<THREE.Group>(null);
    useFrame(({ clock }) => {
        if (iconRef.current) {
            const t = clock.getElapsedTime() * speed;
            const angle = t + initialAngle;
            iconRef.current.position.x = Math.cos(angle) * radius;
            iconRef.current.position.y = Math.sin(angle) * radius;
        }
    });
    return (
        <group ref={iconRef}>
            <DreiImage url={url} transparent opacity={0.9} scale={[size, size]} />
        </group>
    );
};

const Hero = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize(); // Check on mount
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="min-h-screen w-full relative flex items-center justify-center overflow-hidden bg-[#050505] font-sans pt-20 md:pt-0">

            {/* Background Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <video
                    autoPlay loop muted playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen"
                >
                    <source src="/hero.webm" type="video/webm" />
                </video>

                <Canvas camera={{ position: [0, 0, 10], fov: 35 }} className="z-10">
                    <Suspense fallback={null}>
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} intensity={1} color="#c084fc" />

                        {!isMobile && (
                            <group position={[0, 0, 0]}>
                                <NewTechSolarSystem />
                            </group>
                        )}

                        <Environment preset="night" />
                    </Suspense>
                </Canvas>
            </div>

            {/* Main Content */}
            <div className="relative z-20 container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center h-full">
                {/* Left Side: Content */}
                <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left pt-10 md:pt-0">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
                    >
                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-white/70 font-mono text-xs uppercase tracking-widest">Available for Hire</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-8xl font-black text-white mb-6 leading-tight"
                    >
                        Tiran <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                            Chanuka
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 text-base md:text-xl max-w-md mb-8 leading-relaxed font-light"
                    >
                        Frontend & WordPress Developer building <span className="text-white">high-performance</span> digital experiences.
                    </motion.p>

                    {/* Social Media Links */}
                    <div className="flex gap-6 mb-10 justify-center md:justify-start">
                        {socials.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                className="text-gray-400 hover:text-cyan-400 text-2xl transition-colors duration-300"
                            >
                                <social.icon />
                            </motion.a>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <button className="px-8 py-3 md:px-10 md:py-4 bg-white text-black rounded-full font-bold hover:bg-cyan-400 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] text-sm md:text-base">
                            View Projects
                        </button>
                        <button className="px-8 py-3 md:px-10 md:py-4 border border-white/10 rounded-full text-white font-medium hover:bg-white/5 hover:border-cyan-400 transition-all text-sm md:text-base">
                            Contact Me
                        </button>
                    </div>

                </div>

                {/* Right Side: Avatar */}
                <div className="relative order-1 md:order-2 flex justify-center items-center mt-10 md:mt-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        {/* Soft Glow behind avatar */}
                        <div className="absolute inset-0 bg-purple-600/20 blur-[100px] rounded-full" />

                        <motion.img
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            src="/images/avatar-3d.png"
                            alt="Tiran Chanuka"
                            className="relative z-10 w-[250px] md:w-[500px] drop-shadow-2xl"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;