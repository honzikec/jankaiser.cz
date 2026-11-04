import { motion } from 'framer-motion';
import AnimatedUnderline from './ui/AnimatedUnderline';

const companies = [
    { name: "Develion", logo: "/img/01_develion.png" },
    { name: "Certus Mercatus", logo: "/img/02_certus_mercatus.png" },
    { name: "Bistro", logo: "/img/03_bistro.png" },
    { name: "Silicon Jelly", logo: "/img/04_silicon_jelly.png" },
    { name: "ECH", logo: "/img/05_ech.png" },
    { name: "McCann", logo: "/img/06_mccann.png" },
    { name: "Logica", logo: "/img/07_logica.png" },
    { name: "Rockaway", logo: "/img/08_rockaway.png" },
    { name: "7divs", logo: "/img/09_7divs.png" },
    { name: "Quanti", logo: "/img/10_quanti.png" },
    { name: "This Dot Labs", logo: "/img/11_thisdot_labs.svg" },
    { name: "Google", logo: "/img/12_google.png" },
    { name: "Cloudinary", logo: "/img/13_cloudinary.svg" },
    { name: "Roblox", logo: "/img/14_roblox.png" }
];

const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, amount: 0.35 } as const;

export default function Clients() {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.035,
                delayChildren: 0.12,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 12 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.45, ease: EASE_OUT }
        }
    };

    return (
        <section id="clients" className="relative w-full min-h-screen flex items-center justify-center bg-brand-bg overflow-hidden snap-start snap-always py-16">

            {/* Continuing the blue theme from the Skills component */}
            <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VIEWPORT}
                    transition={{ duration: 0.5, ease: EASE_OUT }}
                    className="text-center mb-8 md:mb-20 space-y-2 md:space-y-4"
                >
                    <h2 className="text-2xl md:text-5xl font-bold text-brand-text drop-shadow-sm">
                        And here are some orgs I helped <span className="text-brand-blue relative inline-block">
                            ship.
                            <AnimatedUnderline
                                delay={0.35}
                                viewport={VIEWPORT}
                                className="absolute w-full h-3 -bottom-1 left-0 text-brand-blue"
                            />
                        </span>
                    </h2>
                </motion.div>

                {/* Flex container mapping out the company logos, centered */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT}
                    className="flex flex-wrap justify-center items-center gap-3 md:gap-10 max-w-5xl mx-auto"
                >
                    {companies.map((company) => (
                        <motion.div
                            key={company.name}
                            variants={itemVariants}
                        >
                            <div className="group flex items-center justify-center p-2 md:p-8">
                                <img
                                    src={company.logo}
                                    alt={company.name}
                                    decoding="async"
                                    className="h-4 sm:h-5 md:h-8 w-auto object-contain opacity-55 grayscale will-change-[scale,opacity] transition-[scale,opacity,filter] duration-250 ease-out group-hover:scale-108 group-hover:grayscale-0 group-hover:opacity-100"
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
