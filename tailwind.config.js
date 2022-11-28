module.exports = {
  presets: [require('@setel/portal-ui/tailwind.config')],
  mode: 'jit',
  purge: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
