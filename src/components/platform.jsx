import React from "react";
import GlareHover from "./ui/GlareHover";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";

function Platform() {
    return (
        <div className="text-white min-h-screen px-16 py-20">
            <br /><br /><br />
            <br /><br />

            <h1 className="text-4xl font-bold text-center mb-20">
                Competitive Programming
            </h1>
            <br />

            <div className=" flex items-center justify-center gap-2">

                <GlareHover
                    glareColor="#8549f3"
                    glareOpacity={0.5}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={1500}
                    playOnce={false}
                    className=" rounded-2xl bg-[#0f0a1f] border border-purple-900 max-h-[120px] max-w-[280px]"
                >
                    <div
                        onClick={() => window.open("https://leetcode.com/MK_1502", "_blank")}
                        className="flex items-center justify-start gap-6"
                    >
                        <SiLeetcode className="text-5xl text-yellow-400" />

                        <div>
                            <h2 className="text-2xl font-semibold">LeetCode</h2>
                            <p className="text-gray-400">Rating: <span className="text-cyan-300 font-bold">1916</span></p>
                            <p className="text-md font-bold text-cyan-300">Knight</p>
                        </div>
                    </div>
                </GlareHover>

                <GlareHover
                    glareColor="#8549f3"
                    glareOpacity={0.5}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={1500}
                    playOnce={false}
                    className="rounded-2xl bg-[#0f0a1f] border border-purple-900 max-h-[120px] max-w-[280px]"
                >
                    <div
                        onClick={() => window.open("https://codeforces.com/profile/_Infinity_Leo_", "_blank")}
                        className="flex items-center justify-start gap-6"
                    >
                        <div className="flex items-end gap-[3px]">
                            <div className="w-[10px] h-[26px] bg-yellow-400 rounded-sm"></div>
                            <div className="w-[10px] h-[34px] bg-blue-500 rounded-sm"></div>
                            <div className="w-[10px] h-[22px] bg-red-500 rounded-sm"></div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold">Codeforces</h2>
                            <p className="text-gray-400">Rating: <span className="text-cyan-300 font-bold">1547</span></p>
                            <p className="text-md font-bold text-cyan-300">Specialist</p>
                        </div>
                    </div>
                </GlareHover>

                <GlareHover
                    glareColor="#8549f3"
                    glareOpacity={0.5}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={1500}
                    playOnce={false}
                    className="rounded-2xl bg-[#0f0a1f] border border-purple-900 max-h-[120px] max-w-[280px]"
                >
                    <div
                        onClick={() => window.open("https://www.codechef.com/users/infinity_leo", "_blank")}
                        className="flex items-center justify-start gap-6"
                    >
                        <SiCodechef className="text-5xl text-orange-400" />

                        <div>
                            <h2 className="text-2xl font-semibold">CodeChef</h2>
                            <p className="text-gray-400">Rating: <span className="text-cyan-300 font-bold">1694</span></p>
                            <p className="text-md font-bold text-cyan-300">3 Star</p>
                        </div>
                    </div>
                </GlareHover>

                <GlareHover
                    glareColor="#8549f3"
                    glareOpacity={0.5}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={1500}
                    playOnce={false}
                    className="rounded-2xl bg-[#0f0a1f] border border-purple-900 max-h-[120px] max-w-[280px]"
                >
                    <div
                        onClick={() => window.open("https://codolio.com/profile/M_K", "_blank")}
                        className="flex items-center justify-start gap-6"
                    >
                        <img src="/assets/Codolio.png" className="w-20 h-20" />

                        <div>
                            <h2 className="text-2xl font-semibold">Codolio</h2>
                            <p className="text-gray-500 text-sm">OverAll Performance</p>
                        </div>
                    </div>
                </GlareHover>

            </div>

        </div>
    );
}

export default Platform;