import React from 'react'
import SpotlightCard from './ui/SpotlightCard'
import { Terminal, Rocket } from "lucide-react";
import { Link } from 'react-router-dom';

function Card() {
    return (
        <div className="flex gap-10 justify-center items-center text-white px-6">

            <SpotlightCard
                spotlightColor="rgba(139, 92, 246, 0.15)"
                className="w-95 h-65 rounded-3xl p-10
                border border-purple-500/20 
                shadow-[0_0_40px_rgba(139,92,246,0.15)]
                flex flex-col justify-between"
            >
                <div className="flex items-end justify-center flex-1 bg-[#0b0618]">
                    <Terminal size={50} className="text-purple-400" />
                    <h1 className="text-3xl font-semibold text-center">
                        Competitive Coding
                    </h1>
                </div>

                <p className="text-sm text-gray-400 flex items-center justify-center flex-1 bg-[#0b0618]">
                    Check out my coding profiles and achievements
                </p>

                <div className="flex justify-center pb-2 bg-[#0b0618]">
                    <Link
                        to="/competitive"
                        className="cursor-pointer text-md rounded-full hover:bg-purple-600/20 transition-all duration-300">
                        View Profiles
                    </Link>
                </div>
                <br/>
            </SpotlightCard>


            <SpotlightCard
                spotlightColor="rgba(139, 92, 246, 0.15)"
                className="w-95 h-65 rounded-3xl p-10 
                shadow-[0_0_40px_rgba(139,92,246,0.15)] 
                flex flex-col justify-between"
            >
                <div className="flex items-end justify-center flex-1 bg-[#0b0618]">
                    <Rocket size={50} className="text-purple-400" />
                    <h1 className="text-3xl font-semibold text-center">
                        Projects
                    </h1>
                </div>
                
                <p className="text-sm text-gray-400 flex items-center justify-center flex-1 bg-[#0b0618]">
                    Explore my projects and coding journey
                </p>

                <div className="flex justify-center bg-[#0b0618]">
                    <Link 
                        to="/projects"
                        className="cursor-pointer text-md rounded-full hover:bg-purple-600/20 transition-all duration-300"
                    >
                        View Projects
                    </Link>
                </div>
                <br/>
            </SpotlightCard>

        </div>
    )
}

export default Card