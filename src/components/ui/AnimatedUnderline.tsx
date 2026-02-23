import { motion, type SVGMotionProps } from 'framer-motion';

interface AnimatedUnderlineProps extends Omit<SVGMotionProps<SVGSVGElement>, "children"> {
    delay?: number;
    pathClassName?: string;
}

export default function AnimatedUnderline({
    delay = 1.0,
    className = "absolute w-full h-3 -bottom-1 md:-bottom-2 left-0 text-brand-blue",
    pathClassName,
    ...props
}: AnimatedUnderlineProps) {
    const lineVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 1.0, ease: "easeOut" as const, delay }
        }
    };

    const initial = props.initial || "hidden";
    const whileInView = props.whileInView || "visible";
    const viewport = props.viewport || { once: false, amount: 0.1 };

    return (
        <motion.svg
            initial={initial}
            whileInView={whileInView}
            viewport={viewport}
            className={className}
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
            {...props}
        >
            <motion.path
                variants={lineVariants}
                d="M0 5 Q 50 10 100 5"
                stroke="currentColor"
                strokeWidth="5"
                fill="transparent"
                strokeLinecap="round"
                className={pathClassName}
            />
        </motion.svg>
    );
}
