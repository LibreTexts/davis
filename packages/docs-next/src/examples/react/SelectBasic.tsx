import { Select } from "@libretexts/davis-react";

const options = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "mx", label: "Mexico" },
  { value: "uk", label: "United Kingdom" },
];

export default function SelectBasic() {
  return (
    <Select
      name="country"
      label="Country"
      placeholder="Select a country"
      options={options}
    />
  );
}
