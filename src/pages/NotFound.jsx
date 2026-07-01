import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

function NotFound() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="min-h-screen flex flex-col items-center justify-center text-white px-6 text-center"
        >
            {/* Glowing 404 */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="relative mb-6"
            >
                <p className="text-[8rem] sm:text-[12rem] font-black leading-none text-white/5 select-none">
                    404
                </p>
                <p className="absolute inset-0 flex items-center justify-center text-5xl sm:text-7xl font-black text-white">
                    404
                </p>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="text-2xl sm:text-3xl font-bold mb-3"
            >
                Page Not Found
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="text-gray-400 max-w-sm mb-10 leading-relaxed"
            >
                The page you're looking for doesn't exist or has been moved.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
            >
                <Link
                    to="/"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
                >
                    <Home size={18} />
                    Go Home
                </Link>
                <button
                    onClick={() => window.history.back()}
                    className="flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition-all duration-300"
                >
                    <ArrowLeft size={18} />
                    Go Back
                </button>
            </motion.div>
        </motion.div>
    );
}

export default NotFound;
