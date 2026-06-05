import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Home from "./pages/Home.jsx"
import Competitive from "./pages/Competitive.jsx"
import DotGrid from "./components/ui/DotGrid.jsx"
import Projects from "./pages/Projects.jsx"
import Navbar from "./components/Navbar.jsx"

function App() {
  const location = useLocation();

  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        <div className="fixed inset-0 -z-10 bg-black">
          <DotGrid
            dotSize={4}
            gap={20}
            baseColor="#333333"
            activeColor="#ffffff"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        <Navbar/>
        <div className="pt-14">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/competitive" element={<Competitive />} />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}

export default App
