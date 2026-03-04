import React from "react";
import GradientText from "./ui/GradientText";
import { Download } from "lucide-react";
import SocialLinks from "./SocialLinks";
import { Link } from "react-router-dom";

function HeroSection() {
    return (
        <section className="min-h-screen text-white flex items-center">

            <div className="max-w-7xl mx-auto w-full px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12">

                <div className="flex-1 space-y-6">

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                        <span>Hi, I'm </span>
                        <GradientText
                            colors={["#5227FF", "#FF9FFC", "#B19EEF", "#ffffff", "#20426f", "#676ed5"]}
                            animationSpeed={5}
                            showBorder={false}
                        >
                            Mihir Khunt
                        </GradientText>
                    </h1>
                    <br/>
                    <div className="flex gap-15">
                        <a 
                            href="/resume.pdf"
                            className="flex items-center justify-center gap-2 px-6 py-3 h-10 w-1/3 cursor-pointer bg-purple-600 hover:bg-purple-700 rounded-full transition"
                        >
                            <Download size={18} />
                            Download Resume
                        </a>

                        <Link
                            to="/projects"
                            className="flex items-center justify-center gap-2 px-6 py-3 h-10 w-1/3 cursor-pointer border border-white/20 hover:bg-white/10 rounded-full transition"
                        >
                            View Projects
                        </Link>
                    </div>
                    <br/>
                    <SocialLinks/>
                </div>


                <div className="flex-1 flex justify-center lg:justify-end">

                    <div className="relative">
                        <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-purple-600 shadow-[0_0_40px_rgba(139,92,246,0.6)]">

                            <img
                                src="/images/profile.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default HeroSection;