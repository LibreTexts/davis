import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: { layout: "padded" },
  argTypes: {
    variant: { control: "select", options: ["line", "pills"] },
    size:    { control: "select", options: ["sm", "md", "lg"] },
    color:   { control: "select", options: ["white", "primary"] },
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: (args) => (
    <Tabs {...args} className="max-w-lg">
      <Tabs.List>
        <Tabs.Tab>Overview</Tabs.Tab>
        <Tabs.Tab>Details</Tabs.Tab>
        <Tabs.Tab>Settings</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panels>
        <Tabs.Panel>
          <p className="text-sm text-gray-700">
            This is the Overview panel. It contains summary information about the
            selected item.
          </p>
        </Tabs.Panel>
        <Tabs.Panel>
          <p className="text-sm text-gray-700">
            This is the Details panel. It contains in-depth information and
            specifications.
          </p>
        </Tabs.Panel>
        <Tabs.Panel>
          <p className="text-sm text-gray-700">
            This is the Settings panel. Configure preferences and options here.
          </p>
        </Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  ),
  args: {
    variant: "line",
    size: "md",
    color: "primary",
    defaultIndex: 2,
  },
};

export const Pills: Story = {
  render: () => (
    <Tabs variant="pills" className="max-w-lg">
      <Tabs.List>
        <Tabs.Tab>Overview</Tabs.Tab>
        <Tabs.Tab>Details</Tabs.Tab>
        <Tabs.Tab>Settings</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panels>
        <Tabs.Panel>
          <p className="text-sm text-gray-700">Overview panel content.</p>
        </Tabs.Panel>
        <Tabs.Panel>
          <p className="text-sm text-gray-700">Details panel content.</p>
        </Tabs.Panel>
        <Tabs.Panel>
          <p className="text-sm text-gray-700">Settings panel content.</p>
        </Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  ),
  args: {},
};

export const PillColors: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {(["white", "primary"] as const).map((color) => (
        <div key={color}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
            color: {color}
          </p>
          <Tabs variant="pills" color={color}>
            <Tabs.List>
              <Tabs.Tab>Overview</Tabs.Tab>
              <Tabs.Tab>Details</Tabs.Tab>
              <Tabs.Tab>Settings</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panels>
              <Tabs.Panel><p className="text-sm text-gray-700">Overview panel content.</p></Tabs.Panel>
              <Tabs.Panel><p className="text-sm text-gray-700">Details panel content.</p></Tabs.Panel>
              <Tabs.Panel><p className="text-sm text-gray-700">Settings panel content.</p></Tabs.Panel>
            </Tabs.Panels>
          </Tabs>
        </div>
      ))}
    </div>
  ),
  args: {},
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {(["sm", "md", "lg"] as const).map((size) => (
        <div key={size}>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Size: {size}
          </p>
          <Tabs size={size} className="max-w-lg">
            <Tabs.List>
              <Tabs.Tab>Tab One</Tabs.Tab>
              <Tabs.Tab>Tab Two</Tabs.Tab>
              <Tabs.Tab>Tab Three</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panels>
              <Tabs.Panel>
                <p className="text-sm text-gray-700">Content for Tab One.</p>
              </Tabs.Panel>
              <Tabs.Panel>
                <p className="text-sm text-gray-700">Content for Tab Two.</p>
              </Tabs.Panel>
              <Tabs.Panel>
                <p className="text-sm text-gray-700">Content for Tab Three.</p>
              </Tabs.Panel>
            </Tabs.Panels>
          </Tabs>
        </div>
      ))}
    </div>
  ),
  args: {
    variant: "pills"
  },
};

export const WithDisabledTab: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {(["line", "pills"] as const).map((variant) => (
        <div key={variant}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Variant: {variant}
          </p>
          <Tabs variant={variant} className="max-w-lg">
            <Tabs.List>
              <Tabs.Tab>Active</Tabs.Tab>
              <Tabs.Tab disabled>Disabled</Tabs.Tab>
              <Tabs.Tab>Another</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panels>
              <Tabs.Panel>
                <p className="text-sm text-gray-700">This tab is active and selectable.</p>
              </Tabs.Panel>
              <Tabs.Panel>
                <p className="text-sm text-gray-700">This tab is disabled.</p>
              </Tabs.Panel>
              <Tabs.Panel>
                <p className="text-sm text-gray-700">Another selectable tab.</p>
              </Tabs.Panel>
            </Tabs.Panels>
          </Tabs>
        </div>
      ))}
    </div>
  ),
  args: {},
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-10">
      {(["line", "pills"] as const).map((variant) => (
        <div key={variant}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Variant: {variant}
          </p>
          <Tabs variant={variant} className="max-w-lg">
            <Tabs.List>
              <Tabs.Tab>Account</Tabs.Tab>
              <Tabs.Tab>Security</Tabs.Tab>
              <Tabs.Tab>Notifications</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panels>
              <Tabs.Panel>
                <p className="text-sm text-gray-700">Account settings panel.</p>
              </Tabs.Panel>
              <Tabs.Panel>
                <p className="text-sm text-gray-700">Security settings panel.</p>
              </Tabs.Panel>
              <Tabs.Panel>
                <p className="text-sm text-gray-700">Notification preferences panel.</p>
              </Tabs.Panel>
            </Tabs.Panels>
          </Tabs>
        </div>
      ))}
    </div>
  ),
  args: {},
};
