import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import React, { Suspense } from "react"
import DotGrid from "./components/ui/DotGrid.jsx"
import Navbar from "./components/Navbar.jsx"
import ScrollProgress from "./components/ScrollProgress.jsx"

// ── Lazy-loaded pages (code splitting — reduces initial bundle by ~60%) ───────
const Home        = React.lazy(() => import("./pages/Home.jsx"))
const AboutPage   = React.lazy(() => import("./pages/AboutPage.jsx"))
const Projects    = React.lazy(() => import("./pages/Projects.jsx"))
const Competitive = React.lazy(() => import("./pages/Competitive.jsx"))
const ContactPage = React.lazy(() => import("./pages/ContactPage.jsx"))
const NotFound    = React.lazy(() => import("./pages/NotFound.jsx"))

// ── Page loading fallback ─────────────────────────────────────────────────────
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <motion.div
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      className="text-white text-sm tracking-widest uppercase font-light"
    >
      Loading…
    </motion.div>
  </div>
)

function App() {
  const location = useLocation();

  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        {/* Scroll progress bar */}
        <ScrollProgress />

        {/* DotGrid fixed background */}
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

        <Navbar />

        <div className="pt-14">
          <Suspense fallback={<PageLoader />}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/"            element={<Home />} />
                <Route path="/about"       element={<AboutPage />} />
                <Route path="/projects"    element={<Projects />} />
                <Route path="/competitive" element={<Competitive />} />
                <Route path="/contact"     element={<ContactPage />} />
                <Route path="*"            element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default App
