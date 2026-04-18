import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/shared/src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1f2937",
        mist: "#f5f1e8",
        sand: "#e8dcc8",
        leaf: "#5f7a61"
      }
    }
  },
  plugins: []
};

export default config;
