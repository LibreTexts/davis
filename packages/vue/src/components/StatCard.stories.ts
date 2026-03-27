import type { Meta, StoryObj } from "@storybook/vue3";
import StatCard from "./StatCard.vue";

const meta: Meta<typeof StatCard> = {
  title: "Components/StatCard",
  component: StatCard,
  parameters: { layout: "padded" },
  argTypes: {
    variant: { control: "select", options: ["default", "success", "warning", "danger"] },
  },
};
export default meta;
type Story = StoryObj<typeof StatCard>;

export const Default: Story = {
  args: {
    label: "Total Users",
    value: "12,345",
    trend: { direction: "up", value: "+12%", label: "vs last month" },
  },
};

export const AllVariants: Story = {
  render: () => ({
    components: { StatCard },
    template: `
      <div class="grid grid-cols-2 gap-4">
        <StatCard label="Revenue" value="$48,295" variant="default" :trend="{ direction: 'up', value: '+8.2%', label: 'vs last month' }" />
        <StatCard label="Conversion" value="3.24%" variant="success" :trend="{ direction: 'up', value: '+0.5%', label: 'vs last week' }" />
        <StatCard label="Bounce Rate" value="58%" variant="warning" :trend="{ direction: 'down', value: '-2%' }" />
        <StatCard label="Errors" value="142" variant="danger" :trend="{ direction: 'up', value: '+18' }" />
      </div>
    `,
  }),
  args: {},
};

export const WithIcon: Story = {
  render: () => ({
    components: { StatCard },
    template: `
      <StatCard label="Total Users" value="12,345" :trend="{ direction: 'up', value: '+12%', label: 'vs last month' }">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
          </svg>
        </template>
      </StatCard>
    `,
  }),
  args: {},
};
