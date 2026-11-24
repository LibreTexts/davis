import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Trace, type TraceStatus } from "./trace";
import { Button } from "./button";

const meta: Meta<typeof Trace> = {
  title: "Components/Trace",
  component: Trace,
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof Trace>;

export const Default: Story = {
  render: () => (
    <Trace className="max-w-lg">
      <Trace.Collapsible defaultOpen>
        <Trace.Trigger>
          <Trace.Line status="completed">
            <Trace.Icon>✓</Trace.Icon><Trace.Title>Completed 2 steps</Trace.Title>
            <Trace.Description>3s</Trace.Description>
          </Trace.Line>
        </Trace.Trigger>
        <Trace.Content forceMount>
          <Trace>
            <Trace.Collapsible>
              <Trace.Trigger><Trace.Line><Trace.Title>Found matching articles</Trace.Title></Trace.Line></Trace.Trigger>
              <Trace.Content><p>Found three relevant articles in the knowledge base.</p></Trace.Content>
            </Trace.Collapsible>
            <Trace.Collapsible>
              <Trace.Trigger><Trace.Line><Trace.Title>Read article details</Trace.Title></Trace.Line></Trace.Trigger>
              <Trace.Content><pre className="overflow-x-auto">{'{"articles": 3}'}</pre></Trace.Content>
            </Trace.Collapsible>
          </Trace>
        </Trace.Content>
      </Trace.Collapsible>
    </Trace>
  ),
};

export const Statuses: Story = {
  render: () => (
    <Trace>
      {(["running", "completed", "pending", "error"] as TraceStatus[]).map((status) => (
        <Trace.Line key={status} status={status}>
          <Trace.Title>{{ running: "Searching articles…", completed: "Search completed", pending: "Awaiting approval", error: "Search failed" }[status]}</Trace.Title>
        </Trace.Line>
      ))}
    </Trace>
  ),
};

function ControlledProgressExample() {
  const [running, setRunning] = useState(true);
  const [expanded, setExpanded] = useState<boolean>();
  return (
    <div className="flex max-w-lg flex-col gap-4">
      <Button variant="outline" onClick={() => { setRunning(!running); setExpanded(undefined); }}>
        {running ? "Finish task" : "Restart task"}
      </Button>
      <Trace>
        <Trace.Collapsible open={expanded ?? running} onOpenChange={setExpanded}>
          <Trace.Trigger>
            <Trace.Line status={running ? "running" : "completed"}>
              <Trace.Title>{running ? "Working…" : "Completed 1 step"}</Trace.Title>
            </Trace.Line>
          </Trace.Trigger>
          <Trace.Content forceMount>
            <p>{running ? "Looking up the requested information." : "Information retrieved."}</p>
          </Trace.Content>
        </Trace.Collapsible>
      </Trace>
    </div>
  );
}
export const ControlledProgress: Story = { render: () => <ControlledProgressExample /> };

export const NarrowLayout: Story = {
  render: () => (
    <div className="w-64">
      <Trace>
        <Trace.Collapsible defaultOpen>
          <Trace.Trigger>
            <Trace.Line status="error">
              <Trace.Title title="A long operation name that exceeds the available space">A long operation name that exceeds the available space</Trace.Title>
              <Trace.Description>11s</Trace.Description>
            </Trace.Line>
          </Trace.Trigger>
          <Trace.Content>An error occurred while retrieving the requested information. Please try again.</Trace.Content>
        </Trace.Collapsible>
      </Trace>
    </div>
  ),
};
