import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Eye, Shield } from "lucide-react";

const About = () => {
  const principles = [
    {
      icon: Target,
      title: "Impact",
      description: "We measure success by business outcomes, not just technology adoption",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Every decision is explainable, every action is auditable",
    },
    {
      icon: Shield,
      title: "Responsibility",
      description: "Human oversight and ethical AI practices are built into everything we do",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-32 pb-16 px-4 sm:px-8 lg:px-20">
          {/* Dark Grey Texture Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-zinc-950/30 to-zinc-900/40" />
            <div className="absolute inset-0 opacity-[0.1]" style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.02) 60px, rgba(255,255,255,0.02) 61px),
                repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.02) 60px, rgba(255,255,255,0.02) 61px)
              `,
            }} />
          </div>
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
          
          <div className="container mx-auto max-w-4xl relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1.5 text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 rounded-full mb-4">
                About
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight mb-6">
                Moving enterprises from{" "}
                <span className="gradient-text">AI pilots to AI execution</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission - Side by Side */}
        <section className="relative py-12 sm:py-16 px-4 sm:px-8 lg:px-20">
          {/* Dark Grey Texture Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-zinc-950/50 to-zinc-900/60" />
            <div className="absolute inset-0 opacity-[0.2]" style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.05) 39px, rgba(255,255,255,0.05) 40px),
                repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.05) 39px, rgba(255,255,255,0.05) 40px)
              `,
            }} />
            <div className="absolute inset-0 opacity-[0.25]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='0' cy='0' r='1'/%3E%3Ccircle cx='40' cy='0' r='1'/%3E%3Ccircle cx='0' cy='40' r='1'/%3E%3Ccircle cx='40' cy='40' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px',
            }} />
            <div className="absolute inset-0 opacity-[0.12]" style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(128,128,128,0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(128,128,128,0.1) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(128,128,128,0.06) 0%, transparent 70%)
              `,
            }} />
            <div className="absolute inset-0 opacity-[0.15]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass rounded-xl p-6 lg:p-8 border border-zinc-800/50 bg-zinc-950/30 backdrop-blur-sm"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-4">
                  Our Vision
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Outcome-driven AI autonomy that transforms how enterprises operate
                </p>
              </motion.div>

              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass rounded-xl p-6 lg:p-8 border border-zinc-800/50 bg-zinc-950/30 backdrop-blur-sm"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-4">
                  Our Mission
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Move enterprises from AI pilots to AI execution. We build agentic systems that reason, act, and deliver measurable business value.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="relative py-12 sm:py-16 px-4 sm:px-8 lg:px-20">
          {/* Elegant Dark Grey Texture Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Rich gradient base */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-zinc-950/50 to-zinc-900/60" />
            
            {/* Visible grid pattern */}
            <div className="absolute inset-0 opacity-[0.2]" style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.05) 39px, rgba(255,255,255,0.05) 40px),
                repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.05) 39px, rgba(255,255,255,0.05) 40px)
              `,
            }} />
            
            {/* Visible dots at grid intersections */}
            <div className="absolute inset-0 opacity-[0.25]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='0' cy='0' r='1'/%3E%3Ccircle cx='40' cy='0' r='1'/%3E%3Ccircle cx='0' cy='40' r='1'/%3E%3Ccircle cx='40' cy='40' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px',
            }} />
            
            {/* Enhanced mesh for depth */}
            <div className="absolute inset-0 opacity-[0.12]" style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(128,128,128,0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(128,128,128,0.1) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(128,128,128,0.06) 0%, transparent 70%)
              `,
            }} />
            
            {/* Additional texture overlay */}
            <div className="absolute inset-0 opacity-[0.15]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Our Principles
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6">
              {principles.map((principle, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="glass rounded-xl p-6 text-center border border-zinc-800/50 bg-zinc-950/30 hover:border-zinc-700 hover:bg-zinc-950/50 transition-all group backdrop-blur-sm"
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform ${
                    idx === 0 ? "bg-gradient-to-br from-cyan/30 to-cyan/20" :
                    idx === 1 ? "bg-gradient-to-br from-purple/30 to-purple/20" :
                    "bg-gradient-to-br from-green/30 to-green/20"
                  }`}>
                    <principle.icon className={`w-7 h-7 ${
                      idx === 0 ? "text-cyan" :
                      idx === 1 ? "text-purple" :
                      "text-green"
                    }`} />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

