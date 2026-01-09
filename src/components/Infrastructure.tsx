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
            img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%230a0a0a'/%3E%3Cstop offset='50%25' stop-color='%23111'/%3E%3Cstop offset='100%25' stop-color='%230a0a0a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g)' width='800' height='600'/%3E%3C/svg%3E",
            badge: "FEATURED",
        },
        {
            title: "Wholesale Order Portal",
            subtitle: "REFERENCE_ARCH // COMMERCE",
            desc: "Custom commerce interface with real-time inventory visualization. Bi-directional sync of 50k+ SKUs and customer-specific pricing tiers between NetSuite and a headless Next.js frontend.",
            signals: [
                { label: "SYNC_DELAY", value: "<200ms" },
                { label: "MANUAL_ENTRY", value: "0%" }
            ],
            tags: ["React", "Next.js", "Framer Motion", "NetSuite SuiteTalk", "Redis"],
            img: "https://vdhdjvkkrmrscnncmwxc.supabase.co/storage/v1/object/public/Images/Whisk.jpeg?q=80&w=800&auto=format&fit=crop",
            badge: "REFERENCE_ARCH",
        },
        {
            title: "Automated CPQ Interface",
            subtitle: "REFERENCE_ARCH // SALES",
            desc: "Interactive quoting dashboard with animated workflows. Generates Salesforce Opportunities and PDF invoices via Stripe API in real-time.",
            signals: [
                { label: "ADMIN_SAVINGS", value: "20hrs/wk" },
                { label: "ACCURACY", value: "100%" }
            ],
            tags: ["React", "TypeScript", "Tailwind", "Salesforce Apex", "Stripe API"],
            img: "https://vdhdjvkkrmrscnncmwxc.supabase.co/storage/v1/object/public/Images/computer.jpeg?q=80&w=800&auto=format&fit=crop",
            badge: "REFERENCE_ARCH",
        },
        {
            title: "Real-Time Fulfillment Hub",
            subtitle: "SYSTEM_MODEL // LOGISTICS",
            desc: "Live 3D order tracking visualization. 'Domino's Tracker' for manufacturing with animated status updates pulled from ERP via webhooks.",
            signals: [
                { label: "TICKET_DEFLECTION", value: "-80%" },
                { label: "UPTIME", value: "99.9%" }
            ],
            tags: ["Next.js", "Three.js", "Supabase", "Twilio", "ERP Webhooks"],
            img: "https://vdhdjvkkrmrscnncmwxc.supabase.co/storage/v1/object/public/Images/Whisk%20(3).jpeg?q=80&w=800&auto=format&fit=crop",
            badge: "SYSTEM_MODEL",
        },
        {
            title: "Contractor Payout Engine",
            subtitle: "SYSTEM_MODEL // FINANCE",
            desc: "Data visualization dashboard for commission tracking. Auto-calculates from CRM closed-won deals and stages payroll batches in Gusto.",
            signals: [
                { label: "RISK_REDUCTION", value: "HIGH" },
                { label: "BATCH_TIME", value: "Instant" }
            ],
            tags: ["React", "Recharts", "Workato", "HiBob", "Gusto"],
            img: "https://vdhdjvkkrmrscnncmwxc.supabase.co/storage/v1/object/public/Images/Whisk%20Image.jpeg?q=80&w=800&auto=format&fit=crop",
            badge: "SYSTEM_MODEL",
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
                className="grid grid-cols-1 md:grid-cols-2 lg:px-12 pr-6 pb-32 pl-6 gap-x-6 gap-y-6"
            >
                {systems.map((sys, i) => (
                    <div
                        key={i}
                        onClick={() => openSystemPanel(sys)}
                        className="group relative h-[400px] rounded-sm overflow-hidden bg-[#0A0A0A] border border-white/5 cursor-pointer hover:border-[#FACC15]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.1)]"
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
                            <div className="p-8 border-t border-white/5 bg-[#050505]">
                                <a
                                    href="#audit-section"
                                    onClick={(e) => { e.preventDefault(); closeSystemPanel(); document.getElementById('audit-section')?.scrollIntoView({ behavior: 'smooth' }); }}
                                    className="w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15] rounded block"
                                >
                                    <button className="w-full bg-[#FACC15] hover:bg-white text-black text-xs font-bold font-mono uppercase tracking-widest py-5 rounded transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_30px_rgba(250,204,21,0.4)]">
                                        Initialize Deployment
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
