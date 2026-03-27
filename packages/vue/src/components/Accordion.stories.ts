import type { Meta, StoryObj } from "@storybook/vue3";
import Accordion from "./Accordion.vue";
import AccordionItem from "./AccordionItem.vue";
import AccordionTrigger from "./AccordionTrigger.vue";
import AccordionPanel from "./AccordionPanel.vue";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: { layout: "padded" },
  argTypes: {
    variant: { control: "select", options: ["default", "flush", "bordered"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};
export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: (args) => ({
    components: { Accordion, AccordionItem, AccordionTrigger, AccordionPanel },
    setup() { return { args }; },
    template: `
      <Accordion v-bind="args" class="max-w-lg">
        <AccordionItem>
          <AccordionTrigger>What is LibreTexts?</AccordionTrigger>
          <AccordionPanel>LibreTexts is a free and open educational platform that provides high-quality learning materials for students and educators worldwide.</AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>How do I get started?</AccordionTrigger>
          <AccordionPanel>You can get started by creating a free account on the LibreTexts platform.</AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>Is LibreTexts free to use?</AccordionTrigger>
          <AccordionPanel>Yes, LibreTexts is completely free for students and educators.</AccordionPanel>
        </AccordionItem>
      </Accordion>
    `,
  }),
  args: { variant: "default", size: "md" },
};

export const WithDefaultOpen: Story = {
  render: () => ({
    components: { Accordion, AccordionItem, AccordionTrigger, AccordionPanel },
    template: `
      <Accordion class="max-w-lg">
        <AccordionItem :default-open="true">
          <AccordionTrigger>This item is open by default</AccordionTrigger>
          <AccordionPanel>This panel is visible on initial render because defaultOpen is set on the item.</AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>This item is collapsed by default</AccordionTrigger>
          <AccordionPanel>This panel is hidden until the user clicks the trigger.</AccordionPanel>
        </AccordionItem>
      </Accordion>
    `,
  }),
  args: {},
};

export const AllVariants: Story = {
  render: () => ({
    components: { Accordion, AccordionItem, AccordionTrigger, AccordionPanel },
    template: `
      <div class="flex flex-col gap-10">
        <div v-for="variant in ['default', 'flush', 'bordered']" :key="variant">
          <p class="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Variant: {{ variant }}</p>
          <Accordion :variant="variant" class="max-w-lg">
            <AccordionItem>
              <AccordionTrigger>Can I contribute content?</AccordionTrigger>
              <AccordionPanel>Absolutely. LibreTexts welcomes contributions from educators and subject matter experts.</AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionTrigger>What subjects are available?</AccordionTrigger>
              <AccordionPanel>LibreTexts covers a wide range of subjects including mathematics, sciences, humanities, and more.</AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    `,
  }),
  args: {},
};
