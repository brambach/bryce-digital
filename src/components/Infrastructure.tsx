"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface SystemData {
    title: string;
    subtitle: string;
    desc: string;
    signals: { label: string; value: string }[];
    tags: string[];
    img: string;
    badge: string;
}

export function Infrastructure() {
    const [activeSystem, setActiveSystem] = useState<SystemData | null>(null);

    // Scroll Lock Effect
    useEffect(() => {
        if (activeSystem) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        }
    }, [activeSystem]);


    const openSystemPanel = (data: SystemData) => {
        setActiveSystem(data);
        // Optional: Update URL hash
        // window.location.hash = `#architecture/${data.title.toLowerCase().replace(/\s+/g, '-')}`;
    };

    const closeSystemPanel = () => {
        setActiveSystem(null);
        // window.history.replaceState(null, '', window.location.pathname);
    };

    // Close on Escape Key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeSystemPanel();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    // Systems Data (Reference Architectures)
    const systems: SystemData[] = [
        {
            title: "Crypto Analytics Dashboard",
            subtitle: "REFERENCE_ARCH // DATA VIZ",
            desc: "Interactive 3D data visualization with real-time market feeds. Scroll-triggered animations and WebGL rendering for high-frequency financial data. Built in one weekend to showcase rapid prototyping capability.",
            signals: [
                { label: "RENDER_TIME", value: "<16ms" },
                { label: "INTERACTIONS", value: "60fps" }
            ],
            tags: ["React", "Three.js", "WebSocket", "Framer Motion", "TradingView API"],
            img: "https://vdhdjvkkrmrscnncmwxc.supabase.co/storage/v1/object/public/Images/cryptoDashboardImage.png",
            badge: "LIVE PROJECT",
        },
            ];

    return (
        <section className="bg-[#050505] w-full border-white/5 border-t relative">
            <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-10%" }}
                id="infrastructure"
                className="lg:px-12 flex flex-col md:flex-row md:items-end pt-24 pr-6 pb-12 pl-6 gap-x-8 gap-y-8 justify-between"
            >
                <div className="max-w-4xl">
                    <h2 className="md:text-5xl lg:text-7xl text-3xl text-white tracking-tighter font-mono mb-4">
                        SYSTEM ARCHITECTURE
                    </h2>
                    <p className="md:text-xl text-lg font-light text-neutral-500 max-w-2xl">
                        Conceptual models and reference implementations for high-scale enterprise environments.
                    </p>
                </div>
                <div className="uppercase hidden md:block text-xs text-neutral-600 tracking-widest mb-2">
                    System_Status: <span className="text-[#FACC15]">Operational</span>
                </div>
            </motion.div>

            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full mb-12"></div>

            <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true, margin: "-10%" }}
                className="flex flex-col items-center lg:px-12 pr-6 pb-16 pl-6"
            >
                {systems.map((sys, i) => (
                    <motion.div
                        key={i}
                        onClick={() => openSystemPanel(sys)}
                        whileTap={{ scale: 0.99 }}
                        className="group relative w-full max-w-3xl h-[400px] sm:h-[450px] lg:h-[500px] rounded-sm overflow-hidden bg-[#0A0A0A] border border-white/5 cursor-pointer hover:border-[#FACC15]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.1)]"
                    >
                        <img
                            src={sys.img}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-60 saturate-0 group-hover:saturate-50"
                            alt={sys.title}
                        />
                        <div className="group-hover:opacity-70 transition-opacity duration-500 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>

                        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-[10px] font-mono text-[#FACC15] uppercase tracking-wider shadow-xl">
                            {sys.badge}
                        </div>

                        {/* Live Demo Button */}
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <a
                                href="https://crypto-dashboard-rouge-zeta.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 bg-[#FACC15] hover:bg-white text-black font-bold font-mono uppercase tracking-widest px-8 py-4 rounded text-sm flex items-center gap-3 shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:shadow-[0_0_40px_rgba(250,204,21,0.5)] hover:scale-105 transform"
                            >
                                View Live Demo
                                <ArrowUpRight className="w-4 h-4" />
                            </a>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                            <div className="flex items-end justify-between border-t border-white/10 pt-6">
                                <div>
                                    <span className="text-[#FACC15] text-[10px] font-bold tracking-[0.2em] font-mono uppercase mb-2 block">
                                        {sys.subtitle}
                                    </span>
                                    <h3 className="text-2xl font-medium text-white tracking-tight font-display">{sys.title}</h3>
                                </div>
                                <div className="flex group-hover:opacity-100 transition-all duration-300 hover:bg-[#FACC15] hover:border-[#FACC15] hover:text-black group-hover:translate-x-0 text-white bg-white/5 opacity-0 w-10 h-10 border-white/10 border rounded-full translate-x-4 items-center justify-center">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}

                <p className="text-center text-neutral-500 text-sm font-mono mt-12 max-w-xl">
                    Additional projects in development. Building in public—follow along on{" "}
                    <a href="https://twitter.com/brycedigital" className="text-[#FACC15] hover:underline">Twitter @brycedigital</a>
                    {" "}or check{" "}
                    <a href="https://github.com/brycedigital" className="text-[#FACC15] hover:underline">GitHub</a>
                    {" "}for more work.
                </p>
            </motion.div>

            {/* Slide-Over System Drawer */}
            <AnimatePresence>
                {activeSystem && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
                            onClick={closeSystemPanel}
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="fixed top-0 right-0 z-[100] h-full w-full md:w-[600px] bg-[#0A0A0A] border-l border-white/10 shadow-2xl flex flex-col will-change-transform"
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeSystemPanel}
                                className="absolute top-6 right-6 p-2 text-neutral-500 hover:text-white transition-colors rounded-full hover:bg-white/5 cursor-pointer z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15]"
                                aria-label="Close Panel"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="p-8 pt-12 flex-1 overflow-y-auto">
                                {/* Header */}
                                <div className="mb-12">
                                    <div className="text-[#FACC15] text-[10px] font-bold tracking-[0.25em] font-mono uppercase mb-4">
                                        SYSTEM PROTOCOL
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight font-display mb-4">{activeSystem.title}</h2>
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FACC15]/5 border border-[#FACC15]/20 shadow-[0_0_15px_rgba(250,204,21,0.1)]">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15] opacity-50"></span>
                                        <span className="text-[10px] font-mono font-semibold text-[#FACC15] uppercase tracking-widest">{activeSystem.badge}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-10">
                                    <div className="space-y-4">
                                        <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Architectural Overview</p>
                                        <p className="text-neutral-300 text-base md:text-lg font-light leading-relaxed text-pretty">
                                            {activeSystem.desc}
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Target Telemetry</p>
                                        <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 rounded overflow-hidden">
                                            {activeSystem.signals.map((signal, idx) => (
                                                <div key={idx} className="bg-[#0E0E0E] p-4 md:p-6 flex flex-col gap-2">
                                                    <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">{signal.label}</span>
                                                    <span className="text-xl md:text-2xl font-mono text-white tracking-tight">{signal.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Technology Stack</p>
                                        <div className="flex flex-wrap gap-2">
                                            {activeSystem.tags.map((tag, i) => (
                                                <span key={i} className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-neutral-300 text-[11px] font-mono uppercase tracking-wider">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer CTA */}
                            <div className="p-8 border-t border-white/5 bg-[#050505] space-y-4">
                                <a
                                    href="https://crypto-dashboard-rouge-zeta.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15] rounded block"
                                >
                                    <button className="w-full bg-[#FACC15] hover:bg-white text-black text-xs font-bold font-mono uppercase tracking-widest py-5 rounded transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_30px_rgba(250,204,21,0.4)]">
                                        View Live Demo
                                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </a>
                                <a
                                    href="#audit-section"
                                    onClick={(e) => { e.preventDefault(); closeSystemPanel(); document.getElementById('audit-section')?.scrollIntoView({ behavior: 'smooth' }); }}
                                    className="w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded block"
                                >
                                    <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-xs font-bold font-mono uppercase tracking-widest py-5 rounded transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer">
                                        Book System Audit
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </a>
                            </div>

                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section >
    );
}
