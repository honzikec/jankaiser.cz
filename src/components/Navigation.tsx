import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollYProgress } = useScroll();

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Adaptive color for the burger icon based on scroll position (matching Logo.tsx)
    const iconColor = useTransform(
        scrollYProgress,
        [0.10, 0.12, 0.56, 0.60, 0.68, 0.72, 0.81, 0.85, 0.90, 0.93],
        ['#3e3e3f', '#ffffff', '#ffffff', '#3e3e3f', '#3e3e3f', '#ffffff', '#ffffff', '#3e3e3f', '#3e3e3f', '#ffffff']
    );

    const navLinks = [
        { name: "Start", href: "#intro" },
        { name: "How I Work", href: "#story" },
        { name: "Philosophy", href: "#statement" },
        { name: "Clients", href: "#clients" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            {/* Fixed Burger Button */}
            <motion.button
                onClick={() => setIsOpen(true)}
                className="fixed top-6 right-6 md:top-10 md:right-10 z-50 p-2 hover:scale-105 transition-transform focus:outline-none"
                style={{ color: iconColor }}
                aria-label="Open Menu"
            >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </motion.button>

            {/* Fullscreen Overlay Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[60] bg-brand-bg/75 backdrop-blur-lg flex flex-col justify-center items-center"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 md:top-10 md:right-10 p-4 text-brand-text hover:text-brand-blue hover:scale-110 transition-all focus:outline-none"
                            aria-label="Close Menu"
                        >
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        {/* Navigation Links */}
                        <motion.nav
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                                }
                            }}
                            className="flex flex-col items-center gap-6 md:gap-8"
                        >
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
                                    }}
                                    className="text-2xl md:text-4xl font-bold text-brand-text hover:text-brand-blue transition-colors tracking-tight"
                                >
                                    {link.name}
                                </motion.a>
                            ))}

                            {/* Download CV Button */}
                            <motion.a
                                href="/download/jankaiser_cv_en.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
                                }}
                                className="mt-8 px-8 py-4 bg-brand-blue text-white text-xl md:text-2xl font-bold rounded-full hover:bg-brand-blue/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Download CV
                            </motion.a>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence >
        </>
    );
}
