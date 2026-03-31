import { motion } from "motion/react";
import React from "react";
import { 
  ArrowRight,
  Download,
  Star
} from "lucide-react";

const subjects = [
  "Mathematics",
  "Integrated Science",
  "Social Studies",
  "Agriculture",
  "Business Studies",
  "Creative Arts & Sports",
  "CRE",
  "Physics",
  "Chemistry",
  "KCSE Past Papers"
];

const steps = [
  { num: "01", icon: "📚", title: "Pick your subject", desc: "Choose from all your CBC Grade 6–9 subjects. Find exactly the topic you need, right when you need it." },
  { num: "02", icon: "⚡", title: "Study interactively", desc: "No PDFs. Tap through lessons with diagrams, quizzes, and examples that actually make sense." },
  { num: "03", icon: "🏆", title: "Test yourself", desc: "Take timed exams, track your scores, and earn badges as you complete each topic and subject." },
  { num: "04", icon: "📈", title: "Watch yourself grow", desc: "Your progress is tracked. See which topics you've mastered and where to focus next." },
];

const features = [
  { icon: "🎮", title: "Interactive lessons", desc: "Every topic is a live experience — with animations, instant feedback, and zero boring walls of text.", tag: "Available now" },
  { icon: "⏱️", title: "Timed exams", desc: "Real exam pressure, real practice. Timed tests per topic so you're never caught off guard on exam day.", tag: "Coming soon" },
  { icon: "🗂️", title: "Project helper", desc: "CBC project work, guided step by step. Get unstuck, structure your ideas, and submit with confidence.", tag: "Coming soon" },
  { icon: "📊", title: "Progress tracking", desc: "Know exactly where you stand. Every quiz, every topic — logged so you can see the work paying off.", tag: "Coming soon" },
  { icon: "🏅", title: "Badges & certificates", desc: "Earn subject completion certificates. Real proof of the work you've put in — share it, be proud of it.", tag: "Coming soon" },
  { icon: "📄", title: "Downloadable notes", desc: "Export any topic as a clean PDF. Study offline, print it out, or revise on the go. Your notes, your way.", tag: "Coming soon" },
];

