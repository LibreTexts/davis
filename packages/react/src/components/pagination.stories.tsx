import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Pagination } from "./pagination";

const meta: Meta<typeof Pagination> = {
  title: "Navigation/Pagination",
  component: Pagination,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination page={page} totalPages={10} onChange={setPage} />;
  },
};

export const MiddlePage: Story = {
  render: () => {
    const [page, setPage] = useState(5);
    return <Pagination page={page} totalPages={10} onChange={setPage} />;
  },
};

export const LastPage: Story = {
  render: () => {
    const [page, setPage] = useState(10);
    return <Pagination page={page} totalPages={10} onChange={setPage} />;
  },
};

export const FewPages: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination page={page} totalPages={3} onChange={setPage} />;
  },
};

export const Sizes: Story = {
  render: () => {
    const [page, setPage] = useState(5);
    return (
      <div className="flex flex-col gap-4">
        <Pagination page={page} totalPages={10} onChange={setPage} size="sm" />
        <Pagination page={page} totalPages={10} onChange={setPage} size="md" />
        <Pagination page={page} totalPages={10} onChange={setPage} size="lg" />
      </div>
    );
  },
};
