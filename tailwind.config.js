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
        "#lol": "red",
        "#kek": "yellow",
        "#cheburek": "green",
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
};
