module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        xl: "1280px",
      }
    },
    extend: {
      colors: {
        primary: "#1e68ff",
        secondary: "#2563eb",
        accent: "#0d1b3e",
        navy: "#0f1f4b",
        navyLight: "#1a2d5a",
        surface: "#ffffff",
        textMain: "#0d1b3e",
        textMuted: "#4b5563",
        textOrange: "#1e68ff",
        textcolor: "#4b5563",
        textprimary: "#0d1b3e",
      }
    },
    screens: {
      sm: "576px",
      tab: "767px",
      md: "991px",
      lg: "1024px",
      lgs: "1150px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1600px",
    },
  },
  plugins: [],
};
