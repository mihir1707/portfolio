import React from 'react'
import Navbar from '../components/Navbar.jsx'
import HeroSection from '../components/HeroSection.jsx'
import Card from '../components/Card.jsx'
import Skills from '../components/Skills.jsx'

function Home() {
    return (
        <div>
            <HeroSection/>
            <Skills/>
            <Card/>
        </div>
    )
}

export default Home
