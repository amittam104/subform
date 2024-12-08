/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        bx: "0px 3px 3px -1.5px rgba(0, 0, 0, 0.03), 0px 1px 1px -0.5px rgba(0, 0, 0, 0.03)",
        publish:
          "0px 12px 12px -6px rgba(0, 0, 0, 0.03), 0px 6px 6px -3px rgba(0, 0, 0, 0.03)",
        dropdown:
          "0px 24px 24px -12px rgba(0, 0, 0, 0.03), 0px 12px 12px -6px rgba(0, 0, 0, 0.03), 0px 6px 6px -3px rgba(0, 0, 0, 0.03), 0px 3px 3px -1.5px rgba(0, 0, 0, 0.03), 0px 1px 1px -0.5px rgba(0, 0, 0, 0.03)",
      },
    },
  },
  plugins: [],
};
