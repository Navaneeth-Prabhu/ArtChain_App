/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", 
  "./screens/**/*.{js,jsx,ts,tsx}",
  "./pages/**/*.{js,jsx,ts,tsx}",
  "./navigation/**/*.{js,jsx,ts,tsx}",
  "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        textPrimary:'#363E54',
        lightBlack:'#1E1E1E'
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily:{
        GilroyBold:'Gilory-Bold',
        GilroyLight:'Gilory-Light',
        GilroyMedium:'Gilory-Medium',
        GilroyRegular:'Gilory-Regular',
      },
      
    },
  },
  plugins: [],
}
