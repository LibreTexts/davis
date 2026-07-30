import { useState } from "react";
import { Listbox } from "@libretexts/davis-react";

const FRAMEWORKS = ["React", "Vue", "Angular", "Svelte", "Solid"];

export default function ListboxBasic() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <div className="w-64">
      <Listbox value={value} onChange={setValue}>
        <Listbox.Label>Framework</Listbox.Label>
        <Listbox.Button placeholder="Select a framework…" />
        <Listbox.Options>
          {FRAMEWORKS.map((f) => (
            <Listbox.Option key={f} value={f}>
              {f}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}
