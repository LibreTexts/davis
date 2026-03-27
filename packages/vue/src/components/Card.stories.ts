import type { Meta, StoryObj } from "@storybook/vue3";
import Card from "./Card.vue";
import CardHeader from "./CardHeader.vue";
import CardBody from "./CardBody.vue";
import CardFooter from "./CardFooter.vue";
import Button from "./Button.vue";
import Badge from "./Badge.vue";

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

export const Default: Story = {
  render: (args) => ({
    components: { Card, CardBody },
    setup() { return { args }; },
    template: `
      <Card v-bind="args" class="max-w-sm">
        <CardBody>
          <p class="text-sm text-gray-700">
            This is a simple card with just a body section. It can hold any content.
          </p>
        </CardBody>
      </Card>
    `,
  }),
  args: { variant: "default", padding: "md" },
};

export const WithSubcomponents: Story = {
  render: () => ({
    components: { Card, CardHeader, CardBody, CardFooter, Button, Badge },
    template: `
      <Card class="max-w-sm">
        <CardHeader>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold text-gray-900">Card Title</h3>
            <Badge variant="success" label="Active" :dot="true" size="sm" />
          </div>
          <p class="text-sm text-gray-500 mt-1">Optional subtitle or description</p>
        </CardHeader>
        <CardBody>
          <p class="text-sm text-gray-700">
            This card has a header, body, and footer. Use these subcomponents to structure
            your card content logically.
          </p>
        </CardBody>
        <CardFooter>
          <div class="flex justify-end gap-2">
            <Button variant="tertiary" size="sm">Cancel</Button>
            <Button variant="primary" size="sm">Save</Button>
          </div>
        </CardFooter>
      </Card>
    `,
  }),
  args: {},
};

export const WithImageHeader: Story = {
  render: () => ({
    components: { Card, CardHeader, CardBody, CardFooter, Button },
    template: `
      <Card class="max-w-sm">
        <CardHeader :image="{ src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop', alt: 'Mountain landscape', height: 200 }">
          <h3 class="text-base font-semibold text-gray-900">Mountain View</h3>
          <p class="text-sm text-gray-500 mt-1">A breathtaking view of the mountains.</p>
        </CardHeader>
        <CardBody>
          <p class="text-sm text-gray-700">
            Full-width image in the header, followed by padded content below.
          </p>
        </CardBody>
        <CardFooter>
          <div class="flex justify-between items-center">
            <span class="text-xs text-gray-400">Posted 2 days ago</span>
            <Button variant="primary" size="sm">Read more</Button>
          </div>
        </CardFooter>
      </Card>
    `,
  }),
  args: {},
};

export const Clickable: Story = {
  render: () => ({
    components: { Card, CardBody },
    setup() {
      return { onCardClick: () => window.alert('Card clicked!') };
    },
    template: `
      <div class="flex flex-wrap gap-4">
        <Card class="max-w-xs" @click="onCardClick">
          <CardBody>
            <h3 class="text-base font-semibold text-gray-900">Clickable Card</h3>
            <p class="text-sm text-gray-500 mt-1">
              Click anywhere on this card. Uses <code>role="button"</code> with keyboard support.
            </p>
          </CardBody>
        </Card>
        <Card href="#" class="max-w-xs">
          <CardBody>
            <h3 class="text-base font-semibold text-gray-900">Link Card</h3>
            <p class="text-sm text-gray-500 mt-1">
              This card renders as an <code>&lt;a&gt;</code> element for navigation.
            </p>
          </CardBody>
        </Card>
      </div>
    `,
  }),
  args: {},
};

export const AllVariants: Story = {
  render: () => ({
    components: { Card, CardBody },
    template: `
      <div class="flex flex-wrap gap-4">
        <Card v-for="variant in ['default', 'elevated', 'outline']" :key="variant" :variant="variant" class="w-56">
          <CardBody>
            <h3 class="text-sm font-semibold text-gray-900 capitalize">{{ variant }}</h3>
            <p class="text-sm text-gray-500 mt-1">Card variant: {{ variant }}</p>
          </CardBody>
        </Card>
      </div>
    `,
  }),
  args: {},
};

export const PaddingSizes: Story = {
  render: () => ({
    components: { Card, CardHeader, CardBody, CardFooter },
    template: `
      <div class="flex flex-col gap-4 max-w-sm">
        <Card v-for="padding in ['sm', 'md', 'lg']" :key="padding" :padding="padding" variant="outline">
          <CardHeader>
            <h3 class="text-sm font-semibold text-gray-900">Padding: {{ padding }}</h3>
          </CardHeader>
          <CardBody>
            <p class="text-sm text-gray-700">Body content with {{ padding }} padding.</p>
          </CardBody>
          <CardFooter>
            <p class="text-xs text-gray-400">Footer with {{ padding }} padding</p>
          </CardFooter>
        </Card>
      </div>
    `,
  }),
  args: {},
};
