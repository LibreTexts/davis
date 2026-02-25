import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarGroup } from "./avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

const IMG_1 = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face";
const IMG_2 = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face";
const IMG_3 = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face";
const IMG_4 = "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face";
const IMG_5 = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face";

export const WithImage: Story = {
  args: {
    src: IMG_1,
    name: "John Doe",
    alt: "John Doe's avatar",
  },
};

export const WithInitials: Story = {
  args: {
    name: "Jane Smith",
  },
};

export const WithCustomInitials: Story = {
  args: {
    initials: "AB",
  },
};

export const WithIcon: Story = {
  args: {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clipRule="evenodd" />
      </svg>
    ),
  },
};

export const DefaultFallback: Story = {
  args: {},
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar src={IMG_1} name="User" size="xs" />
      <Avatar src={IMG_1} name="User" size="sm" />
      <Avatar src={IMG_1} name="User" size="md" />
      <Avatar src={IMG_1} name="User" size="lg" />
      <Avatar src={IMG_1} name="User" size="xl" />
    </div>
  ),
};

export const InitialsSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar name="John Doe" size="xs" />
      <Avatar name="John Doe" size="sm" />
      <Avatar name="John Doe" size="md" />
      <Avatar name="John Doe" size="lg" />
      <Avatar name="John Doe" size="xl" />
    </div>
  ),
};

export const ImageLoadError: Story = {
  args: {
    src: "https://invalid-image-url.com/broken.jpg",
    name: "Fallback User",
  },
};

type GroupStory = StoryObj<typeof AvatarGroup>;

export const Group: GroupStory = {
  render: () => (
    <AvatarGroup>
      <Avatar src={IMG_1} name="Alice" />
      <Avatar src={IMG_2} name="Bob" />
      <Avatar src={IMG_3} name="Charlie" />
    </AvatarGroup>
  ),
};

export const GroupWithMax: GroupStory = {
  render: () => (
    <AvatarGroup max={3}>
      <Avatar src={IMG_1} name="Alice" />
      <Avatar src={IMG_2} name="Bob" />
      <Avatar src={IMG_3} name="Charlie" />
      <Avatar src={IMG_4} name="Diana" />
      <Avatar src={IMG_5} name="Eve" />
    </AvatarGroup>
  ),
};

export const GroupSizes: GroupStory = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm text-gray-500 mb-2">Extra Small</p>
        <AvatarGroup size="xs" max={4}>
          <Avatar src={IMG_1} name="A" />
          <Avatar src={IMG_2} name="B" />
          <Avatar src={IMG_3} name="C" />
          <Avatar src={IMG_4} name="D" />
          <Avatar src={IMG_5} name="E" />
        </AvatarGroup>
      </div>
      <div>
        <p className="text-sm text-gray-500 mb-2">Small</p>
        <AvatarGroup size="sm" max={4}>
          <Avatar src={IMG_1} name="A" />
          <Avatar src={IMG_2} name="B" />
          <Avatar src={IMG_3} name="C" />
          <Avatar src={IMG_4} name="D" />
          <Avatar src={IMG_5} name="E" />
        </AvatarGroup>
      </div>
      <div>
        <p className="text-sm text-gray-500 mb-2">Medium</p>
        <AvatarGroup size="md" max={4}>
          <Avatar src={IMG_1} name="A" />
          <Avatar src={IMG_2} name="B" />
          <Avatar src={IMG_3} name="C" />
          <Avatar src={IMG_4} name="D" />
          <Avatar src={IMG_5} name="E" />
        </AvatarGroup>
      </div>
      <div>
        <p className="text-sm text-gray-500 mb-2">Large</p>
        <AvatarGroup size="lg" max={4}>
          <Avatar src={IMG_1} name="A" />
          <Avatar src={IMG_2} name="B" />
          <Avatar src={IMG_3} name="C" />
          <Avatar src={IMG_4} name="D" />
          <Avatar src={IMG_5} name="E" />
        </AvatarGroup>
      </div>
      <div>
        <p className="text-sm text-gray-500 mb-2">Extra Large</p>
        <AvatarGroup size="xl" max={4}>
          <Avatar src={IMG_1} name="A" />
          <Avatar src={IMG_2} name="B" />
          <Avatar src={IMG_3} name="C" />
          <Avatar src={IMG_4} name="D" />
          <Avatar src={IMG_5} name="E" />
        </AvatarGroup>
      </div>
    </div>
  ),
};

export const GroupWithInitials: GroupStory = {
  render: () => (
    <AvatarGroup max={4}>
      <Avatar name="Alice Anderson" />
      <Avatar name="Bob Brown" />
      <Avatar name="Charlie Chen" />
      <Avatar name="Diana Davis" />
      <Avatar name="Eve Edwards" />
      <Avatar name="Frank Foster" />
    </AvatarGroup>
  ),
};

export const UserCard: Story = {
  render: () => (
    <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-200 max-w-xs">
      <Avatar src={IMG_2} name="Sarah Connor" size="lg" />
      <div>
        <p className="font-medium text-gray-900">Sarah Connor</p>
        <p className="text-sm text-gray-500">Product Designer</p>
      </div>
    </div>
  ),
};

export const CommentThread: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <div className="flex gap-3">
        <Avatar src={IMG_1} name="John" size="sm" />
        <div className="flex-1 bg-gray-100 rounded-lg p-3">
          <p className="font-medium text-sm">John Doe</p>
          <p className="text-sm text-gray-600">This looks great! Love the new design.</p>
        </div>
      </div>
      <div className="flex gap-3">
        <Avatar name="Jane Smith" size="sm" />
        <div className="flex-1 bg-gray-100 rounded-lg p-3">
          <p className="font-medium text-sm">Jane Smith</p>
          <p className="text-sm text-gray-600">Thanks! We worked hard on it.</p>
        </div>
      </div>
    </div>
  ),
};

export const TeamMembers: Story = {
  render: () => (
    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 max-w-xs">
      <p className="text-sm font-medium text-gray-700 mb-3">Team Members</p>
      <AvatarGroup max={5} size="sm">
        <Avatar src={IMG_1} name="A" />
        <Avatar src={IMG_2} name="B" />
        <Avatar src={IMG_3} name="C" />
        <Avatar src={IMG_4} name="D" />
        <Avatar src={IMG_5} name="E" />
        <Avatar name="F" />
        <Avatar name="G" />
        <Avatar name="H" />
      </AvatarGroup>
    </div>
  ),
};
