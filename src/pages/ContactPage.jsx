import React from 'react'
import { motion } from 'framer-motion'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

function ContactPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-white min-h-screen flex flex-col"
        >
            <div className="flex-1 pt-16">
                <Contact />
            </div>
            <Footer />
        </motion.div>
    )
}

export default ContactPage
