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
      height: {
        'screen-1/2': '50vh',
        'screen-1/4': '25vh',
        'screen-1/3': '75vh',
      },
    },
  },
  variants: {},
  plugins: [],
};
