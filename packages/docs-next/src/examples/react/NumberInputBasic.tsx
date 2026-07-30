import { useState } from "react";
import { NumberInput } from "@libretexts/davis-react";

export default function NumberInputBasic() {
  const [value, setValue] = useState(5);
  return (
    <NumberInput
      name="quantity"
      label="Quantity"
      value={value}
      onChange={setValue}
      min={0}
      max={100}
    />
  );
}
