import { InputGroup, Input } from "@libretexts/davis-react";

export default function InputGroupBasic() {
  return (
    <InputGroup prefix="$" suffix=".00">
      <Input name="amount" label="Amount" placeholder="0" />
    </InputGroup>
  );
}
