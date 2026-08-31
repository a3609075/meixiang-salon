"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Check, Phone, Hand, Eye } from "lucide-react";
import { SERVICES, SITE } from "@/lib/site";

export default function Services() {
  const [active, setActive] = useState(SERVICES[0].key);
  const group = SERVICES.find((g) => g.key === active)!;

  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* 區塊標題 */}
        <div className="text-center">
          <p className="section-eyebrow">Services &amp; Pricing</p>
          <h2 className="section-title">服務項目與價目表</h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-mocha-400">
            價格依甲面狀況與設計複雜度浮動，實際報價以現場諮詢為準。
          </p>
        </div>

        {/* Tabs 切換：美甲 / 美睫 */}
        <div className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="服務分類"
            className="inline-flex rounded-full bg-cream-100 p-1.5"
          >
            {SERVICES.map((g) => {
              const Icon = g.key === "nail" ? Hand : Eye;
              const selected = active === g.key;
              return (
                <button
                  key={g.key}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(g.key)}
                  className={`relative flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-colors sm:px-8 ${
                    selected ? "text-white" : "text-mocha-500 hover:text-mocha-700"
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="service-tab"
                      className="absolute inset-0 rounded-full bg-nude-400"
                      transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
                    />
                  )}
                  <Icon size={16} className="relative z-10" />
                  <span className="relative z-10">{g.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 分類標語 */}
        <AnimatePresence mode="wait">
          <motion.p
            key={group.key}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mt-6 text-center text-sm text-mocha-400"
          >
            {group.tagline}
          </motion.p>
        </AnimatePresence>

        {/* 價目卡片 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={group.key}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mt-8 grid gap-5 sm:grid-cols-2"
          >
            {group.items.map((item) => (
              <div
                key={item.name}
                className="group rounded-3xl border border-cream-300 bg-cream-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-nude-200 hover:shadow-card sm:p-7"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-xl font-bold text-mocha-800">
                    {item.name}
                  </h3>
                  <span className="whitespace-nowrap rounded-full bg-nude-100 px-3.5 py-1.5 text-sm font-bold text-nude-500">
                    {item.price}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-mocha-500">
                  {item.desc}
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  {item.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-1.5 text-xs text-mocha-400"
                    >
                      <Check size={13} className="text-nude-400" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center gap-1.5 border-t border-cream-200 pt-4 text-xs text-mocha-400">
                  <Clock size={13} className="text-nude-400" />
                  {item.duration}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* 轉單按鈕 */}
        <div className="mt-10 text-center">
          <a href={SITE.phoneTel} className="btn-primary">
            <Phone size={16} />
            來電諮詢預約
          </a>
        </div>
      </div>
    </section>
  );
}
