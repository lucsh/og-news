module.exports = {
  purge: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx', 'public/**/*.html'],
  theme: {
    fontFamily: {
      sans: ['franklin-gothic-atf', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      serif: ['ivypresto-text', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
    },
    extend: {
      colors: {
        body: '#f8f8f8',
      },
    },
  },
  variants: {},
  plugins: [],
};
