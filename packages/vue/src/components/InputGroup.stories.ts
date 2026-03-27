import type { Meta, StoryObj } from "@storybook/vue3";
import InputGroup from "./InputGroup.vue";
import Input from "./Input.vue";

const meta: Meta<typeof InputGroup> = {
  title: "Forms/InputGroup",
  component: InputGroup,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const WithPrefix: Story = {
  render: () => ({
    components: { InputGroup, Input },
    template: `
      <InputGroup>
        <template #prefix>$</template>
        <Input name="amount" label="Amount" placeholder="0.00" />
      </InputGroup>
    `,
  }),
  args: {},
};

export const WithSuffix: Story = {
  render: () => ({
    components: { InputGroup, Input },
    template: `
      <InputGroup>
        <Input name="domain" label="Domain" placeholder="yoursite" />
        <template #suffix>.com</template>
      </InputGroup>
    `,
  }),
  args: {},
};

export const WithBoth: Story = {
  render: () => ({
    components: { InputGroup, Input },
    template: `
      <InputGroup>
        <template #prefix>https://</template>
        <Input name="url" label="URL" placeholder="example" />
        <template #suffix>/path</template>
      </InputGroup>
    `,
  }),
  args: {},
};

export const Sizes: Story = {
  render: () => ({
    components: { InputGroup, Input },
    template: `
      <div class="flex flex-col gap-4">
        <InputGroup size="sm">
          <template #prefix>$</template>
          <Input name="sm-amount" label="Small" placeholder="0.00" size="sm" />
        </InputGroup>
        <InputGroup size="md">
          <template #prefix>$</template>
          <Input name="md-amount" label="Medium" placeholder="0.00" size="md" />
        </InputGroup>
        <InputGroup size="lg">
          <template #prefix>$</template>
          <Input name="lg-amount" label="Large" placeholder="0.00" size="lg" />
        </InputGroup>
      </div>
    `,
  }),
  args: {},
};
