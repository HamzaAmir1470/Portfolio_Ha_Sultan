import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpeg';


const Hero = ({ sectionRefs }) => { 

    const techStack = ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'Next.js', 'REST APIs'];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    // Function to handle smooth scrolling to sections from buttons
    const handleScrollToSection = (key) => {
        const ref = sectionRefs?.[key];
        if (ref && ref.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center py-20 px-6 bg-[#0f0f0f] text-white overflow-hidden">
            <div className="max-w-6xl mx-auto w-full relative z-10">

                <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">

                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left">
                        {/* Label */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-4"
                        >
                            <span className="text-[#5b6bf0] font-medium text-sm tracking-widest uppercase inline-block">
                                MERN Stack Developer
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-[1.1] tracking-tight"
                        >
                            Building <span className="text-[#5b6bf0]">full-stack</span> products that<br className="hidden sm:block" />
                            work end-to-end
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-[#a3a3a3] max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed mb-8"
                        >
                            I write production-grade React, Node.js, and MongoDB code — from responsive UIs to REST APIs — and contribute to open source between client projects.
                        </motion.p>

                        {/* Buttons Row (Using native smooth scroll) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
                        >
                            <button 
                                onClick={() => handleScrollToSection('work')}
                                className="flex items-center gap-2.5 px-6 py-3 bg-[#5b6bf0] text-white text-sm font-medium rounded-lg hover:bg-[#4a5be0] transition-all border border-[#5b6bf0] cursor-pointer"
                            >
                                {/* Grid Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="7" height="7" />
                                    <rect x="14" y="3" width="7" height="7" />
                                    <rect x="14" y="14" width="7" height="7" />
                                    <rect x="3" y="14" width="7" height="7" />
                                </svg>
                                View projects
                            </button>

                            <button 
                                onClick={() => handleScrollToSection('open-source')}
                                className="flex items-center gap-2.5 px-6 py-3 bg-transparent border border-white/20 text-gray-300 text-sm font-medium rounded-lg hover:text-white hover:border-white/50 transition-all cursor-pointer"
                            >
                                Open source work
                                {/* Arrow Up Right Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="7" y1="17" x2="17" y2="7" />
                                    <polyline points="7 7 17 7 17 17" />
                                </svg>
                            </button>
                        </motion.div>

                        {/* Tech Stack Row */}
                        <motion.div variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-wrap gap-3 justify-center lg:justify-start"
                        >
                            {techStack.map((tech, index) => (
                                <motion.div
                                    key={tech}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium border transition-all ${index < 4
                                        ? 'bg-white text-[#5b6bf0] border-white hover:bg-gray-100'
                                        : 'bg-transparent text-gray-400 border-[#2a2a2a] hover:border-gray-500 hover:text-white'
                                        }`}
                                >
                                    {tech}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-shrink-0"
                    >
                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[#5b6bf0]/30 shadow-2xl shadow-[#5b6bf0]/20">
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                            {/* Glowing ring effect - Adjusted offset for dark background */}
                            <div className="absolute inset-0 rounded-full ring-2 ring-[#5b6bf0]/50 ring-offset-2 ring-offset-[#0f0f0f]"></div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default Hero;