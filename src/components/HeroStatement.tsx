import { motion } from 'framer-motion';
import AnimatedUnderline from './ui/AnimatedUnderline';

export default function HeroStatement() {
    // Explicit sequence timing optimized for human reading speed
    const headingVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring" as const, bounce: 0.4, duration: 1.0, delay: 0.1 }
        }
    };

    const firstLineVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring" as const, bounce: 0.3, duration: 0.8, delay: 0.6 }
        }
    };

    const dramaticTextVariants = {
        hidden: { opacity: 0, scale: 0.5, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring" as const, bounce: 0.6, duration: 1.0, delay: 1.0 }
        }
    };

    const secondLineVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring" as const, bounce: 0.3, duration: 0.8, delay: 1.4 }
        }
    };

    return (
        <section id="statement" className="relative w-full min-h-screen flex items-center justify-center bg-brand-bg overflow-hidden snap-start snap-always py-16">

            {/* Background design elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none mix-blend-overlay"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    className="w-full flex flex-col items-center"
                >
                    <motion.h2
                        variants={headingVariants}
                        className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-brand-text leading-tight tracking-tight pt-4 mb-20 md:mb-24"
                    >
                        When I say I <span className="text-brand-blue relative inline-block">
                            make software
                            <AnimatedUnderline delay={0.3} className="absolute w-full h-3 -bottom-1 left-0 text-brand-blue" />
                        </span>,
                    </motion.h2>

                    <div className="text-xl md:text-3xl font-medium text-slate-500 leading-relaxed max-w-3xl mx-auto flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
                        <motion.span variants={firstLineVariants} className="inline-block">
                            It means I really make it
                        </motion.span>
                        <motion.span
                            variants={dramaticTextVariants}
                            className="inline-block text-brand-blue font-extrabold tracking-wide"
                        >
                            happen.
                        </motion.span>
                    </div>

                    <motion.div variants={secondLineVariants} className="text-xl md:text-3xl font-medium text-slate-500 max-w-3xl mx-auto pt-4 md:pt-6">
                        With everything that goes with it.
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
