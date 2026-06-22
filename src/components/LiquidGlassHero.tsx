import React from "react";
import { ArrowRight } from "lucide-react";

const LiquidGlassHero = () => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-white selection:bg-blue-100">
            {/* Layered Gradient Glows */}
            <div className="absolute left-[-10%] top-[-10%] z-0 h-[600px] w-[600px] rounded-full bg-[#60B1FF] opacity-20 blur-[120px]" />
            <div className="absolute left-[5%] top-[5%] z-0 h-[400px] w-[400px] rounded-full bg-[#319AFF] opacity-15 blur-[100px]" />

            <div className="relative z-10 mx-auto max-w-[1600px] px-6 lg:px-12">
                {/* The "Strong Liquid Glass" Navbar */}
                <nav className="sticky top-[30px] z-50 mx-auto flex w-fit items-center gap-8 rounded-[16px] border border-black/10 bg-white/30 px-6 py-3 backdrop-blur-[50px] shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.25)]">
                    <span className="font-brand text-xl font-bold tracking-tight text-black">Taskly</span>
                    <div className="hidden items-center gap-6 md:flex">
                        {["Home", "Features", "Company", "Pricing"].map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="text-sm font-medium text-black/70 transition-colors hover:text-black"
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                    <button className="group flex items-center gap-2 rounded-xl border border-black/10 bg-white/40 px-4 py-2 text-sm font-semibold text-black backdrop-blur-md transition-all hover:bg-white/60">
                        SignUp
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                </nav>

                {/* Hero Section Content */}
                <main className="mt-20 flex flex-col items-center gap-12 lg:mt-32 lg:flex-row lg:justify-between lg:gap-0">
                    {/* Hero Left: Content */}
                    <div className="max-w-[680px] text-center lg:text-left">
                        {/* Social Proof */}
                        <div className="mb-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                            <div className="flex gap-0.5">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <svg key={i} className="h-5 w-5 fill-[#FF801E]" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-sm font-medium text-black/60">
                                Rated <span className="font-bold text-black">4.9/5</span> by 2700+ customers
                            </span>
                        </div>

                        <h1 className="font-brand text-[52px] font-extrabold leading-[1.05] tracking-[-2px] text-black md:text-[75px]">
                            Work smarter, achieve faster
                        </h1>

                        <p className="mt-6 text-[18px] leading-relaxed tracking-[-1px] text-black/60 md:text-[20px]">
                            Effortlessly manage your projects, collaborate with your team, and achieve your goals with our intuitive task management tool.
                        </p>

                        <button className="group mt-10 flex scale-100 items-center gap-3 rounded-[20px] bg-[#0084FF]/80 px-8 py-5 text-lg font-bold text-white shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.35)] backdrop-blur-[2px] transition-all hover:scale-[1.02] hover:bg-[#0084FF]">
                            Get Started Now
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                                <ArrowRight className="h-4 w-4 text-[#0084FF]" />
                            </div>
                        </button>
                    </div>

                    {/* Hero Right: Glassy Orb */}
                    <div className="relative w-full max-w-[600px] lg:w-1/2">
                        <div className="relative aspect-square scale-110 md:scale-125">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="h-full w-full object-cover [mix-blend-mode:screen] [filter:hue-rotate(-55deg)_saturate(250%)_brightness(1.2)_contrast(1.1)]"
                            >
                                <source src="https://future.co/images/homepage/glassy-orb/orb-purple.webm" type="video/webm" />
                            </video>
                        </div>
                    </div>
                </main>

                {/* Footer Logos */}
                <section className="mt-24 pb-20 text-center lg:mt-32">
                    <p className="text-sm font-semibold uppercase tracking-widest text-black/30">
                        Trusted by Top-tier product companies
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-12 lg:gap-[100px]">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="h-8 w-32 grayscale opacity-30 invert transition-opacity hover:opacity-100">
                                {/* Placeholder SVG Logo */}
                                <svg className="h-full w-full" viewBox="0 0 120 30" fill="currentColor">
                                    <rect x="0" y="5" width="20" height="20" rx="4" />
                                    <rect x="30" y="10" width="80" height="10" rx="2" />
                                </svg>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default LiquidGlassHero;
