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
    tagline: "從修甲保養到美睫嫁接，全方位打造您的美麗。",
    items: [
      {
        name: "修指甲(手)",
        desc: "專業修剪手部指甲，塑造理想甲型，保持指甲整潔健康。",
        price: "$150",
        duration: "約 30 分鐘",
        features: ["甲型修飾", "指緣護理", "拋光保養"],
      },
      {
        name: "修指甲(腳)",
        desc: "專業修剪腳部指甲，預防嵌甲，保持足部清爽舒適。",
        price: "$200",
        duration: "約 40 分鐘",
        features: ["甲型修飾", "指緣護理", "足部放鬆"],
      },
      {
        name: "光療單手",
        desc: "手部凝膠指甲，單色或簡單造型，持久亮澤不傷甲。",
        price: "$500",
        duration: "約 60-90 分鐘",
        features: ["凝膠指甲", "持久亮澤", "不傷本甲"],
      },
      {
        name: "光療單腳",
        desc: "腳部凝膠指甲，清爽舒適，夏天必備的美足體驗。",
        price: "$450",
        duration: "約 60-90 分鐘",
        features: ["凝膠指甲", "持久亮澤", "清爽舒適"],
      },
      {
        name: "光療造型",
        desc: "客製化凝膠造型，手繪、貼鑽、漸層，打造專屬風格。",
        price: "$650 起",
        duration: "約 90-120 分鐘",
        features: ["客製化設計", "手繪彩繪", "貼鑽裝飾"],
      },
      {
        name: "按摩臉",
        desc: "臉部按摩紓壓，促進血液循環，改善肌膚暗沉問題。",
        price: "$300",
        duration: "約 40 分鐘",
        features: ["臉部紓壓", "促進循環", "改善暗沉"],
      },
      {
        name: "去粉刺",
        desc: "專業粉刺清除，深層清潔毛孔，預防痘痘生成。",
        price: "$150",
        duration: "約 30 分鐘",
        features: ["深層清潔", "毛孔淨化", "預防痘痘"],
      },
    ],
  },
  {
    key: "lash",
    label: "美睫嫁接",
    tagline: "依眼型與毛流量客製設計，睜眼即有原生般的自然電眼。",
    items: [
      {
        name: "嫁接睫毛",
        desc: "專業睫毛嫁接，依眼型設計，打造自然捲翹的迷人電眼。",
        price: "$790",
        duration: "約 90-120 分鐘",
        features: ["專業嫁接", "自然捲翹", "客製化設計"],
      },
      {
        name: "挽臉",
        desc: "傳統挽臉技術，溫和去除臉部細毛，肌膚光滑細緻。",
        price: "$150",
        duration: "約 30 分鐘",
        features: ["傳統技術", "溫和除毛", "肌膚光滑"],
      },
      {
        name: "足部去角質",
        desc: "深層足部去角質，去除老廢角質，雙足重現柔嫩光滑。",
        price: "$390",
        duration: "約 40 分鐘",
        features: ["深層清潔", "去除角質", "柔嫩光滑"],
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
