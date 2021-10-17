module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        s1: '#28a745', // normal
        s2: '#6a737d', // maintenance
        s3: '#6f42c1', // degraded
        s4: '#f66a0a', // partial
        s5: '#d73a49', // outage
        'primary-dark': '#c77800',
      },
    },
    container: {
      screens: {
         sm: "100%",
         md: "100%",
         lg: "1024px",
         xl: "1280px"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
