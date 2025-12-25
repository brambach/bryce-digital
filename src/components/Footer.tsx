"use client";

import { Github, Twitter, Linkedin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function Footer() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");
        setErrorMessage("");

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/send-contact-email`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
                    },
                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to send message");
            }

            setSubmitStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setSubmitStatus("error");
            setErrorMessage(error instanceof Error ? error.message : "Failed to send message");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <footer className="overflow-hidden bg-[#050505] w-full relative">
            {/* Newsletter Pill / Contact Area */}
            <div className="overflow-hidden z-20 bg-[#080808] w-full border-white/10 rounded-t-[3rem] border-t relative">
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-10%" }}
                    id="audit-section"
                    className="lg:px-12 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 w-full pt-20 pr-6 pb-20 pl-6 relative gap-x-16 gap-y-16"
                >
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <h2 className="lg:text-[6rem] leading-[0.9] text-5xl font-normal text-white tracking-tighter mb-12">
                            Systematic.
                            <span className="text-neutral-600 block">Scalable.</span>
                            Automated.
                        </h2>

                        <div className="flex gap-6 text-white/40 transition-all duration-500">
                            <a href="https://github.com/brambach" target="_blank" rel="noopener noreferrer" className="hover:text-[#FACC15] hover:opacity-100 transition-all duration-300 cursor-pointer">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-[#FACC15] hover:opacity-100 transition-all duration-300 cursor-pointer">
                                <Twitter className="w-6 h-6" />
                            </a>
                            <a href="https://linkedin.com/in/bryce-rambach" target="_blank" rel="noopener noreferrer" className="hover:text-[#FACC15] hover:opacity-100 transition-all duration-300 cursor-pointer">
                                <Linkedin className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Call to Action Card */}
                    <div className="lg:col-span-5 flex lg:justify-end items-center">
                        <div className="w-full max-w-md bg-[#0A0A0A] border border-white/10 p-8 relative group hover:border-[#FACC15]/50 transition-colors duration-500">
                            {/* Decorative corners */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#FACC15]"></div>
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#FACC15]"></div>
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#FACC15]"></div>
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#FACC15]"></div>

                            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6 font-display">
                                Initialize Contact Protocol
                            </h3>

                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-[10px] text-neutral-500 font-mono uppercase mb-2">Target_Name</label>
                                    <input
                                        type="text"
                                        placeholder="enter name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-[#050505] border border-white/10 p-3 text-sm text-white font-mono focus:outline-none focus:border-[#FACC15] transition-colors placeholder:text-neutral-700 outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-neutral-500 font-mono uppercase mb-2">Target_Email</label>
                                    <input
                                        type="email"
                                        placeholder="enter@email.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-[#050505] border border-white/10 p-3 text-sm text-white font-mono focus:outline-none focus:border-[#FACC15] transition-colors placeholder:text-neutral-700 outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-neutral-500 font-mono uppercase mb-2">Message_Payload</label>
                                    <textarea
                                        rows={3}
                                        placeholder="// Describe your system architecture..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-[#050505] border border-white/10 p-3 text-sm text-white font-mono focus:outline-none focus:border-[#FACC15] transition-colors placeholder:text-neutral-700 resize-none outline-none"
                                        required
                                    ></textarea>
                                </div>

                                {/* Status Messages */}
                                {submitStatus === "success" && (
                                    <div className="text-xs font-mono text-green-400 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-400"></span>
                                        MESSAGE TRANSMITTED SUCCESSFULLY
                                    </div>
                                )}
                                {submitStatus === "error" && (
                                    <div className="text-xs font-mono text-red-400 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-red-400"></span>
                                        {errorMessage.toUpperCase()}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#FACC15] text-black font-bold uppercase tracking-widest text-xs py-4 hover:bg-white hover:text-black transition-all duration-300 font-mono flex justify-center items-center gap-2 group/btn cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <span>{isSubmitting ? "Transmitting..." : "Transmit Data"}</span>
                                    {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />}
                                </button>
                            </form>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Copyright Bar */}
                <div className="border-t border-white/5 bg-[#080808] px-6 lg:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-20">
                    <div className="text-[10px] uppercase flex gap-2 text-neutral-600 tracking-widest font-mono gap-x-2 gap-y-2 items-center">
                        <span className="w-2 h-2 rounded-full bg-[#FACC15]"></span>
                        © 2025 Bryce Digital. All Systems Operational.
                    </div>
                    <div className="flex gap-8">
                        <a href="#" className="text-[10px] text-neutral-600 hover:text-[#FACC15] font-mono uppercase tracking-widest transition-colors cursor-pointer">Privacy_Protocol</a>
                        <a href="#" className="text-[10px] text-neutral-600 hover:text-[#FACC15] font-mono uppercase tracking-widest transition-colors cursor-pointer">Terms_of_Service</a>
                        <a href="#" className="text-[10px] text-neutral-600 hover:text-[#FACC15] font-mono uppercase tracking-widest transition-colors cursor-pointer">System_Status</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
