"use client";

import { motion } from "framer-motion";
import { Phone, ListChecks, MapPin, ChevronDown } from "lucide-react";
import { SITE } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-gradient-to-b from-cream-100 via-cream-50 to-cream-50"
    >
      {/* 背景裝飾：大地色柔和光暈與弧線 */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-nude-200/50 blur-3xl" />
        <div className="absolute bottom-[-15%] left-[-8%] h-[380px] w-[380px] rounded-full bg-cream-300/70 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-[280px] w-[280px] -translate-x-1/2 rounded-full border border-nude-200/40" />
        <div className="absolute left-1/2 top-1/3 h-[440px] w-[440px] -translate-x-1/2 rounded-full border border-nude-200/25" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 py-24 text-center sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-eyebrow"
        >
          Kaohsiung · Qiaotou Nail &amp; Lash Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 font-serif text-5xl font-bold leading-tight tracking-wide text-mocha-800 sm:text-6xl"
        >
          鎂鄉美甲<span className="mx-2 text-nude-400">|</span>美睫
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-mocha-500 sm:text-lg"
        >
          {SITE.slogan}
          <br className="hidden sm:block" />
          在大地米裸色的靜謐空間裡，以細緻工法呵護你的指尖與眼眸。
        </motion.p>

        {/* 雙主按鈕 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href={SITE.phoneTel} className="btn-primary w-full sm:w-auto">
            <Phone size={17} />
            立即預約
          </a>
          <a href="#services" className="btn-outline w-full sm:w-auto">
            <ListChecks size={17} />
            查看價目
          </a>
        </motion.div>

        <motion.a
          href={SITE.mapNav}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-8 inline-flex items-center gap-1.5 text-sm text-mocha-400 transition-colors hover:text-nude-500"
        >
          <MapPin size={15} />
          {SITE.address}
        </motion.a>
      </div>

      {/* 向下捲動提示 */}
      <motion.a
        href="#services"
        aria-label="向下瀏覽服務項目"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-nude-400"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="block"
        >
          <ChevronDown size={26} />
        </motion.span>
      </motion.a>
    </section>
  );
}
