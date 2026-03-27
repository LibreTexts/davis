import type { Meta, StoryObj } from "@storybook/vue3";
import Container from "./Container.vue";

const meta: Meta<typeof Container> = {
  title: "Layout/Container",
  component: Container,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg", "xl", "2xl", "prose"] },
    centered: { control: "boolean" },
    padded: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Container>;

const defaultDecorator = () => ({
  template: `<story><div class="bg-primary/10 p-4 rounded text-sm text-center">Container content</div></story>`,
});

export const Default: Story = {
  decorators: [defaultDecorator],
  args: {},
};

export const Small: Story = {
  decorators: [defaultDecorator],
  args: { size: "sm" },
};

export const Medium: Story = {
  decorators: [defaultDecorator],
  args: { size: "md" },
};

export const Large: Story = {
  decorators: [defaultDecorator],
  args: { size: "lg" },
};

export const ExtraLarge: Story = {
  decorators: [defaultDecorator],
  args: { size: "xl" },
};

export const TwoExtraLarge: Story = {
  decorators: [defaultDecorator],
  args: { size: "2xl" },
};

export const Prose: Story = {
  args: { size: "prose" },
  decorators: [
    () => ({
      template: `<story><p class="text-sm">A prose container limits line length for comfortable reading. This is useful for article content or any long-form text where readability is important.</p></story>`,
    }),
  ],
};

export const Unpadded: Story = {
  decorators: [defaultDecorator],
  args: { padded: false },
};

export const Uncentered: Story = {
  decorators: [defaultDecorator],
  args: { centered: false },
};

export const AsMain: Story = {
  decorators: [defaultDecorator],
  args: { as: "main", size: "lg" },
};

export const AsSection: Story = {
  decorators: [defaultDecorator],
  args: { as: "section", size: "md" },
};
