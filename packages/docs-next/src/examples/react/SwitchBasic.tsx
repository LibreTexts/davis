import { useState } from "react";
import { Switch } from "@libretexts/davis-react";

export default function SwitchBasic() {
  const [checked, setChecked] = useState(true);
  return (
    <Switch
      label="Enable notifications"
      checked={checked}
      onChange={setChecked}
    />
  );
}
