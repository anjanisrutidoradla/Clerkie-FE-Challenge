/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "bg-brand-subtler": "#C1D4FF",
        "bg-brand": "#1C5FFF",
        "bg-default-disabled": "#EFF0F2",
        "bg-default": "#FFFFFF",
        "br-default-dark": "#C9CAD2",
        "br-default": "#DDDEE3",
        "icon-inverse": "#FFFFFF",
        "neutral-100": "#F5F5F5",
        "neutral-900": "#373841",
        "tx-brand": "#1C5FFF",
        "tx-default-disabled": "#C9CAD2",
        "tx-default-subtle": "#62646C",
        "tx-default-subtler": "#A3A6B1",
        "tx-default": "#1A1A1A"
      }
    }
  },
  plugins: []
};
