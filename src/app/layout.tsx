import type { Metadata } from "next";
import { Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// 主字體：思源黑體（內文）
const notoSans = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans",
  display: "swap",
});

// 標題字體：思源宋體（優雅襯線）
const notoSerif = Noto_Serif_TC({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "鎂鄉美甲|美睫 — 高雄橋頭美甲美睫沙龍｜精緻凝膠造型・自然美睫嫁接",
  description:
    "位於高雄市橋頭區的「鎂鄉美甲|美睫」，提供凝膠造型、延甲、美睫嫁接（自然款／濃密款／山茶花）與睫毛管理等服務。大地色系的溫馨空間，全預約制，立即來電 0900-032-778 預約。",
  keywords: [
    "高雄美甲",
    "橋頭美甲",
    "橋頭美睫",
    "凝膠指甲",
    "美睫嫁接",
    "山茶花睫毛",
  ],
  openGraph: {
    title: "鎂鄉美甲|美睫 — 高雄橋頭美甲美睫沙龍",
    description:
      "指尖與眼眸之間，藏著最溫柔的日常。高雄橋頭美甲美睫沙龍，全預約制。",
    locale: "zh_TW",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant-TW" className={`${notoSans.variable} ${notoSerif.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
