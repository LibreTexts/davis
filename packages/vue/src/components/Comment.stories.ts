import type { Meta, StoryObj } from "@storybook/vue3";
import Comment from "./Comment.vue";
import CommentHeader from "./CommentHeader.vue";
import CommentBody from "./CommentBody.vue";
import Badge from "./Badge.vue";

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
  render: (args) => ({
    components: { Comment, CommentHeader, CommentBody },
    setup() { return { args }; },
    template: `
      <Comment v-bind="args" aria-label="Comment by Jane Doe" class="max-w-lg">
        <CommentHeader
          :avatar="{ name: 'Jane Doe' }"
          name="Jane Doe"
        >
          <time datetime="2026-05-11T06:00:00Z" class="text-gray-400">2 hours ago</time>
        </CommentHeader>
        <CommentBody>
          <p>Thanks for reaching out! I've looked into this issue and it appears to be related to your account settings. Let me help you get this resolved.</p>
        </CommentBody>
      </Comment>
    `,
  }),
  args: { variant: "default", padding: "md" },
};

export const Highlighted: Story = {
  render: () => ({
    components: { Comment, CommentHeader, CommentBody, Badge },
    template: `
      <Comment variant="highlighted" aria-label="Comment by Admin User" class="max-w-lg">
        <CommentHeader
          :avatar="{ name: 'Admin User', src: 'https://i.pravatar.cc/150?u=admin' }"
          name="Admin User"
        >
          <Badge variant="primary" label="Staff" size="sm" />
          <time datetime="2026-05-11T07:00:00Z" class="text-gray-400">1 hour ago</time>
        </CommentHeader>
        <CommentBody>
          <p>This is a pinned comment with the highlighted variant, useful for important messages from staff or system notifications.</p>
        </CommentBody>
      </Comment>
    `,
  }),
};

export const WithRichMetadata: Story = {
  render: () => ({
    components: { Comment, CommentHeader, CommentBody, Badge },
    template: `
      <Comment aria-label="Comment by Sarah Chen" class="max-w-lg">
        <CommentHeader
          :avatar="{ name: 'Sarah Chen', src: 'https://i.pravatar.cc/150?u=sarah' }"
          name="Sarah Chen"
        >
          <Badge variant="success" label="Resolved" size="sm" />
          <span>&middot;</span>
          <time datetime="2026-05-10">May 10, 2026</time>
          <span>&middot;</span>
          <span>Edited</span>
        </CommentHeader>
        <CommentBody>
          <p>The configuration has been updated and the issue should be resolved now. Please let me know if you continue to experience any problems.</p>
        </CommentBody>
      </Comment>
    `,
  }),
};

export const WithRichContent: Story = {
  render: () => ({
    components: { Comment, CommentHeader, CommentBody },
    template: `
      <Comment aria-label="Comment by Dev Support" class="max-w-lg">
        <CommentHeader
          :avatar="{ name: 'Dev Support' }"
          name="Dev Support"
        >
          <time datetime="2026-05-11T05:00:00Z" class="text-gray-400">3 hours ago</time>
        </CommentHeader>
        <CommentBody>
          <p class="mb-2">I found the issue. You need to update your configuration:</p>
          <pre class="bg-gray-100 rounded-md p-3 text-xs mb-2"><code>{
  "apiVersion": "v2",
  "timeout": 30000
}</code></pre>
          <p>After making this change, restart the service and it should work correctly.</p>
        </CommentBody>
      </Comment>
    `,
  }),
};

export const Thread: Story = {
  render: () => ({
    components: { Comment, CommentHeader, CommentBody, Badge },
    template: `
      <div class="max-w-lg flex flex-col divide-y divide-gray-200">
        <Comment aria-label="Comment by Alex Johnson">
          <CommentHeader
            :avatar="{ name: 'Alex Johnson', src: 'https://i.pravatar.cc/150?u=alex' }"
            name="Alex Johnson"
          >
            <time datetime="2026-05-10T14:30:00Z" class="text-gray-400">Yesterday at 2:30 PM</time>
          </CommentHeader>
          <CommentBody>
            <p>I'm having trouble logging in to my account. I keep getting a "session expired" error even after resetting my password.</p>
          </CommentBody>
        </Comment>

        <Comment aria-label="Comment by Support Team">
          <CommentHeader
            :avatar="{ name: 'Support Team' }"
            name="Support Team"
          >
            <Badge variant="primary" label="Staff" size="sm" />
            <time datetime="2026-05-10T15:15:00Z" class="text-gray-400">Yesterday at 3:15 PM</time>
          </CommentHeader>
          <CommentBody>
            <p>Hi Alex, thanks for reporting this. Could you try clearing your browser cache and cookies, then attempt to log in again?</p>
          </CommentBody>
        </Comment>

        <Comment aria-label="Comment by Alex Johnson">
          <CommentHeader
            :avatar="{ name: 'Alex Johnson', src: 'https://i.pravatar.cc/150?u=alex' }"
            name="Alex Johnson"
          >
            <time datetime="2026-05-11T09:00:00Z" class="text-gray-400">Today at 9:00 AM</time>
          </CommentHeader>
          <CommentBody>
            <p>That worked! I'm able to log in now. Thank you for the quick help!</p>
          </CommentBody>
        </Comment>
      </div>
    `,
  }),
};

export const PaddingSizes: Story = {
  render: () => ({
    components: { Comment, CommentHeader, CommentBody },
    template: `
      <div class="max-w-lg flex flex-col gap-4">
        <Comment v-for="padding in ['none', 'sm', 'md', 'lg']" :key="padding" :padding="padding" class="border border-gray-200 rounded-md">
          <CommentHeader
            :avatar="{ name: 'User' }"
            name="User"
          >
            <span class="text-xs font-mono">padding="{{ padding }}"</span>
          </CommentHeader>
          <CommentBody>
            <p>Comment content with {{ padding }} padding.</p>
          </CommentBody>
        </Comment>
      </div>
    `,
  }),
};
