import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card";
import { Button } from "./button";
import { Badge } from "./badge";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: { layout: "padded" },
  argTypes: {
    variant: { control: "select", options: ["default", "elevated", "outline"] },
    padding: { control: "select", options: ["none", "sm", "md", "lg"] },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

// ============================================
// Default — simple card with body only
// ============================================

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="max-w-sm">
      <Card.Body>
        <p className="text-sm text-gray-700">
          This is a simple card with just a body section. It can hold any content.
        </p>
      </Card.Body>
    </Card>
  ),
  args: {
    variant: "default",
    padding: "md",
  },
};

// ============================================
// With Subcomponents
// ============================================

export const WithSubcomponents: Story = {
  render: () => (
    <Card className="max-w-sm">
      <Card.Header>
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-gray-900">Card Title</h3>
          <Badge variant="success" label="Active" dot size="sm" />
        </div>
        <p className="text-sm text-gray-500 mt-1">Optional subtitle or description</p>
      </Card.Header>
      <Card.Body>
        <p className="text-sm text-gray-700">
          This card has a header, body, and footer. Use these subcomponents to structure
          your card content logically.
        </p>
      </Card.Body>
      <Card.Footer>
        <div className="flex justify-end gap-2">
          <Button variant="tertiary" size="sm">Cancel</Button>
          <Button variant="primary" size="sm">Save</Button>
        </div>
      </Card.Footer>
    </Card>
  ),
  args: {},
};

// ============================================
// With Image Header
// ============================================

export const WithImageHeader: Story = {
  render: () => (
    <Card className="max-w-sm">
      <Card.Header
        image={{
          src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
          alt: "Mountain landscape",
          height: 200,
        }}
      >
        <h3 className="text-base font-semibold text-gray-900">Mountain View</h3>
        <p className="text-sm text-gray-500 mt-1">A breathtaking view of the mountains.</p>
      </Card.Header>
      <Card.Body>
        <p className="text-sm text-gray-700">
          Full-width image in the header, followed by padded content below.
        </p>
      </Card.Body>
      <Card.Footer>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-400">Posted 2 days ago</span>
          <Button variant="primary" size="sm">Read more</Button>
        </div>
      </Card.Footer>
    </Card>
  ),
  args: {},
};

// ============================================
// Clickable
// ============================================

export const Clickable: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Card onClick={() => alert("Card clicked!")} className="max-w-xs">
        <Card.Body>
          <h3 className="text-base font-semibold text-gray-900">Clickable Card</h3>
          <p className="text-sm text-gray-500 mt-1">
            Click anywhere on this card. Uses <code>role="button"</code> with keyboard support.
          </p>
        </Card.Body>
      </Card>

      <Card href="#" className="max-w-xs">
        <Card.Body>
          <h3 className="text-base font-semibold text-gray-900">Link Card</h3>
          <p className="text-sm text-gray-500 mt-1">
            This card renders as an <code>&lt;a&gt;</code> element for navigation.
          </p>
        </Card.Body>
      </Card>
    </div>
  ),
  args: {},
};

// ============================================
// All Variants
// ============================================

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {(["default", "elevated", "outline"] as const).map((variant) => (
        <Card key={variant} variant={variant} className="w-56">
          <Card.Body>
            <h3 className="text-sm font-semibold text-gray-900 capitalize">{variant}</h3>
            <p className="text-sm text-gray-500 mt-1">Card variant: {variant}</p>
          </Card.Body>
        </Card>
      ))}
    </div>
  ),
  args: {},
};

// ============================================
// Padding Sizes
// ============================================

export const PaddingSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-sm">
      {(["sm", "md", "lg"] as const).map((padding) => (
        <Card key={padding} padding={padding} variant="outline">
          <Card.Header>
            <h3 className="text-sm font-semibold text-gray-900">Padding: {padding}</h3>
          </Card.Header>
          <Card.Body>
            <p className="text-sm text-gray-700">Body content with {padding} padding.</p>
          </Card.Body>
          <Card.Footer>
            <p className="text-xs text-gray-400">Footer with {padding} padding</p>
          </Card.Footer>
        </Card>
      ))}
    </div>
  ),
  args: {},
};
