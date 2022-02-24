import '/src/styles/vendor/normalize.css';
import '/src/styles/scss/style.scss';
import '/src/styles/examples.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}