/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mulish: '"Mulish", sans-serif',
      },
      colors: {
        "custom-green-300": "#8CFF0026",
        "custom-green-400": "#36A54680",
        "custom-green-500": "#00FF2580",
        "custom-green-600": "#36A546CC",
        "custom-green-700": "#36A546",
        "custom-gray-700": "#595959",
      },
    },
  },
  plugins: [],
};
