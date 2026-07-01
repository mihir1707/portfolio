import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2, Mail, MessageSquare, User } from "lucide-react";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55, ease: "easeOut", delay },
});

function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle | loading | success | error

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    access_key: "0ba29d20-a4ab-4022-8d71-7a9790cf45aa",
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `Portfolio Contact: Message from ${formData.name}`,
                }),
            });

            const data = await response.json();
            if (data.success) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <section className="w-full py-20 text-white" id="contact">
            <div className="max-w-3xl mx-auto px-6 lg:px-16">

                {/* Heading */}
                <motion.div {...fadeUp(0)} className="text-center mb-14">
                    <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
                    <div className="w-20 h-[2px] bg-white mx-auto" />
                </motion.div>

                {/* Form Card */}
                <motion.div
                    {...fadeUp(0.15)}
                    className="bg-black border border-white/10 rounded-3xl p-8 sm:p-10 hover:border-white/20 transition-colors duration-500"
                >
                    {status === "success" ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center justify-center py-12 gap-4 text-center"
                        >
                            <CheckCircle2 size={56} className="text-green-400" />
                            <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                            <p className="text-gray-400 max-w-sm">
                                Thanks for reaching out, Mihir will get back to you soon.
                            </p>
                            <button
                                onClick={() => setStatus("idle")}
                                className="mt-4 px-6 py-2 border border-white/30 rounded-full text-sm hover:bg-white/10 transition-all duration-300"
                            >
                                Send Another
                            </button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                            {/* Name */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                    <User size={14} />
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your full name"
                                    className="contact-input"
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                    <Mail size={14} />
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your@email.com"
                                    className="contact-input"
                                />
                            </div>

                            {/* Message */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                    <MessageSquare size={14} />
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    placeholder="What's on your mind?"
                                    className="contact-input"
                                />
                            </div>

                            {/* Error */}
                            {status === "error" && (
                                <p className="text-red-400 text-sm text-center">
                                    Something went wrong. Please try again or email me directly.
                                </p>
                            )}

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="mt-2 flex items-center justify-center gap-2 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {status === "loading" ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        Sending…
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        Send Message
                                    </>
                                )}
                            </button>

                        </form>
                    )}
                </motion.div>

                {/* Direct email fallback */}
                <motion.p {...fadeUp(0.25)} className="text-center mt-6 text-sm bg-black py-3 rounded-xl">
                    <span className="text-gray-500">Or email directly: </span>
                    <a
                        href="mailto:mihirkhunt2006@gmail.com"
                        className="text-white hover:underline transition"
                    >
                        mihirkhunt2006@gmail.com
                    </a>
                </motion.p>

            </div>
        </section>
    );
}

export default Contact;
