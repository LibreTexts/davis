import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: { layout: "padded" },
  argTypes: {
    variant: { control: "select", options: ["default", "flush", "bordered"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

// ============================================
// Default
// ============================================

export const Default: Story = {
  render: (args) => (
    <Accordion {...args} className="max-w-lg">
      <Accordion.Item>
        <Accordion.Trigger>What is LibreTexts?</Accordion.Trigger>
        <Accordion.Panel>
          LibreTexts is a free and open educational platform that provides high-quality
          learning materials for students and educators worldwide.
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger>How do I get started?</Accordion.Trigger>
        <Accordion.Panel>
          You can get started by creating a free account on the LibreTexts platform.
          Browse the library, find your subject, and begin learning at your own pace.
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger>Is LibreTexts free to use?</Accordion.Trigger>
        <Accordion.Panel>
          Yes, LibreTexts is completely free for students and educators. All content
          is open-licensed and available without any cost or registration requirements.
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  ),
  args: {
    variant: "default",
    size: "md",
  },
};

// ============================================
// With default open item
// ============================================

export const WithDefaultOpen: Story = {
  render: () => (
    <Accordion className="max-w-lg">
      <Accordion.Item defaultOpen>
        <Accordion.Trigger>This item is open by default</Accordion.Trigger>
        <Accordion.Panel>
          This panel is visible on initial render because <code>defaultOpen</code> is
          set on the item. The user can still collapse it.
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger>This item is collapsed by default</Accordion.Trigger>
        <Accordion.Panel>
          This panel is hidden until the user clicks the trigger.
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  ),
  args: {},
};

// ============================================
// All variants
// ============================================

const ITEMS = [
  {
    trigger: "Can I contribute content?",
    panel:
      "Absolutely. LibreTexts welcomes contributions from educators and subject matter experts. You can remix existing content or create new materials using the platform's authoring tools.",
  },
  {
    trigger: "What subjects are available?",
    panel:
      "LibreTexts covers a wide range of subjects including mathematics, sciences, humanities, social sciences, engineering, and more.",
  },
  {
    trigger: "How is the content licensed?",
    panel:
      "All LibreTexts content is published under Creative Commons licenses, allowing free use, remixing, and redistribution with attribution.",
  },
];

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-10">
      {(["default", "flush", "bordered"] as const).map((variant) => (
        <div key={variant}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Variant: {variant}
          </p>
          <Accordion variant={variant} className="max-w-lg">
            {ITEMS.map(({ trigger, panel }) => (
              <Accordion.Item key={trigger}>
                <Accordion.Trigger>{trigger}</Accordion.Trigger>
                <Accordion.Panel>{panel}</Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  ),
  args: {},
};

// ============================================
// All sizes
// ============================================

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-10">
      {(["sm", "md", "lg"] as const).map((size) => (
        <div key={size}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Size: {size}
          </p>
          <Accordion size={size} className="max-w-lg">
            <Accordion.Item>
              <Accordion.Trigger>First item</Accordion.Trigger>
              <Accordion.Panel>Content for the first accordion item.</Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item>
              <Accordion.Trigger>Second item</Accordion.Trigger>
              <Accordion.Panel>Content for the second accordion item.</Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>
      ))}
    </div>
  ),
  args: {},
};
