import React from 'react'
import { motion } from 'framer-motion'
import About from '../components/About.jsx'
import Footer from '../components/Footer.jsx'

function AboutPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-white min-h-screen flex flex-col"
        >
            <div className="flex-1 pt-10">
                <About />
            </div>
            <Footer />
        </motion.div>
    )
}

export default AboutPage
