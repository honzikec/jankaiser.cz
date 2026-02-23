import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedUnderline from './ui/AnimatedUnderline';

export default function Intro() {
  const { scrollY } = useScroll();

  // Create subtle parallax effects similar to the original site
  // The background "bubbles" move at different speeds
  const yBg1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const yBg2 = useTransform(scrollY, [0, 1000], [0, 150]);

  // Portrait scale and opacity on load
  const portraitVariants = {
    hidden: { scale: 0, opacity: 0, y: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { type: 'spring', duration: 1, bounce: 0.4 }
    }
  };

  // Parallax translation for portrait on scroll down
  const yPortrait = useTransform(scrollY, [0, 800], [0, 150]);

  // Text container for sequential children
  const textContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.8,
        delayChildren: 0.5,
      }
    }
  };

  // Individual text item
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, bounce: 0.4, duration: 1.0 }
    }
  };

  return (
    <section id="intro" className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-bg snap-start snap-always">

      {/* Decorative Parallax Bubbles */}
      <motion.div
        style={{ y: yBg1 }}
        className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-brand-blue/5 blur-[80px]"
      />
      <motion.div
        style={{ y: yBg2 }}
        className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full bg-white/40 blur-[60px]"
      />

      <div className="relative z-10 w-full h-full max-w-6xl mx-auto px-4 md:px-8 flex flex-col items-center justify-center">

        {/* Portrait container - centered at bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none z-10">
          <motion.img
            style={{ y: yPortrait }}
            variants={portraitVariants}
            initial="hidden"
            animate="visible"
            src="/img/jan.png"
            alt="Jan Kaiser portrait"
            className="w-auto h-[50vh] md:h-[70vh] object-cover origin-bottom"
          />
        </div>

        {/* Text Container - positioned to the right */}
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          className="w-full flex flex-col z-20 text-center sm:text-left sm:pl-[65%] relative -mt-[30vh] sm:-mt-[20vh] gap-2 md:gap-4"
        >
          <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-text tracking-tight drop-shadow-sm mb-1">
            Hello.
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-500 tracking-tight">
            My name is <span className="text-brand-blue drop-shadow-sm">Jan</span>.
          </motion.h2>

          <motion.h2 variants={itemVariants} className="text-xl md:text-2xl lg:text-3xl font-bold text-brand-text mt-4 md:mt-6 tracking-tight">
            And I <br className="md:hidden" /><span className="text-brand-blue relative inline-block drop-shadow-sm">
              make software.
              <AnimatedUnderline delay={2.5} />
            </span>
          </motion.h2>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#story"
        className="absolute z-20 bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-brand-text/60 hover:text-brand-text transition-colors"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs font-bold uppercase tracking-widest mb-1">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.a>
    </section>
  );
}
