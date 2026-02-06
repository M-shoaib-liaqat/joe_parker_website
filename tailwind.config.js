module.exports = {
  content: [
    './index.html',
    './**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: '#1F4E78',
          electric: '#2E75B5',
          orange: '#FF6B00',
          success: '#28A745',
          dark: '#333333',
          light: '#F5F5F5'
        }
      },
      fontFamily: {
        heading: ['Montserrat','sans-serif'],
        body: ['Open Sans','sans-serif']
      }
    }
  },
  plugins: []
}
