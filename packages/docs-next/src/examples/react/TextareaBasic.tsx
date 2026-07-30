import { Textarea } from "@libretexts/davis-react";

export default function TextareaBasic() {
  return (
    <Textarea
      name="message"
      label="Message"
      placeholder="Enter your message..."
      helperText="Write a brief description of your issue."
    />
  );
}
