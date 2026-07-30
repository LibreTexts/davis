import { Checkbox } from "@libretexts/davis-react";

export default function CheckboxBasic() {
  return (
    <Checkbox
      name="terms"
      label="I agree to the terms and conditions"
      description="You can withdraw consent at any time."
    />
  );
}
