import theme from '../src/theme.tsx'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme: theme
  },
  backgrounds: {
    default: 'cyan',
    values: [
      {
        name: 'cyan',
        value: '#00a3c4',
      }
    ],
  }
}