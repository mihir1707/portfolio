import React from "react";
import GlareHover from "./ui/GlareHover";
import { SiLeetcode, SiCodechef } from "react-icons/si";

function Platform() {
    return (
        <div className="text-white min-h-screen px-6 sm:px-16 py-20">
            <h1 className="text-4xl font-bold text-center mt-12 mb-20">
                CP & DSA
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-6 max-w-5xl mx-auto">

                <GlareHover
                    glareColor="#ffffff"
                    glareOpacity={0.5}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={1500}
                    playOnce={false}
                    className="w-full h-full max-w-[280px] max-h-[110px] rounded-2xl bg-black border border-white/20 p-4 hover:border-white transition-colors duration-300"
                >
                    <div
                        onClick={() => window.open("https://leetcode.com/MK_1502", "_blank")}
                        className="flex items-center justify-start gap-4 w-full h-full"
                    >
                        <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl border border-white shrink-0">
                            <SiLeetcode className="text-3xl text-yellow-400" />
                        </div>

                        <div className="flex flex-col items-start justify-center">
                            <h2 className="text-lg font-bold text-white leading-tight">LeetCode</h2>
                            <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="text-gray-400 text-xs">Rating:</span>
                                <span className="text-cyan-300 text-xs font-semibold">1916</span>
                            </div>
                            <p className="text-xs font-bold text-cyan-300 mt-0.5">Knight</p>
                        </div>
                    </div>
                </GlareHover>

                <GlareHover
                    glareColor="#ffffff"
                    glareOpacity={0.5}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={1500}
                    playOnce={false}
                    className="w-full h-full max-w-[280px] max-h-[110px] rounded-2xl bg-black border border-white/20 p-4 hover:border-white transition-colors duration-300"
                >
                    <div
                        onClick={() => window.open("https://codeforces.com/profile/_Infinity_Leo_", "_blank")}
                        className="flex items-center justify-start gap-4 w-full h-full"
                    >
                        <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl border border-white shrink-0">
                            <div className="flex items-end gap-[2px]">
                                <div className="w-[5px] h-[12px] bg-yellow-400 rounded-sm"></div>
                                <div className="w-[5px] h-[18px] bg-blue-500 rounded-sm"></div>
                                <div className="w-[5px] h-[10px] bg-red-500 rounded-sm"></div>
                            </div>
                        </div>

                        <div className="flex flex-col items-start justify-center">
                            <h2 className="text-lg font-bold text-white leading-tight">Codeforces</h2>
                            <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="text-gray-400 text-xs">Rating:</span>
                                <span className="text-cyan-300 text-xs font-semibold">1547</span>
                            </div>
                            <p className="text-xs font-bold text-cyan-300 mt-0.5">Specialist</p>
                        </div>
                    </div>
                </GlareHover>

                <GlareHover
                    glareColor="#ffffff"
                    glareOpacity={0.5}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={1500}
                    playOnce={false}
                    className="w-full h-full max-w-[280px] max-h-[110px] rounded-2xl bg-black border border-white/20 p-4 hover:border-white transition-colors duration-300"
                >
                    <div
                        onClick={() => window.open("https://www.codechef.com/users/infinity_leo", "_blank")}
                        className="flex items-center justify-start gap-4 w-full h-full"
                    >
                        <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl border border-white shrink-0">
                            <SiCodechef className="text-3xl text-orange-400" />
                        </div>

                        <div className="flex flex-col items-start justify-center">
                            <h2 className="text-lg font-bold text-white leading-tight">CodeChef</h2>
                            <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="text-gray-400 text-xs">Rating:</span>
                                <span className="text-cyan-300 text-xs font-semibold">1694</span>
                            </div>
                            <p className="text-xs font-bold text-cyan-300 mt-0.5">3 Star</p>
                        </div>
                    </div>
                </GlareHover>

                <GlareHover
                    glareColor="#ffffff"
                    glareOpacity={0.5}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={1500}
                    playOnce={false}
                    className="w-full h-full max-w-[280px] max-h-[110px] rounded-2xl bg-black border border-white/20 p-4 hover:border-white transition-colors duration-300"
                >
                    <div
                        onClick={() => window.open("https://codolio.com/profile/M_K", "_blank")}
                        className="flex items-center justify-start gap-4 w-full h-full"
                    >
                        <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl border border-white shrink-0 overflow-hidden">
                            <img src="/assets/Codolio.png" className="w-8 h-8 object-contain" />
                        </div>

                        <div className="flex flex-col items-start justify-center">
                            <h2 className="text-lg font-bold text-white leading-tight">Codolio</h2>
                            <p className="text-xs font-medium text-gray-300 mt-0.5">Overall Performance</p>
                        </div>
                    </div>
                </GlareHover>

                <GlareHover
                    glareColor="#ffffff"
                    glareOpacity={0.5}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={1500}
                    playOnce={false}
                    className="w-full h-full max-w-[280px] max-h-[110px] rounded-2xl bg-black border border-white/20 p-4 hover:border-white transition-colors duration-300"
                >
                    <div
                        onClick={() => window.open("https://icpc.global/ICPCID/K3HXF2X95VCK", "_blank")}
                        className="flex items-center justify-start gap-4 w-full h-full"
                    >
                        <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl border border-white shrink-0 overflow-hidden">
                            <img src="https://i.ibb.co/6J0r7rW/Daco-5610880.png" className="w-8 h-8 object-contain" alt="ICPC Global" />
                        </div>

                        <div className="flex flex-col items-start justify-center">
                            <h2 className="text-lg font-bold text-white leading-tight">ICPC 2025</h2>
                            <div className="flex items-center gap-1 mt-0.5">
                                <span className="text-gray-400 text-[11px]">Team:</span>
                                <span className="text-white text-[11px] font-semibold">Eternal Force</span>
                            </div>
                            <div className="flex items-center gap-1 mt-0.5">
                                <span className="text-gray-400 text-[11px]">Rank:</span>
                                <span className="text-cyan-300 text-[11px] font-bold">51</span>
                                <span className="text-gray-500 text-[10px] ml-1">(Kanpur)</span>
                            </div>
                        </div>
                    </div>
                </GlareHover>

            </div>

            <div className="mt-28 flex flex-col items-center justify-center gap-12 max-w-5xl mx-auto">
                <div className="flex items-center gap-4">
                    <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-white/30"></div>
                    <h2 className="text-3xl font-bold text-center text-white tracking-wide">
                        Detailed Stats
                    </h2>
                    <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-white/30"></div>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-10">
                    {/* LeetCode Stats Card */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center gap-2">
                            <SiLeetcode className="text-yellow-400 text-xl" />
                            <h3 className="text-white font-medium tracking-wide">LeetCode Progress</h3>
                        </div>
                        <div className="rounded-3xl border border-white/20 p-3 bg-black shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:border-white/50 transition-all duration-500 overflow-hidden group">
                            <img 
                                src="https://leetcard.jacoblin.cool/MK_1502?theme=dark&font=Baloo&ext=heatmap" 
                                alt="LeetCode Stats" 
                                className="rounded-xl object-contain max-w-full group-hover:scale-[1.02] transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Codeforces Stats Card */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="flex items-end gap-[2px]">
                                <div className="w-[4px] h-[10px] bg-yellow-400 rounded-sm"></div>
                                <div className="w-[4px] h-[16px] bg-blue-500 rounded-sm"></div>
                                <div className="w-[4px] h-[8px] bg-red-500 rounded-sm"></div>
                            </div>
                            <h3 className="text-white font-medium tracking-wide">Codeforces Overview</h3>
                        </div>
                        <div className="rounded-3xl border border-white/20 p-3 bg-black shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:border-white/50 transition-all duration-500 overflow-hidden group">
                            <img 
                                src="https://codeforces-readme-stats.vercel.app/api/card?username=_Infinity_Leo_&theme=dark" 
                                alt="Codeforces Stats" 
                                className="rounded-xl object-contain max-w-full group-hover:scale-[1.02] transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Platform;