import React from 'react'
import SpotlightCard from './ui/SpotlightCard'
import { Terminal, Rocket } from "lucide-react";
import { Link } from 'react-router-dom';

function Card() {
    return (
        <div className="flex flex-wrap gap-10 justify-center items-center text-white px-6">

            <SpotlightCard
                spotlightColor="rgba(255, 255, 255, 0.15)"
                className="w-full max-w-[380px] h-auto min-h-[260px] rounded-3xl p-8
                border border-white
                shadow-[0_0_40px_rgba(0,0,0,0.3)]
                flex flex-col justify-between bg-black"
            >
                {/* Part 1: Title */}
                <div className="flex items-center justify-center flex-1">
                    <h1 className="text-2xl sm:text-3xl font-semibold text-center text-white">
                        CP & DSA
                    </h1>
                </div>

                <hr className="border-white/20 w-full my-4" />

                {/* Part 2: Description */}
                <div className="flex items-center justify-center flex-1">
                    <p className="text-sm text-gray-400 text-center px-4">
                        Check out my coding profiles and achievements
                    </p>
                </div>

                <hr className="border-white/20 w-full my-4" />

                {/* Part 3: Button */}
                <div className="flex items-center justify-center flex-1">
                    <Link
                        to="/competitive"
                        className="px-6 py-2 border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 text-sm font-medium">
                        View Profiles
                    </Link>
                </div>
            </SpotlightCard>


            <SpotlightCard
                spotlightColor="rgba(255, 255, 255, 0.15)"
                className="w-full max-w-[380px] h-auto min-h-[260px] rounded-3xl p-8 
                border border-white
                shadow-[0_0_40px_rgba(0,0,0,0.3)] 
                flex flex-col justify-between bg-black"
            >
                {/* Part 1: Title */}
                <div className="flex items-center justify-center flex-1">
                    <h1 className="text-2xl sm:text-3xl font-semibold text-center text-white">
                        Projects
                    </h1>
                </div>
                
                <hr className="border-white/20 w-full my-4" />

                {/* Part 2: Description */}
                <div className="flex items-center justify-center flex-1">
                    <p className="text-sm text-gray-400 text-center px-4">
                        Explore my projects and coding journey
                    </p>
                </div>

                <hr className="border-white/20 w-full my-4" />

                {/* Part 3: Button */}
                <div className="flex items-center justify-center flex-1">
                    <Link 
                        to="/projects"
                        className="px-6 py-2 border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 text-sm font-medium"
                    >
                        View Projects
                    </Link>
                </div>
            </SpotlightCard>

            <SpotlightCard
                spotlightColor="rgba(255, 255, 255, 0.15)"
                className="w-full max-w-[380px] h-auto min-h-[260px] rounded-3xl p-8 
                border border-white
                shadow-[0_0_40px_rgba(0,0,0,0.3)] 
                flex flex-col justify-between bg-black"
            >
                {/* Part 1: Title */}
                <div className="flex items-center justify-center flex-1 gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 border border-white">
                        <img src="https://i.ibb.co/6J0r7rW/Daco-5610880.png" alt="ICPC Global" className="w-8 h-8 object-contain" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-semibold text-center text-white leading-none tracking-tight">
                        ICPC 2025
                    </h1>
                </div>
                
                <hr className="border-white/20 w-full my-4" />

                {/* Part 2: Description */}
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

                {/* Part 3: Button */}
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

        </div>
    )
}

export default Card