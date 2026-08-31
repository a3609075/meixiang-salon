"use client";

import { useState } from "react";
import { MessageCircle, Check } from "lucide-react";
import { SITE } from "@/lib/site";

/** LINE 加好友按鈕：點擊複製電話號碼（LINE 不支援以電話號碼直接跳轉加好友） */
export default function LineButton() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SITE.linePhone);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // 複製失敗時不打斷操作，號碼仍完整顯示在按鈕上
    }
  };

  return (
    <button
      onClick={copy}
      className="group inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-cream-100 transition-all hover:-translate-y-0.5 hover:bg-nude-400"
      aria-label={`複製 LINE 加好友電話號碼 ${SITE.linePhoneDisplay}`}
    >
      <span className="flex h-6 w-6 items-center justify-center">
        {copied ? <Check size={18} /> : <MessageCircle size={18} />}
      </span>
      <span className="tracking-wider">
        {copied ? "已複製！請到 LINE 貼上搜尋" : `LINE 加好友 ${SITE.linePhoneDisplay}`}
      </span>
    </button>
  );
}
