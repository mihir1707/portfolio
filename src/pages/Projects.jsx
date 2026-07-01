import React from 'react';
import { motion } from 'framer-motion';
import ElectricBorder from '../components/ui/ElectricBorder';
import { Github, ExternalLink } from "lucide-react";
import { projects } from '../data/constants';
import Footer from '../components/Footer';

const cardVariants = {
    hidden: { opacity: 0, y: 36 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: "easeOut", delay: i * 0.15 },
    }),
};

function Projects() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-white min-h-screen flex flex-col"
        >
            <div className="flex-1 py-16 px-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-center mt-12 mb-16">
                    Projects
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center max-w-6xl mx-auto">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="w-full max-w-[500px]"
                        >
                            <ElectricBorder
                                color="#ffffff"
                                speed={1}
                                chaos={i === 0 ? 0 : 0.1}
                                style={{ borderRadius: 24 }}
                                className="w-full"
                            >
                                <div className="bg-black border border-white rounded-2xl flex flex-col h-auto min-h-[550px] p-6 sm:p-8">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="rounded-xl w-full h-[220px] object-top object-cover border border-white mb-6"
                                    />

                                    <h2 className="text-2xl font-bold text-white mb-3 text-center">
                                        {project.title}
                                    </h2>

                                    <p className="text-sm text-gray-400 leading-relaxed text-center flex-grow">
                                        {project.description}
                                    </p>

                                    <hr className="border-white/10 w-full my-5" />

                                    <div className="flex flex-wrap items-center justify-center gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full border border-white/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <hr className="border-white/10 w-full my-5" />

                                    <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 mt-auto">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 h-12 flex items-center justify-center gap-2 border border-white rounded-xl hover:bg-white hover:text-black transition duration-300 font-semibold"
                                        >
                                            <Github size={20} />
                                            Source Code
                                        </a>

                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 h-12 flex items-center justify-center gap-2 bg-white text-black border border-white rounded-xl hover:bg-gray-200 transition duration-300 font-semibold"
                                            >
                                                <ExternalLink size={20} />
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </ElectricBorder>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />
        </motion.div>
    );
}

export default Projects;