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
          50: '#EFF6FC',
          100: '#DCEEF9',
          200: '#B3D9F2',
          300: '#80BDE8',
          400: '#4A9ED9',
          500: '#127BC4',
          600: '#0F6FA2',
          700: '#0B4A76',
          800: '#0A3D62',
          900: '#083350',
          950: '#052135',
        },
        secondary: {
          DEFAULT: '#0D8483',
          50: '#F0FDFC',
          100: '#CCFBF6',
          200: '#9AF5ED',
          300: '#5FE8DD',
          400: '#2ECFCA',
          500: '#0D8483',
          600: '#0A6C6B',
          700: '#0B5756',
          800: '#0D4545',
          900: '#103939',
          950: '#052222',
        },
        tertiary: {
          DEFAULT: '#5F65F5',
          50: '#EDEDFE',
          100: '#E0E1FD',
          200: '#C6C8FB',
          300: '#A5A8F8',
          400: '#8287F7',
          500: '#5F65F5',
          600: '#4A4FDB',
          700: '#3B3FB8',
          800: '#323695',
          900: '#2C2F7A',
          950: '#1B1D4D',
        },
        success: {
          DEFAULT: '#338650',
          50: '#EEFBF3',
          100: '#D6F5E2',
          200: '#B0EBC8',
          300: '#7CD9A5',
          400: '#4DC37E',
          500: '#338650',
          600: '#2A7043',
          700: '#235A37',
          800: '#1F482E',
          900: '#1A3B27',
          950: '#0D2116',
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
    },
  },
};
