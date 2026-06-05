import React from 'react'
import ElectricBorder from '../components/ui/ElectricBorder'
import { Github } from "lucide-react";

function Projects() {
    return (
        <div className="text-white py-16 px-10">
            <h1 className="text-4xl font-bold text-center mt-12 mb-20">
                Projects
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center max-w-6xl mx-auto">
                <ElectricBorder
                    color="#ffffff"
                    speed={1}
                    chaos={0}
                    style={{ borderRadius: 24 }}
                    className="w-full max-w-[500px]"
                >
                    <div className="bg-black border border-white rounded-2xl flex flex-col h-[550px] p-6 sm:p-8">
                        <img
                            src="/assets/cpu-scheduler.jpg"
                            alt="CPU Scheduler"
                            className="rounded-xl w-full h-[220px] object-top object-cover border border-white mb-6"
                        />

                        <h2 className="text-2xl font-bold text-white mb-3 text-center">
                            CPU Scheduler Simulator
                        </h2>

                        <p className="text-sm text-gray-400 leading-relaxed text-center flex-grow">
                            Implemented CPU scheduling algorithms such as FCFS, SJF, SRTF, and Round Robin in Java to simulate process execution and analyze waiting time and turnaround time.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full border border-white/20">C</span>
                            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full border border-white/20">Operating Systems</span>
                            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full border border-white/20">Algorithms</span>
                        </div>

                        <div className="flex items-center gap-4 mt-auto">
                            <a
                                href="https://github.com/mihir1707/cpu-scheduler"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 h-12 flex items-center justify-center gap-2 border border-white rounded-xl hover:bg-white hover:text-black transition duration-300 font-semibold"
                            >
                                <Github size={20} />
                                Source Code
                            </a>
                        </div>
                    </div>
                </ElectricBorder>

                <ElectricBorder
                    color="#ffffff"
                    speed={1}
                    chaos={0.1}
                    style={{ borderRadius: 24 }}
                    className="w-full max-w-[500px]"
                >
                    <div className="bg-black border border-white rounded-2xl flex flex-col h-[550px] p-6 sm:p-8">
                        <img
                            src="/assets/movie.jpg"
                            alt="BookMoviShow"
                            className="rounded-xl w-full h-[220px] object-top object-cover border border-white mb-6"
                        />

                        <h2 className="text-2xl font-bold text-white mb-3 text-center">
                            BookMoviShow
                        </h2>

                        <p className="text-sm text-gray-400 leading-relaxed text-center flex-grow">
                            Full-stack movie ticket booking web app with real-time seat selection and booking management built using React and Node.js.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full border border-white/20">React</span>
                            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full border border-white/20">Node.js</span>
                            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full border border-white/20">Express</span>
                            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full border border-white/20">MongoDB</span>
                        </div>

                        <div className="flex items-center gap-4 mt-auto">
                            <a
                                href="https://github.com/mihir1707/BookMoviShow"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 h-12 flex items-center justify-center gap-2 border border-white rounded-xl hover:bg-white hover:text-black transition duration-300 font-semibold"
                            >
                                <Github size={20} />
                                Code
                            </a>

                            <a
                                href='https://book-movi-show-frontend.vercel.app/'
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 h-12 flex items-center justify-center gap-2 bg-white text-black border border-white rounded-xl hover:bg-gray-200 transition duration-300 font-semibold"
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>
                </ElectricBorder>
            </div>

        </div>
    )
}

export default Projects