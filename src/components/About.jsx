import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Code2, Trophy, Layers, Loader2 } from "lucide-react";
import { SiCodeforces } from "react-icons/si";
import { projects } from "../data/constants.js"; // Import projects array

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55, ease: "easeOut", delay },
});

const highlights = [
    {
        icon: <Trophy size={18} className="text-yellow-400" />,
        label: "ICPC 2025 Regionalist",
        sub: "Rank 51 — Kanpur Site, Team: Eternal Force",
    },
    {
        icon: <Code2 size={18} className="text-cyan-400" />,
        label: "LeetCode Knight",
        sub: "Max Rating: 2071",
    },
    {
        icon: <SiCodeforces size={18} className="text-blue-500" />,
        label: "Codeforces Specialist",
        sub: "Max Rating: 1572",
    },
    {
        icon: <Layers size={18} className="text-purple-400" />,
        label: "Full Stack Developer",
        sub: "React · Node.js · Express · MongoDB",
    },
];

function About() {
    const [totalSolved, setTotalSolved] = useState(null); // null = loading
    const [lcSolved]                    = useState(1353);  // hardcoded — update when needed
    const [cfSolved, setCfSolved]       = useState(null);
    const projectCount                  = projects.length; // Dynamic projects count

    useEffect(() => {
        // ── Codeforces unique accepted problems (live) ─────────────────
        fetch(
            "https://codeforces.com/api/user.status?handle=_Infinity_Leo_&from=1&count=10000"
        )
            .then((r) => r.json())
            .then((data) => {
                if (data?.status === "OK" && Array.isArray(data.result)) {
                    const seen = new Set();
                    data.result.forEach((sub) => {
                        if (sub.verdict === "OK" && sub.problem) {
                            seen.add(`${sub.problem.contestId}-${sub.problem.index}`);
                        }
                    });
                    setCfSolved(seen.size);
                } else {
                    setCfSolved(0);
                }
            })
            .catch(() => setCfSolved(0));
    }, []);

    // Compute total once CF arrives
    useEffect(() => {
        if (cfSolved !== null) {
            setTotalSolved(lcSolved + cfSolved);
        }
    }, [cfSolved, lcSolved]);

    const stats = [
        { value: `${projectCount}+`,   label: "Projects" },
        { value: "51",   label: "ICPC Rank" },
        {
            value: totalSolved === null
                ? null          // show spinner
                : `${totalSolved}+`,
            label: "Problems Solved",
            sub: totalSolved !== null
                ? `LC ${lcSolved ?? "…"}  +  CF ${cfSolved ?? "…"}`
                : null,
        },
    ];

    return (
        <section className="w-full py-20 text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-16">

                {/* Section heading */}
                <motion.div {...fadeUp(0)} className="text-center mb-14">
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-[2px] bg-white mx-auto" />
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">

                    {/* Left — Bio */}
                    <motion.div {...fadeUp(0.1)} className="flex-1 flex flex-col gap-6">
                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                            Hi! I'm <span className="text-white font-semibold">Mihir Khunt</span>, a Full Stack Developer and Competitive Programmer.
                            I love solving hard algorithmic problems and turning those logic skills into fast, beautiful web apps.
                        </p>
                        <p className="text-gray-400 text-base leading-relaxed">
                            When I'm not grinding LeetCode or Codeforces, I'm building scalable full-stack projects from the ground up.
                        </p>

                        {/* Highlight pills */}
                        <div className="flex flex-col gap-4 mt-2">
                            {highlights.map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 + i * 0.1 }}
                                    className="flex items-center gap-4 bg-black border border-white/10 rounded-2xl px-5 py-4 hover:border-white/30 transition-colors duration-300"
                                >
                                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                        {h.icon}
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold text-sm">{h.label}</p>
                                        <p className="text-gray-400 text-xs mt-0.5">{h.sub}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — Education card + Stats */}
                    <motion.div {...fadeUp(0.2)} className="flex-1 flex flex-col gap-6">

                        <div className="bg-black border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-colors duration-300">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                                    <GraduationCap size={22} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Education</h3>
                            </div>

                            <div className="flex flex-col gap-2">
                                <p className="text-white font-semibold text-base">
                                    B.Tech in Computer Science &amp; Engineering
                                </p>

                                <div className="flex items-center gap-2 text-gray-400 text-sm">
                                    <MapPin size={14} className="shrink-0" />
                                    <span>Nirma University, Ahmedabad</span>
                                </div>

                                <div className="flex items-center gap-2 text-gray-400 text-sm">
                                    <Calendar size={14} className="shrink-0" />
                                    <span>July 2023 – Present</span>
                                </div>

                                <div className="mt-4 pt-4 border-t border-white/10">
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Focusing on Advanced Data Structures, Algorithms, Software Engineering,
                                        and Modern Web Development practices. CGPA: 7.93/10.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.85 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 + i * 0.08 }}
                                    className="bg-black border border-white/10 rounded-2xl p-4 text-center hover:border-white/30 transition-colors duration-300 flex flex-col items-center justify-center gap-1"
                                >
                                    {/* Value or spinner */}
                                    {stat.value === null ? (
                                        <Loader2 size={20} className="animate-spin text-gray-400" />
                                    ) : (
                                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                                    )}

                                    <p className="text-xs text-gray-400">{stat.label}</p>

                                    {/* LC + CF breakdown (only on problems card) */}
                                    {stat.sub && (
                                        <p className="text-[10px] text-gray-600 mt-0.5 leading-tight">
                                            {stat.sub}
                                        </p>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default About;
