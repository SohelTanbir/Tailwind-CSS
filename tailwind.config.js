/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily:{
      "open-sans":['Open Sans', 'sans-serif']
    },
    extend: {
      colors:{
        "hoverOrange":"#FA5E01",
        "primary-color":"#FA5E01",
        "primary-bg":"#FA5E01",
        "activeItem":"#FA5E01",
        "text-comon":"#25201D"
      },
      backgroundImage:{
        "loginbtnBg":"url('../images/logo/loginBtnBg.png')",
        "heroBg":" url('../images/banner/banner.png')",
      }
    },
  },
  plugins: [],
}

