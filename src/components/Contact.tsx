'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ChatBubble from './ui/ChatBubble';

const messageVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, bounce: 0.4, duration: 0.7 } }
};

export default function Contact() {
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!message.trim()) return;

        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message }),
            });

            if (!res.ok) throw new Error('Failed to send message');

            setStatus('success');
            setTimeout(() => {
                setStatus('idle');
                setMessage('');
            }, 5000);
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden snap-start snap-always py-16 bg-[#0E87B5]">
            <div className="max-w-4xl mx-auto px-6 relative z-10 w-full flex flex-col items-center flex-grow justify-center">

                <motion.div
                    className="flex flex-col gap-6 w-full max-w-2xl px-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ staggerChildren: 0.4, delayChildren: 0.2 }}
                >
                    {/* Received Message */}
                    <ChatBubble variants={messageVariants} align="left" senderName="Jan">
                        Hi this is Jan. Sounded interesting? Let's connect.
                    </ChatBubble>

                    {/* Send Message (Form) */}
                    <motion.form
                        variants={messageVariants}
                        style={{ transformOrigin: 'bottom right' }}
                        className="flex flex-col w-full md:max-w-[85%] self-end items-end relative"
                        onSubmit={handleSubmit}
                    >
                        <span className="text-white/60 text-xs font-semibold mb-1 mr-2 text-right w-full">You</span>
                        <div className="w-full relative shadow-lg bg-black/15 backdrop-blur-md rounded-2xl rounded-br-sm p-1">
                            <textarea
                                className="w-full bg-transparent text-white placeholder-white/40 px-4 pt-4 pb-12 outline-none resize-none min-h-[120px] text-[15px] md:text-lg disabled:opacity-50"
                                placeholder="Message..."
                                required
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                disabled={status === 'loading' || status === 'success'}
                            ></textarea>
                            <div className="absolute bottom-3 right-3 flex gap-2">
                                {status === 'success' ? (
                                    <div className="bg-green-500 text-white rounded-full p-2 shadow-md flex items-center justify-center">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                ) : status === 'error' ? (
                                    <div className="bg-red-500 text-white rounded-full p-2 shadow-md flex items-center justify-center" title="Failed to send">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                    </div>
                                ) : (
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`rounded-full p-2 shadow-md flex items-center justify-center transition-colors ${message.trim() ? "bg-white text-brand-blue" : "bg-white/20 text-white/50 cursor-default"}`}
                                        type="submit"
                                        title="Send Message"
                                        disabled={status === 'loading' || !message.trim()}
                                    >
                                        {status === 'loading' ? (
                                            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5 ml-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                                        )}
                                    </motion.button>
                                )}
                            </div>
                        </div>

                        <div className="mt-4 flex justify-end items-center gap-3 w-full">
                            <a href="mailto:mailto@jankaiser.cz" className="text-xs font-medium text-white/50 hover:text-white transition-colors">or simply send email</a>
                            <span className="text-white/20 text-xs">|</span>
                            <a href="/download/jankaiser_cv_en.pdf" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-white/50 hover:text-white transition-colors">Download CV</a>
                        </div>
                    </motion.form>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute bottom-8 text-white/40 font-medium text-xs text-center w-full"
            >
                &copy; {new Date().getFullYear()} Jan Kaiser.
            </motion.div>
        </section>
    );
}
