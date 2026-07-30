import { useState } from "react";
import { Combobox } from "@libretexts/davis-react";

const FRUITS = ["Apple", "Banana", "Blueberry", "Cherry", "Grape", "Mango", "Orange", "Peach", "Pear", "Strawberry"];

export default function ComboboxBasic() {
  const [value, setValue] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const filtered =
    query === ""
      ? FRUITS
      : FRUITS.filter((f) => f.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="w-64">
      <Combobox value={value} onChange={setValue}>
        <Combobox.Label>Fruit</Combobox.Label>
        <Combobox.Input
          placeholder="Search fruits..."
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
}
