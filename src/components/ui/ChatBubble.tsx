import { motion, type HTMLMotionProps } from 'framer-motion';

interface ChatBubbleProps extends HTMLMotionProps<"div"> {
    align?: 'left' | 'right';
    senderName?: string;
    children: React.ReactNode;
}

export default function ChatBubble({
    align = 'left',
    senderName,
    children,
    ...props
}: ChatBubbleProps) {
    const isLeft = align === 'left';

    return (
        <motion.div
            style={{ transformOrigin: isLeft ? 'bottom left' : 'bottom right' }}
            className={`flex flex-col max-w-[85%] ${isLeft ? 'self-start items-start' : 'self-end items-end'}`}
            {...props}
        >
            {senderName && (
                <span className={`text-white/60 text-xs font-semibold mb-1 ${isLeft ? 'ml-2' : 'mr-2 text-right w-full'}`}>
                    {senderName}
                </span>
            )}
            <div className={`px-5 py-3 text-[15px] md:text-lg leading-relaxed shadow-lg block font-medium ${isLeft ? 'bg-white/95 backdrop-blur-sm text-brand-dark rounded-2xl rounded-bl-sm' : 'bg-black/15 backdrop-blur-md text-white rounded-2xl rounded-br-sm'}`}>
                {children}
            </div>
        </motion.div>
    );
}
