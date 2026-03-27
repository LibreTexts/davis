import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import Dialog from "./Dialog.vue";
import DialogHeader from "./DialogHeader.vue";
import DialogTitle from "./DialogTitle.vue";
import DialogDescription from "./DialogDescription.vue";
import DialogFooter from "./DialogFooter.vue";
import DialogClose from "./DialogClose.vue";
import Button from "./Button.vue";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: { layout: "centered" },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg", "xl", "full"] },
  },
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => ({
    components: { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose, Button },
    setup() {
      const isOpen = ref(false);
      return { isOpen };
    },
    template: `
      <div>
        <Button @click="isOpen = true">Open Dialog</Button>
        <Dialog :open="isOpen" @close="isOpen = false">
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogClose />
          </DialogHeader>
          <div class="px-6 py-4">
            <DialogDescription>
              This is a dialog description. You can put any content here.
            </DialogDescription>
          </div>
          <DialogFooter>
            <Button variant="outline" @click="isOpen = false">Cancel</Button>
            <Button @click="isOpen = false">Confirm</Button>
          </DialogFooter>
        </Dialog>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { Dialog, DialogHeader, DialogTitle, DialogFooter, DialogClose, Button },
    setup() {
      const openDialog = ref<string | null>(null);
      return { openDialog };
    },
    template: `
      <div class="flex gap-2">
        <Button @click="openDialog = 'sm'">Small</Button>
        <Button @click="openDialog = 'md'">Medium</Button>
        <Button @click="openDialog = 'lg'">Large</Button>
        <Button @click="openDialog = 'xl'">XL</Button>
        
        <Dialog v-for="size in ['sm', 'md', 'lg', 'xl']" :key="size" :open="openDialog === size" :size="size" @close="openDialog = null">
          <DialogHeader>
            <DialogTitle>{{ size.toUpperCase() }} Dialog</DialogTitle>
            <DialogClose />
          </DialogHeader>
          <div class="px-6 py-4">
            <p class="text-sm text-gray-700">This is a {{ size }} sized dialog.</p>
          </div>
          <DialogFooter>
            <Button @click="openDialog = null">Close</Button>
          </DialogFooter>
        </Dialog>
      </div>
    `,
  }),
};
