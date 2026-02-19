/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
      extend: {
        // Design token colors (match UI tokens)
        colors: {
          primary: {
            DEFAULT: "#127BC4",
            hover: "#0F6FA2",
            dark: "#0b4a76",
          },
          secondary: {
            DEFAULT: "#8553FE",
          },
          tertiary: {
            DEFAULT: "#5F65F5",
          },
          success: {
            DEFAULT: "#338650",
          },
          warning: {
            DEFAULT: "#BB5C21",
          },
          danger: {
            DEFAULT: "#DC3838",
          },
          neutral: {
            DEFAULT: "#18181B",
          },
          muted: "#F9FAFB",
        },
      },
    },
  };
