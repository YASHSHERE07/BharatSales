const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // Add Roboto with all its weights
        "rubik-mono": ["Rubik Mono One", "sans-serif"], // Add Rubik Mono One
      },
    },
  },
  plugins: [],
});
