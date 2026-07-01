import React, { useState, useEffect } from "react";
import GlareHover from "./ui/GlareHover";
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";
import { Trophy, TrendingUp, CheckCircle2, Target, Zap, Star } from "lucide-react";

// ── Mini stat pill ───────────────────────────────────────────────────────────
const Pill = ({ label, value, color = "text-cyan-300" }) => (
    <div className="flex flex-col items-center bg-white/5 border border-white/10 rounded-2xl px-4 py-3 flex-1 min-w-[80px]">
        <span className={`text-xl font-bold ${color}`}>{value}</span>
        <span className="text-gray-500 text-[11px] mt-0.5 text-center">{label}</span>
    </div>
);

// ── Difficulty bar ───────────────────────────────────────────────────────────
const DiffBar = ({ label, count, total, color, barColor }) => {
    const pct = total > 0 ? Math.round((count / total) * 100) : 0;
    return (
        <div className="flex items-center gap-3">
            <span className={`text-xs font-semibold w-14 shrink-0 ${color}`}>{label}</span>
            <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${pct}%`, backgroundColor: barColor }}
                />
            </div>
            <span className="text-white text-xs font-semibold w-8 text-right">{count}</span>
        </div>
    );
};

function Platform() {
    // ── LeetCode state ───────────────────────────────────────────────────────
    const [lcRating,    setLcRating]    = useState("...");
    const [lcMaxRating, setLcMaxRating] = useState("...");
    const LC_TOTAL   = 1353;
    const LC_EASY    = 380;   // update when needed
    const LC_MEDIUM  = 810;
    const LC_HARD    = 163;

    // ── Codeforces state ─────────────────────────────────────────────────────
    const [cfRating,    setCfRating]    = useState("...");
    const [cfMaxRating, setCfMaxRating] = useState("...");
    const [cfRank,      setCfRank]      = useState("...");
    const [cfSolved,    setCfSolved]    = useState("...");
    const [cfContests,  setCfContests]  = useState("...");

    useEffect(() => {
        // ── LeetCode contest rating ──────────────────────────────────────────
        fetch("https://alfa-leetcode-api.onrender.com/MK_1502/contest")
            .then(r => r.json())
            .then(cData => {
                if (cData?.contestRating) setLcRating(Math.round(cData.contestRating).toString());
                if (cData?.contestParticipation?.length > 0) {
                    const maxR = Math.max(...cData.contestParticipation.map(c => c.rating));
                    setLcMaxRating(Math.round(maxR).toString());
                }
            })
            .catch(() => {});

        // ── Codeforces user info ─────────────────────────────────────────────
        fetch("https://codeforces.com/api/user.info?handles=_Infinity_Leo_")
            .then(res => res.json())
            .then(data => {
                if (data?.status === "OK" && data.result?.length > 0) {
                    const user = data.result[0];
                    if (user.rating)    setCfRating(user.rating.toString());
                    if (user.maxRating) setCfMaxRating(user.maxRating.toString());
                    if (user.rank) {
                        setCfRank(user.rank.charAt(0).toUpperCase() + user.rank.slice(1));
                    }
                }
            })
            .catch(() => {});

        // ── Codeforces unique solved + contest count ─────────────────────────
        fetch("https://codeforces.com/api/user.status?handle=_Infinity_Leo_&from=1&count=10000")
            .then(r => r.json())
            .then(data => {
                if (data?.status === "OK" && Array.isArray(data.result)) {
                    const seen = new Set();
                    data.result.forEach(sub => {
                        if (sub.verdict === "OK" && sub.problem)
                            seen.add(`${sub.problem.contestId}-${sub.problem.index}`);
                    });
                    setCfSolved(seen.size);
                }
            })
            .catch(() => {});

        fetch("https://codeforces.com/api/user.rating?handle=_Infinity_Leo_")
            .then(r => r.json())
            .then(data => {
                if (data?.status === "OK") setCfContests(data.result.length);
            })
            .catch(() => {});
    }, []);

    return (
        <div className="text-white min-h-screen px-6 sm:px-16 py-20">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mt-12 mb-20">
                CP &amp; DSA
            </h1>

            {/* ── Platform Quick-Access Cards ───────────────────────────── */}
            <div className="flex flex-wrap items-center justify-center gap-6 max-w-5xl mx-auto">

                <GlareHover glareColor="#ffffff" glareOpacity={0.5} glareAngle={-30} glareSize={300} transitionDuration={1500} playOnce={false}
                    className="w-full h-full max-w-[280px] max-h-[110px] rounded-2xl bg-black border border-white/20 p-4 hover:border-white transition-colors duration-300">
                    <div onClick={() => window.open("https://leetcode.com/MK_1502", "_blank")}
                        className="flex items-center justify-start gap-4 w-full h-full cursor-pointer">
                        <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl border border-white shrink-0">
                            <SiLeetcode className="text-3xl text-yellow-400" />
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <h2 className="text-xl font-bold text-white leading-tight">LeetCode</h2>
                            <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="text-gray-400 text-sm">Rating:</span>
                                <span className="text-cyan-300 text-sm font-semibold">{lcRating} (max. {lcMaxRating})</span>
                            </div>
                            <p className="text-sm font-bold text-cyan-300 mt-0.5">Knight</p>
                        </div>
                    </div>
                </GlareHover>

                <GlareHover glareColor="#ffffff" glareOpacity={0.5} glareAngle={-30} glareSize={300} transitionDuration={1500} playOnce={false}
                    className="w-full h-full max-w-[280px] max-h-[110px] rounded-2xl bg-black border border-white/20 p-4 hover:border-white transition-colors duration-300">
                    <div onClick={() => window.open("https://codeforces.com/profile/_Infinity_Leo_", "_blank")}
                        className="flex items-center justify-start gap-4 w-full h-full cursor-pointer">
                        <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl border border-white shrink-0">
                            <div className="flex items-end gap-[2px]">
                                <div className="w-[5px] h-[12px] bg-yellow-400 rounded-sm"></div>
                                <div className="w-[5px] h-[18px] bg-blue-500 rounded-sm"></div>
                                <div className="w-[5px] h-[10px] bg-red-500 rounded-sm"></div>
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <h2 className="text-xl font-bold text-white leading-tight">Codeforces</h2>
                            <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="text-gray-400 text-sm">Rating:</span>
                                <span className="text-cyan-300 text-sm font-semibold">{cfRating} (max. {cfMaxRating})</span>
                            </div>
                            <p className="text-sm font-bold text-cyan-300 mt-0.5">{cfRank}</p>
                        </div>
                    </div>
                </GlareHover>

                <GlareHover glareColor="#ffffff" glareOpacity={0.5} glareAngle={-30} glareSize={300} transitionDuration={1500} playOnce={false}
                    className="w-full h-full max-w-[280px] max-h-[110px] rounded-2xl bg-black border border-white/20 p-4 hover:border-white transition-colors duration-300">
                    <div onClick={() => window.open("https://www.codechef.com/users/infinity_leo", "_blank")}
                        className="flex items-center justify-start gap-4 w-full h-full cursor-pointer">
                        <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl border border-white shrink-0">
                            <SiCodechef className="text-3xl text-orange-400" />
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <h2 className="text-xl font-bold text-white leading-tight">CodeChef</h2>
                            <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="text-gray-400 text-sm">Rating:</span>
                                <span className="text-cyan-300 text-sm font-semibold">1694</span>
                            </div>
                            <p className="text-sm font-bold text-cyan-300 mt-0.5">3 Star</p>
                        </div>
                    </div>
                </GlareHover>

                <GlareHover glareColor="#ffffff" glareOpacity={0.5} glareAngle={-30} glareSize={300} transitionDuration={1500} playOnce={false}
                    className="w-full h-full max-w-[280px] max-h-[110px] rounded-2xl bg-black border border-white/20 p-4 hover:border-white transition-colors duration-300">
                    <div onClick={() => window.open("https://codolio.com/profile/M_K", "_blank")}
                        className="flex items-center justify-start gap-4 w-full h-full cursor-pointer">
                        <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl border border-white shrink-0 overflow-hidden">
                            <img src="/assets/Codolio.png" className="w-8 h-8 object-contain" alt="Codolio" />
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <h2 className="text-xl font-bold text-white leading-tight">Codolio</h2>
                            <p className="text-sm font-medium text-gray-300 mt-0.5">Overall Performance</p>
                        </div>
                    </div>
                </GlareHover>

                <GlareHover glareColor="#ffffff" glareOpacity={0.5} glareAngle={-30} glareSize={300} transitionDuration={1500} playOnce={false}
                    className="w-full h-full max-w-[280px] max-h-[110px] rounded-2xl bg-black border border-white/20 p-4 hover:border-white transition-colors duration-300">
                    <div onClick={() => window.open("https://icpc.global/ICPCID/K3HXF2X95VCK", "_blank")}
                        className="flex items-center justify-start gap-4 w-full h-full cursor-pointer">
                        <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl border border-white shrink-0 overflow-hidden">
                            <img src="https://i.ibb.co/6J0r7rW/Daco-5610880.png" className="w-8 h-8 object-contain" alt="ICPC Global" />
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <h2 className="text-xl font-bold text-white leading-tight">ICPC 2025</h2>
                            <div className="flex items-center gap-1 mt-0.5">
                                <span className="text-gray-400 text-xs">Team:</span>
                                <span className="text-white text-xs font-semibold">Eternal Force</span>
                            </div>
                            <div className="flex items-center gap-1 mt-0.5">
                                <span className="text-gray-400 text-xs">Rank:</span>
                                <span className="text-cyan-300 text-xs font-bold">51</span>
                                <span className="text-gray-500 text-[11px] ml-1">(Kanpur)</span>
                            </div>
                        </div>
                    </div>
                </GlareHover>

            </div>

            {/* ── Detailed Stats ─────────────────────────────────────────── */}
            <div className="mt-28 flex flex-col items-center justify-center gap-12 max-w-5xl mx-auto">

                {/* Section title */}
                <div className="flex items-center gap-4">
                    <div className="h-[2px] w-24 sm:w-48 bg-gradient-to-r from-transparent to-white/30"></div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-center text-white tracking-wide">
                        Detailed Stats
                    </h2>
                    <div className="h-[2px] w-24 sm:w-48 bg-gradient-to-l from-transparent to-white/30"></div>
                </div>

                <div className="flex flex-wrap items-start justify-center gap-8 w-full">

                    {/* ── LeetCode Custom Card ─────────────────────────── */}
                    <div className="flex-1 min-w-[300px] max-w-[420px] bg-black border border-white/15 rounded-3xl p-6 flex flex-col gap-5
                                    hover:border-white/40 hover:shadow-[0_0_40px_rgba(255,255,255,0.06)] transition-all duration-500">

                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center">
                                    <SiLeetcode className="text-xl text-yellow-400" />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-base leading-tight">LeetCode</p>
                                    <p className="text-yellow-400 text-xs font-semibold">Knight 🏅</p>
                                </div>
                            </div>
                            <a href="https://leetcode.com/MK_1502" target="_blank" rel="noopener noreferrer"
                                className="text-xs text-gray-500 hover:text-white transition px-3 py-1 border border-white/10 rounded-full hover:border-white/30">
                                MK_1502 ↗
                            </a>
                        </div>

                        {/* Rating pills */}
                        <div className="flex gap-3">
                            <Pill label="Contest Rating" value={lcRating} color="text-cyan-300" />
                            <Pill label="Peak Rating"    value={lcMaxRating} color="text-purple-400" />
                            <Pill label="Total Solved"   value={LC_TOTAL} color="text-green-400" />
                        </div>

                        {/* Difficulty breakdown */}
                        <div className="flex flex-col gap-3 bg-white/5 rounded-2xl p-4">
                            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Difficulty Breakdown</p>
                            <DiffBar label="Easy"   count={LC_EASY}   total={LC_TOTAL} color="text-green-400"  barColor="#4ade80" />
                            <DiffBar label="Medium" count={LC_MEDIUM} total={LC_TOTAL} color="text-yellow-400" barColor="#facc15" />
                            <DiffBar label="Hard"   count={LC_HARD}   total={LC_TOTAL} color="text-red-400"    barColor="#f87171" />
                        </div>

                        {/* Extra badges */}
                        <div className="flex flex-wrap gap-2">
                            {["Knight", "100 Days Badge", "Annual Badge 2024"].map(b => (
                                <span key={b} className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                                    {b}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* ── Codeforces Custom Card ───────────────────────── */}
                    <div className="flex-1 min-w-[300px] max-w-[420px] bg-black border border-white/15 rounded-3xl p-6 flex flex-col gap-5
                                    hover:border-white/40 hover:shadow-[0_0_40px_rgba(255,255,255,0.06)] transition-all duration-500">

                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                                    <div className="flex items-end gap-[2px]">
                                        <div className="w-[4px] h-[9px] bg-yellow-400 rounded-sm"></div>
                                        <div className="w-[4px] h-[14px] bg-blue-400 rounded-sm"></div>
                                        <div className="w-[4px] h-[7px] bg-red-400 rounded-sm"></div>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-white font-bold text-base leading-tight">Codeforces</p>
                                    <p className="text-blue-400 text-xs font-semibold">{cfRank}</p>
                                </div>
                            </div>
                            <a href="https://codeforces.com/profile/_Infinity_Leo_" target="_blank" rel="noopener noreferrer"
                                className="text-xs text-gray-500 hover:text-white transition px-3 py-1 border border-white/10 rounded-full hover:border-white/30">
                                _Infinity_Leo_ ↗
                            </a>
                        </div>

                        {/* Rating pills */}
                        <div className="flex gap-3">
                            <Pill label="Current Rating" value={cfRating}    color="text-cyan-300" />
                            <Pill label="Peak Rating"    value={cfMaxRating} color="text-purple-400" />
                            <Pill label="Problems AC"    value={cfSolved}    color="text-green-400" />
                        </div>

                        {/* Contests & extra info */}
                        <div className="flex flex-col gap-3 bg-white/5 rounded-2xl p-4">
                            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Activity</p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-sm text-gray-300">
                                    <Trophy size={14} className="text-yellow-400" />
                                    <span>Contests</span>
                                </div>
                                <span className="text-white font-bold">{cfContests}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-sm text-gray-300">
                                    <CheckCircle2 size={14} className="text-green-400" />
                                    <span>Problems Solved</span>
                                </div>
                                <span className="text-white font-bold">{cfSolved}</span>
                            </div>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-2">
                            {["ICPC Regionalist 2025", "Specialist", "Active Contestant"].map(b => (
                                <span key={b} className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                                    {b}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Platform;