/** @type {import('tailwindcss').Config} */
module.exports = {
  // 템플릿 파일의 경로 설정
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "searchGreen": "#00b564",
      }
    },
    plugins: [],
  },
};
