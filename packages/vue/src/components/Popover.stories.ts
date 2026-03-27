import type { Meta, StoryObj } from "@storybook/vue3";
import Popover from "./Popover.vue";
import PopoverButton from "./PopoverButton.vue";
import PopoverPanel from "./PopoverPanel.vue";
import Button from "./Button.vue";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => ({
    components: { Popover, PopoverButton, PopoverPanel, Button },
    template: `
      <div class="flex justify-center py-16">
        <Popover>
          <PopoverButton as="template">
            <Button variant="secondary">Open Popover</Button>
          </PopoverButton>
          <PopoverPanel>
            <div class="p-4">
              <p class="text-sm font-medium text-gray-900">Popover content</p>
              <p class="text-sm text-gray-500 mt-1">This is the popover panel content.</p>
            </div>
          </PopoverPanel>
        </Popover>
      </div>
    `,
  }),
  args: {},
};
