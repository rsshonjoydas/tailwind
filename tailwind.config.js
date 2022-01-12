module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryColor: {
          300: "#6c5ce7"
        },
        secondaryColor: {
          600: "#a29bfe"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
