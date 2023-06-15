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
        webdevtext: "url('./assets/webdevhome.png')",
        portfoliotext: "url('./assets/portfolio-text.png')",
        arrow: "url('./assets/arrow.png')",
        bang: "url('./assets/bang.png')",
        drops: "url('./assets/drops.png')",
        waves: "url('./assets/waves.png')",
        line: "url('./assets/line.png')",
        line2: "url('./assets/line2.png')",
        arrow2: "url('./assets/arrow2.png')",
        arrow3: "url('./assets/arrow3.png')",
        shapes: "url('./assets/shapes.png')",
      }
    },
  },
  plugins: [],
}
