module.exports = {
  presets: [require('@setel/portal-ui/tailwind.config')],
  mode: 'jit',
  purge: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      boxShadow: {
        top: '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 2px -1px rgba(0, 0, 0, 0.06)',
        dayPicker: '0px -3px 6px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  variants: {},
  plugins: [],
};
