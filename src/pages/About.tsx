import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Eye, Shield, Sparkles, Zap, TrendingUp } from "lucide-react";
import { TeamSection } from "@/components/about/TeamSection";
import HoverGridBackground from "@/components/HoverGridBackground";

const About = () => {
  const principles = [
    {
      icon: Target,
      title: "Impact",
      description: "We measure success by business outcomes, not just technology adoption",
      color: "cyan",
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Every decision is explainable, every action is auditable",
      color: "purple",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Shield,
      title: "Responsibility",
      description: "Human oversight and ethical AI practices are built into everything we do",
      color: "green",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
  ];

  const stats = [
    { icon: Sparkles, value: "100%", label: "Enterprise Focus" },
    { icon: Zap, value: "10x", label: "Faster Deployment" },
    { icon: TrendingUp, value: "85%", label: "ROI Increase" },
  ];

  return (
    <div className="min-h-screen bg-black relative">
      {/* Same background as home page hero */}
      <HoverGridBackground />
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='10' cy='10' r='1.5'/%3E%3Ccircle cx='30' cy='10' r='1.5'/%3E%3Ccircle cx='10' cy='30' r='1.5'/%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }} />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
        }} />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(128,128,128,0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(128,128,128,0.08) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(128,128,128,0.05) 0%, transparent 70%)
          `,
        }} />
      </div>

      <Navbar />
      <main id="main-content" className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-20 px-4 sm:px-8 lg:px-20">
          <div className="container mx-auto max-w-5xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              {/* Badge with animation */}
              <motion.span 
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 rounded-full mb-6 border border-primary/20"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                About Us
              </motion.span>

              {/* Main heading with stagger effect */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-[1] tracking-tight mb-6">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="block"
                >
                  Moving enterprises from
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="block gradient-text mt-2"
                >
                  AI pilots to AI execution
                </motion.span>
              </h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              >
                Building autonomous AI systems that deliver real business value
              </motion.p>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap justify-center gap-8 mt-12"
              >
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-8 lg:px-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-zinc-950/30 to-background" />
            <div className="absolute inset-0 opacity-[0.08]" style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 41px),
                repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 41px)
              `,
            }} />
          </div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl p-8 lg:p-10 border border-zinc-800/50 bg-gradient-to-br from-zinc-950/50 to-zinc-900/30 backdrop-blur-sm hover:border-zinc-700/50 transition-all duration-500"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500" />
                
                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                    <Eye className="w-4 h-4 text-primary" />
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">Vision</span>
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 group-hover:text-primary transition-colors duration-300">
                    Our Vision
                  </h2>
                  
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Outcome-driven AI autonomy that transforms how enterprises operate
                  </p>

                  {/* Accent line */}
                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary to-transparent group-hover:w-24 transition-all duration-500" />
                </div>
              </motion.div>

              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl p-8 lg:p-10 border border-zinc-800/50 bg-gradient-to-br from-zinc-900/30 to-zinc-950/50 backdrop-blur-sm hover:border-zinc-700/50 transition-all duration-500"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-all duration-500" />
                
                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                    <Target className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Mission</span>
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 group-hover:text-purple-400 transition-colors duration-300">
                    Our Mission
                  </h2>
                  
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Move enterprises from AI pilots to AI execution. We build agentic systems that reason, act, and deliver measurable business value.
                  </p>

                  {/* Accent line */}
                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-purple-400 to-transparent group-hover:w-24 transition-all duration-500" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Principles — same background as home hero */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-8 lg:px-20 overflow-hidden bg-black">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Same texture as home page hero */}
            <div className="absolute inset-0 opacity-15" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='10' cy='10' r='1.5'/%3E%3Ccircle cx='30' cy='10' r='1.5'/%3E%3Ccircle cx='10' cy='30' r='1.5'/%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "40px 40px",
            }} />
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
            }} />
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(128,128,128,0.08) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(128,128,128,0.08) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(128,128,128,0.05) 0%, transparent 70%)
              `,
            }} />
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 rounded-full mb-4 border border-primary/20">
                Core Values
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Our Principles
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                The foundation of everything we build and deliver
              </p>
            </motion.div>

            {/* Principles grid */}
            <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
              {principles.map((principle, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: idx * 0.15,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-2xl p-8 border border-zinc-800/50 bg-gradient-to-br from-zinc-950/80 to-zinc-900/50 backdrop-blur-sm hover:border-zinc-700 transition-all duration-500">
                    {/* Animated gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${principle.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                    
                    <div className="relative">
                      {/* Icon container */}
                      <div className="mb-6">
                        <motion.div 
                          className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 shadow-lg relative overflow-hidden group-hover:scale-110 transition-transform duration-500`}
                          whileHover={{ rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          {/* Icon glow */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${principle.gradient} opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-500`} />
                          
                          <principle.icon className={`w-8 h-8 stroke-[1.5] relative z-10 ${
                            idx === 0 ? "text-cyan-400" :
                            idx === 1 ? "text-purple-400" :
                            "text-green-400"
                          }`} />
                        </motion.div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                        {principle.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                        {principle.description}
                      </p>

                      {/* Bottom accent */}
                      <div className={`mt-6 h-0.5 w-0 bg-gradient-to-r ${
                        idx === 0 ? "from-cyan-400" :
                        idx === 1 ? "from-purple-400" :
                        "from-green-400"
                      } to-transparent group-hover:w-full transition-all duration-500`} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;