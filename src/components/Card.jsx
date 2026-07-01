import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from './ui/SpotlightCard';
import { Link } from 'react-router-dom';

const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut", delay: i * 0.12 },
    }),
};

function Card() {
    return (
        <div className="flex flex-wrap gap-10 justify-center items-center text-white px-6">

            {/* CP & DSA */}
            <motion.div
                custom={0}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <SpotlightCard
                    spotlightColor="rgba(255, 255, 255, 0.15)"
                    className="w-full max-w-[380px] h-auto min-h-[260px] rounded-3xl p-8
                    border border-white
                    shadow-[0_0_40px_rgba(0,0,0,0.3)]
                    flex flex-col justify-between bg-black"
                >
                    <div className="flex items-center justify-center flex-1">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-white">
                            CP &amp; DSA
                        </h2>
                    </div>

                    <hr className="border-white/20 w-full my-4" />

                    <div className="flex items-center justify-center flex-1">
                        <p className="text-sm text-gray-400 text-center px-4">
                            Check out my coding profiles and achievements
                        </p>
                    </div>

                    <hr className="border-white/20 w-full my-4" />

                    <div className="flex items-center justify-center flex-1">
                        <Link
                            to="/competitive"
                            className="px-6 py-2 border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 text-sm font-medium"
                        >
                            View Profiles
                        </Link>
                    </div>
                </SpotlightCard>
            </motion.div>

            {/* ICPC */}
            <motion.div
                custom={2}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <SpotlightCard
                    spotlightColor="rgba(255, 255, 255, 0.15)"
                    className="w-full max-w-[380px] h-auto min-h-[260px] rounded-3xl p-8
                    border border-white
                    shadow-[0_0_40px_rgba(0,0,0,0.3)]
                    flex flex-col justify-between bg-black"
                >
                    <div className="flex items-center justify-center flex-1 gap-4">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 border border-white">
                            <img src="https://i.ibb.co/6J0r7rW/Daco-5610880.png" alt="ICPC Global" className="w-8 h-8 object-contain" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-white leading-none tracking-tight">
                            ICPC 2025
                        </h2>
                    </div>

                    <hr className="border-white/20 w-full my-4" />

                    <div className="flex flex-col items-center justify-center flex-1 gap-2">
                        <p className="text-sm text-gray-400 text-center px-4 leading-tight">
                            Regionalist at Kanpur Site
                        </p>
                        <div className="flex items-center justify-center gap-1.5">
                            <span className="text-xs text-gray-400">Team:</span>
                            <span className="text-xs font-semibold text-white">Eternal Force</span>
                            <span className="text-gray-600 mx-1">|</span>
                            <span className="text-xs text-gray-400">Rank:</span>
                            <span className="text-xs font-bold text-cyan-300">51</span>
                        </div>
                    </div>

                    <hr className="border-white/20 w-full my-4" />

                    <div className="flex items-center justify-center flex-1">
                        <a
                            href="https://icpc.global/ICPCID/K3HXF2X95VCK"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 text-sm font-medium"
                        >
                            View Certificate
                        </a>
                    </div>
                </SpotlightCard>
            </motion.div>

            {/* Projects */}
            <motion.div
                custom={1}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <SpotlightCard
                    spotlightColor="rgba(255, 255, 255, 0.15)"
                    className="w-full max-w-[380px] h-auto min-h-[260px] rounded-3xl p-8
                    border border-white
                    shadow-[0_0_40px_rgba(0,0,0,0.3)]
                    flex flex-col justify-between bg-black"
                >
                    <div className="flex items-center justify-center flex-1">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-white">
                            Projects
                        </h2>
                    </div>

                    <hr className="border-white/20 w-full my-4" />

                    <div className="flex items-center justify-center flex-1">
                        <p className="text-sm text-gray-400 text-center px-4">
                            Explore my projects and coding journey
                        </p>
                    </div>

                    <hr className="border-white/20 w-full my-4" />

                    <div className="flex items-center justify-center flex-1">
                        <Link
                            to="/projects"
                            className="px-6 py-2 border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 text-sm font-medium"
                        >
                            View Projects
                        </Link>
                    </div>
                </SpotlightCard>
            </motion.div>

        </div>
    );
}

export default Card;