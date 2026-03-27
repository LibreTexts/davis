import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import Drawer from "./Drawer.vue";
import DrawerHeader from "./DrawerHeader.vue";
import DrawerTitle from "./DrawerTitle.vue";
import DrawerBody from "./DrawerBody.vue";
import DrawerFooter from "./DrawerFooter.vue";
import DrawerClose from "./DrawerClose.vue";
import Button from "./Button.vue";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  parameters: { layout: "padded" },
  argTypes: {
    side: { control: "select", options: ["left", "right"] },
    size: { control: "select", options: ["sm", "md", "lg", "full"] },
  },
};
export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: () => ({
    components: { Drawer, DrawerHeader, DrawerTitle, DrawerBody, DrawerFooter, DrawerClose, Button },
    setup() {
      const open = ref(false);
      return { open };
    },
    template: `
      <div>
        <Button @click="open = true">Open Drawer</Button>
        <Drawer :open="open" @close="open = false">
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
            <DrawerClose />
          </DrawerHeader>
          <DrawerBody>
            <p class="text-gray-600">This is the drawer body content. You can put anything here.</p>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="secondary" @click="open = false">Cancel</Button>
            <Button variant="primary" @click="open = false">Confirm</Button>
          </DrawerFooter>
        </Drawer>
      </div>
    `,
  }),
  args: {},
};

export const LeftSide: Story = {
  render: () => ({
    components: { Drawer, DrawerHeader, DrawerTitle, DrawerBody, DrawerClose, Button },
    setup() {
      const open = ref(false);
      return { open };
    },
    template: `
      <div>
        <Button @click="open = true">Open Left Drawer</Button>
        <Drawer :open="open" side="left" @close="open = false">
          <DrawerHeader>
            <DrawerTitle>Left Drawer</DrawerTitle>
            <DrawerClose />
          </DrawerHeader>
          <DrawerBody>
            <p class="text-gray-600">This drawer slides in from the left side.</p>
          </DrawerBody>
        </Drawer>
      </div>
    `,
  }),
  args: {},
};
