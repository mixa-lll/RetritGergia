import heroImage from "@/assets/1a36169f5ae242c6ab59db3d9a9f50ebaf3b9f63.png";
import gongImage from "@/assets/38e9ea5e112a6693cbbf0652892f6af500f567e1.png";
import villaImage from "@/assets/124a832b55183ad9faf8e32098b7af38868592d4.png";
import yogaActivity from "@/assets/64cc803dcd5688821c4e72f955d8e2694e19b15d.png";
import horsesActivity from "@/assets/0f9d9598a4376081fcf0e878bb1af73ddd138e30.png";
import gongActivity from "@/assets/0e24abf0431b10605c6d8bc899b64f25f35eff8b.png";
import elenaImage from "@/assets/501534f93809b7df3807861f35cc2db68d892d70.png";
import painIcon1 from "@/assets/4d71dff975952751ecffd7fb65b8903791f1a1ae.png";
import painIcon2 from "@/assets/feadb1c3b665f3d92da5eb25943ed8e0744da256.png";
import painIcon3 from "@/assets/e9980a983b5daecd3967d6616a0dd951e693f2df.png";
import painIcon4 from "@/assets/06b807c9325ff353ef0fd8a170f072520a404a6f.png";
import painIcon5 from "@/assets/0a7d4bf408ccd39fc4e494546011fb986f43badc.png";
import painIcon6 from "@/assets/34b6d2cec2744b030017e80a5bef98982de1ce9a.png";
import dayIcon1 from "@/assets/7b9da75064e355b37fbdac4c8c7b25bc244f88ea.png";
import dayIcon2 from "@/assets/d2385a44d94271ac25f04b88457f4e336160b04a.png";
import dayIcon3 from "@/assets/06d2654c3e8e53a5073cfb24f0ce61eccde69313.png";
import dayIcon4 from "@/assets/0c982a327c5258697d028dc90d7a23dbd70e3484.png";
import dayIcon5 from "@/assets/108a7853d1ce297b2dea1c0636f095de577a949a.png";
import dayIcon6 from "@/assets/33876ec2f03db1d7d1ba85d83ad4a5792a26a5a9.png";
import { useState, useEffect, type ReactNode } from "react";

const mountainImage = "https://images.unsplash.com/photo-1761414299347-16e4911f1611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9yZ2lhJTIwY2F1Y2FzdXMlMjBtb3VudGFpbiUyMGxhbmRzY2FwZSUyMHN1bnNldHxlbnwxfHx8fDE3NzQ1MTQ0Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080";
const springsImage = "https://images.unsplash.com/photo-1759464519301-958f351961c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjBzcHJpbmdzJTIwc3VsZnVyJTIwdGhlcm1hbCUyMGJhdGglMjBuYXR1cmV8ZW58MXx8fHwxNzc0NTE0NDQwfDA&ixlib=rb-4.1.0&q=80&w=1080";

const R = "28px"; // global bento border-radius

const days = [
  {
    day: "День 1", date: "3 июня", title: "Заезд и мягкая настройка",
    emoji: "🌅", icon: dayIcon1,
    items: [
      { time: "15:00–17:00", text: "Заезд участников, размещение на вилле" },
      { time: "17:30–18:30", text: "Круг знакомств и открытие ретрита" },
      { time: "19:00–20:00", text: "Ужин" },
      { time: "20:30–22:00", text: "Медитация намерения на ретрит" },
    ],
  },
  {
    day: "День 2", date: "4 июня", title: "Море и звуки",
    emoji: "🌊", icon: dayIcon2,
    items: [
      { time: "07:30–09:00", text: "Утренняя йога у моря" },
      { time: "09:00–10:00", text: "Завтрак" },
      { time: "10:30–13:00", text: "Групповая регрессия" },
      { time: "13:30–14:30", text: "Обед" },
      { time: "15:00–18:00", text: "Свободное время / море / биоэнергетический массаж / фотосессия и иппотерапия с лошадьми" },
      { time: "19:00–20:00", text: "Ужин" },
      { time: "20:30–21:30", text: "Гонг-медитация на море" },
    ],
  },
  {
    day: "День 3", date: "5 июня", title: "Горы и традиции",
    emoji: "⛰️", icon: dayIcon3,
    items: [
      { time: "07:30–09:00", text: "Утренняя йога" },
      { time: "09:00–10:00", text: "Завтрак" },
      { time: "10:30–13:00", text: "Мастер-класс по изготовлению грузинского хлеба" },
      { time: "13:30–14:30", text: "Обед" },
      { time: "14:30–17:00", text: "Отдых / свободное время" },
      { time: "17:00+", text: "Экскурсия в Гомис Мта — горная деревня на высоте 2100 м: панорамы, медитация, пикник" },
      { time: "20:30–21:30", text: "Вечерний круг" },
    ],
  },
  {
    day: "День 4", date: "6 июня", title: "Восстановление",
    emoji: "🧖", icon: dayIcon4,
    items: [
      { time: "07:30–08:30", text: "Йога" },
      { time: "09:00–10:00", text: "Завтрак" },
      { time: "10:30–13:00", text: "Групповая регрессия (сессия 2)" },
      { time: "13:30–14:30", text: "Обед" },
      { time: "15:00–18:00", text: "Баня, травяной чай, купание в море" },
      { time: "19:00–20:00", text: "Ужин" },
      { time: "20:30–21:30", text: "Гонг-медитация на море" },
    ],
  },
  {
    day: "День 5", date: "7 июня", title: "День Силы и источников",
    emoji: "♨️", icon: dayIcon5,
    items: [
      { time: "07:30–08:30", text: "Йога на море" },
      { time: "09:00–10:00", text: "Завтрак" },
      { time: "10:30–17:00", text: "Поездка на горячие сульфатные источники, купание в горной реке, обед на природе" },
      { time: "18:30–19:30", text: "Ужин" },
      { time: "20:30–22:00", text: "Закрывающая церемония ретрита — благодарности, медитация, ритуал на море" },
    ],
  },
  {
    day: "День 6", date: "8 июня", title: "Завершение",
    emoji: "🌿", icon: dayIcon6,
    items: [
      { time: "09:00–10:00", text: "Завтрак" },
      { time: "10:00–11:00", text: "Круг завершения" },
      { time: "11:00–12:00", text: "Выезд участников" },
    ],
  },
];

