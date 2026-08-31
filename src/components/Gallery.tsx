"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Hand } from "lucide-react";
import { GALLERY, type GalleryItem } from "@/lib/site";

export default function Gallery() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="bg-cream-100 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="section-eyebrow">Portfolio</p>
          <h2 className="section-title">作品展示牆</h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-mocha-400">
            每一件作品都是為客人量身打造的專屬設計。
          </p>
        </div>

        {/* 作品格線 */}
        <motion.div layout className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {GALLERY.map((item) => (
              <motion.button
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelected(item)}
                className="group relative aspect-[3/4] overflow-hidden rounded-3xl bg-gradient-to-br shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-nude-400"
                aria-label={`檢視作品：${item.title}`}
              >
                {/* 作品照：有圖顯示圖片，無圖顯示漸層佔位 */}
                {item.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.src}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <span
                    className={`absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br ${item.tone} text-mocha-600`}
                  >
                    <Hand size={34} strokeWidth={1.4} className="opacity-70" />
                    <span className="text-xs font-medium tracking-widest opacity-80">
                      作品照預留
                    </span>
                  </span>
                )}

                {/* hover 遮罩與標題 */}
                <span className="absolute inset-0 flex items-end bg-gradient-to-t from-mocha-800/70 via-mocha-800/0 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-left text-sm font-semibold text-white">
                    {item.title}
                  </span>
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* 點選彈窗（Lightbox） */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-mocha-900/70 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`作品：${selected.title}`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
              className="relative w-full max-w-md overflow-hidden rounded-4xl bg-cream-50 shadow-card"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-[4/3] w-full">
                {selected.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={selected.src}
                    alt={selected.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span
                    className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${selected.tone} text-mocha-500`}
                  >
                    <Hand size={48} strokeWidth={1.2} className="opacity-60" />
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-nude-100 px-3 py-1 text-xs font-semibold text-nude-500">
                    美甲
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-xl font-bold text-mocha-800">
                  {selected.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mocha-500">
                  {selected.desc}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-cream-50/90 text-mocha-700 shadow-soft transition-colors hover:bg-white"
                aria-label="關閉"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
