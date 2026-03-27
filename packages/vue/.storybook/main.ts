import type { StorybookConfig } from "@storybook/vue3-vite";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  stories: ["../src/**/*.stories.@(js|ts|mdx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  docs: {
    autodocs: true,
  },
};

export default config;