const included = [
  { icon: "🚐", text: "Трансфер по программе" },
  { icon: "🏠", text: "Проживание на вилле (двухместное)" },
  { icon: "🍳", text: "Питание (завтраки)" },
  { icon: "🔔", text: "Гонг-медитации" },
  { icon: "🧠", text: "Групповые сессии регресса" },
  { icon: "🧘", text: "Йога на берегу моря" },
  { icon: "📸", text: "Фотосессия на лошадях" },
  { icon: "💆", text: "Биоэнергетический массаж" },
  { icon: "🐴", text: "Иппотерапия" },
  { icon: "🍞", text: "Мастер-класс по изготовлению грузинского хлеба" },
  { icon: "🛁", text: "Баня" },
  { icon: "🗺️", text: "2 экскурсии" },
];

const Pill = ({ children, light = false }: { children: ReactNode; light?: boolean }) => (
  <span
    className="inline-flex items-center px-3 py-1 text-xs tracking-widest uppercase"
    style={{
      borderRadius: "100px",
      fontFamily: "'Inter', sans-serif",
      fontWeight: 300,
      background: light ? "rgba(255,255,255,0.18)" : "rgba(44,36,25,0.07)",
      color: light ? "rgba(255,255,255,0.9)" : "#8c6a3e",
      backdropFilter: "blur(6px)",
    }}
  >
    {children}
  </span>
);

