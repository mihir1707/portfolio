import React from 'react'
import ElectricBorder from '../components/ui/ElectricBorder'
import { Github } from "lucide-react";

function Projects() {
    return (
        <div className="text-white py-16 px-10">
            <br/><br/><br/>
            <br/><br/>

            <h1 className="text-4xl font-bold text-center mb-24">
                Projects
            </h1>
            <br/><br/>
            <br/><br/>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">

                <ElectricBorder
                    color="rgba(118, 72, 224, 0.67)"
                    speed={1}
                    chaos={0}
                    style={{ borderRadius: 25 }}
                >
                    <div className="bg-[#0b0618] rounded-2xl flex flex-col h-[550px] w-[600px] p-10 space-y-4">

                        <img
                            src="/src/assets/cpu-scheduler.jpg"
                            alt="CPU Scheduler"
                            className="rounded-lg w-full h-3/5 object-top object-cover"
                        />
                        <br />

                        <h2 className="text-xl flex items-center justify-center font-semibold">
                            CPU Scheduler Simulator
                        </h2>

                        <p className="text-sm text-gray-300 leading-relaxed">
                            Implemented CPU scheduling algorithms such as
                            FCFS, SJF, SRTF, and Round Robin in Java to simulate
                            process execution and analyze waiting time and
                            turnaround time.
                        </p>
                        <br />

                        <div className="text-md text-cyan-300 font-medium tracking-wide">
                            C • Operating Systems • Algorithms
                        </div>
                        <br />

                        <div className="flex items-center justify-between mt-auto pt-4">
                            <a
                                href="https://github.com/mihir1707/cpu-scheduler"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-25 h-10 flex items-center justify-center gap-2 px-4 py-2 border border-[#7648e0aa] rounded-lg hover:bg-[#7648e0aa] hover:text-black transition duration-300"
                            >
                                <Github size={20} />
                                Code
                            </a>

                            {/* <a className="w-25 justify-center h-10 cursor-pointer flex items-center gap-2 px-4 py-2 border border-[#7648e0aa] rounded-lg hover:bg-[#7648e0aa] hover:text-black transition duration-300">
                                Live Demo
                            </a> */}
                        </div>

                    </div>
                </ElectricBorder>


                <ElectricBorder
                    color="rgba(118, 72, 224, 0.67)"
                    speed={1}
                    chaos={0.1}
                    style={{ borderRadius: 25 }}
                >
                    <div className="bg-[#0b0618] rounded-2xl flex flex-col h-[550px] w-[600px] p-10 space-y-4">

                        <img
                            src="/src/assets/movie.jpg"
                            alt="CPU Scheduler"
                            className="rounded-lg w-full h-3/5 object-top object-cover"
                        />
                        <br />

                        <h2 className="text-xl flex items-center justify-center font-semibold">
                            BookMoviShow
                        </h2>

                        <p className="text-sm text-gray-300 leading-relaxed">
                            Full-stack movie ticket booking web app with real-time seat selection
                            and booking management built using React and Node.js.
                        </p>
                        <br />

                        <div className="text-md text-cyan-300 font-medium tracking-wide">
                            React • Node.js • Express • MongoDB
                        </div>
                        <br />

                        <div className="flex items-center justify-between mt-auto pt-4">
                            <a
                                href="https://github.com/mihir1707/BookMoviShow"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-25 h-10 flex items-center justify-center gap-2 px-4 py-2 border border-[#7648e0aa] rounded-lg hover:bg-[#7648e0aa] hover:text-black transition duration-300"
                            >
                                <Github size={20} />
                                Code
                            </a>

                            <a
                                href='https://book-movi-show-frontend.vercel.app/'
                                className="w-25 justify-center h-10 cursor-pointer flex items-center gap-2 px-4 py-2 border border-[#7648e0aa] rounded-lg hover:bg-[#7648e0aa] hover:text-black transition duration-300">
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