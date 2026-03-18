import { motion } from "motion/react";
import { 
  BookOpen, 
  Globe, 
  Sprout, 
  Palette, 
  FlaskConical, 
  Divide, 
  Monitor, 
  MessageSquare, 
  Check, 
  ArrowRight,
  Music,
  Layout,
  FileText
} from "lucide-react";

const subjects = [
  { name: "Social Studies", icon: Globe, color: "text-blue-400" },
  { name: "Agriculture", icon: Sprout, color: "text-green-400" },
  { name: "Creative Arts & Sports", icon: Palette, color: "text-purple-400" },
  { name: "Integrated Science", icon: FlaskConical, color: "text-cyan-400" },
  { name: "Mathematics", icon: Divide, color: "text-red-400" },
  { name: "Business Studies", icon: Monitor, color: "text-indigo-400" },
  { name: "English", icon: BookOpen, color: "text-yellow-400" },
  { name: "Kiswahili", icon: MessageSquare, color: "text-orange-400" },
];

const features = [
  {
    title: "Interactive Notes",
    desc: "Animated, drag-and-drop study notes with embedded quizzes and instant feedback — designed to make learning stick.",
    icon: FileText,
    emoji: "📝"
  },
  {
    title: "Presentation Slides",
    desc: "Clean, curriculum-aligned slides covering each topic clearly — great for revision and classroom follow-up.",
    icon: Layout,
    emoji: "🖼️",
    highlight: true
  },
  {
    title: "Audio Narration",
    desc: "Listen to lessons explained clearly in audio — perfect for students who learn better by listening or studying on the go.",
    icon: Music,
    emoji: "🔊"
  }
];

const steps = [
  { num: "01", title: "Create Your Account", desc: "Sign up with your phone number in seconds. No email or ID required." },
  { num: "02", title: "Pick a Plan & Pay via M-Pesa", desc: "Choose daily, weekly, or monthly access. Pay instantly using your M-Pesa number — no card needed." },
  { num: "03", title: "Access All Subjects", desc: "Unlock the full library of interactive notes, quizzes, and activities across all CBC subjects." },
  { num: "04", title: "Learn Interactively", desc: "Animated lessons, drag-and-drop exercises, and instant feedback — built for how students actually learn." },
];

const plans = [
  { period: "Daily", price: "10", desc: "Perfect for exam revision or a quick study session." },
  { period: "Weekly", price: "50", desc: "Ideal for consistent weekly study throughout the term.", featured: true },
  { period: "Monthly", price: "120", desc: "Best value for students who study every day of the term." },
];

