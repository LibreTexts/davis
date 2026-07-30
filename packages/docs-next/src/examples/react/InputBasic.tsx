import { Input } from "@libretexts/davis-react";

export default function InputBasic() {
  return (
    <Input
      name="email"
      label="Email address"
      type="email"
      placeholder="you@example.com"
    />
  );
}
