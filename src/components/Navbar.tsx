"use client";

import Link from "next/link";
import { Zap, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 z-[100] w-full border-b border-white/5 px-6 lg:px-12 py-4 flex items-center justify-between transition-all duration-300 ${isScrolled ? "bg-[#050505]/80 backdrop-blur-xl" : "bg-[#050505]/40 backdrop-blur-xl"
                }`}
        >
            <div className="beam-border-h absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FACC15]/50 to-transparent opacity-50"></div>

            <div className="flex gap-10 gap-x-10 gap-y-10 items-center">
                <div className="flex flex-col">
                    <Link href="/" className="flex items-center gap-3 text-white hover:text-[#FACC15] transition-all cursor-pointer group">
                        <Zap className="w-[22px] h-[22px] text-[#FACC15] fill-[#FACC15]/10" strokeWidth={2.5} />
                        <span className="uppercase group-hover:tracking-wider transition-all duration-500 text-xl font-bold tracking-tighter font-display">
                            Bryce Digital
                        </span>
                    </Link>
                    <div className="flex items-center gap-2 mt-0.5 ml-8">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                        </span>
                        <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-[0.2em]">
                            Operational
                        </span>
                    </div>
                </div>

                <div className="hidden lg:flex items-center gap-8 ml-4 border-l border-white/10 pl-10">
                    <a
                        href="#protocols"
                        className="hover:text-[#FACC15] transition-all uppercase text-[10px] font-medium text-neutral-400 tracking-[0.25em] font-mono"
                    >
                        Protocols
                    </a>
                    <a
                        href="#infrastructure"
                        className="hover:text-[#FACC15] transition-all uppercase text-[10px] font-medium text-neutral-400 tracking-[0.25em] font-mono"
                    >
                        Infrastructure
                    </a>
                    <a
                        href="#integrations"
                        className="hover:text-[#FACC15] transition-all uppercase text-[10px] font-medium text-neutral-400 tracking-[0.25em] font-mono"
                    >
                        Integrations
                    </a>
                </div>
            </div>

            <div className="flex items-center gap-6">
                <a
                    href="#audit-section"
                    className="group flex items-center gap-3 hover:bg-[#FACC15] transition-all duration-300 bg-white rounded-full pt-1 pr-1 pb-1 pl-4 cursor-pointer"
                >
                    <span className="text-[10px] uppercase font-bold text-black tracking-widest">
                        Initialize Audit
                    </span>
                    <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                        <ArrowUpRight className="w-4 h-4" strokeWidth={3} />
                    </div>
                </a>
            </div>
        </nav>
    );
}
