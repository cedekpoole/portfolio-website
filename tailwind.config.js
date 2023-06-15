/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#f5f5f5",
        "gray-100": "#D3D6DB",
        "gray-200": "#3A4750",
        "gray-300": "#303841",
        "primary-100": "#BE3144"
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
        lg: "1280px",
      },
      content: {
        webdevtext: "url('/webdevhome.png')",
        portfoliotext: "url('/portfolio-text.png')",
        arrow: "url('/arrow.png')",
        bang: "url('/bang.png')",
        drops: "url('/drops.png')",
        waves: "url('/waves.png')",
        line: "url('/line.png')",
        line2: "url('/line2.png')",
        arrow2: "url('/arrow2.png')",
        arrow3: "url('/arrow3.png')",
        shapes: "url('/shapes.png')",
      }
    },
  },
  plugins: [],
}
