import React from "react";
import { motion } from "framer-motion";
import GradientText from "./ui/GradientText";
import { Download } from "lucide-react";
import SocialLinks from "./SocialLinks";
import { Link } from "react-router-dom";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut", delay },
});

function HeroSection() {
    return (
        <section className="min-h-[85vh] pt-24 pb-12 text-white flex items-center">
            <div className="max-w-7xl mx-auto w-full px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12">

                {/* Left — Text Content */}
                <div className="flex-1 flex flex-col gap-10">

                    <motion.div {...fadeUp(0.1)} className="bg-black/80 backdrop-blur-sm p-4 sm:p-6 rounded-3xl -ml-4 border border-white/5">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-2 sm:mb-4">
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 whitespace-nowrap">Mihir Khunt</span>
                        </h1>

                        <h2 className="text-lg sm:text-2xl font-medium text-gray-300 mb-6">
                            Full Stack Developer <span className="text-purple-400">·</span> Competitive Programmer
                        </h2>

                        <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 max-w-lg leading-relaxed">
                            Crafting elegant web experiences and solving complex algorithmic challenges.
                            I build things that are fast, scalable, and visually compelling.
                        </p>
                    </motion.div>

                    <motion.div {...fadeUp(0.4)} className="flex flex-col gap-6 w-full sm:w-fit">
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 w-full">
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:border-white/50 transition-all duration-300 overflow-hidden text-center"
                            >
                                <span className="relative z-10">View Resume</span>
                                <div className="absolute inset-0 bg-white/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            </a>

                            <Link
                                to="/projects"
                                className="flex items-center justify-center gap-2 px-6 py-3 h-12 w-full sm:w-fit cursor-pointer bg-black text-white border border-white/50 hover:bg-neutral-800 rounded-full transition whitespace-nowrap"
                            >
                                View Projects
                            </Link>
                        </div>

                        <SocialLinks />
                    </motion.div>
                </div>

                {/* Right — Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    className="flex-1 flex justify-center lg:justify-end"
                >
                    <div className="relative">
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white/80">
                            <img
                                src="/images/profile.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover scale-[1.03]"
                                onError={(e) => {
                                    e.target.src = "https://ui-avatars.com/api/?name=Mihir+Khunt&background=random&color=fff&size=512";
                                }}
                            />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default HeroSection;