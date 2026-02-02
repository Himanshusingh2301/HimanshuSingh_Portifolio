import { Section } from '../layout/Section';
import { resumeData } from '../../data/resume';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus('idle');

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    title: 'Portfolio Contact', // 🔥 matches {{title}}
                    time: new Date().toLocaleString()
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch(() => {
                setStatus('error');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <Section id="contact" className="min-h-[50vh] flex flex-col justify-center py-20">
            <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 text-white">
                    Get In Touch
                </h2>
                <p className="text-zinc-400 max-w-xl mx-auto font-medium">
                    Have a project in mind? Let&apos;s build something awesome together.
                </p>
            </div>

            <div className="max-w-4xl mx-auto w-full px-4 grid md:grid-cols-2 gap-12 text-left">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="p-6 bg-zinc-900 border border-zinc-800 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]">
                        <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-tight">
                            Contact Details
                        </h3>

                        <div className="space-y-6">
                            <a
                                href={`mailto:${resumeData.personalInfo.email}`}
                                className="flex items-center gap-4 text-zinc-400 hover:text-indigo-400 transition-colors group"
                            >
                                <div className="p-3 bg-zinc-950 border border-zinc-800 group-hover:border-indigo-500 transition-colors">
                                    <Mail size={20} />
                                </div>
                                <span className="font-bold">
                                    {resumeData.personalInfo.email}
                                </span>
                            </a>

                            <a
                                href={`tel:${resumeData.personalInfo.phone}`}
                                className="flex items-center gap-4 text-zinc-400 hover:text-indigo-400 transition-colors group"
                            >
                                <div className="p-3 bg-zinc-950 border border-zinc-800 group-hover:border-indigo-500 transition-colors">
                                    <Phone size={20} />
                                </div>
                                <span className="font-bold">
                                    {resumeData.personalInfo.phone}
                                </span>
                            </a>

                            <div className="flex items-center gap-4 text-zinc-400">
                                <div className="p-3 bg-zinc-950 border border-zinc-800">
                                    <MapPin size={20} />
                                </div>
                                <span className="font-bold">
                                    {resumeData.personalInfo.location}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <a
                            href={resumeData.personalInfo.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 py-4 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-blue-500 hover:bg-blue-600/10 flex items-center justify-center transition-all font-bold uppercase tracking-wider"
                        >
                            <Linkedin size={20} className="mr-2" />
                            LinkedIn
                        </a>

                        <a
                            href={resumeData.personalInfo.github}
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 py-4 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-white hover:bg-white/5 flex items-center justify-center transition-all font-bold uppercase tracking-wider"
                        >
                            <Github size={20} className="mr-2" />
                            GitHub
                        </a>
                    </div>
                </div>

                {/* Form */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <label className="text-xs  font-black text-zinc-500 uppercase tracking-wider ">
                            Name
                        </label>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full placeholder:text-zinc-600
 bg-zinc-900 border-2 border-zinc-800 p-3 text-white focus:outline-none focus:border-indigo-500 transition-colors font-bold"
                            placeholder="Your Name"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-black text-zinc-500 uppercase tracking-wider">
                            Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-zinc-900 placeholder:text-zinc-600
 border-2 border-zinc-800 p-3 text-white focus:outline-none focus:border-indigo-500 transition-colors font-bold"
                            placeholder="Your email address"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-black text-zinc-500 uppercase tracking-wider">
                            Message
                        </label>
                        <textarea
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full placeholder:text-zinc-600
 bg-zinc-900 border-2 border-zinc-800 p-3 text-white focus:outline-none focus:border-indigo-500 transition-colors font-bold resize-none"
                            placeholder="Type your message..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full cursor-pointer bg-indigo-600 text-white font-black py-4 uppercase tracking-widest hover:bg-indigo-500 border-2 border-indigo-600 hover:border-white transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] disabled:opacity-50"
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>

                    {status === 'success' && (
                        <p className="text-green-400 font-bold text-sm">
                            ✅ Message sent successfully!
                        </p>
                    )}

                    {status === 'error' && (
                        <p className="text-red-400 font-bold text-sm">
                            ❌ Failed to send message. Please try again.
                        </p>
                    )}
                </form>
            </div>
        </Section>
    );
}
