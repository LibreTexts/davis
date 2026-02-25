import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "./empty-state";
import { Button } from "./button";

const meta: Meta<typeof EmptyState> = {
  title: "Components/EmptyState",
  component: EmptyState,
};

export default meta;

type Story = StoryObj<typeof EmptyState>;

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);

const InboxIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
  </svg>
);

const DocumentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
  </svg>
);

const FolderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
  </svg>
);

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export const Default: Story = {
  args: {
    title: "No items found",
    description: "There are no items to display at this time.",
  },
};

export const TitleOnly: Story = {
  args: {
    title: "Nothing here yet",
  },
};

export const WithAction: Story = {
  args: {
    title: "No projects",
    description: "Get started by creating your first project.",
    action: <Button>Create project</Button>,
  },
};

export const NoSearchResults: Story = {
  args: {
    icon: <SearchIcon />,
    title: "No results found",
    description: "Try adjusting your search or filter to find what you're looking for.",
    action: <Button variant="secondary">Clear filters</Button>,
  },
};

export const EmptyInbox: Story = {
  args: {
    icon: <InboxIcon />,
    title: "Your inbox is empty",
    description: "Messages you receive will appear here.",
  },
};

export const NoDocuments: Story = {
  args: {
    icon: <DocumentIcon />,
    title: "No documents",
    description: "Upload your first document to get started.",
    action: <Button icon={<PlusIcon />}>Upload document</Button>,
  },
};

export const NoTeamMembers: Story = {
  args: {
    icon: <UsersIcon />,
    title: "No team members",
    description: "Invite people to collaborate on this project.",
    action: <Button>Invite team members</Button>,
  },
};

export const EmptyFolder: Story = {
  args: {
    icon: <FolderIcon />,
    title: "This folder is empty",
    description: "Drag and drop files here or click to upload.",
  },
};

export const InCard: Story = {
  render: () => (
    <div className="max-w-md border border-gray-200 rounded-lg bg-white">
      <EmptyState
        icon={<DocumentIcon />}
        title="No files uploaded"
        description="Upload files to share with your team."
        action={<Button size="sm">Upload files</Button>}
      />
    </div>
  ),
};

export const FullPage: Story = {
  render: () => (
    <div className="min-h-96 flex items-center justify-center bg-gray-50 rounded-lg">
      <EmptyState
        icon={<SearchIcon />}
        title="No courses found"
        description="We couldn't find any courses matching your criteria. Try adjusting your filters or search terms."
        action={
          <div className="flex gap-2">
            <Button variant="secondary">Clear filters</Button>
            <Button>Browse all courses</Button>
          </div>
        }
      />
    </div>
  ),
};

export const TableEmpty: Story = {
  render: () => (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
        <h3 className="text-sm font-medium text-gray-700">Recent Activity</h3>
      </div>
      <EmptyState
        title="No recent activity"
        description="Activity from your team will show up here."
        className="py-8"
      />
    </div>
  ),
};
