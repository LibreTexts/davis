import type { Meta, StoryObj } from "@storybook/vue3";
import Timeline from "./Timeline.vue";
import TimelineItem from "./TimelineItem.vue";

const meta: Meta<typeof Timeline> = {
  title: "Components/Timeline",
  component: Timeline,
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  render: () => ({
    components: { Timeline, TimelineItem },
    template: `
      <Timeline>
        <TimelineItem title="Order placed" timestamp="Jan 1, 2024" status="complete" description="Your order has been received." />
        <TimelineItem title="Processing" timestamp="Jan 2, 2024" status="complete" />
        <TimelineItem title="Shipped" timestamp="Jan 3, 2024" status="current" description="Your package is on the way." />
        <TimelineItem title="Delivered" status="pending" />
      </Timeline>
    `,
  }),
  args: {},
};

export const AllStatuses: Story = {
  render: () => ({
    components: { Timeline, TimelineItem },
    template: `
      <Timeline>
        <TimelineItem title="Complete" description="This step is done." status="complete" timestamp="Jan 1" />
        <TimelineItem title="Current" description="This step is in progress." status="current" timestamp="Jan 2" />
        <TimelineItem title="Pending" description="This step hasn't started." status="pending" />
      </Timeline>
    `,
  }),
  args: {},
};
