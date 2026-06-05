import React from "react";
import GradientText from "./ui/GradientText";
import { Download } from "lucide-react";
import SocialLinks from "./SocialLinks";
import { Link } from "react-router-dom";

function HeroSection() {
    return (
        <section className="min-h-[85vh] pt-24 pb-12 text-white flex items-center">

            <div className="max-w-7xl mx-auto w-full px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12">

                <div className="flex-1 flex flex-col gap-10">

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
                    
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-6 sm:gap-10">
                            <a 
                                href="/resume.pdf"
                                className="flex items-center justify-center gap-2 px-6 py-3 h-12 w-fit cursor-pointer bg-black text-white border border-white hover:bg-neutral-800 rounded-full transition whitespace-nowrap"
                            >
                                <Download size={18} />
                                Download Resume
                            </a>

                            <Link
                                to="/projects"
                                className="flex items-center justify-center gap-2 px-6 py-3 h-12 w-fit cursor-pointer bg-black text-white border border-white/50 hover:bg-neutral-800 rounded-full transition whitespace-nowrap"
                            >
                                View Projects
                            </Link>
                        </div>
                        
                        <SocialLinks/>
                    </div>
                </div>


                <div className="flex-1 flex justify-center lg:justify-end">

                    <div className="relative">
                        <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-[0_0_40px_rgba(0,0,0,0.3)]">

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