module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.25rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '2rem',
      },
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "1440px",
        "2xl": "1600px",
        "3xl": "1720px",
      }
    },
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        primary: "#0066FF",       // Electric Blue from Logo
        primaryDark: "#031B4E",   // Metallic Deep Navy from Logo
        secondary: "#00B4D8",     // Vibrant Cyan Accent
        accent: "#0A1628",        // Dark Tech Navy
        navy: "#0A1628",
        navyDark: "#030A16",
        navyLight: "#13233D",
        navyMid: "#0B1D3A",
        cyanGlow: "#00E5FF",
        surface: "#ffffff",
        textMain: "#0A1628",
        textMuted: "#475569",
        textOrange: "#0066FF",
        textcolor: "#475569",
        textprimary: "#0A1628",
      },
      backgroundImage: {
        'logo-gradient': 'linear-gradient(135deg, #031B4E 0%, #0056C6 50%, #00B4D8 100%)',
        'logo-gradient-text': 'linear-gradient(135deg, #031B4E 0%, #0056C6 45%, #00B4D8 100%)',
        'logo-gradient-horizontal': 'linear-gradient(90deg, #031B4E 0%, #0056C6 50%, #00B4D8 100%)',
        'gradient-cyan-blue': 'linear-gradient(135deg, #0056C6 0%, #00B4D8 100%)',
        'glass-card': 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,246,255,0.7) 100%)',
      },
      animation: {
        'marquee': 'marquee 120s linear infinite',
        'marquee-fast': 'marquee 100s linear infinite',
        'marquee-reverse': 'marquee-reverse 130s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translate3d(-50%, 0, 0)' },
          '100%': { transform: 'translate3d(0, 0, 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(0,180,216,0.3))' },
          '50%': { opacity: '0.85', filter: 'drop-shadow(0 0 25px rgba(0,102,255,0.5))' },
        }
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
