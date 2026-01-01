
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const AnnouncementSection = () => {
    return (
        <section className="py-12 md:py-24 flex justify-center relative bg-transparent">
            {/* Split Background to bridge the Hero (Black) and Content (Theme Background) */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black from-50% to-background to-50%" />

            <div className="container px-4 md:px-6 relative z-10">
                <motion.a
                    href="#"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="group relative flex flex-col md:flex-row w-full overflow-hidden rounded-3xl cursor-pointer"
                >
                    {/* Left Content - Light Theme Editorial */}
                    <div className="md:w-[45%] flex flex-col justify-between bg-[#F5F5F7] p-8 md:p-12 lg:p-16 text-black relative z-10 transition-colors duration-300">
                        {/* Animated Orbit Button Top Right */}
                        <div className="absolute top-8 right-8 z-20">
                            <div className="relative flex items-center justify-center w-12 h-12">
                                {/* Central Button */}
                                <div className="absolute inset-0 z-10 w-12 h-12 rounded-full bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)] flex items-center justify-center hover:scale-105 transition-transform duration-500 cursor-pointer border border-neutral-100">
                                    <ArrowUpRight className="w-5 h-5 text-neutral-900" />
                                </div>

                                {/* Orbit Ring 1 (Small) */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                    className="absolute z-0 border border-neutral-400/30 rounded-full box-border"
                                    style={{ width: "160%", height: "160%" }}
                                >
                                    {/* Dot */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-neutral-500 rounded-full shadow-sm" />
                                </motion.div>

                                {/* Orbit Ring 2 (Medium) */}
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                    className="absolute z-0 border border-neutral-400/20 rounded-full box-border"
                                    style={{ width: "240%", height: "240%" }}
                                >
                                    {/* Dot */}
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-neutral-400 rounded-full shadow-sm" />
                                </motion.div>

                                {/* Orbit Ring 3 (Large) */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                                    className="absolute z-0 border border-neutral-400/10 rounded-full box-border"
                                    style={{ width: "320%", height: "320%" }}
                                >
                                    {/* Dot */}
                                    <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-neutral-300 rounded-full shadow-sm" />
                                </motion.div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <span className="inline-block text-xs md:text-sm font-semibold tracking-widest text-neutral-500 mb-6 uppercase">
                                Announcing
                            </span>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight text-neutral-900 mb-6">
                                The Enterprise <br />
                                <span className="text-neutral-500">Agent Grid</span>
                            </h2>
                        </div>

                       <div className="mt-12 md:mt-20">
                        <p className="text-sm font-medium text-neutral-400 mb-4 uppercase tracking-wider">
                            Powered By
                        </p>
                        <div className="flex flex-wrap items-center gap-6 md:gap-10 opacity-60 transition-opacity duration-300 group-hover:opacity-100">
                            {[
                                { name: "OpenAI", logo: "/OpenAI.webp" },
                                { name: "Hugging Face", logo: "/hf-logo.svg" },
                                { name: "Gemini", logo: "/gemini-color.png" },
                                { name: "Mistral", logo: "/Mistral.png" },
                                { name: "Claude", logo: "/Claude.png" },
                                { name: "Anthropic", logo: "/anthropic.png" },
                            ].map((provider, idx) => (
                                <span key={idx} className="flex items-center gap-2">
                                    <span className="text-xl font-bold font-serif tracking-tighter">{provider.name}</span>
                                    <img src={provider.logo} alt={`${provider.name} Logo`} className="h-6 w-auto" />
                                </span>
                            ))}

                            {/* Optional placeholders if needed */}
                            <div className="h-6 w-20 bg-neutral-800 rounded-sm" />
                            <div className="h-6 w-6 rounded-full bg-neutral-800" />
                        </div>
                    </div>

                    </div>

                    {/* Right Image - Artistic/Illustrative */}
                    <div className="md:w-[55%] min-h-[300px] md:min-h-full relative bg-neutral-900 overflow-hidden">
                        {/* Noise/Grain Overlay */}
                        <div className="absolute inset-0 z-20 opacity-[0.08] pointer-events-none mix-blend-overlay"
                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                        />

                        {/* Gradient Overlay for Mood */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />

                        {/* Main Image */}
                        <img
                            src="/book-bot.jpeg"
                            alt="Artistic abstract fluid shapes"
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                    </div>
                </motion.a>
            </div>
        </section>
    );
};
