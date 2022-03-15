module.exports = {
  content: ["./src/*/*.{js,jsx,ts,tsx}"],
  theme: {
    // 使用自定義取代預設值
    screens: {
      xs: '360px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1440px',
    },
    // 保留預設值(只會inherit單一層)，新增自定義
    extend: {
      borderRadius: {
        x5: '5rem',
      }
    },
  },
  plugins: [],
}
