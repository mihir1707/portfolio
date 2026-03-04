import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Competitive from "./pages/Competitive.jsx"
import DotGrid from "./components/ui/DotGrid.jsx"
import Projects from "./pages/Projects.jsx"
import Navbar from "./components/Navbar.jsx"

function App() {

  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        <div className="fixed inset-0 -z-10">
          <DotGrid
            dotSize={4}
            gap={20}
            baseColor="#271E37"
            activeColor="#5227FF"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        <Navbar/>
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/competitive" element={<Competitive />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
