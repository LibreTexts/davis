import type { Preview } from "@storybook/vue3";
import "./preview.css";

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    actions: { argTypesRegex: "^on.*" },
  },
};

export default preview;
