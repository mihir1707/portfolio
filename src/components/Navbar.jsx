import GooeyNav from "./ui/GooeyNav";
import { useLocation } from "react-router-dom";

function Navbar() {

    const location = useLocation();

    const items = [
        { label: "Home", href: "/" },
        { label: "Projects", href: "/projects" },
        { label: "CP & DSA", href: "/competitive" },
    ];

    const activeIndex = items.findIndex(item => item.href === location.pathname);

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 p-1 rounded-[2rem] shadow-2xl">
                <GooeyNav
                    items={items}
                    particleCount={15}
                    particleDistances={[90, 10]}
                    particleR={100}
                    initialActiveIndex={activeIndex !== -1 ? activeIndex : 0}
                    animationTime={600}
                    timeVariance={300}
                    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                />
            </div>
        </div>
    );
}

export default Navbar;