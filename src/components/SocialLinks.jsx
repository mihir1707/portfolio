import { Github, Linkedin, Mail, Twitter } from "lucide-react";

function SocialLinks() {
    return (
        <div className="flex items-center gap-6">

            {/* GitHub */}
            <a
                href="https://github.com/mihir1707"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
            >
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-black border border-white/20 
                        hover:bg-neutral-800 hover:border-white 
                        transition duration-300 hover:scale-110">
                    <Github
                        size={24}
                        className="text-gray-300 group-hover:text-purple-400 transition"
                    />
                </div>
            </a>

            {/* LinkedIn */}
            <a
                href="https://www.linkedin.com/in/mihir-khunt-5a29402bb/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
            >
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-black border border-white/20 
                        hover:bg-neutral-800 hover:border-white 
                        transition duration-300 hover:scale-110">
                    <Linkedin
                        size={24}
                        className="text-gray-300 group-hover:text-purple-400 transition"
                    />
                </div>
            </a>

            {/* Twitter / X */}
            <a
                href="https://twitter.com/mihir_khunt"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
            >
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-black border border-white/20 
                        hover:bg-neutral-800 hover:border-white 
                        transition duration-300 hover:scale-110">
                    <Twitter
                        size={24}
                        className="text-gray-300 group-hover:text-purple-400 transition"
                    />
                </div>
            </a>

            {/* Email */}
            <a
                href="mihirkhunt2006@gmail.com"
                className="group"
            >
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-black border border-white/20 
                        hover:bg-neutral-800 hover:border-white 
                        transition duration-300 hover:scale-110">
                    <Mail
                        size={24}
                        className="text-gray-300 group-hover:text-purple-400 transition"
                    />
                </div>
            </a>

        </div>
    );
}

export default SocialLinks;