"use client";

import { motion } from "framer-motion";
import { Phone, CalendarClock, Timer, Eraser } from "lucide-react";
import { BOOKING_NOTES, SITE } from "@/lib/site";

const NOTE_ICONS = [CalendarClock, Timer, Eraser];

export default function BookingGuide() {
  return (
    <section id="booking" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-cream-200/60 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* 左側：文案與預約須知 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-eyebrow">Booking</p>
            <h2 className="section-title">預約引導與須知</h2>
            <p className="mt-4 text-sm leading-relaxed text-mocha-500">
              我們採一對一全預約制，讓每位客人都能享受不趕時間的細緻服務。
              預約前請先閱讀以下須知：
            </p>

            <ul className="mt-8 space-y-6">
              {BOOKING_NOTES.map((note, i) => {
                const Icon = NOTE_ICONS[i] ?? CalendarClock;
                return (
                  <li key={note.title} className="flex gap-4">
                    <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-nude-100 text-nude-500">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="font-serif text-base font-bold text-mocha-800">
                        {note.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-mocha-500">
                        {note.desc}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* 右側：直接來電預約卡片 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-4xl bg-gradient-to-br from-cream-200 via-cream-100 to-nude-100 p-8 text-center shadow-soft sm:p-10"
          >
            <p className="section-eyebrow">Reserve Now</p>
            <h3 className="mt-3 font-serif text-2xl font-bold text-mocha-800">
              一通電話，預約專屬美麗時光
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-mocha-500">
              點擊下方按鈕即可直接撥號，由我們為你安排時段與設計師。
            </p>
            <a
              href={SITE.phoneTel}
              className="btn-primary mt-8 w-full !py-4 text-base"
            >
              <Phone size={18} />
              {SITE.phoneDisplay}
            </a>
            <p className="mt-5 text-xs leading-relaxed text-mocha-400">
              營業時間：預約制 · 詳細時段請來電確認
              <br />
              地址：{SITE.address}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
