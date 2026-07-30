import { RadioGroup, Radio } from "@libretexts/davis-react";

export default function RadioGroupBasic() {
  return (
    <RadioGroup name="plan" label="Select a plan" defaultValue="pro">
      <Radio value="starter" label="Starter" description="Best for personal use" />
      <Radio value="pro" label="Pro" description="Best for small teams" />
      <Radio value="enterprise" label="Enterprise" description="Best for large organizations" />
    </RadioGroup>
  );
}
