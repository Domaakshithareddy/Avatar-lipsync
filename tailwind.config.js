/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    './app/**/*.{js,ts,jsx,tsx}',      // For Next.js App Router
    './pages/**/*.{js,ts,jsx,tsx}',    // If using pages directory
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

