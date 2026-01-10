"use client";

import { Terminal, CircleDot, Circle, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function Hero() {
    const [activeStat, setActiveStat] = useState(0);
    return (
        <main className="flex-grow grid grid-cols-1 lg:grid-cols-12 lg:px-12 mt-32 mb-20 lg:my-32 relative gap-x-12 gap-y-12 lg:gap-y-16">
            {/* Left: Typography */}
            <div className="lg:col-span-5 flex flex-col justify-center z-20 relative px-6 lg:px-0">
                <motion.h1
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.9] lg:leading-[0.85] uppercase font-medium text-white tracking-tighter mb-6 md:mb-8 text-balance"
                >
                    INTEGRATED<br />
                    WEB<br />
                    PORTALS
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="leading-relaxed text-sm md:text-base lg:text-lg font-light text-neutral-400 max-w-sm sm:max-w-md md:max-w-lg mb-8 md:mb-12"
                >
                    Beautiful web interfaces that connect directly to your systems. Custom dashboards, portals, and data visualizations built for performance and impact.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-start gap-4"
                >
                    <a href="#audit-section" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15] rounded-sm">
                        <button className="bg-[#FACC15] text-black font-bold uppercase tracking-widest text-xs py-4 px-8 hover:bg-white transition-all duration-300 font-mono flex items-center gap-2 group cursor-pointer focus-visible:outline-none">
                            INITIALIZE SYSTEM AUDIT ($997)
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </a>
                    <p className="text-xs text-neutral-400 font-mono uppercase tracking-wide text-balance">
                        *30-day delivery timeline. Guaranteed operational efficiency.*
                    </p>
                </motion.div>
            </div>

            {/* Center: Interface Visual */}
            <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                className="lg:col-span-4 relative flex items-center justify-center order-3 lg:order-2 -mt-8 lg:mt-0 lg:py-0"
            >
                <div className="grid-bg z-0 mask-image-linear-gradient(to bottom, black, transparent) opacity-100 absolute top-0 right-0 bottom-0 left-0"></div>

                {/* Main Interface Card */}
                <div className="relative z-10 w-full aspect-square lg:aspect-[4/5] bg-[#0A0A0A] border border-white/10 shadow-2xl overflow-hidden group">
                    {/* Header */}
                    <div className="h-10 border-b border-white/5 flex items-center px-4 justify-between bg-[#0E0E0E]">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                        </div>
                        <div className="text-[10px] uppercase text-neutral-600 tracking-widest font-mono">Bryce.exe</div>
                    </div>

                    {/* Content (Abstracted List) */}
                    <div className="p-4 space-y-3">
                        <div className={`interface-layer transition-opacity duration-300 flex items-center gap-3 p-3 bg-white/[0.03] border-l-2 border-[#FACC15] ${activeStat === 0 ? 'opacity-100' : 'opacity-40'}`}>
                            <CircleDot className="text-[#FACC15] w-4 h-4" strokeWidth={2} />
                            <div className="flex-1">
                                <div className="h-2 w-24 bg-white/20 rounded mb-1.5"></div>
                                <div className="h-1.5 w-16 bg-white/10 rounded"></div>
                            </div>
                            <div className="text-[10px] font-mono text-neutral-500">PRO-12</div>
                        </div>

                        <div className={`interface-layer transition-opacity duration-300 flex items-center gap-3 p-3 border border-white/5 hover:bg-white/[0.02] ${activeStat === 1 ? 'opacity-100' : 'opacity-40'}`}>
                            <Circle className="text-neutral-600 w-4 h-4" strokeWidth={2} />
                            <div className="flex-1">
                                <div className="h-2 w-32 bg-white/10 rounded mb-1.5"></div>
                                <div className="h-1.5 w-20 bg-white/5 rounded"></div>
                            </div>
                            <div className="text-[10px] font-mono text-neutral-600">ENG-84</div>
                        </div>

                        <div className={`interface-layer transition-opacity duration-300 flex items-center gap-3 p-3 border border-white/5 hover:bg-white/[0.02] ${activeStat === 2 ? 'opacity-100' : 'opacity-40'}`}>
                            <CheckCircle2 className="text-neutral-700 w-4 h-4" strokeWidth={2} />
                            <div className="flex-1">
                                <div className="h-2 w-20 bg-white/10 rounded mb-1.5"></div>
                                <div className="h-1.5 w-12 bg-white/5 rounded"></div>
                            </div>
                            <div className="text-[10px] font-mono text-neutral-600">DES-03</div>
                        </div>
                    </div>

                    {/* Terminal Overlay at Bottom */}
                    <div className="text-[10px] leading-relaxed text-neutral-400 font-mono bg-[#0E0E0E] border-white/10 border-t pt-4 pr-4 pb-4 pl-4 absolute right-0 bottom-0 left-0">
                        <span className="text-[#FACC15]">&gt;</span> npm run deploy --integration<br />
                        <span className="text-[#FACC15]">&gt;</span> Connecting to API Gateway... Success [200 OK]<br />
                        <span className="text-green-500">✓ Deployed to Production in 420ms</span>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -right-4 top-1/4 text-neutral-800 text-4xl font-thin">+</div>
                <div className="absolute -left-4 bottom-1/4 text-neutral-800 text-4xl font-thin">+</div>
            </motion.div >

            {/* Right: Stats */}
            < motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                className="lg:col-span-3 flex flex-col relative z-20 order-2 lg:order-3 px-6 lg:px-0 lg:pt-10 lg:pl-6"
            >
                <div className="hidden lg:block beam-border-v"></div>

                <div className="flex flex-row lg:flex-col justify-between lg:justify-center h-full gap-6 lg:gap-8">
                    {/* Stat 1 */}
                    <div
                        className={`cursor-pointer transition-all duration-300 ${activeStat === 0 ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}
                        onClick={() => setActiveStat(0)}
                    >
                        <span className={`text-4xl md:text-5xl font-light tracking-tighter block transition-colors duration-300 ${activeStat === 0 ? 'text-[#FACC15] [text-shadow:0_0_20px_rgba(250,204,21,0.3)]' : 'text-neutral-700'}`}>
                            Custom
                        </span>
                        <span className="uppercase block text-[10px] md:text-xs text-neutral-500 tracking-widest mt-1 md:mt-2 pl-1">
                            BESPOKE INTERFACES
                        </span>
                    </div>

                    {/* Stat 2 */}
                    <div
                        className={`lg:border-t border-white/5 border-dashed lg:pt-8 cursor-pointer transition-all duration-300 ${activeStat === 1 ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}
                        onClick={() => setActiveStat(1)}
                    >
                        <span className={`text-4xl md:text-5xl font-light tracking-tighter block transition-colors duration-300 ${activeStat === 1 ? 'text-[#FACC15] [text-shadow:0_0_20px_rgba(250,204,21,0.3)]' : 'text-neutral-700'}`}>
                            100<span className="text-2xl">%</span>
                        </span>
                        <span className="text-[10px] md:text-xs text-neutral-500 uppercase tracking-widest mt-1 md:mt-2 block pl-1">
                            DATA INTEGRITY
                        </span>
                    </div>

                    {/* Stat 3 */}
                    <div
                        className={`lg:border-t border-white/5 border-dashed lg:pt-8 cursor-pointer transition-all duration-300 ${activeStat === 2 ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}
                        onClick={() => setActiveStat(2)}
                    >
                        <span className={`text-4xl md:text-5xl font-light tracking-tighter block transition-colors duration-300 ${activeStat === 2 ? 'text-[#FACC15] [text-shadow:0_0_20px_rgba(250,204,21,0.3)]' : 'text-neutral-700'}`}>
                            Zero
                        </span>
                        <span className="text-[10px] md:text-xs text-neutral-500 uppercase tracking-widest mt-1 md:mt-2 block pl-1">
                            MANUAL SYNC
                        </span>
                    </div>
                </div>
            </motion.div >
        </main >
    );
}
