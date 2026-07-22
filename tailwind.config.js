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
        secondary: "#1e68ff",
        accent: "#1d1c2d",
        surface: "#ffffff",
        textMain: "#111827",
        textMuted: "#4b5563",
        textOrange: "#4f46e5",
        textcolor: "#4b5563",
        textprimary: "#111827",
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
