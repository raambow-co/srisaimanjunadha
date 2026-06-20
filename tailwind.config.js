/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0057B8",
          orange: "#FF7A00",
          green: "#22A447",
          greenDark: "#0C3E1E",
          greenLight: "#F0FDF4",
          dark: "#111111",
          gray: "#555555",
          light: "#F7FAFC",
        }
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "Outfit", "sans-serif"],
        display: ["Outfit", "'Plus Jakarta Sans'", "sans-serif"],
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
