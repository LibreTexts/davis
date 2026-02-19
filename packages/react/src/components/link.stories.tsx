import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./link";

const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  args: {
    children: "Click here",
    href: "/example",
  },
  argTypes: {
    variant: { control: "select", options: ["default", "muted", "danger"] },
    underline: { control: "select", options: ["always", "hover", "none"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: { children: "Go to Dashboard", href: "/dashboard" },
};

export const External: Story = {
  args: { children: "Visit LibreTexts", href: "https://libretexts.org" },
};

export const ExternalNoIcon: Story = {
  args: { children: "Visit LibreTexts", href: "https://libretexts.org", showExternalIcon: false },
};

export const VariantDefault: Story = {
  args: { children: "Primary Link", href: "/example", variant: "default" },
};

export const VariantMuted: Story = {
  args: { children: "Muted Link", href: "/example", variant: "muted" },
};

export const VariantDanger: Story = {
  args: { children: "Delete Account", href: "/delete", variant: "danger" },
};

export const UnderlineAlways: Story = {
  args: { children: "Always underlined", href: "/example", underline: "always" },
};

export const UnderlineHover: Story = {
  args: { children: "Hover to see underline", href: "/example", underline: "hover" },
};

export const UnderlineNone: Story = {
  args: { children: "No underline", href: "/example", underline: "none" },
};

export const SizeSmall: Story = {
  args: { children: "Small link", href: "/example", size: "sm" },
};

export const SizeMedium: Story = {
  args: { children: "Medium link", href: "/example", size: "md" },
};

export const SizeLarge: Story = {
  args: { children: "Large link", href: "/example", size: "lg" },
};

export const WithIcon: Story = {
  args: { children: "Read Documentation", href: "/docs", icon: <BookIcon /> },
};

export const Disabled: Story = {
  args: { children: "Disabled link", href: "/example", disabled: true },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-6">
      <Link href="/example" variant="default">Default</Link>
      <Link href="/example" variant="muted">Muted</Link>
      <Link href="/example" variant="danger">Danger</Link>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-baseline gap-6">
      <Link href="/example" size="sm">Small</Link>
      <Link href="/example" size="md">Medium</Link>
      <Link href="/example" size="lg">Large</Link>
    </div>
  ),
};

export const InParagraph: Story = {
  render: () => (
    <p className="text-gray-700 max-w-prose">
      By using this service, you agree to our{" "}
      <Link href="/terms">Terms of Service</Link> and{" "}
      <Link href="/privacy">Privacy Policy</Link>. For more information,
      please visit our{" "}
      <Link href="https://support.libretexts.org" external>
        Support Center
      </Link>.
    </p>
  ),
};

export const FooterLinks: Story = {
  render: () => (
    <div className="flex gap-4">
      <Link href="/about" variant="muted" size="sm" underline="none">About</Link>
      <Link href="/blog" variant="muted" size="sm" underline="none">Blog</Link>
      <Link href="/careers" variant="muted" size="sm" underline="none">Careers</Link>
      <Link href="/contact" variant="muted" size="sm" underline="none">Contact</Link>
    </div>
  ),
};

export const Breadcrumbs: Story = {
  render: () => (
    <nav className="flex items-center gap-2 text-sm">
      <Link href="/" variant="muted" underline="hover">Home</Link>
      <span className="text-gray-400">/</span>
      <Link href="/projects" variant="muted" underline="hover">Projects</Link>
      <span className="text-gray-400">/</span>
      <span className="text-gray-900">Current Project</span>
    </nav>
  ),
};
