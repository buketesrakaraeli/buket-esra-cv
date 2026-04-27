import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Instagram, Globe, Mail, MapPin, GraduationCap, Camera, Mic, PenTool, Moon, Sun, Languages, Menu, X } from "lucide-react";

// Hand-drawn style flower SVGs
const Flower1 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M50 35 C 65 15, 85 25, 70 45 C 95 45, 100 70, 75 70 C 85 95, 60 100, 50 80 C 40 100, 15 95, 25 70 C 0 70, 5 45, 30 45 C 15 25, 35 15, 50 35 Z" fill="currentColor" fillOpacity="0.3" />
    <circle cx="50" cy="50" r="8" fill="currentColor" fillOpacity="0.8" />
  </svg>
);

const Flower2 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M50 50 C 50 15, 75 15, 75 50 C 75 75, 50 75, 50 50 Z" fill="currentColor" fillOpacity="0.3" transform="rotate(0 50 50)" />
    <path d="M50 50 C 50 15, 75 15, 75 50 C 75 75, 50 75, 50 50 Z" fill="currentColor" fillOpacity="0.3" transform="rotate(90 50 50)" />
    <path d="M50 50 C 50 15, 75 15, 75 50 C 75 75, 50 75, 50 50 Z" fill="currentColor" fillOpacity="0.3" transform="rotate(180 50 50)" />
    <path d="M50 50 C 50 15, 75 15, 75 50 C 75 75, 50 75, 50 50 Z" fill="currentColor" fillOpacity="0.3" transform="rotate(270 50 50)" />
    <circle cx="50" cy="50" r="6" fill="currentColor" fillOpacity="0.8" />
  </svg>
);

const Flower3 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M30 70 C 20 40, 30 20, 50 20 C 70 20, 80 40, 70 70 C 60 90, 40 90, 30 70 Z" fill="currentColor" fillOpacity="0.3" />
    <path d="M50 70 L 50 100" />
    <path d="M50 85 C 40 85, 30 75, 30 75" />
    <path d="M50 90 C 60 90, 70 80, 70 80" />
  </svg>
);

const translations = {
  tr: {
    about: "Hakkımda",
    resume: "Özgeçmiş",
    contact: "İletişim",
    location: "Kocaeli, Türkiye",
    p1: "Kocaeli'de yaşayan ve iletişim alanında eğitimine devam eden bir öğrenciyim. Medya ve iletişim disiplinine ilgi duyuyor, özellikle dijital medya, içerik üretimi ve sosyal medya alanlarında kendimi geliştirmeyi hedefliyorum.",
    p2: "Eğitim sürecim boyunca iletişim hukuku, medya işletmeciliği ve kamera teknikleri gibi dersler alarak teorik bilgimi güçlendirmekte; aynı zamanda uygulamalı projelerle bu bilgileri pekiştirmekteyim.",
    p3: "Fotoğrafçılığa ilgi duyuyor ve bu alanda kendimi geliştiriyorum. Aynı zamanda podcast ve yeni medya projeleri üretmeyi amaçlıyorum. Yaratıcı düşünme yeteneğim, içerik üretme isteğim ve medya sektörüne olan ilgim doğrultusunda kariyerimi bu alanda şekillendirmeyi planlıyorum.",
    edu: "Eğitim",
    uni: "Üsküdar Üniversitesi",
    fac: "İletişim Fakültesi",
    dep: "Yeni Medya ve İletişim Bölümü (Öğrenci)",
    skills: "Odak Alanları & Yetkinlikler",
    s1: "Fotoğrafçılık & Kamera",
    s2: "Podcast Üretimi",
    s3: "İçerik Üretimi",
    s4: "Dijital & Sosyal Medya",
    acad: "Akademik İlgi Alanları",
    a1: "İletişim Hukuku",
    a2: "Medya İşletmeciliği",
    a3: "Yeni Medya Projeleri",
    getInTouch: "İletişime Geçin",
    contactDesc: "Projeler, işbirlikleri veya sadece merhaba demek için bana aşağıdaki kanallardan ulaşabilirsiniz.",
    emailBtn: "E-posta Gönder",
    rights: "Tüm hakları saklıdır."
  },
  en: {
    about: "About",
    resume: "Resume",
    contact: "Contact",
    location: "Kocaeli, Turkey",
    p1: "I am a student living in Kocaeli, continuing my education in the field of communication. I am interested in media and communication disciplines, aiming to develop myself especially in digital media, content creation, and social media.",
    p2: "Throughout my education, I have been strengthening my theoretical knowledge by taking courses such as communication law, media management, and camera techniques, while reinforcing this knowledge through applied projects.",
    p3: "I am interested in photography and continuously improving myself in this field. I also aim to produce podcasts and new media projects. With my creative thinking, passion for content creation, and interest in the media sector, I plan to shape my career in this field.",
    edu: "Education",
    uni: "Üsküdar University",
    fac: "Faculty of Communication",
    dep: "New Media and Communication (Student)",
    skills: "Focus Areas & Skills",
    s1: "Photography & Camera",
    s2: "Podcast Production",
    s3: "Content Creation",
    s4: "Digital & Social Media",
    acad: "Academic Interests",
    a1: "Communication Law",
    a2: "Media Management",
    a3: "New Media Projects",
    getInTouch: "Get in Touch",
    contactDesc: "You can reach out to me through the channels below for projects, collaborations, or just to say hi.",
    emailBtn: "Send Email",
    rights: "All rights reserved."
  }
};

