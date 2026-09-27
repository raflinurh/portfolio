import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, AnimatePresence } from "framer-motion";
import {
  Globe,
  Github,
  Briefcase,
  Sparkles,
  Code2,
  Layers3,
  Wrench,
  Linkedin,
  Instagram,
  Mail,
  ExternalLink,
  FolderKanban,
  Database,
  Terminal,
  Cpu,
  Smartphone,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import Lanyard from "./Lanyard";
import profilePic from "./assets/profile.jpeg";
import galaprimesImg from "./assets/galaprimes.png";
import shortlinkImg from "./assets/shortlink.png";
import tempmailImg from "./assets/tempmail.png";
import azelozImg from "./assets/azeloz.png";
import {
  SiPhp,
  SiLaravel,
  SiJavascript,
  SiGo,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiAlpinedotjs,
  SiMysql,
  SiGit,
  SiReact,
  SiVite,
  SiVuedotjs,
  SiNuxt,
} from "react-icons/si";



const highlights = [
  "Sedang mendalami ekosistem Full Stack Development",
  "Suka 'ngulik' sistem dan memecahkan tantangan teknis",
  "Aktif membangun startup digital dari bangku kuliah",
];

const experience = [
  {
    title: "Backend Specialist",
    desc: "Membangun sistem web yang robust & aman menggunakan Laravel sebagai core framework-nya.",
  },
  {
    title: "System Maintenance",
    desc: "Menjamin kelancaran sistem produksi melalui pemantauan rutin, bug fixing, dan optimasi performa server.",
  },
  {
    title: "Production Mastery",
    desc: "Berpengalaman mendeploy aplikasi ke lingkungan nyata, menangani user real, dan menjaga stabilitas sistem.",
  },
  {
    title: "Technical Explorer",
    desc: "Senang mengeksplorasi teknologi baru seperti Go dan protokol sistem lainnya untuk memperluas wawasan teknis.",
  },
];





const techStack = {
  languages: ["PHP", "JavaScript", "Go"],
  frameworks: ["Laravel"],
  frontend: ["HTML", "CSS", "Blade", "Tailwind CSS", "Alpine.js"],
  database: ["MySQL"],
  backend: ["Eloquent ORM"],
  tools: ["Git", "Artisan CLI"],
};

const skillProgress = [
  { name: "PHP / Laravel", icon: SiLaravel, level: 92 },
  { name: "Vue / Nuxt", icon: SiNuxt, level: 85 },
  { name: "MySQL & Database", icon: SiMysql, level: 80 },
  { name: "API Integration", icon: Globe, level: 78 },
  { name: "Frontend (Tailwind)", icon: SiTailwindcss, level: 75 },
  { name: "React", icon: SiReact, level: 50 },
];



const stackGrid = [
  { name: "PHP", icon: SiPhp },
  { name: "Laravel", icon: SiLaravel },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Nuxt", icon: SiNuxt },
  { name: "Vue", icon: SiVuedotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "MySQL", icon: SiMysql },
  { name: "Go", icon: SiGo },
  { name: "React", icon: SiReact },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
  { name: "Git", icon: SiGit },
];


const projects = [
  {
    title: "Galaprimes",
    description:
      "Platform Top-Up & PPOB production-ready yang melayani ribuan transaksi digital secara otomatis setiap harinya.",
    features: [
      "Real-time Pricing Sync (Auto margin)",
      "Real-time Transaction Sync",
      "Automated Payment Gateway (PayDisini)",
      "Automated Order Processing",
      "User Balance & Mutation History",
      "Dynamic Admin Dashboard"
    ],
    tech: ["Laravel 11", "API Integration", "MySQL", "Automated Billing"],
    live: "https://galaprimes.com",
    github: "https://github.com/raflinurh",
    status: "Production",
    image: galaprimesImg
  },
  {
    title: "Azeloz",
    description:
      "Platform E-Commerce B2B & Profil Perusahaan penyedia solusi IoT industri cerdas dan sistem akuisisi data (DAQ).",
    features: [
      "Midtrans Payment Gateway",
      "Biteship Logistics API",
      "B2B Hybrid Smart Cart",
      "Mini ERP & Role Management"
    ],
    tech: ["Nuxt", "Laravel", "Tailwind CSS", "MySQL"],
    live: "http://azeloz.com/",
    github: "",
    status: "Production",
    image: azelozImg
  },
  {
    title: "GPrimes Shortlink",
    description:
      "Layanan penyingkat URL pribadi yang efisien, aman, dan ringan tanpa memerlukan database relasional.",
    features: [
      "Database-less (JSON Based)",
      "Secure Admin Dashboard",
      "Real-time Hit Counter",
      "Custom Slug Support"
    ],
    tech: ["PHP Native", "JSON", "Security Logic"],
    live: "https://demo-shortlink.gprimes.net",
    github: "https://github.com/raflinurh/gprimes-shortlink",
    status: "Active",
    image: shortlinkImg
  },
  {
    title: "Temp Mail System",
    description:
      "Sistem email sementara fungsional yang berinteraksi langsung dengan protokol mail server standar.",
    features: [
      "IMAP & POP3 Integration",
      "Real-time Email Fetching",
      "Dynamic Inbox Generation",
      "Protocol Deep Dive"
    ],
    tech: ["PHP", "IMAP", "POP3", "Networking"],
    live: "https://mail.gprimes.net",
    github: "https://github.com/raflinurh/temp-mail-imap-stable-version",
    status: "Research",
    image: tempmailImg
  },
];




const fadeIn = {
  initial: { opacity: 0, y: 30, scale: 0.9 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 15 } 
  }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const slideIn = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

const SpotlightCard = ({ children, className = "" }) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0d1a] p-8 transition-all duration-300 hover:border-cyan-400/20 hover:shadow-2xl hover:shadow-cyan-500/10 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.05),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};


const ProfileCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative group w-full max-w-[320px] mx-auto aspect-[3/4.2] rounded-[32px] overflow-hidden border border-white/10 bg-[#0a0d1a] shadow-2xl"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={profilePic}
          alt="Rafli Profile"
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#060816] via-[#060816]/10 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-x-0 bottom-0 p-6 space-y-4">
        <div className="space-y-1">
          <h3 className="text-2xl font-bold tracking-tight text-white uppercase italic">Rafli.</h3>
          <p className="text-xs font-medium text-cyan-400 uppercase tracking-tighter">Aspiring Fullstack Developer</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {[SiPhp, SiLaravel, SiMysql].map((Icon, i) => (
              <div key={i} className="h-8 w-8 rounded-full border-2 border-[#060816] bg-white/5 backdrop-blur-md flex items-center justify-center">
                <Icon className="h-4 w-4 text-white/70" />
              </div>
            ))}
          </div>

          <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">+ more</span>
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white/20 transition-colors"
        >
          View Profile
        </motion.button>
      </div>

      {/* Behind Glow */}
      <div className="absolute -inset-4 bg-cyan-500/20 blur-3xl -z-10 opacity-60" />
    </motion.div>
  );
};


export default function PortfolioWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'projects', 'contact'];
      
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          // Trigger only when the section's top is near the navbar
          const rect = element.getBoundingClientRect();
          if (rect.top <= 250) {
            current = section;
          }
        }
      }
      
      // Force contact if scrolled to the absolute bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        current = "contact";
      }

      // Clear if at top
      if (window.scrollY < 100) {
        current = "";
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (

    <div className="min-h-screen overflow-hidden bg-[#060816] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px)] bg-[size:52px_52px] opacity-30" />
        <div className="absolute left-[-8%] top-[-10%] h-[30rem] w-[30rem] rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute right-[-10%] top-[18%] h-[35rem] w-[35rem] rounded-full bg-fuchsia-500/15 blur-[120px]" />
        <div className="absolute bottom-[-15%] left-[22%] h-[25rem] w-[25rem] rounded-full bg-violet-500/20 blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_32%)]" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-5 py-6 md:px-8 lg:px-10">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-6 py-3 backdrop-blur-2xl"
        >
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <div className="text-[10px] sm:text-xs font-bold tracking-[0.3em] text-white uppercase">
              RAFLI <span className="text-cyan-400">//</span> N
            </div>
          </div>

          <div className="hidden items-center gap-8 text-[11px] font-medium tracking-widest text-white/50 uppercase md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative group transition-colors hover:text-cyan-400 ${isActive ? 'text-cyan-400' : ''}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1.5 left-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_10px_rgba(34,211,238,0.5)] ${isActive ? 'w-full shadow-[0_0_10px_rgba(34,211,238,0.5)]' : 'w-0'}`} />
                </a>
              );
            })}
          </div>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-1 hover:text-cyan-400 transition-colors"
          >
            <Menu className="h-5 w-5 text-white/70" />
          </button>
        </motion.nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md md:hidden"
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                className="fixed top-0 right-0 z-[70] h-full w-[80%] max-w-xs bg-[#060816] border-l border-white/10 p-8 md:hidden"
              >
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span className="text-xs font-bold tracking-[0.2em] uppercase">Navigation</span>
                  </div>
                  <button onClick={() => setIsMenuOpen(false)}>
                    <X className="h-6 w-6 text-white/50 hover:text-white" />
                  </button>
                </div>

                <div className="flex flex-col gap-6">
                  {navLinks.map((link, i) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        onClick={() => setIsMenuOpen(false)}
                        className={`relative group inline-block text-2xl font-bold tracking-tight hover:text-cyan-400 w-fit ${isActive ? 'text-cyan-400' : ''}`}
                      >
                        {link.name}
                        <span className={`absolute -bottom-1 left-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_10px_rgba(34,211,238,0.5)] ${isActive ? 'w-full shadow-[0_0_10px_rgba(34,211,238,0.5)]' : 'w-0'}`} />
                      </motion.a>
                    );
                  })}
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="h-px w-full bg-white/10 mb-6" />
                  <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-4">Let's Connect</p>
                  <div className="flex gap-4">
                    <Github className="h-5 w-5 text-white/40 hover:text-white cursor-pointer" />
                    <Linkedin className="h-5 w-5 text-white/40 hover:text-white cursor-pointer" />
                    <Mail className="h-5 w-5 text-white/40 hover:text-white cursor-pointer" />
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>


        {/* Spacer for fixed nav */}
        <div className="h-24" />

        <section className="relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid items-center gap-12 rounded-[32px] border border-white/10 bg-[#0a0d1a] p-8 lg:p-16 shadow-[0_0_80px_rgba(34,211,238,0.05)] lg:grid-cols-[1.1fr_0.9fr] overflow-hidden"

          >
            <motion.div variants={fadeIn} className="relative z-10">
              {/* <motion.div
                whileHover={{ scale: 1.05 }}
                className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-[10px] uppercase font-bold tracking-[0.4em] text-cyan-300"
              >
                <Sparkles className="h-4 w-4" />
                LEARN · BUILD · EXPLORE
              </motion.div> */}

              <h1 className="text-6xl font-black leading-[0.95] tracking-tighter sm:text-7xl lg:text-[110px] break-words drop-shadow-2xl">
                <motion.span
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block"
                >
                  <motion.span 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/30"
                  >
                    Hi,
                  </motion.span>
                </motion.span>
                <br />
                <motion.span
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block"
                >
                  <motion.span 
                    initial={{ opacity: 0, filter: "blur(20px)", scale: 0.85 }}
                    animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="relative inline-block mt-2 lg:mt-4 group"
                  >
                    <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent italic drop-shadow-[0_0_30px_rgba(34,211,238,0.5)] pr-4">
                      I'm Rafli.
                    </span>
                  </motion.span>
                </motion.span>
              </h1>

              <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-white/50 md:text-xl">
                <span className="text-white font-medium">Full-Stack Developer</span> yang berfokus membangun produk digital <span className="text-cyan-400 font-bold drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">production-ready</span>. 
                Mengubah kompleksitas bisnis menjadi arsitektur sistem yang efisien dan andal.
              </p>



              <div className="mt-12 flex flex-col gap-6 sm:flex-row">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-all hover:bg-cyan-400 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]"
                >
                  Explore Work
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(34,211,238,0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-3 rounded-full border border-white/20 px-8 py-4 text-sm font-bold text-white transition-all hover:border-cyan-400 hover:text-cyan-400"
                >
                  Let's Talk
                </motion.a>
              </div>

              <div className="mt-12 flex items-center gap-6">
                {[
                  { name: "Fast", desc: "Performance first" },
                  { name: "Clean", desc: "Maintainable code" },
                  { name: "Scale", desc: "Future ready" }
                ].map((item) => (
                  <div key={item.name} className="flex flex-col gap-1 border-l border-white/10 pl-4">
                    <span className="text-xs font-bold text-white/80 uppercase tracking-widest">{item.name}</span>
                    <span className="text-[10px] text-white/40 uppercase tracking-tighter">{item.desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="lg:block relative w-full flex justify-center"
            >
              {/* Lanyard for Desktop */}
              <div className="hidden lg:block w-full h-[600px] relative rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden shadow-[inset_0_0_40px_rgba(34,211,238,0.05)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 blur-[100px] opacity-50" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_60%)]" />
                <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
              </div>

              {/* Profile Card for Mobile */}
              <div className="lg:hidden w-full py-8">
                <div className="absolute inset-0 bg-cyan-500/5 blur-[60px] rounded-full" />
                <ProfileCard />
              </div>
            </motion.div>



          </motion.div>
        </section>

        <section id="about" className="mt-12 scroll-mt-32">
          <SpotlightCard className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideIn}
              className="w-full lg:w-1/3"
            >
              <span className="text-[10px] font-bold tracking-[0.5em] text-cyan-400 uppercase">My Story</span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold italic">The Journey</h2>
            </motion.div>
            <div className="w-full lg:w-2/3 text-base lg:text-lg leading-relaxed text-white/60">
              Bagi saya, software engineering adalah tentang memecahkan masalah bisnis dengan kode yang elegan. Saya memiliki rekam jejak dalam membangun sistem <span className="text-white font-medium">production-grade</span> dari nol, mengubah ide kompleks menjadi arsitektur digital yang scalable dan andal.
            </div>
          </SpotlightCard>
        </section>




        <section id="skills" className="mt-12 scroll-mt-32">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.8 }}
            variants={slideIn}
            className="mb-12"
          >
            <span className="text-[10px] font-bold tracking-[0.5em] text-cyan-400 uppercase">Technologies</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight">The Stack.</h2>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            {/* LEFT: PROGRESS */}
            <div className="space-y-6">
              {skillProgress.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-3 px-2">
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-cyan-400" />
                        <span className="text-sm font-bold uppercase tracking-widest">{skill.name}</span>
                      </div>
                      <span className="text-xs font-bold text-white/30">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT: GRID */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-3 sm:grid-cols-4 gap-4"
            >
              {stackGrid.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    variants={fadeIn}
                    key={item.name}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.05] hover:border-cyan-400/30"
                  >
                    <Icon className="h-8 w-8 text-white/70 transition-colors group-hover:text-cyan-400" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">{item.name}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>


        <section id="experience" className="mt-12 scroll-mt-32">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.8 }}
            variants={slideIn}
            className="mb-12"
          >
            <span className="text-[10px] font-bold tracking-[0.5em] text-cyan-400 uppercase">Learning Path</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight">Core Focus.</h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >

            {[
              {
                title: "Web Architecture",
                icon: Terminal,
                desc: "Merancang struktur backend yang efisien, mulai dari database relational hingga penanganan request yang kompleks.",
                color: "from-cyan-500/20 to-blue-500/20"
              },
              {
                title: "Production Mastery",
                icon: Globe,
                desc: "Paham cara deploy dan maintenance sistem produksi yang memiliki user aktif dan transaksi nyata.",
                color: "from-blue-500/20 to-purple-500/20"
              },
              {
                title: "System Maintenance",
                icon: Wrench,
                desc: "Menangani update sistem, bug fixing, dan sinkronisasi berkala untuk menjaga stabilitas layanan 24/7.",
                color: "from-purple-500/20 to-pink-500/20"
              },
              {
                title: "Logic & Algorithms",
                icon: Cpu,
                desc: "Memperkuat dasar algoritma melalui jalur akademik dan implementasi bahasa pemograman performa tinggi seperti Go.",
                color: "from-pink-500/20 to-orange-500/20"
              }
            ].map((item, index) => (
              <motion.div key={item.title} variants={fadeIn} className="h-full">
                <SpotlightCard className="h-full">
                  <div className={`mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color}`}>
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/50">
                    {item.desc}
                  </p>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="projects" className="mt-12 scroll-mt-32">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.8 }}
            variants={slideIn}
            className="mb-12 flex items-end justify-between"
          >
            <div>
              <span className="text-[10px] font-bold tracking-[0.5em] text-cyan-400 uppercase">Selected Works</span>
              <h2 className="mt-4 text-4xl font-bold tracking-tight">Real World Impact.</h2>
            </div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-8"
          >
            {projects.map((project, index) => (
              <motion.div key={project.title} variants={fadeIn}>
                <SpotlightCard
                  className="group !p-4 lg:!p-8"
                >
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="relative aspect-video lg:w-1/2 overflow-hidden rounded-2xl border border-white/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <div className="mb-2 flex gap-2">
                        {project.tech.slice(0, 3).map(t => (
                          <span key={t} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase font-bold text-white/80">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4">
                      <FolderKanban className="h-4 w-4" />
                      {project.status}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-lg text-white/50 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="mb-8">
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center gap-1.5 text-[10px] font-bold text-white/40 uppercase tracking-tighter border border-white/5 bg-white/5 px-2 py-1 rounded-md">
                            <span className="h-1 w-1 bg-cyan-400 rounded-full" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 sm:gap-4">
                      <a
                        href={project.live}
                        className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white text-black rounded-full text-xs sm:text-sm font-bold hover:bg-cyan-400 transition-colors whitespace-nowrap"
                      >
                        Launch Project <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                      </a>
                      <a
                        href={project.github}
                        className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 border border-white/20 rounded-full text-xs sm:text-sm font-bold hover:bg-white/10 transition-colors whitespace-nowrap"
                      >
                        GitHub <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                      </a>
                    </div>
                  </div>
                </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </section>


        <section id="contact" className="mt-12 py-12 scroll-mt-32">
          <SpotlightCard className="!bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 border-white/10 py-16">
            <div className="max-w-4xl mx-auto text-center px-4">
              <span className="text-[10px] font-bold tracking-[0.6em] text-cyan-400 uppercase">Ready to Start?</span>
              <h2 className="mt-6 sm:mt-8 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 sm:mb-8">Let's create something <br /><span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent italic">extraordinary.</span></h2>
              <p className="text-lg sm:text-xl text-white/40 mb-10 sm:mb-12">Saya selalu terbuka untuk kolaborasi menarik dan tantangan baru.</p>

              <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-3 sm:gap-6">
                {[
                  { icon: Mail, label: "Email", href: "mailto:rafli.nurhidayat62@gmail.com" },
                  { icon: Github, label: "GitHub", href: "https://github.com/raflinurh" },
                  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rafli-nurhidayat-748466288/" },
                  { icon: Instagram, label: "Instagram", href: "https://instagram.com/raflinrh_" }
                ].map((social) => (

                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ y: -5 }}
                    className="flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all"
                  >
                    <social.icon className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
                    <span className="text-[10px] sm:text-sm font-bold uppercase tracking-widest">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </SpotlightCard>

          <div className="mt-12 text-center text-white/20 text-[10px] uppercase font-bold tracking-[0.5em]">
            © 2025 RAFLI N · ALL RIGHTS RESERVED
          </div>
        </section>
      </main>
    </div>
  );
}
