"use client";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Listbox } from "./listbox";

const meta: Meta<typeof Listbox> = {
  title: "Forms/Listbox",
  component: Listbox,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="p-8 min-h-[300px]">
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof Listbox>;

const FRAMEWORKS = ["React", "Vue", "Angular", "Svelte", "Solid"];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return (
      <div className="w-64">
        <Listbox value={value} onChange={setValue}>
          <Listbox.Label>Framework</Listbox.Label>
          <Listbox.Button placeholder="Select a framework…" />
          <Listbox.Options>
            {FRAMEWORKS.map((f) => (
              <Listbox.Option key={f} value={f}>{f}</Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
    );
  },
};

type Framework = { id: string; name: string; version: string };

const FRAMEWORK_OBJECTS: Framework[] = [
  { id: "react", name: "React", version: "19" },
  { id: "vue", name: "Vue", version: "3" },
  { id: "angular", name: "Angular", version: "18" },
  { id: "svelte", name: "Svelte", version: "5" },
];

export const WithObjects: Story = {
  render: () => {
    const [value, setValue] = useState<Framework | null>(null);
    return (
      <div className="w-64">
        <Listbox<Framework> value={value} onChange={setValue} by="id">
          <Listbox.Label>Framework</Listbox.Label>
          <Listbox.Button<Framework>
            displayValue={(f) => f ? `${f.name} v${f.version}` : ""}
            placeholder="Select a framework…"
          />
          <Listbox.Options>
            {FRAMEWORK_OBJECTS.map((f) => (
              <Listbox.Option<Framework> key={f.id} value={f}>
                {f.name} <span className="text-gray-400 text-xs">v{f.version}</span>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
    );
  },
};

export const MultipleSelection: Story = {
  render: () => {
    const [values, setValues] = useState<string[]>([]);
    return (
      <div className="w-64">
        <Listbox value={values as unknown as string} onChange={setValues as unknown as (v: string) => void} multiple>
          <Listbox.Label>Frameworks</Listbox.Label>
          <Listbox.Button
            displayValue={(v) => Array.isArray(v) && v.length > 0 ? (v as string[]).join(", ") : ""}
            placeholder="Select frameworks…"
          />
          <Listbox.Options>
            {FRAMEWORKS.map((f) => (
              <Listbox.Option key={f} value={f}>{f}</Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
    );
  },
};

export const WithDisabledOptions: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return (
      <div className="w-64">
        <Listbox value={value} onChange={setValue}>
          <Listbox.Label>Framework</Listbox.Label>
          <Listbox.Button placeholder="Select a framework…" />
          <Listbox.Options>
            {FRAMEWORKS.map((f) => (
              <Listbox.Option key={f} value={f} disabled={f === "Angular"}>
                {f}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [sm, setSm] = useState<string | null>(null);
    const [md, setMd] = useState<string | null>(null);
    const [lg, setLg] = useState<string | null>(null);
    return (
      <div className="flex flex-col gap-6 w-64">
        <Listbox value={sm} onChange={setSm}>
          <Listbox.Label>Small</Listbox.Label>
          <Listbox.Button size="sm" placeholder="Select…" />
          <Listbox.Options>
            {FRAMEWORKS.map((f) => <Listbox.Option key={f} value={f}>{f}</Listbox.Option>)}
          </Listbox.Options>
        </Listbox>
        <Listbox value={md} onChange={setMd}>
          <Listbox.Label>Medium (default)</Listbox.Label>
          <Listbox.Button size="md" placeholder="Select…" />
          <Listbox.Options>
            {FRAMEWORKS.map((f) => <Listbox.Option key={f} value={f}>{f}</Listbox.Option>)}
          </Listbox.Options>
        </Listbox>
        <Listbox value={lg} onChange={setLg}>
          <Listbox.Label>Large</Listbox.Label>
          <Listbox.Button size="lg" placeholder="Select…" />
          <Listbox.Options>
            {FRAMEWORKS.map((f) => <Listbox.Option key={f} value={f}>{f}</Listbox.Option>)}
          </Listbox.Options>
        </Listbox>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <div className="w-64">
        <Listbox value="React" onChange={() => {}} disabled>
          <Listbox.Label>Framework</Listbox.Label>
          <Listbox.Button placeholder="Select a framework…" />
          <Listbox.Options>
            {FRAMEWORKS.map((f) => (
              <Listbox.Option key={f} value={f}>{f}</Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
    );
  },
};
