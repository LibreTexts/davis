import type { Meta, StoryObj } from "@storybook/vue3";
import VisuallyHidden from "./VisuallyHidden.vue";

const meta: Meta<typeof VisuallyHidden> = {
  title: "Utilities/VisuallyHidden",
  component: VisuallyHidden,
  parameters: {
    docs: {
      description: {
        component:
          "Hides content visually while keeping it accessible to screen readers. " +
          "Use for labels, descriptions, and context that sighted users don't need but assistive technology does.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof VisuallyHidden>;

export const Default: Story = {
  render: () => ({
    components: { VisuallyHidden },
    template: `
      <div>
        <p>There is hidden text in this container (inspect the DOM or use a screen reader):</p>
        <VisuallyHidden>This text is only visible to screen readers</VisuallyHidden>
      </div>
    `,
  }),
  args: {},
};

export const WithIconButton: Story = {
  render: () => ({
    components: { VisuallyHidden },
    template: `
      <button
        type="button"
        class="inline-flex items-center justify-center size-10 rounded-md bg-primary text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="size-5"
          aria-hidden="true"
        >
          <path d="M10 3.75a2 2 0 10-4 0 2 2 0 004 0zM17.25 4.5a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM5 3.75a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM4.25 17a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM17.25 17a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM9 10a.75.75 0 01-.75.75h-5.5a.75.75 0 010-1.5h5.5A.75.75 0 019 10zM17.25 10.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM14 10a2 2 0 10-4 0 2 2 0 004 0zM10 16.25a2 2 0 10-4 0 2 2 0 004 0z" />
        </svg>
        <VisuallyHidden>Adjust settings</VisuallyHidden>
      </button>
    `,
  }),
  args: {},
};

export const FocusableSkipLink: Story = {
  render: () => ({
    components: { VisuallyHidden },
    template: `
      <div>
        <VisuallyHidden as="a" href="#main" :focusable="true">
          Skip to main content
        </VisuallyHidden>
        <p>Tab to reveal the hidden skip link above.</p>
      </div>
    `,
  }),
  args: {},
};
