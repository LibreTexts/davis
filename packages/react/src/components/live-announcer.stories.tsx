import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { LiveAnnouncerProvider, useAnnounce } from "./live-announcer";

const meta: Meta = {
  title: "Utilities/LiveAnnouncer",
  component: LiveAnnouncerProvider,
  parameters: {
    docs: {
      description: {
        component:
          "Manages a shared aria-live region for dynamic screen reader announcements. " +
          "Wrap your app with `<LiveAnnouncerProvider>` and use the `useAnnounce()` hook " +
          "to trigger announcements from any component.",
      },
    },
  },
};

export default meta;
type Story = StoryObj;

function PoliteDemo() {
  const announce = useAnnounce();
  const [count, setCount] = useState(0);

  const handleSearch = () => {
    const results = Math.floor(Math.random() * 20) + 1;
    setCount(results);
    announce(`${results} results found`);
  };

  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={handleSearch}
        className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Simulate Search
      </button>
      {count > 0 && (
        <p className="text-sm text-gray-600">
          Showing {count} results (announced to screen reader)
        </p>
      )}
    </div>
  );
}

export const PoliteAnnouncement: Story = {
  args: {},
  render: () => (
    <LiveAnnouncerProvider>
      <PoliteDemo />
    </LiveAnnouncerProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A polite announcement waits for the screen reader to finish speaking. ' +
          'Click the button and listen with a screen reader to hear the announcement.',
      },
    },
  },
};

function AssertiveDemo() {
  const announce = useAnnounce();
  const [error, setError] = useState("");

  const handleValidate = () => {
    const msg = "Error: email address is required";
    setError(msg);
    announce(msg, "assertive");
  };

  const handleClear = () => {
    setError("");
    announce("Error cleared", "polite");
  };

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <button
          type="button"
          onClick={handleValidate}
          className="px-4 py-2 bg-danger text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-danger focus:ring-offset-2"
        >
          Trigger Error
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Clear Error
        </button>
      </div>
      {error && (
        <p className="text-sm text-danger font-medium">{error}</p>
      )}
    </div>
  );
}

export const AssertiveAnnouncement: Story = {
  args: {},
  render: () => (
    <LiveAnnouncerProvider>
      <AssertiveDemo />
    </LiveAnnouncerProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "An assertive announcement interrupts the screen reader immediately. " +
          "Use sparingly — only for critical errors or time-sensitive information.",
      },
    },
  },
};
