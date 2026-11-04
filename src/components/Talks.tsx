import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedUnderline from './ui/AnimatedUnderline';

interface Talk {
    videoId: string;
    href: string;
    conference: string;
    location: string;
    language: 'English' | 'Czech';
    title: string;
    description: string;
}

const talks: Talk[] = [
    {
        videoId: 'Iec18suXMzc',
        href: 'https://www.youtube.com/watch?v=Iec18suXMzc',
        conference: 'FrontKon 2026',
        location: 'Prague',
        language: 'English',
        title: 'We Stopped Reading Logs — But We Still Fix Issues Before Users Notice',
        description:
            'How we built a deterministic, low-cost LLM pipeline that correlates frontend and backend errors, filters daily log noise, and posts actionable morning triage reports to Slack.',
    },
    {
        videoId: '0hSA5blLAOQ',
        href: 'https://www.youtube.com/watch?v=0hSA5blLAOQ',
        conference: 'FrontKon 2024',
        location: 'Prague',
        language: 'Czech',
        title: 'Angular Signals: The RxJS Killer?',
        description:
            'A practical look at fine-grained reactivity in Angular — where Signals simplify everyday state, where RxJS streams still win, and how both coexist in production codebases.',
    },
];

const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, amount: 0.35 } as const;

function TalkThumbnail({ talk }: { talk: Talk }) {
    const [quality, setQuality] = useState<'maxresdefault' | 'hqdefault' | 'none'>('maxresdefault');

    const src =
        quality !== 'none'
            ? `https://i.ytimg.com/vi/${talk.videoId}/${quality}.jpg`
            : undefined;

    return (
        <div className="relative w-full aspect-[2.2/1] sm:aspect-video overflow-hidden bg-gradient-to-br from-[#0E87B5] via-[#0a749c] to-[#075877]">
            {/* Subtle fallback pattern */}
            <div
                aria-hidden="true"
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage:
                        'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.6) 1px, transparent 0)',
                    backgroundSize: '20px 20px',
                }}
            />

            {src && (
                <img
                    src={src}
                    alt={`${talk.title} — ${talk.conference}`}
                    decoding="async"
                    onLoad={(e) => {
                        if (quality === 'maxresdefault' && e.currentTarget.naturalWidth <= 120) {
                            setQuality('hqdefault');
                        }
                    }}
                    onError={() => {
                        if (quality === 'maxresdefault') {
                            setQuality('hqdefault');
                        } else {
                            setQuality('none');
                        }
                    }}
                    className="absolute inset-0 w-full h-full object-cover object-[center_18%] sm:object-center will-change-transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
            )}

            {/* GPU-only opacity scrim for play button contrast & subtle hover lift */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/15 to-black/5 opacity-95 group-hover:opacity-55 transition-opacity duration-300 ease-out" />

            {/* Centered Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/95 text-brand-blue shadow-lg flex items-center justify-center will-change-[scale] transition-[scale,background-color,color] duration-250 ease-out group-hover:bg-brand-blue group-hover:text-white group-hover:scale-108">
                    <svg
                        className="w-5 h-5 md:w-6 md:h-6 ml-0.5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M8 5.14v14l11-7-11-7z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default function Talks() {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.12,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 18 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: EASE_OUT },
        },
    };

    return (
        <section
            id="talks"
            className="relative w-full min-h-screen flex items-center justify-center bg-[#e1ecec] overflow-hidden snap-start snap-always pt-22 pb-8 md:py-20"
        >
            {/* Ambient background accents matching Intro / Clients */}
            <div className="absolute -top-24 left-1/4 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] bg-white/50 rounded-full blur-[80px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-5 md:px-6 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VIEWPORT}
                    transition={{ duration: 0.5, ease: EASE_OUT }}
                    className="text-center mb-4 sm:mb-6 md:mb-14 space-y-1.5 md:space-y-3"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-brand-text drop-shadow-sm leading-tight">
                        Sometimes I also share what{' '}
                        <span className="text-brand-blue relative inline-block">
                            worked.
                            <AnimatedUnderline
                                delay={0.35}
                                viewport={VIEWPORT}
                                className="absolute w-full h-2.5 md:h-3 -bottom-1 left-0 text-brand-blue"
                            />
                        </span>
                    </h2>
                    <p className="text-xs sm:text-sm md:text-lg text-slate-500 font-medium max-w-xl mx-auto">
                        Notes from production, recorded on stage &mdash; no theoretical fluff.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT}
                    className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6 md:gap-8 max-w-5xl mx-auto"
                >
                    {talks.map((talk) => (
                        <motion.div
                            key={talk.videoId}
                            variants={cardVariants}
                            className="flex"
                        >
                            <a
                                href={talk.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col w-full rounded-2xl overflow-hidden bg-white/92 border border-white/95 shadow-sm will-change-[translate] transition-[translate,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-xl hover:border-brand-blue/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                            >
                                <TalkThumbnail talk={talk} />

                                <div className="p-3.5 sm:p-5 md:p-7 flex flex-col flex-grow justify-between">
                                    <div>
                                        <div className="flex items-center justify-between gap-2 mb-1.5 md:mb-3">
                                            <span className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-slate-400">
                                                {talk.conference} &middot; {talk.location}
                                            </span>
                                            <span
                                                className={`px-2.5 py-0.5 rounded-full text-[10px] md:text-xs font-bold tracking-wide ${
                                                    talk.language === 'English'
                                                        ? 'bg-brand-blue/12 text-brand-blue'
                                                        : 'bg-slate-200/80 text-slate-600'
                                                }`}
                                            >
                                                {talk.language}
                                            </span>
                                        </div>

                                        <h3 className="text-sm sm:text-lg md:text-xl font-bold text-brand-text transition-colors duration-200 group-hover:text-brand-blue leading-snug mb-1 md:mb-2.5">
                                            {talk.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed line-clamp-2 sm:line-clamp-none mb-2.5 md:mb-5">
                                            {talk.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-1.5 text-xs md:text-sm font-bold text-brand-blue">
                                        <span>Watch recording</span>
                                        <svg
                                            className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2.2"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
