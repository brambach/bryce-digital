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
                    CORE PROTOCOLS
                </h2>
                <a
                    href="#audit-section"
                    className="group flex items-center gap-3 uppercase hover:border-[#FACC15] hover:text-[#FACC15] transition-all text-xs text-white tracking-widest font-mono border-white/20 border-b pb-1 cursor-pointer"
                >
                    BOOK SYSTEM AUDIT
                    <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
            </motion.div>

            <div className="w-full overflow-x-auto pb-12 px-6 lg:px-12 flex gap-6 snap-x snap-mandatory scrollbar-hide">
                {/* Card 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-10%" }}
                    className="snap-center shrink-0 w-[300px] md:w-[380px] group"
                >
                    <div onClick={() => setSelectedCard(selectedCard === 0 ? null : 0)} className={`aspect-[4/5] bg-[#0A0A0A] border relative overflow-hidden flex flex-col transition-all duration-500 hover:border-[#FACC15]/30 cursor-pointer ${selectedCard === 0 ? 'border-[#FACC15]/30' : 'border-white/10'}`}>
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

                        <div className="flex-1 flex items-center justify-center p-8 relative z-10">
                            <div className="w-full bg-[#050505] border border-white/10 p-4 font-mono text-xs text-neutral-400 shadow-2xl">
                                <div className="flex justify-between border-b border-white/10 pb-2 mb-2">
                                    <span>CMD + K</span>
                                    <span className="text-[#FACC15]">SYSTEM ACTION</span>
                                </div>
                                <div className="space-y-1">
                                    <div className="hover:bg-white/5 cursor-pointer text-white p-1">&gt; Trigger Manual Sync</div>
                                    <div className="hover:bg-white/5 cursor-pointer p-1">&gt; View API Error Logs</div>
                                    <div className="hover:bg-white/5 cursor-pointer p-1">&gt; Generate Q3 Report</div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border-t border-white/5 bg-[#080808] relative z-10">
                            <h3 className="uppercase text-sm font-bold text-white tracking-widest mb-1">CUSTOM INTERFACES</h3>
                            <p className="text-xs text-neutral-500 font-mono">
                                Next.js dashboards tailored to your workflow. Replace clunky ERP menus with fast, purpose-built interfaces your team actually uses.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-10%" }}
                    className="snap-center shrink-0 w-[300px] md:w-[380px] group"
                >
                    <div onClick={() => setSelectedCard(selectedCard === 1 ? null : 1)} className={`aspect-[4/5] bg-[#0A0A0A] border relative overflow-hidden flex flex-col transition-all duration-500 hover:border-[#FACC15]/30 cursor-pointer ${selectedCard === 1 ? 'border-[#FACC15]/30' : 'border-white/10'}`}>
                        <div className="flex-1 flex items-center justify-center relative z-10">
                            {/* Abstract Visual */}
                            <div className="w-40 h-40 rounded-full border border-dashed border-white/20 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                                <div className="w-24 h-24 rounded-full border border-white/40 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-[#FACC15]"></div>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
                        </div>

                        <div className="p-6 border-t border-white/5 bg-[#080808] relative z-10">
                            <h3 className="text-sm text-white font-bold uppercase tracking-widest mb-1">Real-time Sync</h3>
                            <p className="text-xs text-neutral-500 font-mono">
                                Updates propagate instantly across systems, clients, and internal tools — keeping everyone aligned without manual intervention.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-10%" }}
                    className="snap-center shrink-0 w-[300px] md:w-[380px] group"
                >
                    <div onClick={() => setSelectedCard(selectedCard === 2 ? null : 2)} className={`aspect-[4/5] bg-[#0A0A0A] border relative overflow-hidden flex flex-col transition-all duration-500 hover:border-[#FACC15]/30 cursor-pointer ${selectedCard === 2 ? 'border-[#FACC15]/30' : 'border-white/10'}`}>
                        <div className="flex-1 flex items-center justify-center relative z-10 p-8">
                            <div className="flex gap-2 items-end">
                                <div className="w-4 bg-neutral-800 h-12 group-hover:bg-[#FACC15] group-hover:h-24 transition-all duration-300"></div>
                                <div className="w-4 bg-neutral-800 h-16 group-hover:bg-[#FACC15] group-hover:h-32 transition-all duration-500"></div>
                                <div className="w-4 bg-neutral-800 h-8 group-hover:bg-[#FACC15] group-hover:h-20 transition-all duration-400"></div>
                                <div className="w-4 bg-neutral-800 h-20 group-hover:bg-[#FACC15] group-hover:h-28 transition-all duration-600"></div>
                            </div>
                        </div>

                        <div className="p-6 border-t border-white/5 bg-[#080808] relative z-10">
                            <h3 className="uppercase text-sm font-bold text-white tracking-widest mb-1">LIVE METRICS</h3>
                            <p className="text-xs text-neutral-500 font-mono">
                                Automated reporting and real-time insights, delivered without spreadsheets or status meetings.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
