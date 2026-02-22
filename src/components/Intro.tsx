import { motion, useScroll, useTransform } from 'framer-motion';

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
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
          animate="visible"
          className="w-full flex flex-col items-center md:items-start z-20 pl-[70%] relative -top-[15%] gap-4"
        >
          {/* Speech Bubble 1 */}
          <motion.div variants={itemVariants} className="mb-2 self-start flex">
            <div className="text-xl md:text-2xl font-bold bg-brand-blue text-white px-5 py-3 rounded-2xl rounded-bl-sm shadow-md inline-flex items-center">
              Hello.
            </div>
          </motion.div>

          {/* Speech Bubble 2 */}
          <motion.div variants={itemVariants} className="mb-4 self-start flex">
            <div className="text-xl md:text-2xl font-bold text-brand-text bg-white px-5 py-3 rounded-2xl rounded-bl-sm items-center">
              My name is <span className="text-brand-blue">Jan</span>.
            </div>
          </motion.div>

          {/* Terminal/Tech Style Animation 3 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.1 }}
            className="self-start flex"
          >
            <div className="font-mono text-lg md:text-xl text-brand-text bg-brand-bg px-4 py-2 rounded-md shadow-inner border border-brand-blue/10 flex items-center">
              <span className="text-brand-blue font-bold mr-3">{'>'}</span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  delay: 2.6, // Start right after the container appears
                  duration: 1.5,
                  ease: "linear",
                }}
                className="overflow-hidden whitespace-nowrap inline-block"
              >
                And I <span className="font-semibold">make software</span>.
              </motion.span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 bg-brand-blue ml-1 h-5"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#skills"
        className="absolute z-20 bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-brand-text/60 hover:text-brand-text transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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
