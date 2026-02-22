import * as React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const skillSections = [
    {
        id: "architecture",
        heading: (
            <>
                But software is not just <span className="relative inline-block font-mono">
                    <span className="text-brand-light pb-1">&lt;code&gt;</span>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-r from-cyan-200 via-sky-300 to-blue-400 text-transparent bg-clip-text pb-1"
                    >
                        &lt;code&gt;
                    </motion.span>
                </span>.
            </>
        ),
        messages: [
            { sender: 'other', author: 'CTO', text: "We're going to hit 10x traffic next quarter. Can we just rewrite the entire backend in Rust?" },
            { sender: 'me', text: "No." },
            { sender: 'other', author: 'CTO', text: "...okay. So what's the plan?" },
            { sender: 'me', text: "Let's keep the business logic where your team is fast, and just extract the heavy pipeline into Redis. We'll be done by Friday." }
        ]
    },
    {
        id: "product",
        heading: "It's about solving the right problems.",
        messages: [
            { sender: 'other', author: 'Product Manager', text: "Can we add these 15 new composite filters to the dashboard? The newest enterprise client really wants them." },
            { sender: 'me', text: "We could, but analytics show 90% of users only ever click 'Status: Active'. What if we just polish that one flow and ship it today?" },
            { sender: 'other', author: 'Product Manager', text: "You know what? Let's do that and go to lunch." }
        ]
    },
    {
        id: "leadership",
        heading: "Elevating the team.",
        messages: [
            { sender: 'other', author: 'Engineering Lead', text: "Velocity is dropping. Onboarding takes weeks and our builds take 45 minutes." },
            { sender: 'me', text: "I'll dockerize the dev environment and move CI to parallel runners. Onboarding will take 10 minutes." },
            { sender: 'other', author: 'Engineering Lead', text: "Are you an actual wizard? 🧙‍♂️" },
            { sender: 'me', text: "Just a guy with a YAML file." }
        ]
    },
    {
        id: "mentorship",
        heading: "And unblocking people.",
        messages: [
            { sender: 'other', author: 'Junior Dev', text: "I've been staring at this Safari bug for 3 hours. The layout completely collapses but only on iOS 15 and I'm losing my mind." },
            { sender: 'me', text: "Jump on a huddle. Let's see if adding `min-h-0` on that flex child fixes it... Yep, there it is." },
            { sender: 'other', author: 'Junior Dev', text: "Wait, how did you spot that instantly? Are you a genius?" },
            { sender: 'me', text: "I'm not smart, I've just been bitten by that exact same quirk three times last year. 😅" }
        ]
    }
];

// Staggered chat messages appearing when in view
const messageVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", bounce: 0.4, duration: 0.7 } }
};

export default function Skills() {
    const { scrollYProgress } = useScroll();

    // Parallax background transition to blue
    const backgroundColor = useTransform(
        scrollYProgress,
        [0.1, 0.45],
        ['#15A1D6', '#0E87B5']
    );

    return (
        <motion.div
            style={{ backgroundColor }}
            className="w-full relative"
        >
            {skillSections.map((section, idx) => (
                <section
                    key={section.id}
                    id={idx === 0 ? "skills" : undefined}
                    className="relative w-full min-h-screen flex items-center justify-center overflow-hidden snap-start snap-always py-24"
                >
                    <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 w-full flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}  // Play header animation when section is halfway in view
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-white drop-shadow-md tracking-tight">
                                {section.heading}
                            </h2>
                        </motion.div>

                        <motion.div
                            className="flex flex-col gap-6 w-full max-w-2xl px-4"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.4 }} // Trigger chat cascade when section is 40% in view
                            transition={{ staggerChildren: 0.4, delayChildren: 0.2 }} // Stagger messages neatly
                        >
                            {section.messages.map((msg: any, i: number) => (
                                <motion.div
                                    key={i}
                                    variants={messageVariants}
                                    style={{ transformOrigin: msg.sender === 'me' ? 'bottom right' : 'bottom left' }}
                                    className={`flex flex-col max-w-[85%] ${msg.sender === 'me' ? 'self-end items-end' : 'self-start items-start'}`}
                                >
                                    {msg.sender === 'other' && (
                                        <span className="text-white/60 text-xs font-semibold mb-1 ml-2">{msg.author}</span>
                                    )}
                                    <div
                                        className={`px-5 py-3 text-[15px] md:text-lg leading-relaxed shadow-lg block ${msg.sender === 'me'
                                            ? 'bg-black/15 backdrop-blur-md text-white rounded-2xl rounded-br-sm'
                                            : 'bg-white/95 backdrop-blur-sm text-brand-dark rounded-2xl rounded-bl-sm font-medium'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            ))}
        </motion.div>
    );
}
