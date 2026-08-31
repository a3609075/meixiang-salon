/** 全站共用資料：店家資訊、服務項目、作品、預約須知 */

export const SITE = {
  name: "鎂鄉美甲|美睫",
  slogan: "指尖與眼眸之間，藏著最溫柔的日常",
  phoneDisplay: "0900-032-778",
  phoneTel: "tel:0900032778",
  address: "高雄市橋頭區成功南路2號",
  // 精確座標（導航與地圖以此為準，避免文字地址解讀錯位）
  coords: "22.756250,120.311056",
  // Google Maps 內嵌地圖（免金鑰）
  mapEmbed:
    "https://www.google.com/maps?q=22.756250,120.311056&z=17&output=embed&hl=zh-TW",
  // 一鍵導航
  mapNav: "https://www.google.com/maps/dir/?api=1&destination=22.756250,120.311056",
  // LINE 加好友：以電話號碼搜尋（LINE 官方不支援「電話直接跳轉」連結，故採點擊複製）
  linePhone: "0978000812",
  linePhoneDisplay: "0978-000-812",
} as const;

export type ServiceCategory = "nail" | "lash";

export type ServiceItem = {
  name: string;
  desc: string;
  price: string;
  duration: string;
  features: string[];
};

export type ServiceGroup = {
  key: ServiceCategory;
  label: string;
  tagline: string;
  items: ServiceItem[];
};

export const SERVICES: ServiceGroup[] = [
  {
    key: "nail",
    label: "美甲沙龍",
    tagline: "從指緣保養到凝膠造型，找回手部的細緻質感。",
    items: [
      {
        name: "基礎保養",
        desc: "指緣修護、甲面修型、深層保養，維持健康甲床。",
        price: "$500 起",
        duration: "約 60 分鐘",
        features: ["死皮修整", "指緣油護理", "拋光保養"],
      },
      {
        name: "凝膠造型",
        desc: "單色、漸層、貓眼到暈染彩繪，客製化專屬指尖風格。",
        price: "$1,000 起",
        duration: "約 90–120 分鐘",
        features: ["單色 / 漸層", "手繪彩繪", "貼鑽裝飾"],
      },
      {
        name: "延甲",
        desc: "紙片或延長膠塑形，修飾甲型比例，打造修長指線。",
        price: "$1,600 起",
        duration: "約 120–150 分鐘",
        features: ["延長膠塑形", "甲型客製", "含凝膠造型"],
      },
      {
        name: "卸甲",
        desc: "溫和卸除本院或外院凝膠，全程不磨傷本甲。",
        price: "$300 起",
        duration: "約 40 分鐘",
        features: ["本院卸甲優惠", "外院卸除", "卸後護甲建議"],
      },
    ],
  },
  {
    key: "lash",
    label: "美睫嫁接",
    tagline: "依眼型與毛流量客製設計，睜眼即有原生般的自然電眼。",
    items: [
      {
        name: "自然款",
        desc: "一日一毛精緻嫁接，仿如原生睫毛的清爽日常款。",
        price: "$900 起",
        duration: "約 90 分鐘",
        features: ["一日一毛", "自然捲翹", "通勤首選"],
      },
      {
        name: "濃密款",
        desc: "多毛嫁接提升存在感，深邃眼型不需眼線也放大雙眼。",
        price: "$1,300 起",
        duration: "約 120 分鐘",
        features: ["多毛嫁接", "深邃放大", "約會場合"],
      },
      {
        name: "山茶花",
        desc: "手工開花技術，朵朵分明如山茶花綻放，空氣感滿分。",
        price: "$1,600 起",
        duration: "約 120–150 分鐘",
        features: ["手工開花", "輕盈無感", "空氣瀏海感"],
      },
      {
        name: "睫毛管理",
        desc: "專業卸睫、補睫與養護，延長美麗的保值方案。",
        price: "$400 起",
        duration: "約 40–60 分鐘",
        features: ["溫和卸睫", "補睫優惠", "根部清潔"],
      },
    ],
  },
];

export type GalleryItem = {
  id: string;
  category: ServiceCategory;
  title: string;
  desc: string;
  /** 作品照路徑（/public 下），空字串則顯示優雅的漸層佔位 */
  src: string;
  tone: string; // 佔位圖漸層色
};

export const GALLERY: GalleryItem[] = [
  { id: "n1", category: "nail", title: "凝膠造型・精選 01", desc: "店家實拍作品，喜歡這款設計歡迎來電預約同款。", src: "/gallery/nail-1.jpg", tone: "from-nude-100 to-nude-300" },
  { id: "n2", category: "nail", title: "凝膠造型・精選 02", desc: "店家實拍作品，喜歡這款設計歡迎來電預約同款。", src: "/gallery/nail-2.jpg", tone: "from-cream-200 to-gold/60" },
  { id: "n3", category: "nail", title: "凝膠造型・精選 03", desc: "店家實拍作品，喜歡這款設計歡迎來電預約同款。", src: "/gallery/nail-3.jpg", tone: "from-nude-200 to-mocha-300/60" },
  { id: "n4", category: "nail", title: "凝膠造型・精選 04", desc: "店家實拍作品，喜歡這款設計歡迎來電預約同款。", src: "/gallery/nail-4.jpg", tone: "from-cream-100 to-nude-200" },
];

export const BOOKING_NOTES = [
  {
    title: "提前預約",
    desc: "採全預約制，建議提前 3–7 天預約。",
  },
  {
    title: "遲到保留",
    desc: "遲到逾 15 分鐘將視情況縮短服務項目或改期，敬請體諒，守時是對彼此的尊重。",
  },
  {
    title: "卸甲說明",
    desc: "外院作品卸除需另行計價；建議初次來店先卸甲再評估甲面狀況，安排最適方案。",
  },
] as const;
