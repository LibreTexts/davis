/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@libretexts/davis-core/tailwind.preset")],
  important: '.davis',
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{ts,tsx}"],
};
