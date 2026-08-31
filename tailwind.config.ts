import type { Config } from "tailwindcss";

/**
 * 鎂鄉美甲|美睫 — 品牌色彩設定檔
 * 色系：大地米裸色調（Warm Cream / Rose Nude / 深棕灰）
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // 溫暖米色（背景主調）
        cream: {
          50: "#FDFBF7",
          100: "#FAF5EC",
          200: "#F4EBDC",
          300: "#EADCC5",
          400: "#DECBB0",
        },
        // 玫瑰裸色（強調、按鈕、點綴）
        nude: {
          50: "#FBF0EA",
          100: "#F3E0D6",
          200: "#E8C9BB",
          300: "#D9A48F",
          400: "#C98F7A",
          500: "#B77E68",
          600: "#9E6653",
        },
        // 深棕灰（文字主色）
        mocha: {
          300: "#A08B7B",
          400: "#877464",
          500: "#6B5D4F",
          600: "#5A4C3F",
          700: "#4A3F35",
          800: "#3A322B",
          900: "#2C2620",
        },
        // 香檳金（細節點綴）
        gold: "#B08D57",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans)", "sans-serif"],
        serif: ["var(--font-noto-serif)", "serif"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(74, 63, 53, 0.08)",
        card: "0 4px 20px rgba(74, 63, 53, 0.1)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
