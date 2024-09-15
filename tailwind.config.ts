import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        typing: {
          from: {
            opacity: "0",
            width: "0%",
            border: "0 0 0 2px solid #ffffff",
          },
          via: {},
          to: {
            opacity: "1",
            width: "100%",
            border: "0 0 0 2px solid #ffffff0",
          },
        },
      },
      animation: {
        slidein300: "slidein 1.5s ease 300ms forwards",
        slidein450: "slidein 1.5s ease 450ms forwards",
        slidein600: "slidein 1.5s ease 600ms forwards",
        slidein750: "slidein 1.5s ease 750ms forwards",
        slidein900: "slidein 1.5s ease 900ms forwards",
        slidein1050: "slidein 1.5s ease 1050ms forwards",
        slidein1200: "slidein 1.5s ease 1200ms forwards",
        slidein1350: "slidein 1.5s ease 1350ms forwards",
        slidein1500: "slidein 1.5s ease 1500ms forwards",
        typed300: "typing 2s ease 300ms forwards",
        typed1700: "typing 2s ease 1700ms forwards",
        typed3100: "typing 3s ease 3100ms forwards",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};

export default config;
