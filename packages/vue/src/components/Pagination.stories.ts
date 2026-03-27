import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import Pagination from "./Pagination.vue";

const meta: Meta<typeof Pagination> = {
  title: "Navigation/Pagination",
  component: Pagination,
  parameters: { layout: "padded" },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};
export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => ({
    components: { Pagination },
    setup() {
      const page = ref(1);
      return { page };
    },
    template: `<Pagination :page="page" :total-pages="10" @change="page = $event" />`,
  }),
  args: {},
};

export const MiddlePage: Story = {
  render: () => ({
    components: { Pagination },
    setup() {
      const page = ref(5);
      return { page };
    },
    template: `<Pagination :page="page" :total-pages="10" @change="page = $event" />`,
  }),
  args: {},
};

export const LastPage: Story = {
  render: () => ({
    components: { Pagination },
    setup() {
      const page = ref(10);
      return { page };
    },
    template: `<Pagination :page="page" :total-pages="10" @change="page = $event" />`,
  }),
  args: {},
};

export const FewPages: Story = {
  render: () => ({
    components: { Pagination },
    setup() {
      const page = ref(1);
      return { page };
    },
    template: `<Pagination :page="page" :total-pages="3" @change="page = $event" />`,
  }),
  args: {},
};

export const Sizes: Story = {
  render: () => ({
    components: { Pagination },
    setup() {
      const page = ref(5);
      return { page };
    },
    template: `
      <div class="flex flex-col gap-4">
        <Pagination :page="page" :total-pages="10" size="sm" @change="page = $event" />
        <Pagination :page="page" :total-pages="10" size="md" @change="page = $event" />
        <Pagination :page="page" :total-pages="10" size="lg" @change="page = $event" />
      </div>
    `,
  }),
  args: {},
};
