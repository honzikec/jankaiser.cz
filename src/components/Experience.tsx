import { motion } from 'framer-motion';

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

export default function Experience() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring" as const, stiffness: 100, damping: 15 }
        }
    };

    const lineVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 1.0, ease: "easeOut" as const, delay: 0.8 }
        }
    };

    return (
        <section id="experience" className="relative w-full min-h-screen flex items-center justify-center bg-brand-bg overflow-hidden snap-start snap-always py-16">

            {/* Continuing the blue theme from the Skills component */}
            <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none mix-blend-overlay"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20 space-y-4"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-text drop-shadow-sm">
                        Here are some cool orgs I helped <span className="text-brand-blue relative inline-block">
                            ship.
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-blue" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <motion.path
                                    variants={lineVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, margin: "-100px" }}
                                    d="M0 5 Q 50 10 100 5"
                                    stroke="currentColor"
                                    strokeWidth="5"
                                    fill="transparent"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                    </h2>
                </motion.div>

                {/* Flex container mapping out the company logos, centered */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex flex-wrap justify-center items-center gap-6 md:gap-10 max-w-5xl mx-auto"
                >
                    {companies.map((company) => (
                        <motion.div
                            key={company.name}
                            variants={itemVariants}
                            className="flex items-center justify-center p-6 md:p-8 hover:scale-110 transition-transform duration-300 group"
                        >
                            <img
                                src={company.logo}
                                alt={company.name}
                                className="h-6 md:h-8 w-auto object-contain opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 mix-blend-multiply"
                                loading="lazy"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
