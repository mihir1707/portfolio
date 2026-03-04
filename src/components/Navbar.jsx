import GooeyNav from "./ui/GooeyNav";
import { useLocation } from "react-router-dom";

function Navbar() {

    const location = useLocation();

    const items = [
        { label: "Home", href: "/" },
        { label: "Projects", href: "/projects" },
        { label: "Competitive", href: "/competitive" },
    ];

    const activeIndex = items.findIndex(item => item.href === location.pathname);

    return (
        <div className="fixed top-6 left-0 w-full flex justify-center z-50">
            <GooeyNav
                items={items}
                particleCount={15}
                particleDistances={[90, 10]}
                particleR={100}
                initialActiveIndex={activeIndex}
                animationTime={600}
                timeVariance={300}
                colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
        </div>
    );
}

export default Navbar;