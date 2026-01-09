"use client";

import { X, Check } from "lucide-react";
import { motion } from "framer-motion";

export function Comparisons() {
    return (
        <section className="bg-[#050505] w-full border-t border-white/5 py-24 lg:py-32 relative">
            <div className="lg:px-12 px-6 max-w-[1400px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter mb-6">
                        The Evolution of <span className="text-neutral-500">Digital Infrastructure</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* The Old Way */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#0A0A0A] border border-white/5 p-8 lg:p-12 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-neutral-800"></div>
                        <h3 className="text-xl font-mono text-neutral-500 uppercase tracking-widest mb-2">The Legacy Model</h3>
                        <p className="text-3xl text-white font-medium tracking-tight mb-8">Disconnected Frontends</p>

                        <div className="space-y-6">
                            <div className="flex gap-4 items-start opacity-60">
                                <X className="w-5 h-5 text-neutral-500 mt-1 shrink-0" />
                                <div>
                                    <h4 className="text-white font-mono text-sm uppercase tracking-wider mb-1">Manual Entry</h4>
                                    <p className="text-neutral-400 text-sm leading-relaxed">Orders are emailed or sit in a CMS silo. Humans manually re-key data into finance systems. Error-prone and slow.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start opacity-60">
                                <X className="w-5 h-5 text-neutral-500 mt-1 shrink-0" />
                                <div>
                                    <h4 className="text-white font-mono text-sm uppercase tracking-wider mb-1">Static Data</h4>
                                    <p className="text-neutral-400 text-sm leading-relaxed">Inventory and pricing are always out of date, causing overselling and customer friction.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start opacity-60">
                                <X className="w-5 h-5 text-neutral-500 mt-1 shrink-0" />
                                <div>
                                    <h4 className="text-white font-mono text-sm uppercase tracking-wider mb-1">Disconnected</h4>
                                    <p className="text-neutral-400 text-sm leading-relaxed">The website exists in a silo, completely unaware of your actual business operations.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* The New Way */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#0A0A0A] border border-[#FACC15]/20 p-8 lg:p-12 relative overflow-hidden shadow-[0_0_50px_rgba(250,204,21,0.05)]"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#FACC15]"></div>
                        <h3 className="text-xl font-mono text-[#FACC15] uppercase tracking-widest mb-2">The Integrated Standard</h3>
                        <p className="text-3xl text-white font-medium tracking-tight mb-8">Headless Portals</p>

                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <Check className="w-5 h-5 text-[#FACC15] mt-1 shrink-0" />
                                <div>
                                    <h4 className="text-white font-mono text-sm uppercase tracking-wider mb-1">Unforgettable Interfaces</h4>
                                    <p className="text-neutral-400 text-sm leading-relaxed">Custom-built dashboards and portals with 3D visualizations, scroll animations, and interactive data displays. Not template-based—engineered for impact.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <Check className="w-5 h-5 text-[#FACC15] mt-1 shrink-0" />
                                <div>
                                    <h4 className="text-white font-mono text-sm uppercase tracking-wider mb-1">Real-Time Data Layer</h4>
                                    <p className="text-neutral-400 text-sm leading-relaxed">Inventory, pricing, and order status pulled live from your ERP. Always accurate, always fast.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <Check className="w-5 h-5 text-[#FACC15] mt-1 shrink-0" />
                                <div>
                                    <h4 className="text-white font-mono text-sm uppercase tracking-wider mb-1">Zero Manual Entry</h4>
                                    <p className="text-neutral-400 text-sm leading-relaxed">Your website acts as a secure API wrapper. Users interact directly with live data from your systems.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
