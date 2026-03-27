import type { Meta, StoryObj } from "@storybook/vue3";
import Tabs from "./Tabs.vue";
import TabList from "./TabList.vue";
import Tab from "./Tab.vue";
import TabPanels from "./TabPanels.vue";
import TabPanel from "./TabPanel.vue";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: { layout: "padded" },
  argTypes: {
    variant: { control: "select", options: ["line", "pills"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    color: { control: "select", options: ["white", "primary"] },
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => ({
    components: { Tabs, TabList, Tab, TabPanels, TabPanel },
    template: `
      <Tabs class="max-w-lg">
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Details</Tab>
          <Tab>Settings</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p class="text-sm text-gray-700">Overview panel content.</p>
          </TabPanel>
          <TabPanel>
            <p class="text-sm text-gray-700">Details panel content.</p>
          </TabPanel>
          <TabPanel>
            <p class="text-sm text-gray-700">Settings panel content.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    `,
  }),
};

export const Pills: Story = {
  render: () => ({
    components: { Tabs, TabList, Tab, TabPanels, TabPanel },
    template: `
      <Tabs variant="pills" class="max-w-lg">
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Details</Tab>
          <Tab>Settings</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p class="text-sm text-gray-700">Overview panel content.</p>
          </TabPanel>
          <TabPanel>
            <p class="text-sm text-gray-700">Details panel content.</p>
          </TabPanel>
          <TabPanel>
            <p class="text-sm text-gray-700">Settings panel content.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    `,
  }),
};

export const PillColors: Story = {
  render: () => ({
    components: { Tabs, TabList, Tab, TabPanels, TabPanel },
    template: `
      <div class="flex flex-col gap-8">
        <div>
          <p class="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">color: white</p>
          <Tabs variant="pills" color="white">
            <TabList>
              <Tab>Overview</Tab>
              <Tab>Details</Tab>
              <Tab>Settings</Tab>
            </TabList>
            <TabPanels>
              <TabPanel><p class="text-sm text-gray-700">Overview panel content.</p></TabPanel>
              <TabPanel><p class="text-sm text-gray-700">Details panel content.</p></TabPanel>
              <TabPanel><p class="text-sm text-gray-700">Settings panel content.</p></TabPanel>
            </TabPanels>
          </Tabs>
        </div>
        <div>
          <p class="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">color: primary</p>
          <Tabs variant="pills" color="primary">
            <TabList>
              <Tab>Overview</Tab>
              <Tab>Details</Tab>
              <Tab>Settings</Tab>
            </TabList>
            <TabPanels>
              <TabPanel><p class="text-sm text-gray-700">Overview panel content.</p></TabPanel>
              <TabPanel><p class="text-sm text-gray-700">Details panel content.</p></TabPanel>
              <TabPanel><p class="text-sm text-gray-700">Settings panel content.</p></TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    `,
  }),
};

export const WithDisabledTab: Story = {
  render: () => ({
    components: { Tabs, TabList, Tab, TabPanels, TabPanel },
    template: `
      <div class="flex flex-col gap-8">
        <div>
          <p class="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Variant: line</p>
          <Tabs class="max-w-lg">
            <TabList>
              <Tab>Active</Tab>
              <Tab :disabled="true">Disabled</Tab>
              <Tab>Another</Tab>
            </TabList>
            <TabPanels>
              <TabPanel><p class="text-sm text-gray-700">This tab is active.</p></TabPanel>
              <TabPanel><p class="text-sm text-gray-700">This tab is disabled.</p></TabPanel>
              <TabPanel><p class="text-sm text-gray-700">Another tab.</p></TabPanel>
            </TabPanels>
          </Tabs>
        </div>
        <div>
          <p class="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Variant: pills</p>
          <Tabs variant="pills" class="max-w-lg">
            <TabList>
              <Tab>Active</Tab>
              <Tab :disabled="true">Disabled</Tab>
              <Tab>Another</Tab>
            </TabList>
            <TabPanels>
              <TabPanel><p class="text-sm text-gray-700">This tab is active.</p></TabPanel>
              <TabPanel><p class="text-sm text-gray-700">This tab is disabled.</p></TabPanel>
              <TabPanel><p class="text-sm text-gray-700">Another tab.</p></TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    `,
  }),
};
