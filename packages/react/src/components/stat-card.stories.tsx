import type { Meta, StoryObj } from "@storybook/react";
import { StatCard } from "./stat-card";

const meta: Meta<typeof StatCard> = {
  title: "Components/StatCard",
  component: StatCard,
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj<typeof StatCard>;

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
  );
}

function RevenueIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function ErrorIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
    </svg>
  );
}

// ============================================
// Default
// ============================================

export const Default: Story = {
  args: {
    label: "Total Users",
    value: "12,485",
  },
};

// ============================================
// With Trend (Up)
// ============================================

export const WithTrendUp: Story = {
  args: {
    label: "Monthly Revenue",
    value: "$48,295",
    trend: { direction: "up", value: "12.5%", label: "vs last month" },
  },
};

// ============================================
// With Trend (Down)
// ============================================

export const WithTrendDown: Story = {
  args: {
    label: "Error Rate",
    value: "2.4%",
    trend: { direction: "down", value: "0.8%", label: "vs last week" },
    variant: "danger",
  },
};

// ============================================
// With Icon
// ============================================

export const WithIcon: Story = {
  args: {
    label: "Active Users",
    value: "3,842",
    trend: { direction: "up", value: "4.1%", label: "vs yesterday" },
    icon: <UsersIcon className="size-8" />,
  },
};

// ============================================
// Dashboard Grid
// ============================================

export const DashboardGrid: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        label="Total Users"
        value="12,485"
        trend={{ direction: "up", value: "8.2%", label: "vs last month" }}
        icon={<UsersIcon className="size-8" />}
      />
      <StatCard
        label="Revenue"
        value="$48,295"
        trend={{ direction: "up", value: "12.5%", label: "vs last month" }}
        icon={<RevenueIcon className="size-8" />}
        variant="success"
      />
      <StatCard
        label="Churn Rate"
        value="3.2%"
        trend={{ direction: "down", value: "0.4%", label: "vs last month" }}
        variant="warning"
      />
      <StatCard
        label="Error Rate"
        value="0.8%"
        trend={{ direction: "neutral", value: "No change" }}
        icon={<ErrorIcon className="size-8" />}
        variant="danger"
      />
    </div>
  ),
};

// ============================================
// Variants
// ============================================

export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      {(["default", "success", "warning", "danger"] as const).map((variant) => (
        <StatCard
          key={variant}
          label={`${variant.charAt(0).toUpperCase() + variant.slice(1)} variant`}
          value="1,234"
          trend={{ direction: "up", value: "5%" }}
          variant={variant}
        />
      ))}
    </div>
  ),
};
