import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Kuldeep Maheshwari",
    role: "Director",
    imageSrc: "/team/kuldeep-maheshwari.png",
    bio: "Kuldeep Maheshwari brings over 35 years of leadership experience in financial services, with deep expertise in institutional finance, governance, capital stewardship, and regulatory alignment. At Ai Mill, he guides financial architecture, risk, and disciplined scaling to ensure sustainable, investor-grade growth.",
  },
  {
    name: "Monika Maheshwari",
    role: "Director",
    imageSrc: "/team/monika-maheshwari.png",
    bio: "Monika Maheshwari has more than 20 years of experience in public engagement, CSR, and women empowerment initiatives. She shapes Ai Mill’s ESG alignment, stakeholder engagement, and responsible innovation agenda, embedding governance, inclusion, and social impact into the company’s long-term strategy.",
  },
  {
    name: "Abhinav Mithal",
    role: "Strategic Advisor",
    imageSrc: "/team/abhinav-mithal.png",
    bio: "Abhinav Mithal is Strategic Advisor at Ai Mill and CTO, Applied Science at Microsoft. He brings deep expertise in agentic AI, LLM-driven systems, and scalable cloud architectures, advising Ai Mill on agent-first design, technical differentiation, and building production-grade AI platforms that scale with enterprise demand.",
  },
];

const TEAM_SECTION_ID = "our-team";

export const TeamSection = () => {
  return (
    <section
      id={TEAM_SECTION_ID}
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-8 lg:px-20 overflow-hidden"
      aria-labelledby="team-heading"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-zinc-950/30 to-background" />
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 41px),
            repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 41px)
          `,
        }} />
      </div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="inline-block px-4 py-2 text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 rounded-full mb-4 border border-primary/20">
            The People
          </span>
          <h2 id="team-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-foreground mb-3">
            Our Team
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the people who are bringing our vision to life.
          </p>
        </motion.div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 list-none p-0 m-0">
          {teamMembers.map((member, index) => (
            <li key={`${member.name}-${index}`} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <Card className="h-full flex flex-col items-center border border-zinc-800/60 bg-gradient-to-br from-zinc-950/80 to-zinc-900/60 backdrop-blur-sm rounded-2xl px-5 py-6 sm:px-6 sm:pt-8 sm:pb-6 shadow-sm hover:border-zinc-700 transition-all duration-300">
                  {member.imageSrc && (
                    <div className="w-full flex justify-center mb-4">
                      <img
                        src={member.imageSrc}
                        alt={member.name}
                        className="h-28 w-28 sm:h-32 sm:w-32 rounded-2xl object-cover border border-white/10 shadow-md"
                        style={{ objectPosition: "center 5%" }}
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="space-y-3 max-w-[26rem] mx-auto">
                    <p className="text-base sm:text-lg font-semibold text-foreground leading-tight text-center">
                      {member.name}
                    </p>
                    <p className="text-sm font-medium text-muted-foreground text-center">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed text-left sm:text-center md:text-left">
                      {member.bio}
                    </p>
                  </div>
                </Card>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

