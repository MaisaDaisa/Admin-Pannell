import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        inter: ["Inter", "sans-serif"]
      },
      colors: {
        "primary":'#1570EF',
        'total-returned': '#845EBC',
        'total-products': '#DBA362',
        'success': '#12B76A',
        'error': '#F04438',
        'border': '#F0F1F3',
        'heading': '#383E49',
        'sub-heading': '#5D6679',
        'body': '#858D9D',
        'background-white': '#FFF',
        'background-gray': '#F7F8FA',
      }
    },
  },
  plugins: [],
} satisfies Config;
