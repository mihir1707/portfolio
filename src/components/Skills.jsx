import React from "react";
import LogoLoop from "./ui/LogoLoop";
import {
    SiCplusplus,
    SiPython,
    SiHtml5,
    SiJavascript,
    SiTailwindcss,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiRedis,
    SiGit,
    SiGithub,
} from "react-icons/si";

const SkillCard = ({ icon, name }) => (
    <div className="flex items-center gap-4 bg-black border border-white/20 px-6 py-3 rounded-2xl hover:border-white transition-colors duration-300">
        <div className="text-3xl text-white">{icon}</div>
        <span className="text-lg font-semibold text-white whitespace-nowrap">{name}</span>
    </div>
);

const techLogos = [
    { node: <SkillCard icon={<SiCplusplus />} name="C++" />, href: "https://github.com/mihir1707" },
    { node: <SkillCard icon={<SiPython />} name="Python" />, href: "https://www.python.org" },
    { node: <SkillCard icon={<SiHtml5 />} name="HTML5" />, href: "https://github.com/mihir1707" },
    { node: <SkillCard icon={<SiJavascript />} name="JavaScript" />, href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <SkillCard icon={<SiTailwindcss />} name="Tailwind CSS" />, href: "https://tailwindcss.com" },
    { node: <SkillCard icon={<SiReact />} name="React" />, href: "https://react.dev" },
    { node: <SkillCard icon={<SiNodedotjs />} name="Node.js" />, href: "https://nodejs.org/en" },
    { node: <SkillCard icon={<SiExpress />} name="Express" />, href: "https://expressjs.com" },
    { node: <SkillCard icon={<SiMongodb />} name="MongoDB" />, href: "https://github.com/mihir1707" },
    { node: <SkillCard icon={<SiRedis />} name="Redis" />, href: "https://redis.io" },
    { node: <SkillCard icon={<SiGit />} name="Git" />, href: "https://git-scm.com" },
    { node: <SkillCard icon={<SiGithub />} name="GitHub" />, href: "https://github.com/mihir1707" },
];

function Skills() {
    return (
        <section className="w-full pt-0 pb-20 text-white">
            <h2 className="text-4xl font-bold text-center mb-6 pt-10">
                My Skills
            </h2>

            <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-6">
                <div className="w-full h-[2px] bg-white shadow-[0_4px_12px_rgba(0,0,0,1)]"></div>
            </div>

            <div className="h-[100px] relative overflow-hidden mt-10">

                <LogoLoop
                    logos={techLogos}
                    speed={120}
                    direction="left"
                    width="100%"
                    logoHeight={60}
                    gap={50}
                    hoverSpeed={0}
                    fadeOut={true}
                    scaleOnHover={true}
                />

            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-16 mt-0 mb-6">
                <div className="w-full h-[2px] bg-white shadow-[0_4px_12px_rgba(0,0,0,1)]"></div>
            </div>

        </section>
    );
}

export default Skills;