"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone, Sparkles } from "lucide-react";
import { SITE } from "@/lib/site";

const NAV_LINKS = [
  { href: "#services", label: "服務項目" },
  { href: "#gallery", label: "作品集" },
  { href: "#booking", label: "預約須知" },
  { href: "#contact", label: "聯絡我們" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream-50/90 shadow-soft backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* 品牌標誌 */}
        <a href="#top" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-nude-300/80 text-white">
            <Sparkles size={16} strokeWidth={2.2} />
          </span>
          <span className="font-serif text-lg font-bold tracking-wider text-mocha-800">
            鎂鄉美甲<span className="text-nude-400">|</span>美睫
          </span>
        </a>

        {/* 桌機選單 */}
        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-mocha-600 transition-colors hover:text-nude-500"
            >
              {l.label}
            </a>
          ))}
          <a href={SITE.phoneTel} className="btn-primary !px-5 !py-2.5">
            <Phone size={15} />
            {SITE.phoneDisplay}
          </a>
        </div>

        {/* 手機版切換鈕 */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-mocha-700 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "關閉選單" : "開啟選單"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* 手機版下拉選單 */}
      {open && (
        <div className="border-t border-cream-300 bg-cream-50/95 px-4 pb-5 pt-2 backdrop-blur-md md:hidden">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm font-medium text-mocha-700 hover:bg-cream-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href={SITE.phoneTel}
            className="btn-primary mt-3 w-full"
            onClick={() => setOpen(false)}
          >
            <Phone size={16} />
            來電預約 {SITE.phoneDisplay}
          </a>
        </div>
      )}
    </header>
  );
}
