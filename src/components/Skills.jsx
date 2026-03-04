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

const techLogos = [
    { node: <SiCplusplus />, title: "Express", href: "https://github.com/mihir1707" },
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNodedotjs />, title: "Next.js", href: "https://nodejs.org/en" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <SiPython />, title: "Python", href: "https://www.python.org" },
    { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
    { node: <SiRedis />, title: "Express", href: "https://redis.io" },
    { node: <SiGit />, title: "Express", href: "https://git-scm.com" },
    { node: <SiGithub />, title: "Express", href: "https://github.com/mihir1707" },
    { node: <SiMongodb />, title: "Express", href: "https://github.com/mihir1707" },
    { node: <SiHtml5 />, title: "Express", href: "https://github.com/mihir1707" },

];

function Skills() {
    return (
        <section className="w-full py-20 text-white">

            <h2 className="text-4xl font-bold text-center">
                My Skills
            </h2>
            <br /><br />

            <div className="h-[200px] relative overflow-hidden mt-10">

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

        </section>
    );
}

export default Skills;