export default function App() {
  const [lang, setLang] = useState<"tr" | "en">("tr");
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-violet-50 to-teal-50 dark:from-slate-950 dark:via-indigo-950/80 dark:to-teal-950/80 text-slate-700 dark:text-slate-200 font-sans selection:bg-violet-200 selection:text-violet-900 dark:selection:bg-violet-500/30 dark:selection:text-violet-100 transition-colors duration-500 relative overflow-hidden">

      {/* Background Flowers */}
      <Flower1 className="absolute top-20 -left-10 w-48 h-48 text-rose-300/40 dark:text-rose-400/10 -rotate-12 pointer-events-none" />
      <Flower2 className="absolute top-1/3 -right-16 w-64 h-64 text-violet-300/40 dark:text-violet-400/10 rotate-45 pointer-events-none" />
      <Flower3 className="absolute bottom-40 -left-12 w-40 h-40 text-teal-300/40 dark:text-teal-400/10 -rotate-45 pointer-events-none" />
      <Flower1 className="absolute -bottom-20 right-10 w-56 h-56 text-amber-300/40 dark:text-amber-400/10 rotate-90 pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border-b border-white/50 dark:border-slate-800/50 z-50 transition-colors duration-500">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-medium text-lg tracking-wide text-slate-800 dark:text-slate-100">Buket Esra Karaeli</span>

          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden md:flex gap-6 text-sm font-medium text-slate-500 dark:text-slate-400">
              <button onClick={() => scrollToSection("hakkimda")} className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">{t.about}</button>
              <button onClick={() => scrollToSection("ozgecmis")} className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">{t.resume}</button>
              <button onClick={() => scrollToSection("iletisim")} className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">{t.contact}</button>
            </div>

            <div className="flex items-center gap-2 border-l border-slate-200 dark:border-slate-700 pl-4 md:pl-6">
              <button
                onClick={() => setLang(lang === "tr" ? "en" : "tr")}
                className="p-2 rounded-full hover:bg-white/50 dark:hover:bg-slate-800/50 text-slate-500 dark:text-slate-400 transition-colors flex items-center gap-1 text-xs font-semibold"
                aria-label={lang === "tr" ? "Switch to English" : "Türkçe'ye geç"}
                title="Change Language"
              >
                <Languages className="w-4 h-4" />
                {lang.toUpperCase()}
              </button>
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full hover:bg-white/50 dark:hover:bg-slate-800/50 text-slate-500 dark:text-slate-400 transition-colors"
                aria-label={isDark ? "Aydınlık moda geç" : "Karanlık moda geç"}
                title="Toggle Theme"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Mobile hamburger button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-full hover:bg-white/50 dark:hover:bg-slate-800/50 text-slate-500 dark:text-slate-400 transition-colors"
                aria-label="Menüyü aç/kapat"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-white/30 dark:border-slate-800/30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md overflow-hidden"
            >
              <div className="flex flex-col px-6 py-3 gap-1">
                <button onClick={() => scrollToSection("hakkimda")} className="text-left py-3 px-4 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">{t.about}</button>
                <button onClick={() => scrollToSection("ozgecmis")} className="text-left py-3 px-4 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">{t.resume}</button>
                <button onClick={() => scrollToSection("iletisim")} className="text-left py-3 px-4 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">{t.contact}</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 space-y-32 relative z-10">
        {/* Hakkımda Section */}
        <section id="hakkimda" className="scroll-mt-32 relative">
          <Flower2 className="absolute -top-10 right-10 w-20 h-20 text-rose-300/60 dark:text-rose-400/20 rotate-12 pointer-events-none" />

          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl shadow-violet-200/50 dark:shadow-violet-900/20 relative"
            >
              <img
                src="https://i.imgur.com/rJRmfqO.jpeg"
                alt="Buket Esra Karaeli"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  // Hide the broken image and show initials fallback
                  e.currentTarget.style.display = "none";
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = "flex";
                }}
                referrerPolicy="no-referrer"
              />
              <div
                className="w-full h-full bg-gradient-to-br from-violet-400 to-rose-400 dark:from-violet-600 dark:to-rose-600 items-center justify-center text-white text-5xl md:text-6xl font-semibold"
                style={{ display: "none" }}
              >
                BK
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 text-center md:text-left"
            >
              <div>
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-800 dark:text-slate-100 mb-3">Buket Esra Karaeli</h1>
                <p className="text-lg text-violet-500 dark:text-violet-400 flex items-center justify-center md:justify-start gap-2 font-medium">
                  <MapPin className="w-4 h-4" /> {t.location}
                </p>
              </div>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed font-light text-lg">
                <p>{t.p1}</p>
                <p>{t.p2}</p>
                <p>{t.p3}</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Özgeçmiş Section */}
        <section id="ozgecmis" className="scroll-mt-32 relative">
          <Flower3 className="absolute -top-12 -left-8 w-24 h-24 text-teal-300/60 dark:text-teal-400/20 -rotate-12 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold tracking-tight mb-12 flex items-center gap-3 text-slate-800 dark:text-slate-100">
              <GraduationCap className="w-8 h-8 text-violet-400 dark:text-violet-500" />
              {t.resume}
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Eğitim */}
              <div className="space-y-8">
                <h3 className="text-xl font-medium border-b border-violet-100 dark:border-slate-700/50 pb-4 text-slate-700 dark:text-slate-200">{t.edu}</h3>
                <div className="relative pl-6 border-l-2 border-violet-200 dark:border-violet-900/50">
                  <div className="absolute w-3 h-3 bg-violet-400 dark:bg-violet-500 rounded-full -left-[7px] top-2 shadow-sm shadow-violet-300 dark:shadow-violet-900"></div>
                  <h4 className="font-medium text-lg text-slate-800 dark:text-slate-100">{t.uni}</h4>
                  <p className="text-slate-600 dark:text-slate-300 font-light mt-1">{t.fac}</p>
                  <p className="text-violet-500 dark:text-violet-400 text-sm mt-1 font-medium">{t.dep}</p>
                </div>
              </div>

              {/* Yetkinlikler & İlgi Alanları */}
              <div className="space-y-8">
                <h3 className="text-xl font-medium border-b border-violet-100 dark:border-slate-700/50 pb-4 text-slate-700 dark:text-slate-200">{t.skills}</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-white/50 dark:border-slate-700/50 hover:bg-white/80 dark:hover:bg-slate-800/60 transition-colors">
                    <div className="p-2 bg-rose-100 dark:bg-rose-900/30 rounded-xl text-rose-500 dark:text-rose-400"><Camera className="w-5 h-5" /></div>
                    <span className="font-medium text-sm text-slate-700 dark:text-slate-200">{t.s1}</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-white/50 dark:border-slate-700/50 hover:bg-white/80 dark:hover:bg-slate-800/60 transition-colors">
                    <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-xl text-violet-500 dark:text-violet-400"><Mic className="w-5 h-5" /></div>
                    <span className="font-medium text-sm text-slate-700 dark:text-slate-200">{t.s2}</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-white/50 dark:border-slate-700/50 hover:bg-white/80 dark:hover:bg-slate-800/60 transition-colors">
                    <div className="p-2 bg-sky-100 dark:bg-sky-900/30 rounded-xl text-sky-500 dark:text-sky-400"><PenTool className="w-5 h-5" /></div>
                    <span className="font-medium text-sm text-slate-700 dark:text-slate-200">{t.s3}</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-white/50 dark:border-slate-700/50 hover:bg-white/80 dark:hover:bg-slate-800/60 transition-colors">
                    <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-xl text-teal-500 dark:text-teal-400"><Globe className="w-5 h-5" /></div>
                    <span className="font-medium text-sm text-slate-700 dark:text-slate-200">{t.s4}</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-medium text-sm text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">{t.acad}</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-1.5 bg-white/60 dark:bg-slate-800/40 border border-white/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 rounded-full text-sm shadow-sm font-light">{t.a1}</span>
                    <span className="px-4 py-1.5 bg-white/60 dark:bg-slate-800/40 border border-white/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 rounded-full text-sm shadow-sm font-light">{t.a2}</span>
                    <span className="px-4 py-1.5 bg-white/60 dark:bg-slate-800/40 border border-white/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 rounded-full text-sm shadow-sm font-light">{t.a3}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* İletişim Section */}
        <section id="iletisim" className="scroll-mt-32 relative">
          <Flower1 className="absolute -bottom-10 -right-10 w-32 h-32 text-amber-300/60 dark:text-amber-400/20 rotate-45 pointer-events-none z-20" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl border border-white/60 dark:border-slate-700/50 shadow-2xl shadow-violet-200/40 dark:shadow-none rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 dark:from-white/5 to-transparent pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-semibold tracking-tight mb-4 text-slate-800 dark:text-slate-100">{t.getInTouch}</h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto mb-10 font-light text-lg">
                {t.contactDesc}
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://www.instagram.com/buketesrak/?hl=tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-rose-100 to-fuchsia-100 dark:from-rose-900/40 dark:to-fuchsia-900/40 text-fuchsia-900 dark:text-fuchsia-100 hover:from-rose-200 hover:to-fuchsia-200 dark:hover:from-rose-900/60 dark:hover:to-fuchsia-900/60 transition-all px-8 py-4 rounded-full font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 border border-white/50 dark:border-fuchsia-500/20"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
                <a
                  href="https://akimanaliz.wordpress.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-sky-100 to-blue-100 dark:from-sky-900/40 dark:to-blue-900/40 text-blue-900 dark:text-blue-100 hover:from-sky-200 hover:to-blue-200 dark:hover:from-sky-900/60 dark:hover:to-blue-900/60 transition-all px-8 py-4 rounded-full font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 border border-white/50 dark:border-blue-500/20"
                >
                  <Globe className="w-5 h-5" />
                  WordPress Blog
                </a>
                <a
                  href="mailto:buketesrakaraeli@gmail.com"
                  className="flex items-center gap-2 bg-gradient-to-r from-teal-100 to-emerald-100 dark:from-teal-900/40 dark:to-emerald-900/40 text-teal-900 dark:text-teal-100 hover:from-teal-200 hover:to-emerald-200 dark:hover:from-teal-900/60 dark:hover:to-emerald-900/60 transition-all px-8 py-4 rounded-full font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 border border-white/50 dark:border-teal-500/20"
                >
                  <Mail className="w-5 h-5" />
                  {t.emailBtn}
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/40 dark:border-slate-800/50 py-8 text-center text-slate-400 dark:text-slate-500 text-sm font-light relative z-10">
        <p>© {new Date().getFullYear()} Buket Esra Karaeli. {t.rights}</p>
      </footer>
    </div>
  );
}
