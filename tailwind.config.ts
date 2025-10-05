module.exports = {
  darkMode: "class", // 👈 bắt buộc
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#388BFF", // hoặc màu brand bạn đã đặt
          dark: "#2563eb",
        },
      },
    },
  },
  plugins: [],
};
