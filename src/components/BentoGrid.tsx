"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function BentoGrid() {
    const [selectedCard, setSelectedCard] = useState<number | null>(null);
    return (
        <section className="bg-[#050505] w-full border-white/5 border-t pt-24 pb-24 relative">
            <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-10%" }}
                id="protocols"
                className="scroll-mt-28 px-6 lg:px-12 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
            >
                <h2 className="lg:text-7xl leading-[0.9] uppercase text-5xl font-normal text-white tracking-tighter">
                    CORE VALUE<br />
                    PROPOSITION
                </h2>
                <a
                    href="#audit-section"
                    className="group flex items-center gap-3 uppercase hover:border-[#FACC15] hover:text-[#FACC15] transition-all text-xs text-white tracking-widest font-mono border-white/20 border-b pb-1 cursor-pointer"
                >
                    BOOK SYSTEM AUDIT
                    <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
            </motion.div>

            <div className="w-full overflow-x-auto pb-12 px-4 sm:px-6 lg:px-12 flex gap-6 snap-x snap-mandatory scrollbar-hide">
                {/* Card 1: Speed */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-10%" }}
                    className="snap-center shrink-0 w-[280px] sm:w-[300px] md:w-[380px] group"
                >
                    <div
                        onClick={() => setSelectedCard(selectedCard === 0 ? null : 0)}
                        className={`aspect-[4/5] bg-[#0A0A0A] border relative overflow-hidden flex flex-col transition-all duration-500 hover:border-[#FACC15]/30 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15] ${selectedCard === 0 ? 'border-[#FACC15]/30' : 'border-white/10'}`}
                        tabIndex={0}
                    >
                        {/* Visual: Speed/Latency */}
                        <div className="flex-1 flex items-center justify-center relative z-10 p-8">
                            <div className="relative w-full max-w-[200px] h-2 bg-neutral-800 rounded-full overflow-hidden">
                                <div className="absolute top-0 left-0 h-full w-1/3 bg-[#FACC15] animate-[loading_1.5s_ease-in-out_infinite]"></div>
                            </div>
                            <div className="absolute font-mono text-xs text-[#FACC15] mt-8">LATENCY: 12ms</div>
                        </div>

                        <div className="p-6 border-t border-white/5 bg-[#080808] relative z-10">
                            <h3 className="uppercase text-sm font-bold text-white tracking-widest mb-1">CUSTOM INTERFACES</h3>
                            <p className="text-xs text-neutral-400 font-mono text-pretty">
                                Dashboards, portals, and data visualizations designed from scratch. Three.js, scroll animations, and interactive experiences—not cookie-cutter templates.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Card 2: Accuracy */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-10%" }}
                    className="snap-center shrink-0 w-[280px] sm:w-[300px] md:w-[380px] group"
                >
                    <div
                        onClick={() => setSelectedCard(selectedCard === 1 ? null : 1)}
                        className={`aspect-[4/5] bg-[#0A0A0A] border relative overflow-hidden flex flex-col transition-all duration-500 hover:border-[#FACC15]/30 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15] ${selectedCard === 1 ? 'border-[#FACC15]/30' : 'border-white/10'}`}
                        tabIndex={0}
                    >
                        <div className="flex-1 flex items-center justify-center relative z-10">
                            <div className="text-6xl font-light text-white tracking-tighter">
                                100<span className="text-[#FACC15] text-4xl">%</span>
                            </div>
                        </div>

                        <div className="p-6 border-t border-white/5 bg-[#080808] relative z-10">
                            <h3 className="text-sm text-white font-bold uppercase tracking-widest mb-1">REAL-TIME SYNC</h3>
                            <p className="text-xs text-neutral-400 font-mono text-pretty">
                                Inventory and pricing update instantly via webhooks. No batch jobs, no waiting. Financial data always perfectly aligned.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Card 3: Labor Savings */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-10%" }}
                    className="snap-center shrink-0 w-[280px] sm:w-[300px] md:w-[380px] group"
                >
                    <div
                        onClick={() => setSelectedCard(selectedCard === 2 ? null : 2)}
                        className={`aspect-[4/5] bg-[#0A0A0A] border relative overflow-hidden flex flex-col transition-all duration-500 hover:border-[#FACC15]/30 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15] ${selectedCard === 2 ? 'border-[#FACC15]/30' : 'border-white/10'}`}
                        tabIndex={0}
                    >
                        <div className="flex-1 flex items-center justify-center relative z-10 p-8">
                            {/* Visual: Chart going down (cost) or Up (efficiency)? Let's do a simple 'Humans: 0' visual */}
                            <div className="border border-white/10 p-4 bg-[#050505]">
                                <div className="flex justify-between gap-8 mb-2 border-b border-white/10 pb-2">
                                    <span className="text-[10px] text-neutral-500 font-mono uppercase">Role</span>
                                    <span className="text-[10px] text-neutral-500 font-mono uppercase">Cost</span>
                                </div>
                                <div className="flex justify-between gap-8 opacity-40 line-through">
                                    <span className="text-[10px] text-neutral-500 font-mono uppercase">Data Entry</span>
                                    <span className="text-[10px] text-neutral-500 font-mono uppercase">$45k</span>
                                </div>
                                <div className="flex justify-between gap-8 opacity-40 line-through">
                                    <span className="text-[10px] text-neutral-500 font-mono uppercase">Admin</span>
                                    <span className="text-[10px] text-neutral-500 font-mono uppercase">$55k</span>
                                </div>
                                <div className="flex justify-between gap-8 text-[#FACC15] mt-2">
                                    <span className="text-[10px] font-mono uppercase">Savings</span>
                                    <span className="text-[10px] font-mono uppercase">$100k+</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border-t border-white/5 bg-[#080808] relative z-10">
                            <h3 className="text-sm text-white font-bold uppercase tracking-widest mb-1">TICKET DEFLECTION</h3>
                            <p className="text-xs text-neutral-400 font-mono text-pretty">
                                Customers self-serve invoices and tracking numbers. Support volume drops by &gt;60%.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