export default function App() {
  const [openDay, setOpenDay] = useState<number | null>(null);
  const [openActivity, setOpenActivity] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const activities = [
    {
      img: yogaActivity,
      pill: "🌊 Практика",
      title: "Йога у моря",
      descLines: [
        "Практика соединения тела, дыхания и внимания",
        "Возвращает баланс, ясность и внутреннюю опору",
      ],
    },
    {
      img: gongActivity,
      pill: "🔔 Звук",
      title: "Гонг-медитация",
      descLines: [
        "Глубокое погружение в звук и вибрации",
        "Перезагружает нервную систему и успокаивает ум",
      ],
    },
    {
      img: horsesActivity,
      pill: "🐴 Терапия",
      title: "Иппотерапия + Фотосессия",
      descLines: [
        "Контакт с лошадьми помогает мягко восстановить",
        "эмоциональное состояние и внутреннее равновесие",
      ],
    },
    {
      img: mountainImage,
      pill: "⛰️ Горы",
      title: "Горы — Гомис Мта",
      descLines: [
        "Высота 2100 м над уровнем моря",
        "Ощущение, будто ты над облаками",
        "Тишина, воздух и сильная энергия природы",
      ],
    },
    {
      img: springsImage,
      pill: "♨️ Источники",
      title: "Серные источники Нокалакеви",
      descLines: [
        "· расслабление тела",
        "· восстановление суставов и кожи",
        "· детокс",
        "· перезапуск нервной системы",
        "· полное отключение от суеты",
      ],
    },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = [
    { label: "О ретрите", id: "about" },
    { label: "Ведущая", id: "host" },
    { label: "Программа", id: "program" },
    { label: "Расписание", id: "schedule" },
    { label: "Стоимость", id: "pricing" },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#2c2419", background: "#f0ebe2" }} className="min-h-screen">

      {/* ── NAVBAR ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(240,235,226,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          boxShadow: scrolled ? "0 1px 0 rgba(44,36,25,0.08)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
          <button onClick={() => scrollTo("hero")} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 400, letterSpacing: "0.12em", color: scrolled ? "#2c2419" : "#fff", background: "none", border: "none", cursor: "pointer" }}>
            ВЫХОД ЕСТЬ
          </button>
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)} style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 300, letterSpacing: "0.15em", textTransform: "uppercase", color: scrolled ? "#2c2419" : "rgba(255,255,255,0.85)", background: "none", border: "none", cursor: "pointer" }}>
                {l.label}
              </button>
            ))}
            <button onClick={() => scrollTo("pricing")} className="px-5 py-2 transition-all duration-300" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase", background: scrolled ? "#2c2419" : "rgba(255,255,255,0.15)", border: scrolled ? "1px solid #2c2419" : "1px solid rgba(255,255,255,0.4)", color: "#fff", borderRadius: "100px", cursor: "pointer" }}>
              Забронировать
            </button>
          </div>
          <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer" }}>
            {[0, 1, 2].map(i => (
              <span key={i} className="block w-6 h-px transition-all duration-300" style={{ background: scrolled ? "#2c2419" : "#fff", transformOrigin: "center", transform: menuOpen && i === 0 ? "translateY(8px) rotate(45deg)" : menuOpen && i === 2 ? "translateY(-8px) rotate(-45deg)" : menuOpen && i === 1 ? "scaleX(0)" : "none" }} />
            ))}
          </button>
        </div>
        <div className="md:hidden overflow-hidden transition-all duration-400" style={{ maxHeight: menuOpen ? "360px" : "0", background: "rgba(240,235,226,0.98)", backdropFilter: "blur(16px)" }}>
          <div className="px-5 py-4 flex flex-col gap-0 border-t border-[#e0d5c5]">
            {navLinks.map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="text-left py-3 hover:text-[#b08d5e] transition-colors" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 300, letterSpacing: "0.15em", textTransform: "uppercase", color: "#2c2419", background: "none", border: "none", borderBottom: "1px solid #e8ddd0", cursor: "pointer" }}>
                {l.label}
              </button>
            ))}
            <button onClick={() => scrollTo("pricing")} className="mt-4 py-3 text-center" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase", background: "#2c2419", color: "#fff", border: "none", borderRadius: "14px", cursor: "pointer" }}>
              Забронировать
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="hero" className="relative overflow-hidden" style={{ height: "100svh", minHeight: 640, borderRadius: "0 0 36px 36px" }}>
        <img src={heroImage} alt="Ретрит в Грузии" className="absolute inset-0 w-full h-full object-cover object-center" />
        {/* Strong gradient — heavier at bottom */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.75) 100%)", borderRadius: "0 0 36px 36px" }} />

        {/* Title — anchored to top */}
        <div className="absolute inset-x-0 top-0 z-10 flex flex-col px-6 pt-24 md:px-10 md:pt-28 md:items-center md:text-center">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span
              className="inline-flex items-center px-4 py-1.5 text-xs tracking-widest uppercase"
              style={{
                borderRadius: "100px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                background: "rgba(255,255,255,0.18)",
                backdropFilter: "blur(6px)",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              Авторский ретрит
            </span>
            <span
              className="inline-flex items-center px-4 py-1.5 text-xs tracking-widest uppercase"
              style={{
                borderRadius: "100px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                background: "rgba(255,255,255,0.18)",
                backdropFilter: "blur(6px)",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              2026
            </span>
            <span
              className="inline-flex items-center gap-1.5 px-5 py-1.5 text-xs tracking-widest uppercase"
              style={{
                borderRadius: "100px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                background: "#d4b483",
                color: "#fff",
                letterSpacing: "0.2em",
                boxShadow: "0 2px 18px rgba(212,180,131,0.7)",
              }}
            >
              🇬🇪 Грузия
            </span>
          </div>
          <h1
            className="text-white"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(5.5rem, 23vw, 9rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              lineHeight: 0.88,
            }}
          >
            ВЫХОД<br />
            <span style={{ fontStyle: "italic", fontWeight: 400 }}>ЕСТЬ</span>
          </h1>
        </div>

        {/* Date + CTA — anchored to bottom */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col px-6 pb-10 md:px-10 md:pb-12 md:items-center">
          <p
            className="mb-5"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.4rem, 4vw, 1.6rem)",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.5,
            }}
          >
            Ретрит, где ты вернёшься к себе настоящему
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:justify-center">
            {/* Date pill */}
            <div
              className="flex items-center"
              style={{
                borderRadius: "100px",
                background: "rgba(255,255,255,0.10)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.16)",
                height: 46,
              }}
            >
              <div className="flex items-center gap-1.5 px-4" style={{ height: "100%" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 400, color: "#fff", lineHeight: 1 }}>3</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", fontWeight: 300, color: "rgba(255,255,255,0.5)", letterSpacing: "0.12em", textTransform: "uppercase", lineHeight: 1 }}>июня</span>
              </div>
              <div style={{ width: 20, height: "1px", background: "rgba(212,180,131,0.65)", flexShrink: 0 }} />
              <div className="flex items-center gap-1.5 px-4" style={{ height: "100%" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 400, color: "#fff", lineHeight: 1 }}>8</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", fontWeight: 300, color: "rgba(255,255,255,0.5)", letterSpacing: "0.12em", textTransform: "uppercase", lineHeight: 1 }}>июня 2026</span>
              </div>
            </div>
            {/* CTA button */}
            <button
              onClick={() => scrollTo("pricing")}
              style={{
                height: 46,
                paddingLeft: 22,
                paddingRight: 22,
                borderRadius: "100px",
                background: "#b08d5e",
                border: "none",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 400,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#fff",
                cursor: "pointer",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              Забронировать место
            </button>
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS ── */}
      <section id="about" className="pt-10 pb-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-8 pt-4">
          <Pill>Знакомо?</Pill>
          <h2 className="mt-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 3.2rem)", fontWeight: 300, color: "#2c2419", fontStyle: "italic" }}>
            «Я больше так не могу»
          </h2>
        </div>

        {/* Bento pain grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { num: "01", bold: "Бесконечный поток мыслей", rest: " — и ты не можешь остановиться", bg: "#2c2419", light: true, icon: painIcon1, whiteIcon: true },
            { num: "02", bold: "Ты мама —", rest: " и у тебя нет времени даже побыть одной", bg: "#fff", light: false, icon: painIcon2 },
            { num: "03", bold: "Работа выжала тебя,", rest: " но остановиться страшно", bg: "#e8dfd3", light: false, icon: painIcon3 },
            { num: "04", bold: "Постоянная тревога", rest: " о будущем не даёт покоя", bg: "#fff", light: false, icon: painIcon4 },
            { num: "05", bold: "Информационный шум", rest: " и тревожные новости истощают", bg: "#e8dfd3", light: false, icon: painIcon5 },
            { num: "06", bold: "Часто болеешь,", rest: " но не видишь истинную причину", bg: "#2c2419", light: true, icon: painIcon6, whiteIcon: true },
          ].map((item, i) => (
            <div 
              key={i} 
              className="p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02]" 
              style={{ 
                borderRadius: R, 
                background: item.bg, 
                minHeight: "clamp(180px, 24vw, 220px)",
                boxShadow: item.light ? "0 4px 24px rgba(0,0,0,0.12)" : "0 2px 16px rgba(0,0,0,0.04)"
              }}
            >
              <div className="flex items-start justify-between">
                {item.icon && (
                  <img 
                    src={item.icon} 
                    alt="" 
                    className={(i === 2 || i === 3) ? "w-24 h-24 object-contain" : "w-20 h-20 object-contain"} 
                    style={{ filter: item.whiteIcon ? "none" : (item.light ? "brightness(1.3) invert(1)" : "none") }} 
                  />
                )}
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.2rem, 2.6vw, 1.35rem)", color: item.light ? "rgba(255,255,255,0.95)" : "#3a2f22", lineHeight: 1.5, letterSpacing: "0.01em" }}>
                <span style={{ fontWeight: 600 }}>{item.bold}</span>{item.rest}
              </p>
            </div>
          ))}
        </div>

        {/* Statement card */}
        <div className="mt-20 text-center py-6 px-8">
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 300, color: "#b08d5e", letterSpacing: "0.35em", textTransform: "uppercase" }}>Мы знаем путь</p>
          <div className="w-8 h-px bg-[#b08d5e]/40 mx-auto my-6" />
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.8rem, 7vw, 5rem)", fontWeight: 300, color: "#2c2419", letterSpacing: "0.06em", lineHeight: 1 }}>«ВЫХОД ЕСТЬ»</h3>
          <div className="w-8 h-px bg-[#b08d5e]/40 mx-auto my-6" />
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.4rem, 4vw, 1.6rem)", color: "#8c7a68", fontStyle: "italic", lineHeight: 1.5 }}>
            Ретрит, где ты вернёшься к себе настоящему<br className="hidden sm:block" /> и увидишь свой истинный Путь
          </p>
        </div>
      </section>

      {/* ── FOR WHOM ── */}
      <section className="pt-4 pb-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {/* Big text card */}
          <div className="md:col-span-3 p-7 md:p-10 flex flex-col justify-center" style={{ borderRadius: R, background: "#fff" }}>
            <Pill>Аудитория</Pill>
            <h2 className="mt-4 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.3rem, 3vw, 2.6rem)", fontWeight: 300, color: "#2c2419" }}>
              Для кого ретрит
            </h2>
            <div className="w-10 h-px bg-[#b08d5e] mb-5" />
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", color: "#5a4a38", lineHeight: 1.7 }}>
              Для всех, кто хочет найти{" "}
              <span style={{ fontStyle: "italic", color: "#8c6a3e", fontWeight: 700 }}>ВЫХОД</span>{" "}
              <span style={{ fontStyle: "italic", color: "#8c6a3e", fontWeight: 500 }}>из сложных жизненных ситуаций</span>{" "}
              и познать себя.
            </p>
          </div>
          {/* Stats cards — side by side on mobile too */}
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-1 gap-3">
            <div className="p-6 md:p-8 flex flex-col justify-center" style={{ borderRadius: R, background: "#b08d5e" }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 6vw, 3rem)", fontWeight: 300, color: "#fff", lineHeight: 1 }}>6</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 300, color: "rgba(255,255,255,0.75)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 6 }}>дней трансформации</p>
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center" style={{ borderRadius: R, background: "#e8dfd3" }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 6vw, 3rem)", fontWeight: 300, color: "#2c2419", lineHeight: 1 }}>150+</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 300, color: "#8c7a68", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 6 }}>часов глубокой трансформации</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOST ── */}
      <section id="host" className="pt-14 pb-4 px-4 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-8">
          <Pill>Ведущие</Pill>
          <h2 className="mt-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.3rem, 4vw, 2.8rem)", fontWeight: 300, color: "#2c2419" }}>
            Ведущие ретрита
          </h2>
        </div>

        {/* Two hosts side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

          {/* ── HOST 1: Vera Venera ── */}
          <div className="flex flex-col gap-3">
            {/* Photo */}
            <div className="relative overflow-hidden" style={{ borderRadius: R, minHeight: 420 }}>
              <img src={gongImage} alt="Vera Venera" className="absolute inset-0 w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute top-5 left-5"><Pill light>Ведущая</Pill></div>
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 400, color: "#fff", textTransform: "uppercase" }}>Vera Venera</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 300, color: "rgba(255,255,255,0.6)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 4 }}>
                  Духовный практик · Коуч ICF · Мастер звукотерапии
                </p>
              </div>
            </div>
            {/* Credentials */}
            <div className="p-8" style={{ borderRadius: R, background: "#fff" }}>
              <div className="space-y-3">
                {[
                  "Более 15 лет практикую духовные практики",
                  "Сертифицированный коуч «Эриксоновский Унивеситет Коучинга» (ICF)",
                  "Мастер звукотерапии — гонг-медитация",
                  "Сертифицированный мастер по работе с метафорическими картами (Macards)",
                  "Мастер Сакральной кинезиологии «Университет Кинезиологии»",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 mt-1.5 w-4 h-4 rounded-full bg-[#b08d5e]/15 flex items-center justify-center">
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3L3 5L7 1" stroke="#b08d5e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: "#4a3a2a", lineHeight: 1.5 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Record */}
            <div className="p-6 flex items-center gap-4" style={{ borderRadius: R, background: "#2c2419" }}>
              <span style={{ fontSize: "2rem" }}>🏆</span>
              <div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", color: "#fff", fontWeight: 400 }}>Рекорд России</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 300, color: "rgba(255,255,255,0.5)", letterSpacing: "0.04em" }}>
                  Гонг-медитация на 1000+ человек по телесно-эмоциональной практике
                </p>
              </div>
            </div>
          </div>

          {/* ── HOST 2: Elena ── */}
          <div className="flex flex-col gap-3">
            {/* Photo */}
            <div className="relative overflow-hidden" style={{ borderRadius: R, minHeight: 420 }}>
              <img src={elenaImage} alt="Elena Anglen" className="absolute inset-0 w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute top-5 left-5"><Pill light>Ведущая</Pill></div>
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 400, color: "#fff", textTransform: "uppercase" }}>Elena Anglen</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 300, color: "rgba(255,255,255,0.6)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 4 }}>
                  Энергопрактик · Мастер регресса · Иппотерапевт
                </p>
              </div>
            </div>
            {/* Credentials */}
            <div className="p-8" style={{ borderRadius: R, background: "#fff" }}>
              <div className="space-y-3">
                {[
                  "Дипломированный энергопрактик",
                  "Мастер регресса",
                  "Целитель — диагностика здоровья, рекомендации лечения с использованием натуральной медицины",
                  "Иппотерапевт",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 mt-1.5 w-4 h-4 rounded-full bg-[#b08d5e]/15 flex items-center justify-center">
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3L3 5L7 1" stroke="#b08d5e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: "#4a3a2a", lineHeight: 1.5 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Accent card */}
            <div className="p-6 flex items-center gap-4" style={{ borderRadius: R, background: "#e8dfd3" }}>
              <span style={{ fontSize: "2rem" }}>🐴</span>
              <div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", color: "#2c2419", fontWeight: 400 }}>Работа с лошадьми</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 300, color: "#8c7a68", letterSpacing: "0.04em" }}>
                  Иппотерапия как инструмент исцеления и познания себя
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── ACCOMMODATION ── */}
      <section className="pt-14 pb-4 px-4 max-w-6xl mx-auto">

        {/* Header — outside any card */}
        <div className="text-center mb-8">
          <Pill>Место проведения</Pill>
          <h2 className="mt-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.3rem, 4vw, 2.8rem)", fontWeight: 300, color: "#2c2419" }}>
            Шекветили, Грузия
          </h2>
          <p className="mt-3 mx-auto max-w-lg" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", color: "#8c7a68", fontStyle: "italic", lineHeight: 1.7 }}>
            Комфортабельная вилла на берегу моря в уникальном месте — на магнитных песках
          </p>
        </div>

        {/* Full-width image */}
        <div className="relative overflow-hidden w-full" style={{ borderRadius: R, minHeight: "clamp(340px, 50vw, 520px)" }}>
          <img src={villaImage} alt="Вилла в Шекветили" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          {/* Location badge — top right */}
          <div className="absolute top-5 right-5">
            <Pill light>🏖️ Черноморское побережье</Pill>
          </div>
          {/* Bottom overlay text */}
          <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 300, color: "#fff", lineHeight: 1.15 }}>
                Вилла <span style={{ fontStyle: "italic", color: "#d4b483" }}>на берегу моря</span>
              </p>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 300, color: "rgba(255,255,255,0.5)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              03 — 08 июня 2026
            </p>
          </div>
        </div>

        {/* Feature tiles — pulled OUT, standalone row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
          {[
            { icon: "🌊", title: "Чёрное море", sub: "Прямой выход на пляж" },
            { icon: "✨", title: "Магнитные пески", sub: "Минеральный состав снимает стресс" },
            { icon: "🏡", title: "Комфорт-вилла", sub: "Двухместное размещение" },
            { icon: "🌿", title: "Шекветили", sub: "Магическое место Грузии" },
          ].map((item, i) => (
            <div key={i} className="p-6 flex flex-col gap-2" style={{ borderRadius: R, background: i === 1 ? "#2c2419" : "#fff" }}>
              <span style={{ fontSize: "1.8rem" }}>{item.icon}</span>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 400, color: i === 1 ? "#fff" : "#2c2419", lineHeight: 1.2 }}>{item.title}</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 300, color: i === 1 ? "rgba(255,255,255,0.45)" : "#8c7a68", letterSpacing: "0.04em", lineHeight: 1.5 }}>{item.sub}</p>
            </div>
          ))}
        </div>

      </section>

      {/* ── PROGRAM ACTIVITIES ── */}
      <section id="program" className="py-4 px-4 max-w-6xl mx-auto">
        <div className="mb-8 pt-4 text-center">
          <Pill>Практики</Pill>
          <h2 className="mt-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.3rem, 4vw, 2.8rem)", fontWeight: 300, color: "#2c2419" }}>
            В программе ретрита
          </h2>
        </div>
        {/* Mobile: simple stack */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-3">
          {activities.map((item, i) => {
            const isOpen = openActivity === i;
            return (
              <div key={i} className="relative overflow-hidden" style={{ borderRadius: R, height: 240 }}>
                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700" style={{ transform: isOpen ? "scale(1.04)" : "scale(1)" }} />
                <div
                  className="absolute inset-0 transition-all duration-500"
                  style={{
                    background: isOpen
                      ? "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.25) 100%)"
                      : "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 60%, transparent 100%)",
                  }}
                />
                <div className="absolute top-4 left-4"><Pill light>{item.pill}</Pill></div>

                {/* Plus button */}
                <button
                  onClick={() => setOpenActivity(isOpen ? null : i)}
                  className="absolute top-4 right-4 flex items-center justify-center transition-all duration-300"
                  style={{
                    width: 32, height: 32, borderRadius: "50%",
                    background: isOpen ? "rgba(176,141,94,0.95)" : "rgba(255,255,255,0.18)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid rgba(255,255,255,0.35)",
                    cursor: "pointer",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1V11M1 6H11" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>

                {/* Bottom: title + desc overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", fontWeight: 400 }}>{item.title}</h3>
                  <div style={{ maxHeight: isOpen ? "220px" : "0", overflow: "hidden", transition: isOpen ? "max-height 0.45s ease" : "max-height 0.3s ease" }}>
                    <div className="flex flex-col" style={{ gap: "3px" }}>
                      {item.descLines.map((line, j) => (
                        <p key={j} style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "0.92rem", color: "rgba(255,255,255,0.92)", lineHeight: 1.45, letterSpacing: "0.01em" }}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop: asymmetric bento — hover reveals desc */}
        <div className="hidden md:grid gap-3" style={{ gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "360px 260px 260px" }}>
          {[
            { idx: 0, gridCol: "1 / 3", gridRow: "1 / 2" },
            { idx: 1, gridCol: "3 / 4", gridRow: "1 / 3" },
            { idx: 2, gridCol: "1 / 2", gridRow: "2 / 3" },
            { idx: 3, gridCol: "2 / 3", gridRow: "2 / 3" },
            { idx: 4, gridCol: "1 / 4", gridRow: "3 / 4" },
          ].map(({ idx, gridCol, gridRow }) => {
            const item = activities[idx];
            return (
              <div
                key={idx}
                className="group relative overflow-hidden"
                style={{ gridColumn: gridCol, gridRow: gridRow, borderRadius: R }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Base gradient */}
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.18) 55%, transparent 100%)" }} />
                {/* Extra darkening on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.42) 60%, rgba(0,0,0,0.08) 100%)" }} />

                <div className="absolute top-5 left-5"><Pill light>{item.pill}</Pill></div>

                {/* Plus icon — appears on hover, rotates to × */}
                <div
                  className="absolute top-5 right-5 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-300"
                  style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(176,141,94,0.9)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.3)" }}
                >
                  <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1V11M1 6H11" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>

                {/* Bottom: title always visible, desc slides in on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 400, marginBottom: 0 }}>{item.title}</h3>
                  <div
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{ maxHeight: 0 }}
                    ref={el => {
                      if (!el) return;
                      const parent = el.closest(".group");
                      if (!parent) return;
                      const show = () => { el.style.maxHeight = "160px"; el.style.marginTop = "10px"; };
                      const hide = () => { el.style.maxHeight = "0"; el.style.marginTop = "0"; };
                      (parent as HTMLElement).addEventListener("mouseenter", show);
                      (parent as HTMLElement).addEventListener("mouseleave", hide);
                    }}
                  >
                    <div className="flex flex-col gap-1">
                      {item.descLines.map((line, j) => (
                        <p key={j} style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "0.82rem", color: "rgba(255,255,255,0.92)", lineHeight: 1.5, letterSpacing: "0.015em" }}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tour overview tags */}
        <div className="mt-3 p-7 flex flex-wrap gap-2 items-center justify-center" style={{ borderRadius: R, background: "#fff" }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", color: "#8c7a68", marginRight: 8 }}>📅 3–8 июня · 5 ночей / 6 дней</span>
          {["🌊 Море", "🧘 Йога", "⚡ Энергопрактики", "🗺 Экскурсии", "💆 Восстановление", "🔔 Гонг", "🐴 Иппотерапия"].map((tag, i) => (
            <span key={i} className="px-4 py-2" style={{ borderRadius: "100px", background: "#f0ebe2", fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 300, color: "#5a4a38" }}>{tag}</span>
          ))}
        </div>
      </section>

      {/* ── SCHEDULE ── */}
      <section id="schedule" className="py-4 px-4 max-w-6xl mx-auto pb-10">
        <div className="mb-8 pt-4 text-center">
          <Pill>Расписание</Pill>
          <h2 className="mt-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.3rem, 4vw, 2.8rem)", fontWeight: 300, color: "#2c2419" }}>
            Программа по дням
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          {days.map((day, i) => {
            const isOpen = openDay === i;
            const accent = ["#b08d5e","#8c7a68","#6a8c7a","#7a6a8c","#b08d5e","#8c7a68"][i];
            return (
              <div
                key={i}
                className="overflow-hidden transition-all duration-300"
                style={{
                  borderRadius: R,
                  background: "#fff",
                  border: isOpen ? `1.5px solid ${accent}` : "1.5px solid transparent",
                  boxShadow: isOpen ? `0 8px 32px rgba(0,0,0,0.07)` : "none",
                }}
              >
                {/* ── Collapsed row / header ── */}
                <button
                  className="w-full flex items-center gap-5 px-6 py-5 text-left group transition-colors hover:bg-[#faf8f4]"
                  onClick={() => setOpenDay(isOpen ? null : i)}
                  style={{ background: "none", border: "none", cursor: "pointer" }}
                >
                  {/* Icon bubble */}
                  <div
                    className="flex-shrink-0 flex items-center justify-center"
                    style={{ width: 52, height: 52, borderRadius: "16px", background: isOpen ? accent : "#f0ebe2", transition: "background 0.3s" }}
                  >
                    <img src={day.icon} alt={day.day} style={{ width: 32, height: 32, objectFit: "contain" }} />
                  </div>

                  {/* Day info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", fontWeight: 400, color: "#2c2419" }}>{day.day}</span>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", fontWeight: 300, color: accent, letterSpacing: "0.14em", textTransform: "uppercase" }}>{day.date}</span>
                    </div>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", fontStyle: "italic", color: "#8c7a68", marginTop: 1, lineHeight: 1.3 }}>{day.title}</p>
                  </div>

                  {/* Items count badge */}
                  <span
                    className="flex-shrink-0 hidden sm:flex items-center gap-1.5 px-3 py-1 mr-2"
                    style={{ borderRadius: "100px", background: "#f0ebe2", fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", fontWeight: 300, color: "#8c7a68", letterSpacing: "0.08em" }}
                  >
                    {day.items.length} событий
                  </span>

                  {/* Toggle icon */}
                  <div
                    className="flex-shrink-0 flex items-center justify-center transition-all duration-300"
                    style={{
                      width: 32, height: 32, borderRadius: "50%",
                      background: isOpen ? accent : "transparent",
                      border: isOpen ? `1.5px solid ${accent}` : "1.5px solid #d5ccc0",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <path d="M5.5 1V10M1 5.5H10" stroke={isOpen ? "#fff" : "#8c7a68"} strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </button>

                {/* ── Expanded timeline ── */}
                <div
                  style={{
                    maxHeight: isOpen ? "2000px" : "0",
                    overflow: "hidden",
                    transition: isOpen ? "max-height 0.55s ease" : "max-height 0.3s ease",
                  }}
                >
                  <div className="px-6 pb-7 pt-1">
                    {/* Thin divider */}
                    <div style={{ height: "1px", background: "#f0e8dc", marginBottom: "1.5rem" }} />

                    {/* Vertical timeline */}
                    <div className="relative">
                      {/* Vertical line */}
                      <div
                        className="absolute"
                        style={{ left: 109, top: 8, bottom: 8, width: 1, background: `linear-gradient(to bottom, ${accent}40, ${accent}15)` }}
                      />

                      <div className="flex flex-col gap-0">
                        {day.items.map((item, j) => (
                          <div key={j} className="flex items-start gap-0">
                            {/* Time */}
                            <div
                              className="flex-shrink-0 text-right pr-5 pt-0.5"
                              style={{ width: 110, fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 400, color: accent, letterSpacing: "0.02em", lineHeight: "1.6rem", whiteSpace: "nowrap" }}
                            >
                              {item.time}
                            </div>

                            {/* Dot */}
                            <div className="flex-shrink-0 flex flex-col items-center" style={{ width: 16, paddingTop: "0.45rem" }}>
                              <div style={{ width: 7, height: 7, borderRadius: "50%", background: accent, flexShrink: 0 }} />
                              {j < day.items.length - 1 && (
                                <div style={{ width: 1, flex: 1, minHeight: "calc(100% + 4px)", background: "transparent" }} />
                              )}
                            </div>

                            {/* Text */}
                            <p
                              className="pl-4 pb-5"
                              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", color: "#3a2f22", lineHeight: 1.55, flex: 1 }}
                            >
                              {item.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-4 px-4 max-w-6xl mx-auto pb-10">
        <div className="mb-8 pt-4 text-center">
          <Pill>Стоимость</Pill>
          <h2 className="mt-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.3rem, 4vw, 2.8rem)", fontWeight: 300, color: "#2c2419" }}>
            Участие в ретрите
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {/* Price hero card */}
          <div className="md:col-span-2 relative overflow-hidden flex flex-col justify-between p-9" style={{ borderRadius: R, background: "#2c2419", minHeight: 320 }}>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "top", borderRadius: R }} />
            <div className="relative z-10">
              <Pill light>Цена участия</Pill>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 300, color: "#fff", lineHeight: 1, marginTop: 16 }}>88 000 ₽</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", color: "#d4b483", fontStyle: "italic", marginTop: 8 }}>10% скидка до 20 апреля</p>
            </div>
            <div className="relative z-10 mt-8">
              <a href="https://t.me/veravenera14" target="_blank" rel="noopener noreferrer" className="block text-center py-3.5 transition-colors hover:bg-[#9a7a4e]" style={{ background: "#b08d5e", borderRadius: "14px", fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase", color: "#fff", textDecoration: "none" }}>
                Забронировать место
              </a>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 300, color: "rgba(255,255,255,0.35)", textAlign: "center", marginTop: 10, letterSpacing: "0.05em" }}>
                + авиабилеты ~30 000 ₽
              </p>
            </div>
          </div>

          {/* Included grid */}
          <div className="md:col-span-3 grid grid-cols-2 gap-2 sm:gap-3">
            <div className="col-span-2 mb-1">
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.4rem, 3vw, 1.75rem)", fontWeight: 400, color: "#2c2419", letterSpacing: "0.01em" }}>
                Что входит в стоимость
              </p>
            </div>
            {included.map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-3 sm:px-5 sm:py-4" style={{ borderRadius: "18px", background: "#fff" }}>
                <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>{item.icon}</span>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "0.82rem", color: "#4a3a2a", lineHeight: 1.35 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Extra note */}
        <div className="mt-3 p-6 text-center" style={{ borderRadius: R, background: "#fff" }}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", color: "#8c7a68", fontStyle: "italic" }}>
            * Возможен вариант 3-дневной практики голодания по желанию, под присмотром специалиста
          </p>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="py-4 px-4 max-w-6xl mx-auto pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Title card */}
          <div className="md:col-span-1 p-9 flex flex-col justify-center" style={{ borderRadius: R, background: "#2c2419" }}>
            <Pill light>Связаться</Pill>
            <h2 className="mt-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 2.5vw, 2.2rem)", fontWeight: 300, color: "#fff" }}>
              Запись и вопросы
            </h2>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", color: "rgba(255,255,255,0.5)", marginTop: 12, fontStyle: "italic" }}>
              Мы рады ответить на все ваши вопросы
            </p>
          </div>
          {/* Phone card */}
          <a href="tel:+79032311451" className="md:col-span-1 p-9 flex flex-col justify-between hover:opacity-90 transition-opacity" style={{ borderRadius: R, background: "#e8dfd3", textDecoration: "none" }}>
            <span style={{ fontSize: "2.5rem" }}>📞</span>
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 300, color: "#8c7a68", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 6 }}>Телефон</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 400, color: "#2c2419" }}>+7 903 231 14 51</p>
            </div>
          </a>
          {/* Telegram card */}
          <a href="https://t.me/veravenera14" target="_blank" rel="noopener noreferrer" className="md:col-span-1 p-9 flex flex-col justify-between hover:opacity-90 transition-opacity" style={{ borderRadius: R, background: "#b08d5e", textDecoration: "none" }}>
            <span style={{ fontSize: "2.5rem" }}>✈️</span>
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 300, color: "rgba(255,255,255,0.6)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 6 }}>Telegram</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 400, color: "#fff" }}>@veravenera14</p>
            </div>
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 text-center">
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 300, color: "#a89880", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          ВЫХОД ЕСТЬ · Ретрит в Грузии · 03–08 июня 2026
        </p>
      </footer>
    </div>
  );
}
