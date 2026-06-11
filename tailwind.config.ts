import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#06225C", // azul principal
          dark: "#03163F", // azul escuro
          light: "#EAF2FF", // azul claro
        },
        ink: "#5F6B7A", // cinza texto
        hair: "#E6EAF2", // borda suave
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1220px",
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(6, 34, 92, 0.18)",
        card: "0 12px 40px -16px rgba(6, 34, 92, 0.22)",
        float: "0 24px 60px -20px rgba(3, 22, 63, 0.45)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
