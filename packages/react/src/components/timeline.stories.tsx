import type { Meta, StoryObj } from "@storybook/react";
import { Timeline } from "./timeline";

const meta: Meta = {
  title: "Components/Timeline",
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj;

// ============================================
// Default
// ============================================

export const Default: Story = {
  render: () => (
    <Timeline>
      <Timeline.Item
        title="Application submitted"
        description="Your application has been received and is under review."
        timestamp="March 20, 2026"
        status="complete"
      />
      <Timeline.Item
        title="Initial review"
        description="Our team is reviewing your submission."
        timestamp="March 22, 2026"
        status="current"
      />
      <Timeline.Item
        title="Background check"
        status="pending"
      />
      <Timeline.Item
        title="Final decision"
        status="pending"
      />
    </Timeline>
  ),
};

// ============================================
// Activity Feed
// ============================================

export const ActivityFeed: Story = {
  render: () => (
    <Timeline>
      <Timeline.Item
        title="Pull request merged"
        description="feat: add StatCard and Timeline components"
        timestamp="2 hours ago"
        status="complete"
      />
      <Timeline.Item
        title="Code review requested"
        description="Requested review from 2 team members."
        timestamp="5 hours ago"
        status="complete"
      />
      <Timeline.Item
        title="Branch created"
        description="Created branch feat/p3-components from main."
        timestamp="Yesterday"
        status="complete"
      />
      <Timeline.Item
        title="Issue opened"
        description="P3: Implement StatCard, Timeline, and Popover components"
        timestamp="March 21, 2026"
        status="complete"
      />
    </Timeline>
  ),
};

// ============================================
// Mixed Statuses
// ============================================

export const MixedStatuses: Story = {
  render: () => (
    <div className="flex gap-12">
      <div>
        <p className="text-sm font-semibold text-gray-500 mb-4">In Progress</p>
        <Timeline>
          <Timeline.Item title="Step 1: Account setup" status="complete" />
          <Timeline.Item title="Step 2: Profile info" status="complete" />
          <Timeline.Item title="Step 3: Preferences" status="current" description="Fill in your notification preferences." />
          <Timeline.Item title="Step 4: Confirmation" status="pending" />
        </Timeline>
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-500 mb-4">Not Started</p>
        <Timeline>
          <Timeline.Item title="Step 1: Account setup" status="pending" />
          <Timeline.Item title="Step 2: Profile info" status="pending" />
          <Timeline.Item title="Step 3: Preferences" status="pending" />
          <Timeline.Item title="Step 4: Confirmation" status="pending" />
        </Timeline>
      </div>
    </div>
  ),
};

// ============================================
// With Custom Icons
// ============================================

function ShieldIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="size-4">
      <path fillRule="evenodd" d="M8 1a.75.75 0 0 1 .535.222l4.5 4.25A.75.75 0 0 1 13.25 6v3.75a4.25 4.25 0 0 1-8.5 0V6a.75.75 0 0 1 .215-.528l4.5-4.25A.75.75 0 0 1 8 1Z" clipRule="evenodd" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="size-4">
      <path d="M5.25 14.5a2.75 2.75 0 0 0 5.5 0h-5.5Z" />
      <path fillRule="evenodd" d="M2.5 8.625a5.5 5.5 0 0 1 11 0v.884c0 .408.22.786.572 1.003l.864.518A1.25 1.25 0 0 1 14.3 13H1.7a1.25 1.25 0 0 1-.636-2.33l.864-.52A1.25 1.25 0 0 0 2.5 9.51V8.625Z" clipRule="evenodd" />
    </svg>
  );
}

export const WithCustomIcons: Story = {
  render: () => (
    <Timeline>
      <Timeline.Item
        title="Security audit completed"
        description="All 42 checks passed successfully."
        timestamp="March 20, 2026"
        status="complete"
        icon={<ShieldIcon />}
      />
      <Timeline.Item
        title="Alerts configured"
        description="Email and Slack notifications are active."
        timestamp="March 21, 2026"
        status="complete"
        icon={<BellIcon />}
      />
      <Timeline.Item
        title="Deployment scheduled"
        description="Production deployment set for March 25."
        timestamp="March 22, 2026"
        status="current"
      />
    </Timeline>
  ),
};
