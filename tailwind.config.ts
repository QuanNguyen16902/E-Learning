// module.exports = {
//   darkMode: "class", // 👈 bắt buộc
//   content: [
//     "./src/**/*.{ts,tsx,js,jsx}",
//     "./app/**/*.{ts,tsx}",
//     "./components/**/*.{ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         brand: {
//           50:  "rgb(var(--brand-50) / <alpha-value>)",
//           100: "rgb(var(--brand-100) / <alpha-value>)",
//           200: "rgb(var(--brand-200) / <alpha-value>)",
//           300: "rgb(var(--brand-300) / <alpha-value>)",
//           400: "rgb(var(--brand-400) / <alpha-value>)",
//           500: "rgb(var(--brand-500) / <alpha-value>)",
//           600: "rgb(var(--brand-600) / <alpha-value>)",
//           700: "rgb(var(--brand-700) / <alpha-value>)",
//           800: "rgb(var(--brand-800) / <alpha-value>)",
//           900: "rgb(var(--brand-900) / <alpha-value>)",
//         },
//         success: "rgb(var(--success) / <alpha-value>)",
//         warning: "rgb(var(--warning) / <alpha-value>)",
//         error: "rgb(var(--error) / <alpha-value>)",
//         bg: "rgb(var(--bg) / <alpha-value>)",
//         surface: "rgb(var(--surface) / <alpha-value>)",
//         text: "rgb(var(--text) / <alpha-value>)",
//         muted: "rgb(var(--text-muted) / <alpha-value>)",
//         border: "rgb(var(--border) / <alpha-value>)",
//       },
//     },
//   },
//   plugins: [],
// };

// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx,mdx}",
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        /* ---------- Brand (alias của blue) ---------- */
        brand: {
          DEFAULT: "var(--blue-500)",
          50: "var(--blue-50)",
          100: "var(--blue-100)",
          200: "var(--blue-200)",
          300: "var(--blue-300)",
          400: "var(--blue-400)",
          500: "var(--blue-500)",
          600: "var(--blue-600)",
          700: "var(--blue-700)",
          800: "var(--blue-800)",
          900: "var(--blue-900)",
        },

        /* ---------- Raw ramps (HEX variables) ---------- */
        blue: {
          50: "var(--blue-50)", 100: "var(--blue-100)", 200: "var(--blue-200)",
          300: "var(--blue-300)", 400: "var(--blue-400)", 500: "var(--blue-500)",
          600: "var(--blue-600)", 700: "var(--blue-700)", 800: "var(--blue-800)", 900: "var(--blue-900)",
        },
        red: {
          50: "var(--red-50)", 100: "var(--red-100)", 200: "var(--red-200)",
          300: "var(--red-300)", 400: "var(--red-400)", 500: "var(--red-500)",
          600: "var(--red-600)", 700: "var(--red-700)", 800: "var(--red-800)", 900: "var(--red-900)",
        },
        green: {
          50: "var(--green-50)", 100: "var(--green-100)", 200: "var(--green-200)",
          300: "var(--green-300)", 400: "var(--green-400)", 500: "var(--green-500)",
          600: "var(--green-600)", 700: "var(--green-700)", 800: "var(--green-800)", 900: "var(--green-900)",
        },
        yellow: {
          50: "var(--yellow-50)", 100: "var(--yellow-100)", 200: "var(--yellow-200)",
          300: "var(--yellow-300)", 400: "var(--yellow-400)", 500: "var(--yellow-500)",
          600: "var(--yellow-600)", 700: "var(--yellow-700)", 800: "var(--yellow-800)", 900: "var(--yellow-900)",
        },
        purple: {
          50: "var(--purple-50)", 100: "var(--purple-100)", 200: "var(--purple-200)",
          300: "var(--purple-300)", 400: "var(--purple-400)", 500: "var(--purple-500)",
          600: "var(--purple-600)", 700: "var(--purple-700)", 800: "var(--purple-800)", 900: "var(--purple-900)",
        },
        orange: {
          50: "var(--orange-50)", 100: "var(--orange-100)", 200: "var(--orange-200)",
          300: "var(--orange-300)", 400: "var(--orange-400)", 500: "var(--orange-500)",
          600: "var(--orange-600)", 700: "var(--orange-700)", 800: "var(--orange-800)", 900: "var(--orange-900)",
        },
        teal: {
          50: "var(--teal-50)", 100: "var(--teal-100)", 200: "var(--teal-200)",
          300: "var(--teal-300)", 400: "var(--teal-400)", 500: "var(--teal-500)",
          600: "var(--teal-600)", 700: "var(--teal-700)", 800: "var(--teal-800)", 900: "var(--teal-900)",
        },
        cyan: {
          50: "var(--cyan-50)", 100: "var(--cyan-100)", 200: "var(--cyan-200)",
          300: "var(--cyan-300)", 400: "var(--cyan-400)", 500: "var(--cyan-500)",
          600: "var(--cyan-600)", 700: "var(--cyan-700)", 800: "var(--cyan-800)", 900: "var(--cyan-900)",
        },

        /* ---------- Neutral / Overlay / Divider ---------- */
        neutral: {
          50: "var(--neutral-50)", 100: "var(--neutral-100)", 200: "var(--neutral-200)",
          300: "var(--neutral-300)", 400: "var(--neutral-400)", 500: "var(--neutral-500)",
          600: "var(--neutral-600)", 700: "var(--neutral-700)", 800: "var(--neutral-800)", 900: "var(--neutral-900)",
        },
        overlay: {
          light: "var(--overlay-light)",
          medium: "var(--overlay-medium)",
          strong: "var(--overlay-strong)",
        },
        border: {
          DEFAULT: "var(--border)",
          subtle: "var(--border-subtle)",
          strong: "var(--border-strong)",
        },
        safelist: ["bg-brand", "text-brand", "border-brand"],

        /* ---------- Semantic tokens ---------- */
        success:   "var(--success)",
        warning:   "var(--warning)",
        error:     "var(--error)",
        attention: "var(--attention)",
        approval:  "var(--approval)",
        link:      "var(--link)",
        info:      "var(--info)",
        rate:      "var(--rate)",

        /* ---------- App surfaces / text ---------- */
        bg:      "var(--bg)",
        surface: "var(--surface)",
        text:    "var(--text)",
        muted:   "var(--text-muted)",
      },
    },
  },
  plugins: [
    // ví dụ: require("@tailwindcss/line-clamp"),
  ],
  
};

export default config;
