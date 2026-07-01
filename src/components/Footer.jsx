import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "CP & DSA", to: "/competitive" },
    { label: "Contact", to: "/contact" },
];

const socials = [
    { icon: <Github size={18} />, href: "https://github.com/mihir1707", label: "GitHub" },
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/mihir-khunt-5a29402bb/", label: "LinkedIn" },
    { icon: <Twitter size={18} />, href: "https://twitter.com/mihir_khunt", label: "Twitter" },
    { icon: <Mail size={18} />, href: "mailto:mihirkhunt2006@gmail.com", label: "Email" },
];

function Footer() {
    return (
        <footer className="w-full border-t border-white/10 mt-8 text-white bg-black">
            <div className="max-w-7xl mx-auto px-6 lg:px-16 py-10">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45 }}
                    >
                        <p className="text-lg font-bold tracking-tight text-white">Mihir Khunt</p>
                        <p className="text-xs text-gray-500 mt-0.5">Full Stack Developer &amp; CP Enthusiast</p>
                    </motion.div>

                    {/* Nav links */}
                    <motion.nav
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.08 }}
                        className="flex items-center gap-6"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                to={link.to}
                                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </motion.nav>

                    {/* Social icons */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.16 }}
                        className="flex items-center gap-3"
                    >
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                className="w-9 h-9 rounded-full bg-black border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-300"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </motion.div>
                </div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.24 }}
                    className="mt-8 pt-6 border-t border-white/5 text-center"
                >
                    <p className="text-xs text-gray-600">
                        © {new Date().getFullYear()} Mihir Khunt. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}

export default Footer;
