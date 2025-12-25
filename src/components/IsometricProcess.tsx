"use client";

import { Plug, Server, Layout, Database, Activity, Code } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function IsometricProcess() {
    const [selectedIcon, setSelectedIcon] = useState<number | null>(null);
    return (
        <section className="lg:py-32 overflow-hidden bg-[#050505] w-full border-white/5 border-t pt-24 pb-24 relative">
            <div id="integrations" className="scroll-mt-28 lg:px-12 flex flex-col w-full z-10 pt-12 pr-6 pb-12 pl-6 relative items-center justify-center">
                {/* Header Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-10%" }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex gap-2 uppercase text-xs text-[#FACC15] tracking-widest font-mono bg-[#FACC15]/5 border-[#FACC15]/20 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center">
                        <Plug className="w-3 h-3" />
                        Integrations
                    </div>
                    <h2 className="lg:text-6xl text-4xl font-medium text-white tracking-tighter mb-6">
                        Your website, hardwired to <span className="text-neutral-600">your business.</span>
                    </h2>
                    <p className="leading-relaxed text-lg font-light text-neutral-400 max-w-2xl mx-auto">
                        Stop treating your website like a digital brochure. We build operational frontends that read, write, and sync data directly with your existing stack — turning your site into an active part of your workflow.
                    </p>
                </motion.div>

                {/* Integration Icons Row */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-10%" }}
                    className="flex flex-nowrap justify-center gap-2 sm:gap-4 md:gap-6 mb-8 relative z-20"
                >
                    <div onClick={() => setSelectedIcon(selectedIcon === 0 ? null : 0)} className={`group flex hover:border-[#FACC15] transition-colors duration-300 cursor-pointer bg-[#0A0A0A] w-10 h-10 sm:w-12 sm:h-12 border rounded-sm relative translate-y-21 sm:-translate-x-8 sm:translate-y-8 items-center justify-center flex-shrink-0 ${selectedIcon === 0 ? 'border-[#FACC15] bg-[#FACC15]/10' : 'border-white/10'}`}>
                        <Server className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${selectedIcon === 0 ? 'text-[#FACC15]' : 'text-white group-hover:text-white'}`} />
                    </div>
                    <div onClick={() => setSelectedIcon(selectedIcon === 1 ? null : 1)} className={`group flex hover:border-[#FACC15] transition-colors duration-300 cursor-pointer bg-[#0A0A0A] w-10 h-10 sm:w-12 sm:h-12 border rounded-sm relative translate-y-21 sm:-translate-x-5 sm:translate-y-8 items-center justify-center flex-shrink-0 ${selectedIcon === 1 ? 'border-[#FACC15] bg-[#FACC15]/10' : 'border-white/10'}`}>
                        <Database className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${selectedIcon === 1 ? 'text-[#FACC15]' : 'text-neutral-400 group-hover:text-white'}`} />
                    </div>
                    <div onClick={() => setSelectedIcon(selectedIcon === 2 ? null : 2)} className={`group flex hover:border-[#FACC15] transition-colors duration-300 cursor-pointer bg-[#0A0A0A] w-10 h-10 sm:w-12 sm:h-12 border rounded-sm relative translate-y-21 sm:-translate-x-2 sm:translate-y-8 items-center justify-center flex-shrink-0 ${selectedIcon === 2 ? 'border-[#FACC15] bg-[#FACC15]/10' : 'border-white/10'}`}>
                        <Layout className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${selectedIcon === 2 ? 'text-[#FACC15]' : 'text-neutral-400 group-hover:text-white'}`} />
                    </div>
                    <div onClick={() => setSelectedIcon(selectedIcon === 3 ? null : 3)} className={`group flex hover:border-[#FACC15] transition-colors duration-300 cursor-pointer bg-[#0A0A0A] w-10 h-10 sm:w-12 sm:h-12 border rounded-sm relative translate-y-21 sm:translate-x-2 sm:translate-y-8 items-center justify-center flex-shrink-0 ${selectedIcon === 3 ? 'border-[#FACC15] bg-[#FACC15]/10' : 'border-white/10'}`}>
                        <Code className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${selectedIcon === 3 ? 'text-[#FACC15]' : 'text-neutral-400 group-hover:text-white'}`} />
                    </div>
                    <div onClick={() => setSelectedIcon(selectedIcon === 4 ? null : 4)} className={`group flex hover:border-[#FACC15] transition-colors duration-300 cursor-pointer bg-[#0A0A0A] w-10 h-10 sm:w-12 sm:h-12 border rounded-sm relative translate-y-21 sm:translate-x-5 sm:translate-y-8 items-center justify-center flex-shrink-0 ${selectedIcon === 4 ? 'border-[#FACC15] bg-[#FACC15]/10' : 'border-white/10'}`}>
                        <Activity className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${selectedIcon === 4 ? 'text-[#FACC15]' : 'text-neutral-400 group-hover:text-white'}`} />
                    </div>
                    <div onClick={() => setSelectedIcon(selectedIcon === 5 ? null : 5)} className={`group flex hover:border-[#FACC15] transition-colors duration-300 cursor-pointer bg-[#0A0A0A] w-10 h-10 sm:w-12 sm:h-12 border rounded-sm relative translate-y-21 sm:translate-x-8 sm:translate-y-8 items-center justify-center flex-shrink-0 ${selectedIcon === 5 ? 'border-[#FACC15] bg-[#FACC15]/10' : 'border-white/10'}`}>
                        <Plug className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${selectedIcon === 5 ? 'text-[#FACC15]' : 'text-neutral-400 group-hover:text-white'}`} />
                    </div>
                </motion.div>

                {/* Animated Connections */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-10%" }}
                    className="relative w-full max-w-4xl h-64 mb-16"
                >
                    <svg viewBox="0 0 900 360" className="absolute inset-0 w-full h-full pointer-events-none" fill="none">
                        <defs>
                            <filter id="glow-yellow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur"></feGaussianBlur>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"></feMergeNode>
                                    <feMergeNode in="SourceGraphic"></feMergeNode>
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Connecting Nodes */}
                        {[150, 270, 390, 510, 630, 750].map((cx, i) => (
                            <circle key={i} cx={cx} cy="30" r="3" fill="#FACC15" filter="url(#glow-yellow)">
                                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                            </circle>
                        ))}

                        {/* Animated Lines */}
                        <path d="M450 300 C 450 200, 300 120, 150 30" stroke="#FACC15" strokeWidth="1" strokeLinecap="round" fill="none" style={{ strokeDasharray: 600, strokeDashoffset: 600, opacity: 0.6 }}>
                            <animate attributeName="stroke-dashoffset" values="600;0;600" dur="4s" begin="0s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                        </path>
                        <path d="M450 300 C 450 210, 360 130, 270 30" stroke="#FACC15" strokeWidth="1" strokeLinecap="round" fill="none" style={{ strokeDasharray: 520, strokeDashoffset: 520, opacity: 0.6 }}>
                            <animate attributeName="stroke-dashoffset" values="520;0;520" dur="4s" begin="0.3s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                        </path>
                        <path d="M450 300 C 450 150, 420 80, 390 30" stroke="#FACC15" strokeWidth="1" strokeLinecap="round" fill="none" style={{ strokeDasharray: 450, strokeDashoffset: 450, opacity: 0.6 }}>
                            <animate attributeName="stroke-dashoffset" values="450;0;450" dur="4s" begin="0.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                        </path>
                        <path d="M450 300 C 450 150, 480 80, 510 30" stroke="#FACC15" strokeWidth="1" strokeLinecap="round" fill="none" style={{ strokeDasharray: 450, strokeDashoffset: 450, opacity: 0.6 }}>
                            <animate attributeName="stroke-dashoffset" values="450;0;450" dur="4s" begin="0.9s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                        </path>
                        <path d="M450 300 C 450 210, 540 130, 630 30" stroke="#FACC15" strokeWidth="1" strokeLinecap="round" fill="none" style={{ strokeDasharray: 520, strokeDashoffset: 520, opacity: 0.6 }}>
                            <animate attributeName="stroke-dashoffset" values="520;0;520" dur="4s" begin="1.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                        </path>
                        <path d="M450 300 C 450 200, 600 120, 750 30" stroke="#FACC15" strokeWidth="1" strokeLinecap="round" fill="none" style={{ strokeDasharray: 600, strokeDashoffset: 600, opacity: 0.6 }}>
                            <animate attributeName="stroke-dashoffset" values="600;0;600" dur="4s" begin="1.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                        </path>
                    </svg>

                    {/* Central Hub Icon */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 translate-y-2">
                        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0A0A0A] border border-[#FACC15]/40 shadow-[0_0_30px_rgba(250,204,21,0.2)]">
                            <Zap className="text-[#FACC15] drop-shadow-[0_0_8px_rgba(250,204,21,0.5)] w-7 h-7" />
                        </span>
                    </div>
                </motion.div>

                {/* Features Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-10%" }}
                    className="flex items-center justify-center gap-4 sm:gap-8 flex-wrap text-sm text-neutral-400 font-mono"
                >
                    <div className="inline-flex items-center gap-2">
                        <Server className="text-[#FACC15] w-4 h-4" />
                        <span className="font-medium uppercase text-xs tracking-wider">Instant sync</span>
                    </div>
                    <div className="hidden sm:block w-px h-4 bg-white/10 rotate-12"></div>
                    <div className="inline-flex items-center gap-2">
                        <Code className="text-[#FACC15] w-4 h-4" />
                        <span className="font-medium uppercase text-xs tracking-wider">Enterprise Security</span>
                    </div>
                    <div className="hidden sm:block w-px h-4 bg-white/10 rotate-12"></div>
                    <div className="inline-flex items-center gap-2">
                        <Activity className="text-[#FACC15] w-4 h-4" />
                        <span className="font-medium uppercase text-xs tracking-wider">Real-time</span>
                    </div>
                    <div className="hidden sm:block w-px h-4 bg-white/10 rotate-12"></div>
                    <div className="inline-flex items-center gap-2">
                        <Plug className="text-[#FACC15] w-4 h-4" />
                        <span className="font-medium uppercase text-xs tracking-wider">1-Click Setup</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function Zap(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
        </svg>
    );
}
