module.exports = {
  purge: {
    content: [
      "./src/components/**/*.{js,ts,jsx,tsx}",
      "./src/pages/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
      'hover:bg-#lol',
      "hover:bg-#kek",
      "hover:bg-#cheburek",
      'bg-#lol',
      "bg-#kek",
      "bg-#cheburek",
      'border-#lol',
      "border-#kek",
      "border-#cheburek",
    ]
  },
  theme: {
    extend: {
      colors: {
        "donate": "#D0342C",
        "subscribe": "#2C5B8B",
        "#lol": "#FA7268",
        "#kek": "#5F4B8B",
        "#cheburek": "#88b04b",
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
    },
  },
};
