"use client";

import { useState } from "react";
import { ArrowUpRight, ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SystemData {
    title: string;
    subtitle: string;
    desc: string;
    signals: {
        error: string;
        latency: string;
        savings: string;
    };
    tags: string[];
}

export function Infrastructure() {
    const [activeSystem, setActiveSystem] = useState<SystemData | null>(null);

    const openSystemPanel = (data: SystemData) => {
        setActiveSystem(data);
    };

    const closeSystemPanel = () => {
        setActiveSystem(null);
    };

    // Systems Data
    const systems = [
        {
            title: "Automated Ledgering",
            subtitle: "NETSUITE // STRIPE",
            desc: "Bilateral synchronization engine ensuring financial data integrity between ERP and payment processors. Eliminates manual reconciliation with 100% accuracy.",
            signals: { error: "0%", latency: "42ms", savings: "$15K/YR" },
            tags: ["NetSuite", "Stripe Connect", "Webhooks"],
            img: "https://vdhdjvkkrmrscnncmwxc.supabase.co/storage/v1/object/public/Images/Whisk.jpeg?q=80&w=800&auto=format&fit=crop",
            badge: "ERRORS: 0%",
        },
        {
            title: "Client Portal v1",
            subtitle: "NEXT.JS // SUPABASE",
            desc: "Secure, high-performance customer interface for accessing real-time project deliverables, invoices, and status updates directly from your database.",
            signals: { error: "0.01%", latency: "32ms", savings: "$22K/YR" },
            tags: ["Next.js", "Supabase Auth", "Realtime"],
            img: "https://vdhdjvkkrmrscnncmwxc.supabase.co/storage/v1/object/public/Images/computer.jpeg?q=80&w=800&auto=format&fit=crop",
            badge: "STATUS: LIVE",
        },
        {
            title: "Workflow Sync",
            subtitle: "WORKATO // SLACK",
            desc: "Event-driven automation pipeline routing critical system alerts and engineering updates directly to designated Slack channels.",
            signals: { error: "0%", latency: "24ms", savings: "$18K/YR" },
            tags: ["Workato", "Slack API", "Webhooks"],
            img: "https://vdhdjvkkrmrscnncmwxc.supabase.co/storage/v1/object/public/Images/Whisk%20(3).jpeg?q=80&w=800&auto=format&fit=crop",
            badge: "LATENCY: 24ms",
        },
        {
            title: "AI Support Agent",
            subtitle: "OPENAI // PYTHON",
            desc: "Autonomous Tier-1 support agent powered by vector embeddings, capable of resolving customer inquiries instantly without human oversight.",
            signals: { error: "1.2%", latency: "800ms", savings: "$40K/YR" },
            tags: ["OpenAI", "Python", "Vector DB"],
            img: "https://vdhdjvkkrmrscnncmwxc.supabase.co/storage/v1/object/public/Images/Whisk%20Image.jpeg?q=80&w=800&auto=format&fit=crop",
            badge: "SAVED $40K/YR",
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
                        DEPLOYED INFRASTRUCTURE
                    </h2>
                    <p className="md:text-xl text-lg font-light text-neutral-500 max-w-2xl">
                        Live systems processing real-time data across enterprise environments.
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
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:px-12 pr-6 pb-32 pl-6 gap-x-6 gap-y-6"
            >
                {systems.map((sys, i) => (
                    <div
                        key={i}
                        onClick={() => openSystemPanel(sys)}
                        className="group relative h-[500px] rounded-sm overflow-hidden bg-[#0A0A0A] border border-white/5 cursor-pointer hover:border-[#FACC15]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.1)]"
                    >
                        <img
                            src={sys.img}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-60 saturate-0 group-hover:saturate-50"
                            alt={sys.title}
                        />
                        <div className="group-hover:opacity-70 transition-opacity duration-500 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>

                        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-[10px] font-mono text-[#FACC15] uppercase tracking-wider shadow-xl">
                            {sys.title === "Client Portal v1" ? (
                                <div className="flex gap-2 items-center text-green-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                                    LIVE
                                </div>
                            ) : (
                                sys.badge
                            )}
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
                    </div>
                ))}
            </motion.div>

            {/* System Panel Modal */}
            {activeSystem && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-[#050505]/80 backdrop-blur-md"
                        onClick={closeSystemPanel}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 30, filter: "blur(8px)", scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                        exit={{ opacity: 0, y: 30, filter: "blur(8px)", scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="relative w-full max-w-2xl bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-8 pb-6 flex justify-between items-start border-b border-white/5">
                            <div>
                                <div className="text-[#FACC15] text-[10px] font-bold tracking-[0.25em] font-mono uppercase mb-3">
                                    SYSTEM PROTOCOL
                                </div>
                                <h2 className="text-3xl font-medium text-white tracking-tight font-display">{activeSystem.title}</h2>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                <span className="text-[10px] font-mono font-semibold text-green-500 uppercase tracking-widest">Live</span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 pt-6 space-y-8">
                            <div className="space-y-3">
                                <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Technical Specifications</p>
                                <p className="text-neutral-300 text-base font-light leading-relaxed">
                                    {activeSystem.desc}
                                </p>
                            </div>

                            <div className="space-y-3">
                                <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">System Signals</p>
                                <div className="grid grid-cols-3 gap-px bg-white/10 border border-white/10 rounded overflow-hidden">
                                    <div className="bg-[#0E0E0E] p-4 flex flex-col gap-1">
                                        <span className="text-[9px] text-neutral-500 font-mono uppercase tracking-wider">Errors</span>
                                        <span className="text-lg font-mono text-white tracking-tight">{activeSystem.signals.error}</span>
                                    </div>
                                    <div className="bg-[#0E0E0E] p-4 flex flex-col gap-1">
                                        <span className="text-[9px] text-neutral-500 font-mono uppercase tracking-wider">Latency</span>
                                        <span className="text-lg font-mono text-white tracking-tight">{activeSystem.signals.latency}</span>
                                    </div>
                                    <div className="bg-[#0E0E0E] p-4 flex flex-col gap-1">
                                        <span className="text-[9px] text-neutral-500 font-mono uppercase tracking-wider">Savings</span>
                                        <span className="text-lg font-mono text-[#FACC15] tracking-tight">{activeSystem.signals.savings}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-8 pt-0 flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex flex-wrap gap-2">
                                {activeSystem.tags.map((tag, i) => (
                                    <span key={i} className="px-2.5 py-1 rounded bg-[#FACC15]/10 border border-[#FACC15]/20 text-[#FACC15] text-[10px] font-mono uppercase tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <a href="#audit-section" onClick={(e) => { e.preventDefault(); closeSystemPanel(); document.getElementById('audit-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full md:w-auto cursor-pointer">
                                <button className="w-full bg-[#FACC15] hover:bg-white text-black text-[11px] font-bold font-mono uppercase tracking-widest px-6 py-3 rounded transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer">
                                    Initialize Contact Protocol
                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </a>
                        </div>

                        <button onClick={closeSystemPanel} className="absolute top-6 right-6 p-2 text-neutral-500 hover:text-white transition-colors rounded-full hover:bg-white/5 cursor-pointer">
                            <X className="w-4.5 h-4.5" />
                        </button>
                    </motion.div>
                </div>
            )
            }
        </section >
    );
}
