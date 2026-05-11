import type { Meta, StoryObj } from "@storybook/react";
import { Comment } from "./comment";
import { Badge } from "./badge";

const meta: Meta<typeof Comment> = {
  title: "Components/Comment",
  component: Comment,
  parameters: { layout: "padded" },
  argTypes: {
    variant: { control: "select", options: ["default", "highlighted"] },
    padding: { control: "select", options: ["none", "sm", "md", "lg"] },
  },
};

export default meta;

type Story = StoryObj<typeof Comment>;

export const Default: Story = {
  render: (args) => (
    <Comment {...args} aria-label="Comment by Jane Doe" className="max-w-lg">
      <Comment.Header
        avatar={{ name: "Jane Doe" }}
        name="Jane Doe"
      >
        <time dateTime="2026-05-11T06:00:00Z" className="text-gray-400">2 hours ago</time>
      </Comment.Header>
      <Comment.Body>
        <p>Thanks for reaching out! I've looked into this issue and it appears to be related to your account settings. Let me help you get this resolved.</p>
      </Comment.Body>
    </Comment>
  ),
  args: {
    variant: "default",
    padding: "md",
  },
};

export const Highlighted: Story = {
  render: () => (
    <Comment variant="highlighted" aria-label="Comment by Admin User" className="max-w-lg">
      <Comment.Header
        avatar={{ name: "Admin User", src: "https://i.pravatar.cc/150?u=admin" }}
        name="Admin User"
      >
        <Badge variant="primary" label="Staff" size="sm" />
        <time dateTime="2026-05-11T07:00:00Z" className="text-gray-400">1 hour ago</time>
      </Comment.Header>
      <Comment.Body>
        <p>This is a pinned comment with the highlighted variant, useful for important messages from staff or system notifications.</p>
      </Comment.Body>
    </Comment>
  ),
};

export const WithRichMetadata: Story = {
  render: () => (
    <Comment aria-label="Comment by Sarah Chen" className="max-w-lg">
      <Comment.Header
        avatar={{ name: "Sarah Chen", src: "https://i.pravatar.cc/150?u=sarah" }}
        name="Sarah Chen"
      >
        <Badge variant="success" label="Resolved" size="sm" />
        <span>·</span>
        <time dateTime="2026-05-10">May 10, 2026</time>
        <span>·</span>
        <span>Edited</span>
      </Comment.Header>
      <Comment.Body>
        <p>The configuration has been updated and the issue should be resolved now. Please let me know if you continue to experience any problems.</p>
      </Comment.Body>
    </Comment>
  ),
};

export const WithRichContent: Story = {
  render: () => (
    <Comment aria-label="Comment by Dev Support" className="max-w-lg">
      <Comment.Header
        avatar={{ name: "Dev Support" }}
        name="Dev Support"
      >
        <time dateTime="2026-05-11T05:00:00Z" className="text-gray-400">3 hours ago</time>
      </Comment.Header>
      <Comment.Body>
        <p className="mb-2">I found the issue. You need to update your configuration:</p>
        <pre className="bg-gray-100 rounded-md p-3 text-xs mb-2">
          <code>{`{
  "apiVersion": "v2",
  "timeout": 30000
}`}</code>
        </pre>
        <p>After making this change, restart the service and it should work correctly.</p>
      </Comment.Body>
    </Comment>
  ),
};

export const Thread: Story = {
  render: () => (
    <div className="max-w-lg flex flex-col divide-y divide-gray-200">
      <Comment aria-label="Comment by Alex Johnson">
        <Comment.Header
          avatar={{ name: "Alex Johnson", src: "https://i.pravatar.cc/150?u=alex" }}
          name="Alex Johnson"
        >
          <time dateTime="2026-05-10T14:30:00Z" className="text-gray-400">Yesterday at 2:30 PM</time>
        </Comment.Header>
        <Comment.Body>
          <p>I&apos;m having trouble logging in to my account. I keep getting a &ldquo;session expired&rdquo; error even after resetting my password.</p>
        </Comment.Body>
      </Comment>

      <Comment aria-label="Comment by Support Team">
        <Comment.Header
          avatar={{ name: "Support Team" }}
          name="Support Team"
        >
          <Badge variant="primary" label="Staff" size="sm" />
          <time dateTime="2026-05-10T15:15:00Z" className="text-gray-400">Yesterday at 3:15 PM</time>
        </Comment.Header>
        <Comment.Body>
          <p>Hi Alex, thanks for reporting this. Could you try clearing your browser cache and cookies, then attempt to log in again?</p>
        </Comment.Body>
      </Comment>

      <Comment aria-label="Comment by Alex Johnson">
        <Comment.Header
          avatar={{ name: "Alex Johnson", src: "https://i.pravatar.cc/150?u=alex" }}
          name="Alex Johnson"
        >
          <time dateTime="2026-05-11T09:00:00Z" className="text-gray-400">Today at 9:00 AM</time>
        </Comment.Header>
        <Comment.Body>
          <p>That worked! I&apos;m able to log in now. Thank you for the quick help!</p>
        </Comment.Body>
      </Comment>
    </div>
  ),
};

export const PaddingSizes: Story = {
  render: () => (
    <div className="max-w-lg flex flex-col gap-4">
      {(["none", "sm", "md", "lg"] as const).map((padding) => (
        <Comment key={padding} padding={padding} className="border border-gray-200 rounded-md">
          <Comment.Header
            avatar={{ name: "User" }}
            name="User"
          >
            <span className="text-xs font-mono">padding=&quot;{padding}&quot;</span>
          </Comment.Header>
          <Comment.Body>
            <p>Comment content with {padding} padding.</p>
          </Comment.Body>
        </Comment>
      ))}
    </div>
  ),
};
