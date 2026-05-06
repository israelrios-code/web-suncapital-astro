export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#1D1D1B",
        primary: "#122D70",
        accent: "#5C58ED",
        secondary: "#56E1E8",
        surface: "#DFF1F9",
        border: "#F1F2F4"
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        manrope: ["Manrope", "sans-serif"]
      }
    }
  },
  plugins: []
};
