import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Calendar, CheckCircle, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { getApiUrl } from "@/lib/env";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    problem: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showScheduleDemo, setShowScheduleDemo] = useState(false);
  const [scheduleData, setScheduleData] = useState({
    timezone: "",
    date: "",
    time: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch(getApiUrl("/api/send-message"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || "N/A",
          problem_solving: formData.problem,
          message: formData.message,
        }),
      });
      if (!response.ok) throw new Error("Failed to send message");
      setIsSubmitted(true);
      setFormData({ name: "", email: "", company: "", problem: "", message: "" });
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="flex items-center justify-center min-h-[80vh] px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-md"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green/30 to-green/20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Thank you!</h2>
            <p className="text-muted-foreground mb-6 text-sm">
              We've received your message and will get back to you within 24 hours.
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline">
              Send Another Message
            </Button>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-32 pb-16 px-4 sm:px-8 lg:px-20">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-primary/20 rounded-full blur-[120px]" />
          
          <div className="container mx-auto max-w-4xl relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1.5 text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 rounded-full mb-4">
                Contact
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight mb-6">
                Let's discuss your{" "}
                <span className="gradient-text">AI transformation</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Book a demo or talk to our team about how agentic AI can solve your challenges
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="relative py-12 sm:py-16 px-4 sm:px-8 lg:px-20">
          {/* Elegant Blended Texture Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Subtle gradient base */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-zinc-950/20" />
            
            {/* Very subtle top highlight */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/[0.02] to-transparent" />
            
            {/* Refined grid pattern with dots at intersections */}
            <div className="absolute inset-0 opacity-[0.15]" style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.03) 39px, rgba(255,255,255,0.03) 40px),
                repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.03) 39px, rgba(255,255,255,0.03) 40px)
              `,
            }} />
            
            {/* Subtle dots at grid intersections */}
            <div className="absolute inset-0 opacity-[0.2]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='0' cy='0' r='0.8'/%3E%3Ccircle cx='40' cy='0' r='0.8'/%3E%3Ccircle cx='0' cy='40' r='0.8'/%3E%3Ccircle cx='40' cy='40' r='0.8'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px',
            }} />
            
            {/* Very subtle mesh for depth */}
            <div className="absolute inset-0 opacity-[0.08]" style={{
              backgroundImage: `
                radial-gradient(circle at 30% 20%, rgba(255,255,255,0.05) 0%, transparent 40%),
                radial-gradient(circle at 70% 80%, rgba(255,255,255,0.05) 0%, transparent 40%)
              `,
            }} />
          </div>
          
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      className="mt-2" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      className="mt-2"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input 
                      id="company" 
                      placeholder="Your company" 
                      className="mt-2"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="problem">What problem are you solving?</Label>
                    <Select value={formData.problem} onValueChange={(value) => setFormData({ ...formData, problem: value })}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select a problem" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="marketing">Marketing automation</SelectItem>
                        <SelectItem value="legal">Legal operations</SelectItem>
                        <SelectItem value="customer">Customer support</SelectItem>
                        <SelectItem value="hr">HR automation</SelectItem>
                        <SelectItem value="ecommerce">Ecommerce optimization</SelectItem>
                        <SelectItem value="forecasting">Demand forecasting</SelectItem>
                        <SelectItem value="insurance">Insurance claims</SelectItem>
                        <SelectItem value="maintenance">Predictive maintenance</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your needs..." 
                      className="mt-2 min-h-[120px]"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full group" 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold mb-4">Other Ways to Reach Us</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/30 to-cyan/20 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-cyan" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a href="mailto:contact@aimill.in" className="text-muted-foreground hover:text-foreground transition-colors">
                          contact@aimill.in
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple/30 to-purple/20 flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-6 h-6 text-purple" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">Book a Demo</h3>
                        <p className="text-muted-foreground mb-3 text-sm">
                          {formData.name && formData.email && formData.message 
                            ? "Schedule a personalized demo with our team"
                            : "Please complete the contact form first to schedule a demo"}
                        </p>
                        <Button 
                          variant="outline" 
                          className="group"
                          onClick={() => {
                            if (formData.name && formData.email && formData.message) {
                              setShowScheduleDemo(!showScheduleDemo);
                            } else {
                              toast({
                                title: "Please complete the form first",
                                description: "Fill in Name, Email, and Message fields to schedule a demo",
                                variant: "destructive",
                              });
                            }
                          }}
                          disabled={!formData.name || !formData.email || !formData.message}
                        >
                          Schedule Demo
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Schedule Demo Form */}
                {showScheduleDemo && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass rounded-xl p-6 border border-border/50 mt-6"
                  >
                    <h3 className="font-bold mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-purple" />
                      Schedule Your Demo
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="timezone" className="flex items-center gap-2 mb-2">
                          <Globe className="w-4 h-4 text-muted-foreground" />
                          Timezone *
                        </Label>
                        <Select 
                          value={scheduleData.timezone} 
                          onValueChange={(value) => setScheduleData({ ...scheduleData, timezone: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your timezone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="utc">UTC (Coordinated Universal Time)</SelectItem>
                            <SelectItem value="est">EST (Eastern Standard Time)</SelectItem>
                            <SelectItem value="pst">PST (Pacific Standard Time)</SelectItem>
                            <SelectItem value="cst">CST (Central Standard Time)</SelectItem>
                            <SelectItem value="mst">MST (Mountain Standard Time)</SelectItem>
                            <SelectItem value="gmt">GMT (Greenwich Mean Time)</SelectItem>
                            <SelectItem value="cet">CET (Central European Time)</SelectItem>
                            <SelectItem value="ist">IST (Indian Standard Time)</SelectItem>
                            <SelectItem value="jst">JST (Japan Standard Time)</SelectItem>
                            <SelectItem value="aest">AEST (Australian Eastern Standard Time)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="date">Date *</Label>
                        <Input 
                          id="date" 
                          type="date" 
                          className="mt-2"
                          value={scheduleData.date}
                          onChange={(e) => setScheduleData({ ...scheduleData, date: e.target.value })}
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="time">Time *</Label>
                        <Input 
                          id="time" 
                          type="time" 
                          className="mt-2"
                          value={scheduleData.time}
                          onChange={(e) => setScheduleData({ ...scheduleData, time: e.target.value })}
                          required
                        />
                      </div>
                      <Button
                        variant="hero"
                        className="w-full group"
                        onClick={async () => {
                          if (
                            scheduleData.timezone &&
                            scheduleData.date &&
                            scheduleData.time &&
                            formData.name &&
                            formData.email
                          ) {
                            try {
                              const res = await fetch(getApiUrl("/api/schedule-demo"), {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
                                  name: formData.name,
                                  email: formData.email,
                                  company: formData.company || "N/A",
                                  date: scheduleData.date,
                                  preferred_time: scheduleData.time,
                                  time_zone: scheduleData.timezone.toUpperCase(),
                                  duration: "30 mins",
                                }),
                              });
                              if (!res.ok) throw new Error();

                              toast({
                                title: "Demo scheduled!",
                                description: `We'll send you a confirmation email for ${scheduleData.date} at ${scheduleData.time} (${scheduleData.timezone})`,
                              });

                              setScheduleData({ timezone: "", date: "", time: "" });
                              setShowScheduleDemo(false);
                            } catch {
                              toast({
                                title: "Failed to schedule demo",
                                variant: "destructive",
                              });
                            }
                          } else {
                            toast({
                              title: "Please fill all fields",
                              variant: "destructive",
                            });
                          }
                        }}
                      >
                        Confirm Demo
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;