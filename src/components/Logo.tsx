import { motion, useScroll, useTransform } from 'framer-motion';

export default function Logo() {
    const { scrollYProgress } = useScroll();

    // Color logic for the SVG
    // Grey text on white background (first section)
    // White text on blue background (middle sections)
    // Grey text on white background (last section)
    const textColor = useTransform(
        scrollYProgress,
        [0.08, 0.10, 0.54, 0.58, 0.66, 0.70, 0.79, 0.83],
        ['#3e3e3f', '#ffffff', '#ffffff', '#3e3e3f', '#3e3e3f', '#ffffff', '#ffffff', '#3e3e3f']
    );

    // Also adapting the "7" icon lines
    const iconColorLight = useTransform(
        scrollYProgress,
        [0.08, 0.10, 0.54, 0.58, 0.66, 0.70, 0.79, 0.83],
        ['#429ac2', '#ffffff', '#ffffff', '#429ac2', '#429ac2', '#ffffff', '#ffffff', '#429ac2']
    );

    const iconColorDark = useTransform(
        scrollYProgress,
        [0.08, 0.10, 0.54, 0.58, 0.66, 0.70, 0.79, 0.83],
        ['#3886bc', '#ffffff', '#ffffff', '#3886bc', '#3886bc', '#ffffff', '#ffffff', '#3886bc']
    );

    // For the separator line
    const separatorColor = useTransform(
        scrollYProgress,
        [0.08, 0.10, 0.54, 0.58, 0.66, 0.70, 0.79, 0.83],
        ['#3e3e3f', '#ffffff', '#ffffff', '#3e3e3f', '#3e3e3f', '#ffffff', '#ffffff', '#3e3e3f']
    );

    return (
        <motion.div
            className="fixed top-6 left-6 md:top-10 md:left-10 z-50 pointer-events-auto"
        >
            <a href="/" className="inline-block hover:scale-105 transition-transform origin-top-left">
                <svg
                    width="180" // Scaled up appropriately for visibility
                    viewBox="0 0 54.460637 12.482252"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-auto"
                >
                    <g transform="translate(-43.893164,-55.598008)">
                        <g transform="translate(0.67527945)">

                            {/* The "7" icon - top stroke */}
                            <motion.path
                                d="m 50.178706,63.322143 c 0,1.43404 -0.72707,2.17135 -2.21156,2.17135 -1.03011,0 -1.80764,-0.47484 -2.10044,-1.40406 l 0.44414,-0.11077 c 0.25224,0.7373 0.89853,1.06045 1.6563,1.06045 1.22167,0 1.75718,-0.55563 1.75718,-1.7272 v -4.93818 h 0.45438 z"
                                style={{ fill: iconColorLight, fillOpacity: 1, fillRule: "nonzero", stroke: "none", strokeWidth: 0.352778 }}
                            />

                            {/* The "7" icon - bottom arrow shape */}
                            <motion.path
                                d="m 53.323226,58.409183 -3.06035,3.51437 3.26249,3.53448 h 0.60572 l -3.30235,-3.54471 3.03953,-3.50414 z"
                                style={{ fill: iconColorDark, fillOpacity: 1, fillRule: "nonzero", stroke: "none", strokeWidth: 0.352778 }}
                            />

                            {/* Text: 'j' */}
                            <motion.path
                                d="m 62.033416,63.468433 c 0,0.88547 -0.44274,1.34091 -1.36631,1.34091 -0.60078,0 -1.09396,-0.26564 -1.27776,-0.80963 l 0.17075,-0.0441 c 0.17109,0.48048 0.61383,0.67662 1.10701,0.67662 0.82868,0 1.18922,-0.37324 1.18922,-1.17016 v -3.11221 h 0.17709 z"
                                style={{ fill: textColor, fillOpacity: 1, fillRule: "nonzero", stroke: "none", strokeWidth: 0.352778 }}
                            />

                            {/* Text: 'a' */}
                            <motion.path
                                d="m 66.151146,64.765103 h -0.18344 l -0.53764,-1.39806 h -2.25813 l -0.53763,1.39806 h -0.18345 l 1.69545,-4.41501 h 0.30974 z m -0.78458,-1.5561 -1.06891,-2.77672 -1.06222,2.77672 z"
                                style={{ fill: textColor, fillOpacity: 1, fillRule: "nonzero", stroke: "none", strokeWidth: 0.352778 }}
                            />

                            {/* Text: 'n' */}
                            <motion.path
                                d="m 69.699416,64.765103 h -0.23424 l -2.56152,-4.18077 v 4.18077 h -0.1771 v -4.41501 h 0.24024 l 2.55553,4.18077 v -4.18077 h 0.17709 z"
                                style={{ fill: textColor, fillOpacity: 1, fillRule: "nonzero", stroke: "none", strokeWidth: 0.352778 }}
                            />

                            {/* Text: 'k' */}
                            <motion.path
                                d="m 72.425436,60.337423 h 0.80962 v 2.25178 l 1.8595,-2.25178 h 0.96167 l -1.79,2.11279 1.91629,2.31492 h -0.96767 l -1.4358,-1.73954 -0.54399,0.64523 v 1.09431 h -0.80962 z"
                                style={{ fill: textColor, fillOpacity: 1, fillRule: "nonzero", stroke: "none", strokeWidth: 0.352778 }}
                            />

                            {/* Text: 'a' */}
                            <motion.path
                                d="m 79.351446,63.822663 h -1.84679 l -0.31644,0.94262 h -0.88548 l 1.6824,-4.42771 h 0.89182 l 1.6764,4.42771 h -0.87947 z m -1.6316,-0.65158 h 1.41641 l -0.70838,-2.09973 z"
                                style={{ fill: textColor, fillOpacity: 1, fillRule: "nonzero", stroke: "none", strokeWidth: 0.352778 }}
                            />

                            {/* Text: 'i' */}
                            <motion.path
                                d="m 81.166596,60.367773 h 0.78211 v 4.35822 h -0.78211 z"
                                style={{ fill: textColor, fillOpacity: 1, fillRule: "nonzero", stroke: "none", strokeWidth: 0.352778 }}
                            />

                            {/* Text: 's' */}
                            <motion.path
                                d="m 86.239476,63.556943 c 0,0.79057 -0.66428,1.27776 -1.5875,1.27776 -0.74048,0 -1.5053,-0.31009 -1.93569,-0.57573 l 0.36689,-0.58808 c 0.38594,0.22119 1.06891,0.48683 1.54975,0.48683 0.39229,0 0.75883,-0.17709 0.75883,-0.54398 0,-0.45509 -0.61984,-0.56304 -1.37901,-0.84138 -0.54998,-0.18309 -1.19521,-0.48683 -1.19521,-1.25836 0,-0.74647 0.60078,-1.24601 1.5307,-1.24601 0.60713,0 1.29046,0.21484 1.73919,0.44239 l -0.36653,0.59478 c -0.37324,-0.17709 -0.94898,-0.35419 -1.33491,-0.35419 -0.37324,0 -0.71473,0.1517 -0.71473,0.51223 0,0.45544 0.59478,0.51259 1.29046,0.77188 0.55668,0.1898 1.27776,0.49319 1.27776,1.32186"
                                style={{ fill: textColor, fillOpacity: 1, fillRule: "nonzero", stroke: "none", strokeWidth: 0.352778 }}
                            />

                            {/* Text: 'e' */}
                            <motion.path
                                d="m 86.992086,64.765103 v -4.42771 h 3.01061 v 0.69567 h -2.20099 v 1.17652 h 1.80905 v 0.68298 h -1.80905 v 1.18321 h 2.23274 v 0.68933 z"
                                style={{ fill: textColor, fillOpacity: 1, fillRule: "nonzero", stroke: "none", strokeWidth: 0.352778 }}
                            />

                            {/* Text: 'r' */}
                            <motion.path
                                d="m 92.513946,62.994053 h -0.84772 v 1.77094 h -0.80963 v -4.42736 h 1.87854 c 1.08797,0 1.73955,0.39194 1.73955,1.32821 0,0.75883 -0.42369,1.15747 -1.14477,1.28411 l 1.15112,1.81504 h -0.88547 z m 0.19614,-2.01154 h -1.04386 v 1.36631 h 1.02481 c 0.55669,0 0.95497,-0.16439 0.95497,-0.68298 0,-0.51858 -0.39828,-0.68333 -0.93592,-0.68333"
                                style={{ fill: textColor, fillOpacity: 1, fillRule: "nonzero", stroke: "none", strokeWidth: 0.352778 }}
                            />

                            {/* Separator Slash '/' */}
                            <motion.path
                                d="m 58.877466,58.187983 -3.29494,7.27604 0.32138,0.1457 3.29494,-7.27604"
                                style={{ fill: separatorColor, fillOpacity: 1, fillRule: "nonzero", stroke: "none", strokeWidth: 0.352778 }}
                            />
                        </g>
                    </g>
                </svg>
            </a>
        </motion.div>
    );
}