const testimonials = [
  { name: "Amina K.", role: "Grade 8 student, Nairobi", initial: "AK", text: "I used to dread Mathematics. Now I actually get it. The lessons feel like a game, not a punishment." },
  { name: "Brian M.", role: "Grade 7 student, Kisumu", initial: "BM", text: "I finished the Integrated Science unit in one weekend. The quizzes helped me know what I didn't know." },
  { name: "Grace N.", role: "Parent, Mombasa", initial: "GN", text: "My son went from struggling to explaining topics to me. AziLearn made the difference this term." },
];

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-off-white text-black overflow-x-hidden">
      {/* NAV */}
      <nav className="sticky top-0 z-[100] bg-off-white/92 backdrop-blur-xl border-b border-gray-light px-6 md:px-16 flex items-center justify-between h-16">
        <a href="/" className="font-display font-extrabold text-2xl tracking-tighter">
          Azi<span className="text-orange">Learn</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 list-none">
          <li><a href="#how" className="text-sm text-gray font-medium hover:text-black transition-colors">How it works</a></li>
          <li><a href="#subjects" className="text-sm text-gray font-medium hover:text-black transition-colors">Subjects</a></li>
          <li><a href="#features" className="text-sm text-gray font-medium hover:text-black transition-colors">Features</a></li>
          <li>
            <a 
              href="https://interactive-sigma-seven.vercel.app"
              className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange transition-colors"
            >
              <Download className="w-4 h-4" /> Download App
            </a>
          </li>
          <li><a href="https://interactive-sigma-seven.vercel.app" className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange transition-colors">Start Learning</a></li>
        </ul>
        <div className="md:hidden flex items-center gap-3">
          <a href="https://interactive-sigma-seven.vercel.app" className="p-2 bg-black text-white rounded-full"><Download className="w-4 h-4" /></a>
          <a href="https://interactive-sigma-seven.vercel.app" className="bg-black text-white px-4 py-2 rounded-full text-xs font-semibold">Login</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[92vh] flex flex-col justify-center px-6 md:px-16 py-16 md:py-32 overflow-hidden">
        <div className="absolute -top-[120px] -right-[100px] w-[600px] h-[600px] bg-[radial-gradient(circle_at_40%_40%,#FF8A3D22,transparent_70%)] rounded-full pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[400px] h-[400px] bg-[radial-gradient(circle_at_60%_60%,#F4600C11,transparent_70%)] rounded-full pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-orange-pale border border-orange/20 text-orange-dark px-4 py-1.5 rounded-full text-[0.8rem] font-semibold mb-8 w-fit tracking-wide"
        >
          <div className="w-[7px] h-[7px] bg-orange rounded-full animate-pulse-custom" />
          Built for CBC · Grades 6 – 9
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl md:text-8xl font-extrabold leading-[1.05] tracking-tighter max-w-[800px] mb-6"
        >
          Learn <span className="text-orange relative inline-block after:content-[''] after:absolute after:bottom-1 md:after:bottom-4 after:left-0 after:right-0 after:h-1 md:after:h-2 after:bg-orange/30 after:rounded-full">smarter,</span><br/>
          not harder.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray max-w-[560px] leading-relaxed mb-10"
        >
          AziLearn brings your CBC subjects to life — with interactive lessons, timed exams, and tools built for Kenyan students who want to actually understand, not just memorise.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 items-center mb-12"
        >
          <a href="https://interactive-sigma-seven.vercel.app" className="bg-orange text-white px-8 py-4 rounded-full text-base font-bold font-display hover:bg-orange-dark transition-all hover:-translate-y-0.5 flex items-center gap-2 shadow-lg shadow-orange/20">
            Start Learning <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="https://interactive-sigma-seven.vercel.app"
            className="bg-transparent text-black px-8 py-4 rounded-full text-base font-semibold border-2 border-black hover:bg-black hover:text-white transition-all flex items-center gap-2"
          >
            <Download className="w-5 h-5" /> Download App
          </a>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-[0.82rem] text-gray flex items-center gap-2 mb-16"
        >
          ✦ Join thousands of students already ahead of the curve
        </motion.p>

        <div className="flex flex-wrap gap-10 md:gap-20 pt-8 border-t border-gray-light">
          <div className="flex flex-col">
            <div className="font-display text-3xl md:text-4xl font-extrabold tracking-tighter">9<span className="text-orange">+</span></div>
            <div className="text-[0.82rem] text-gray mt-1">CBC subjects covered</div>
          </div>
          <div className="flex flex-col">
            <div className="font-display text-3xl md:text-4xl font-extrabold tracking-tighter">4</div>
            <div className="text-[0.82rem] text-gray mt-1">Grade levels (6 – 9)</div>
          </div>
          <div className="flex flex-col">
            <div className="font-display text-3xl md:text-4xl font-extrabold tracking-tighter">100<span className="text-orange">%</span></div>
            <div className="text-[0.82rem] text-gray mt-1">Interactive — no static PDFs</div>
          </div>
          <div className="flex flex-col">
            <div className="font-display text-3xl md:text-4xl font-extrabold tracking-tighter">0</div>
            <div className="text-[0.82rem] text-gray mt-1">Boring lessons. Ever.</div>
          </div>
        </div>
      </section>

      {/* SUBJECTS STRIP */}
      <div id="subjects" className="bg-black py-4 px-6 md:px-16 flex gap-4 overflow-x-auto no-scrollbar">
        {subjects.map((subject, i) => (
          <div 
            key={i} 
            className={`whitespace-nowrap px-5 py-2 rounded-full text-[0.82rem] font-medium transition-colors cursor-default border ${i === 0 ? 'bg-orange border-orange text-white' : 'bg-white/10 border-white/20 text-white hover:bg-orange hover:border-orange'}`}
          >
            {subject}
          </div>
        ))}
      </div>

      {/* HOW IT WORKS */}
      <section id="how" className="px-6 md:px-16 py-16 md:py-28">
        <p className="text-[0.78rem] font-bold tracking-[0.12em] text-orange uppercase mb-4">How it works</p>
        <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-4 max-w-[560px] leading-tight">Three steps to getting ahead</h2>
        <p className="text-gray max-w-[480px] leading-relaxed mb-12 text-base">No complicated setup. Just open, learn, and track how far you've come.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="bg-white border border-gray-light rounded-[20px] p-8 transition-all hover:border-orange hover:-translate-y-1 group">
              <div className="font-display text-5xl font-extrabold text-orange-pale leading-none mb-4 transition-colors group-hover:text-orange/10">{step.num}</div>
              <div className="w-11 h-11 bg-orange-pale rounded-xl flex items-center justify-center text-xl mb-4">{step.icon}</div>
              <h3 className="font-display text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-[0.9rem] text-gray leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="bg-white px-6 md:px-16 py-16 md:py-28">
        <p className="text-[0.78rem] font-bold tracking-[0.12em] text-orange uppercase mb-4">What you get</p>
        <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-4 max-w-[560px] leading-tight">Everything a serious student needs</h2>
        <p className="text-gray max-w-[480px] leading-relaxed mb-12 text-base">AziLearn is built around how CBC students actually study — not how textbooks think you do.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-gray-light border border-gray-light rounded-[20px] overflow-hidden">
          {features.map((feature, i) => (
            <div key={i} className="bg-white p-8 transition-colors hover:bg-orange-pale group">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="font-display text-base font-bold mb-2">{feature.title}</h3>
              <p className="text-[0.875rem] text-gray leading-relaxed mb-4">{feature.desc}</p>
              <span className="inline-block text-[0.72rem] font-bold tracking-wider text-orange-dark bg-orange-pale px-2.5 py-1 rounded-full uppercase">{feature.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-off-white px-6 md:px-16 py-16 md:py-28">
        <p className="text-[0.78rem] font-bold tracking-[0.12em] text-orange uppercase mb-4">Student voices</p>
        <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-4 max-w-[560px] leading-tight">What students are saying</h2>
        <p className="text-gray max-w-[480px] leading-relaxed mb-12 text-base">Real stories from students using AziLearn across Kenya.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white border border-gray-light rounded-[20px] p-8">
              <div className="flex gap-0.5 text-orange mb-4 text-sm">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-[0.95rem] leading-relaxed text-black italic mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange flex items-center justify-center font-display font-bold text-sm text-white">{t.initial}</div>
                <div>
                  <div className="font-semibold text-[0.875rem]">{t.name}</div>
                  <div className="text-[0.78rem] text-gray">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="px-4 md:px-12 pb-8">
        <section className="bg-black rounded-[28px] px-8 md:px-20 py-16 md:py-24 text-center relative overflow-hidden">
          <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[radial-gradient(ellipse,#F4600C33,transparent_70%)] pointer-events-none" />
          <h2 className="font-display text-4xl md:text-6xl font-extrabold text-white tracking-tighter mb-4 relative">Your future self<br/><span className="text-orange-light">starts today.</span></h2>
          <p className="text-[#999] text-lg max-w-[480px] mx-auto leading-relaxed mb-10 relative">Don't wait for exam time to start revising. Join the students who are already ahead — and stay there.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative">
            <a href="https://interactive-sigma-seven.vercel.app" className="bg-orange text-white px-10 py-4 rounded-full text-lg font-bold font-display hover:bg-orange-dark transition-all">Start Learning Now →</a>
            <a href="https://interactive-sigma-seven.vercel.app" className="bg-white text-black px-10 py-4 rounded-full text-lg font-bold font-display hover:bg-gray-light transition-all flex items-center gap-2">
              <Download className="w-5 h-5" /> Download App
            </a>
          </div>
          <p className="mt-6 text-[0.8rem] text-[#666] relative">Access is open now. A small fee will apply as we grow — we'll always tell you before that happens.</p>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="px-6 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-light">
        <a href="/" className="font-display font-extrabold text-xl tracking-tighter">
          Azi<span className="text-orange">Learn</span>
        </a>
        <ul className="flex gap-6 list-none">
          <li><a href="#subjects" className="text-[0.82rem] text-gray hover:text-orange transition-colors">Subjects</a></li>
          <li><a href="#how" className="text-[0.82rem] text-gray hover:text-orange transition-colors">How it works</a></li>
          <li><a href="mailto:hello@azilearn.co.ke" className="text-[0.82rem] text-gray hover:text-orange transition-colors">Contact</a></li>
        </ul>
        <p className="text-[0.82rem] text-gray">© 2025 AziLearn · Built in Kenya 🇰🇪</p>
      </footer>
    </div>
  );
}
