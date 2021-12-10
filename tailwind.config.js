module.exports = {
  purge: false, // { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        s1: '#28a745', // normal
        s2: '#6a737d', // maintenance
        s3: '#7f4adf', // degraded
        s4: '#ff8b00', // partial
        s5: '#d73a49', // outage
        green2: '#0a0',
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
