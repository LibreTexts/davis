"use client";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Combobox } from "./combobox";

const meta: Meta<typeof Combobox> = {
  title: "Forms/Combobox",
  component: Combobox,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Combobox>;

const FRUITS = ["Apple", "Banana", "Blueberry", "Cherry", "Grape", "Mango", "Orange", "Peach", "Pear", "Strawberry"];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    const [query, setQuery] = useState("");
    const filtered = query === "" ? FRUITS : FRUITS.filter(f => f.toLowerCase().includes(query.toLowerCase()));
    return (
      <div className="w-64">
        <Combobox value={value} onChange={setValue}>
          <Combobox.Input
            placeholder="Select a fruit..."
            displayValue={(v) => v ?? ""}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Combobox.Options>
            {filtered.length === 0 ? (
              <Combobox.Empty />
            ) : (
              filtered.map((fruit) => (
                <Combobox.Option key={fruit} value={fruit}>
                  {fruit}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Combobox>
      </div>
    );
  },
};

export const MultipleSelection: Story = {
  render: () => {
    const [values, setValues] = useState<string[]>([]);
    const [query, setQuery] = useState("");
    const filtered = query === "" ? FRUITS : FRUITS.filter(f => f.toLowerCase().includes(query.toLowerCase()));
    return (
      <div className="w-64">
        <Combobox value={values as unknown as string} onChange={setValues as unknown as (v: string | null) => void} multiple>
          <Combobox.Label>Favourite fruits</Combobox.Label>
          <Combobox.Input
            placeholder="Search fruits…"
            displayValue={(v) => (v as unknown as string[]).join(", ")}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Combobox.Options>
            {filtered.length === 0 ? (
              <Combobox.Empty />
            ) : (
              filtered.map((fruit) => (
                <Combobox.Option key={fruit} value={fruit}>
                  {fruit}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Combobox>
        <p className="mt-2 text-sm text-gray-500">
          Selected: {values.length > 0 ? values.join(", ") : "none"}
        </p>
      </div>
    );
  },
};

export const WithSelected: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>("Mango");
    const [query, setQuery] = useState("");
    const filtered = query === "" ? FRUITS : FRUITS.filter(f => f.toLowerCase().includes(query.toLowerCase()));
    return (
      <div className="w-64">
        <Combobox value={value} onChange={setValue}>
          <Combobox.Input
            displayValue={(v) => v ?? ""}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Combobox.Options>
            {filtered.map((fruit) => (
              <Combobox.Option key={fruit} value={fruit}>{fruit}</Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox>
      </div>
    );
  },
};
