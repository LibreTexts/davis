/**
 * Davis Design System — Tailwind CSS Preset
 *
 * AUTO-GENERATED from tokens.ts — DO NOT EDIT MANUALLY
 * Run 'npm run generate:configs' to regenerate
 *
 * The runtime source of truth for any app or package using the design system.
 * Import via: presets: [require("@libretexts/davis-core/tailwind.preset")]
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    // Top-level overrides (replace Tailwind defaults)
    fontSize: {
      "xs": [
            "0.640rem",
            {
                  "lineHeight": "1rem"
            }
      ],
      "sm": [
            "0.800rem",
            {
                  "lineHeight": "1.25rem"
            }
      ],
      "base": [
            "1rem",
            {
                  "lineHeight": "1.5rem"
            }
      ],
      "lg": [
            "1.250rem",
            {
                  "lineHeight": "1.75rem"
            }
      ],
      "xl": [
            "1.563rem",
            {
                  "lineHeight": "2rem"
            }
      ],
      "2xl": [
            "1.953rem",
            {
                  "lineHeight": "2.25rem"
            }
      ],
      "3xl": [
            "2.441rem",
            {
                  "lineHeight": "2.75rem"
            }
      ],
      "4xl": [
            "3.052rem",
            {
                  "lineHeight": "3.25rem"
            }
      ]
},

    boxShadow: {
      "sm": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      "DEFAULT": "0 1px 3px 0 rgb(0 0 0 / 0.07), 0 1px 2px -1px rgb(0 0 0 / 0.07)",
      "md": "0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.05)",
      "lg": "0 10px 15px -3px rgb(0 0 0 / 0.07), 0 4px 6px -4px rgb(0 0 0 / 0.05)",
      "xl": "0 20px 25px -5px rgb(0 0 0 / 0.07), 0 8px 10px -6px rgb(0 0 0 / 0.05)",
      "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.15)",
      "inner": "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      "none": "none"
},

    extend: {
      colors: {
        primary: {
          DEFAULT: '#127BC4',
          50: '#ebf0f4',
          100: '#dbe7f0',
          200: '#bcd8eb',
          300: '#8dc2e7',
          400: '#4ca6e6',
          500: '#127BC4',
          600: '#106098',
          700: '#0f4b75',
          800: '#0d334e',
          900: '#0c2231',
          950: '#0b1923',
        },
        secondary: {
          DEFAULT: '#0F67A6',
          50: '#e8eef2',
          100: '#dbe7f0',
          200: '#b4d3e9',
          300: '#81bbe4',
          400: '#369be2',
          500: '#0F67A6',
          600: '#0e5181',
          700: '#0d3f63',
          800: '#0c2e46',
          900: '#0b1f2d',
          950: '#0a161f',
        },
        tertiary: {
          DEFAULT: '#4076a4',
          50: '#edf0f2',
          100: '#e3e8ed',
          200: '#c7d4e0',
          300: '#a6bed3',
          400: '#77a1c5',
          500: '#4076a4',
          600: '#335c80',
          700: '#294761',
          800: '#1f3242',
          900: '#16222c',
          950: '#11171d',
        },
        success: {
          DEFAULT: '#207537',
          50: '#eaf1eb',
          100: '#dbebdf',
          200: '#b6ddc0',
          300: '#86d09a',
          400: '#42c264',
          500: '#207537',
          600: '#1a5b2b',
          700: '#164623',
          800: '#13351c',
          900: '#0f2415',
          950: '#0c180f',
        },
        warning: {
          DEFAULT: '#BB5C21',
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#F59542',
          500: '#BB5C21',
          600: '#A14D1B',
          700: '#863E16',
          800: '#6C3214',
          900: '#592B14',
          950: '#30130A',
        },
        danger: {
          DEFAULT: '#DC3838',
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F07272',
          500: '#DC3838',
          600: '#C42828',
          700: '#A32222',
          800: '#872222',
          900: '#712222',
          950: '#3E0E0E',
        },
        neutral: {
          DEFAULT: '#18181B',
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
          950: '#09090B',
        },
        text: {
          DEFAULT: '#162032',
          neutral: '#71717A',
          white: '#FFFFFF',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F9FAFB',
          subtle: '#F4F4F5',
        },
      },

      fontFamily: {
        sans: ["Atkinson Hyperlegible","ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif"],
      },

      ringColor: {
        DEFAULT: '#127BC4',
      },

      borderRadius: {
        "none": "0",
        "sm": "0.125rem",
        "DEFAULT": "0.375rem",
        "md": "0.375rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "full": "9999px"
},

      zIndex: {
        "dropdown": "1000",
        "sticky": "1100",
        "fixed": "1200",
        "modalBackdrop": "1300",
        "modal": "1400",
        "popover": "1500",
        "toast": "1600",
        "tooltip": "1700"
},

      opacity: {
        "disabled": "0.5",
        "placeholder": "0.6",
        "overlay": "0.5",
        "hoverLight": "0.04",
        "hoverMedium": "0.08"
},

      borderWidth: {
        "none": "0px",
        "thin": "1px",
        "medium": "2px",
        "thick": "3px"
},

      fontWeight: {
        "light": "300",
        "regular": "400",
        "medium": "500",
        "semibold": "600",
        "bold": "700"
},

      letterSpacing: {
        "tighter": "-0.05em",
        "tight": "-0.025em",
        "normal": "0em",
        "wide": "0.025em",
        "wider": "0.05em",
        "widest": "0.1em"
},

      maxWidth: {
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px",
        "prose": "65ch"
},
    },
  },
};
