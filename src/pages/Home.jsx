import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar.jsx'
import HeroSection from '../components/HeroSection.jsx'
import Card from '../components/Card.jsx'
import Skills from '../components/Skills.jsx'

function Home() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="pb-24"
        >
            <HeroSection/>
            <Skills/>
            <Card/>
        </motion.div>
    )
}

export default Home
