import * as React from 'react';
import { motion } from 'framer-motion';

const messageVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", bounce: 0.4, duration: 0.7 } }
};

export default function SyntaxAgnostic() {
    return (
        <section id="agnostic" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden snap-start snap-always py-24 bg-[#0E87B5]">
            <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 w-full flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-white drop-shadow-md tracking-tight">
                        I just solve problems. The syntax is details.
                    </h2>
                </motion.div>

                <motion.div
                    className="flex flex-col gap-6 w-full max-w-2xl px-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ staggerChildren: 0.4, delayChildren: 0.2 }}
                >
                    <motion.div
                        variants={messageVariants}
                        style={{ transformOrigin: 'bottom left' }}
                        className="flex flex-col max-w-[85%] self-start items-start"
                    >
                        <span className="text-white/60 text-xs font-semibold mb-1 ml-2">Recruiter / Client</span>
                        <div className="px-5 py-3 text-[15px] md:text-lg leading-relaxed shadow-lg block bg-white/95 backdrop-blur-sm text-brand-dark rounded-2xl rounded-bl-sm font-medium">
                            We have this legacy system. We need to automatically translate millions of lines of JavaScript business logic into Fortran to run on our mainframe computing cluster. Do you know Fortran?
                        </div>
                    </motion.div>

                    <motion.div
                        variants={messageVariants}
                        style={{ transformOrigin: 'bottom right' }}
                        className="flex flex-col max-w-[85%] self-end items-end"
                    >
                        <div className="px-5 py-3 text-[15px] md:text-lg leading-relaxed shadow-lg block bg-black/15 backdrop-blur-md text-white rounded-2xl rounded-br-sm">
                            No. But I'll have the compiler AST parser and a proof-of-concept transpiler ready by Tuesday.
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