export default function App() {
  return (
    <div className="relative min-h-screen">
      <div className="noise-overlay" />
      
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-bg-dark/85 backdrop-blur-xl border-b border-orange-primary/15">
        <a href="#" className="flex items-center gap-3 no-underline group">
          <div className="w-10 h-10 bg-orange-primary rounded-xl flex items-center justify-center text-white text-xl transition-transform group-hover:scale-110">
            🧪
          </div>
          <span className="font-display font-extrabold text-lg tracking-wider text-text-primary">AZILEARN</span>
        </a>
        <a 
          href="https://interactive-sigma-seven.vercel.app" 
          className="bg-orange-primary hover:bg-orange-bright text-white font-display font-semibold text-xs tracking-widest uppercase px-6 py-2.5 rounded-lg transition-all hover:-translate-y-0.5"
        >
          Login <ArrowRight className="inline-block w-4 h-4 ml-1" />
        </a>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-orange-primary/10 blur-[120px] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-orange-primary/10 border border-orange-primary/15 rounded-full px-4 py-1.5 text-[0.78rem] font-medium text-orange-bright tracking-wider uppercase mb-8"
        >
          <span className="w-1.5 h-1.5 bg-orange-primary rounded-full animate-pulse-slow" />
          Kenya CBC Curriculum · Grades 7–9
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-4xl mb-6"
        >
          Study Smarter with <em className="not-italic text-orange-primary">Interactive</em> CBC Notes
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg text-text-dim max-w-xl leading-relaxed font-light mb-12"
        >
          AziLearn gives Kenyan Junior Secondary students interactive notes, presentation slides, audio narration, and quizzes — not boring PDFs. Pay with M-Pesa, learn instantly.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a 
            href="https://interactive-sigma-seven.vercel.app" 
            className="bg-orange-primary hover:bg-orange-bright text-white font-display font-bold text-base px-9 py-4 rounded-xl transition-all shadow-[0_0_30px_rgba(255,107,0,0.3)] hover:shadow-[0_0_40px_rgba(255,107,0,0.45)] hover:-translate-y-1"
          >
            Get Started
          </a>
          <a 
            href="#subjects" 
            className="bg-transparent text-text-primary font-display font-semibold text-base px-9 py-4 rounded-xl border border-black/10 transition-all hover:border-orange-primary hover:text-orange-primary hover:-translate-y-1"
          >
            View Subjects
          </a>
        </motion.div>
      </section>

      {/* GRADES STRIP */}
      <div className="border-y border-orange-primary/15 py-5 flex flex-wrap items-center justify-center gap-8 md:gap-12 bg-bg-card px-6">
        {["Grade 7 Content", "Grade 8 Content", "Grade 9 Content", "Competency-Based Curriculum", "M-Pesa Payments"].map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 text-sm text-text-dim font-normal whitespace-nowrap">
            <div className="w-2 h-2 bg-orange-primary rounded-full" />
            {item}
          </div>
        ))}
      </div>

      {/* SUBJECTS */}
      <section id="subjects" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-xs font-semibold tracking-[0.15em] uppercase text-orange-primary mb-4">What We Cover</div>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl leading-tight mb-4">CBC Subjects,<br/>Brought to Life</h2>
        <p className="text-text-dim text-base leading-relaxed max-w-lg font-light mb-14">
          Every subject is built with animations, drag-and-drop activities, and self-tests — designed around the official KICD CBC syllabus.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {subjects.map((subject, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -3 }}
              className="group relative bg-bg-card border border-orange-primary/15 rounded-2xl p-7 transition-all hover:border-orange-primary/40 hover:bg-bg-card-hover cursor-default overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-orange-primary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              <subject.icon className={`w-10 h-10 mb-4 ${subject.color}`} />
              <div className="font-display font-bold text-base mb-1.5">{subject.name}</div>
              <div className="text-xs text-text-dim">Grades 7 – 9</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="bg-bg-card border-t border-orange-primary/15">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-xs font-semibold tracking-[0.15em] uppercase text-orange-primary mb-4">What's Included</div>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl leading-tight mb-4">Everything a Student Needs</h2>
          <p className="text-text-dim text-base leading-relaxed max-w-lg font-light mb-14">
            Every subscription gives you access to three types of learning materials, all CBC-aligned.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map((feature, i) => (
              <div 
                key={i} 
                className={`bg-bg-card-hover border rounded-2xl p-9 transition-all ${feature.highlight ? 'border-orange-primary/35 shadow-[0_0_30px_rgba(255,107,0,0.07)]' : 'border-orange-primary/15'}`}
              >
                <div className="text-4xl mb-4">{feature.emoji}</div>
                <div className="font-display font-bold text-lg mb-2.5">{feature.title}</div>
                <div className="text-text-dim text-sm leading-relaxed font-light">{feature.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-bg-card border-y border-orange-primary/15">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-xs font-semibold tracking-[0.15em] uppercase text-orange-primary mb-4">How It Works</div>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl leading-tight mb-16 text-center md:text-left">3 Steps to Start Learning</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-orange-primary/15 md:border-l-0">
            {steps.map((step, i) => (
              <div key={i} className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-orange-primary/15 last:border-0 relative">
                <div className="font-display text-5xl font-extrabold text-orange-primary/15 leading-none mb-4">{step.num}</div>
                <div className="font-display font-bold text-base mb-2.5">{step.title}</div>
                <div className="text-text-dim text-sm leading-relaxed font-light">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-xs font-semibold tracking-[0.15em] uppercase text-orange-primary mb-4">Subscription Plans</div>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl leading-tight mb-4">Simple, Affordable Pricing</h2>
        <p className="text-text-dim text-base leading-relaxed max-w-lg font-light mb-14">
          All plans give full access to every subject and every grade. Pay with M-Pesa anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -4 }}
              className={`relative bg-bg-card-hover border rounded-2xl p-9 transition-all ${plan.featured ? 'border-orange-primary bg-gradient-to-br from-[#fff7ed] to-bg-card-hover shadow-[0_10px_40px_rgba(255,107,0,0.1)]' : 'border-orange-primary/15'}`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-primary text-white font-display font-bold text-[0.7rem] tracking-widest uppercase px-4 py-1 rounded-full whitespace-nowrap">
                  Most Popular
                </div>
              )}
              <div className="text-xs text-text-dim uppercase tracking-[0.1em] mb-3">{plan.period}</div>
              <div className="font-display font-extrabold text-4xl mb-1">
                KES {plan.price}<span className="text-base font-normal text-text-dim">/{plan.period === 'Monthly' ? 'mo' : plan.period.toLowerCase()}</span>
              </div>
              <p className="text-sm text-text-dim font-light mb-7 leading-relaxed">{plan.desc}</p>
              <ul className="space-y-2.5">
                {["Full subject access", "All Grades 7–9", "Interactive notes & slides", "Audio narration", "Quizzes & activities", "Pay via M-Pesa"].map((feat, j) => (
                  <li key={j} className="text-sm text-text-dim flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-orange-primary" />
                    {feat}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="inline-flex items-center gap-3 bg-[#009639]/10 border border-[#009639]/25 rounded-xl px-6 py-4 text-sm text-[#4CAF50] font-medium">
          <span className="bg-[#009639] text-white font-display font-extrabold text-[0.7rem] px-2 py-1 rounded tracking-wider">M-PESA</span>
          All payments are processed securely via M-Pesa. No credit card required.
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-orange-primary/15 px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="text-sm text-text-dim">
          <strong className="text-text-primary font-display">AZILEARN</strong> · Interactive CBC Study Materials for Kenyan Students<br/>
          <span className="text-[0.78rem]">© 2026 AziLearn. All rights reserved.</span>
        </div>
        <div className="flex gap-6 items-center">
          <a href="#subjects" className="text-sm text-text-dim hover:text-orange-primary transition-colors">Subjects</a>
          <a href="#pricing" className="text-sm text-text-dim hover:text-orange-primary transition-colors">Pricing</a>
          <a href="https://interactive-sigma-seven.vercel.app" className="text-sm text-text-dim hover:text-orange-primary transition-colors">Login</a>
        </div>
      </footer>
    </div>
  );
}
