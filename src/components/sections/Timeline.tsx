import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight, FileText, X } from 'lucide-react';
import { useState } from 'react';
import { resumeData } from '../../data/resume';

interface ResumeEvent {
    date: string;
    title: string;
    description: string;
    certificate?: string;
}

interface ResumeData {
    events?: ResumeEvent[];
}

export const Timeline = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const closeModal = () => setOpenIndex(null);

    const typedResumeData = resumeData as ResumeData;

    return (
        <section
            id="events"
            className="relative py-20 min-h-screen flex flex-col justify-center overflow-hidden"
        >
            {/* Header */}
            <div className="flex flex-col items-center mb-16">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="px-4 py-1.5 text-sm font-bold text-indigo-400 border border-indigo-400 rounded-full mb-4 shadow-[2px_2px_0px_0px_rgba(129,140,248,1)]"
                >
                    Milestones
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                    className="text-3xl md:text-4xl font-black text-center uppercase tracking-tighter"
                >
                    Leadership / <span className="text-indigo-500">Extracurricular</span>
                </motion.h2>
            </div>

            {/* Timeline */}
            <div className="max-w-3xl mx-auto px-4">
                <div className="relative border-l-2 border-zinc-800 ml-4 space-y-12">
                    {typedResumeData.events?.map((event, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.12,
                                duration: 0.6,
                                ease: 'easeOut'
                            }}
                            className="relative pl-10"
                        >
                            {/* Dot */}
                            <div className="absolute top-2 left-[-6px] w-3 h-3 rounded-full bg-indigo-500 border-2 border-zinc-950" />

                            {/* Card */}
                            <div className="bg-zinc-900 border border-zinc-800 p-6 transition-all duration-300 ease-out hover:border-indigo-500 hover:shadow-[4px_4px_0px_0px_rgba(129,140,248,1)]">
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-2 text-indigo-400 text-sm font-mono bg-zinc-950/50 px-2 py-1 border border-zinc-800 w-fit">
                                        <Calendar size={14} />
                                        <span>{event.date}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white">
                                        {event.title}
                                    </h3>

                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        {event.description}
                                    </p>

                                    {event.certificate && (
                                        <button
                                            onClick={() => setOpenIndex(index)}
                                            className="mt-2 cursor-pointer flex items-center gap-2 text-xs font-bold text-indigo-400 hover:text-white transition-colors duration-300"
                                        >
                                            <FileText size={14} />
                                            VIEW CERTIFICATE
                                            <ArrowRight size={12} />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {openIndex !== null && typedResumeData.events?.[openIndex]?.certificate && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            transition={{ duration: 0.2, ease: 'easeInOut' }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-3xl w-[90%] bg-zinc-900 border border-zinc-800 rounded-lg shadow-2xl p-4"
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                title="Close certificate modal"
                                className="absolute  top-3 right-3 text-zinc-400 hover:text-white transition"
                            >
                                <X size={20} />
                            </button>

                            <img
                                src={typedResumeData.events?.[openIndex]?.certificate}
                                alt="Certificate"
                                className="w-full max-h-[80vh] object-contain rounded"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
