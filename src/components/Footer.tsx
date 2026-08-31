import { Phone, MapPin, Navigation, Sparkles } from "lucide-react";
import { SITE } from "@/lib/site";
import LineButton from "./LineButton";

export default function Footer() {
  return (
    <footer id="contact" className="bg-mocha-800 text-cream-100">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* 左側：聯絡資訊與社群 */}
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-nude-300/90 text-white">
                <Sparkles size={17} />
              </span>
              <span className="font-serif text-xl font-bold tracking-wider text-cream-50">
                鎂鄉美甲<span className="text-nude-300">|</span>美睫
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-300/80">
              {SITE.slogan}
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  href={SITE.phoneTel}
                  className="group inline-flex items-center gap-3 transition-colors hover:text-nude-200"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-nude-400">
                    <Phone size={15} />
                  </span>
                  <span>
                    <span className="block text-xs text-cream-300/60">預約專線</span>
                    <span className="font-semibold tracking-wider">
                      {SITE.phoneDisplay}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={SITE.mapNav}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 transition-colors hover:text-nude-200"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-nude-400">
                    <MapPin size={15} />
                  </span>
                  <span>
                    <span className="block text-xs text-cream-300/60">店址</span>
                    <span className="font-semibold">{SITE.address}</span>
                  </span>
                </a>
              </li>
            </ul>

            {/* LINE 加好友 */}
            <div className="mt-8">
              <LineButton />
              <p className="mt-2 text-xs text-cream-300/60">
                點擊複製號碼，開啟 LINE 以電話號碼搜尋加入好友
              </p>
            </div>

            {/* 一鍵導航 */}
            <a
              href={SITE.mapNav}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-cream-100/25 px-5 py-2.5 text-sm font-semibold text-cream-100 transition-all hover:-translate-y-0.5 hover:border-nude-300 hover:text-nude-200"
            >
              <Navigation size={15} />
              一鍵導航到店
            </a>
          </div>

          {/* 右側：內嵌 Google 地圖 */}
          <div className="overflow-hidden rounded-4xl border border-white/10 shadow-card">
            <iframe
              title="鎂鄉美甲|美睫 地圖 — 高雄市橋頭區成功南路2號"
              src={SITE.mapEmbed}
              className="h-72 w-full lg:h-full lg:min-h-[340px]"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-xs text-cream-300/50">
          © {new Date().getFullYear()} 鎂鄉美甲|美睫 · 高雄市橋頭區 · All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
