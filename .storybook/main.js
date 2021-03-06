const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@snek-at/storybook-addon-chakra-ui",
    "storybook-addon-next-router"
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@layouts': path.resolve(__dirname, "../src/layouts"),
      '@components': path.resolve(__dirname, "../src/components"),
      '@pages': path.resolve(__dirname, "../src/pages")
    };

    return config;
  }
}