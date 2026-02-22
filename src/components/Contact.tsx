import { motion } from 'framer-motion';

export default function Contact() {
    const email = "mailto@jankaiser.cz";
    const cvLink = "/download/jankaiser_cv_en.pdf";

    return (
        <motion.section
            id="contact"
            className="relative w-full min-h-screen flex flex-col items-center justify-center bg-brand-bg border-t border-black/5 snap-start snap-always py-16"
        >
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
                        Drop me a <span className="text-brand-blue relative inline-block">line<div className="absolute -bottom-2 left-0 w-full h-1 bg-brand-blue rounded-full"></div></span>
                    </h2>
                    <p className="text-slate-500 text-lg md:text-xl font-medium">If you want to learn more, let's connect.</p>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={`mailto:${email}`}
                        className="group relative px-8 py-4 bg-brand-blue text-white font-semibold rounded-full overflow-hidden shadow-xl hover:shadow-brand-blue/50 transition-shadow duration-300 w-full md:w-auto flex items-center justify-center gap-2"
                    >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-dark to-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        <span className="relative z-10">Email Me</span>
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={cvLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-white text-brand-text border-2 border-brand-text/10 font-bold rounded-full hover:border-brand-blue hover:text-brand-blue transition-colors duration-300 shadow-sm w-full md:w-auto flex items-center justify-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                        Download CV
                    </motion.a>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-32 text-slate-400 font-medium text-sm"
                >
                    &copy; {new Date().getFullYear()} Jan Kaiser. Designed with Astro, React, & Tailwind CSS.
                </motion.div>
            </div>
        </motion.section>
    );
}
