import { useState } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { userEvent } from "@storybook/testing-library";
import { axe } from "vitest-axe";
import { Collapsible } from "../collapsible";
import { Trace } from "../trace";

afterEach(cleanup);

describe("Collapsible", () => {
  it("supports keyboard activation and associates each trigger with its own panel", async () => {
    render(<>
      <Collapsible><Collapsible.Trigger>First</Collapsible.Trigger><Collapsible.Content>First details</Collapsible.Content></Collapsible>
      <Collapsible><Collapsible.Trigger>Second</Collapsible.Trigger><Collapsible.Content>Second details</Collapsible.Content></Collapsible>
    </>);
    const first = screen.getByRole("button", { name: "First" });
    const second = screen.getByRole("button", { name: "Second" });
    const panel = document.getElementById(first.getAttribute("aria-controls")!)!;
    expect(panel).not.toBeVisible();
    expect(first.getAttribute("aria-controls")).not.toEqual(second.getAttribute("aria-controls"));
    await userEvent.tab();
    expect(first).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    expect(first).toHaveAttribute("aria-expanded", "true");
    expect(panel).toHaveTextContent("First details");
    expect(panel).toBeVisible();
    await userEvent.keyboard(" ");
    expect(first).toHaveAttribute("aria-expanded", "false");
    expect(panel).not.toBeVisible();
  });

  it("requests changes without overriding a controlled value", () => {
    const onOpenChange = vi.fn();
    const { rerender } = render(
      <Collapsible open={false} onOpenChange={onOpenChange}><Collapsible.Trigger>Details</Collapsible.Trigger><Collapsible.Content>Content</Collapsible.Content></Collapsible>,
    );
    fireEvent.click(screen.getByRole("button", { name: "Details" }));
    expect(onOpenChange).toHaveBeenCalledWith(true);
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "false");
    rerender(<Collapsible open onOpenChange={onOpenChange}><Collapsible.Trigger>Details</Collapsible.Trigger><Collapsible.Content>Content</Collapsible.Content></Collapsible>);
    expect(screen.getByText("Content")).toBeVisible();
  });

  it("does not toggle disabled disclosures or submit their surrounding form", () => {
    const onOpenChange = vi.fn();
    const onSubmit = vi.fn((event) => event.preventDefault());
    render(<form onSubmit={onSubmit}>
      <Collapsible disabled onOpenChange={onOpenChange}><Collapsible.Trigger>Disabled</Collapsible.Trigger><Collapsible.Content>Hidden</Collapsible.Content></Collapsible>
      <Collapsible><Collapsible.Trigger>Enabled</Collapsible.Trigger><Collapsible.Content>Visible</Collapsible.Content></Collapsible>
    </form>);
    fireEvent.click(screen.getByRole("button", { name: "Disabled" }));
    expect(onOpenChange).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole("button", { name: "Enabled" }));
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("allows a trigger handler to prevent expansion", () => {
    render(<Collapsible><Collapsible.Trigger onClick={(event) => event.preventDefault()}>Details</Collapsible.Trigger><Collapsible.Content>Content</Collapsible.Content></Collapsible>);
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "false");
  });

  it("preserves mounted form state while removing closed content from keyboard navigation", async () => {
    render(<Collapsible defaultOpen>
      <Collapsible.Trigger>Details</Collapsible.Trigger>
      <Collapsible.Content forceMount><input aria-label="Notes" /></Collapsible.Content>
    </Collapsible>);
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "Keep this note" } });
    await userEvent.click(screen.getByRole("button"));
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
    await userEvent.tab();
    expect(screen.getByLabelText("Notes")).not.toHaveFocus();
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("textbox")).toHaveValue("Keep this note");
  });
});

describe("Trace", () => {
  function Progress({ running }: { running: boolean }) {
    const [expanded, setExpanded] = useState<boolean>();
    return <Trace>
      <Trace.Collapsible open={expanded ?? running} onOpenChange={setExpanded}>
        <Trace.Trigger><Trace.Line status={running ? "running" : "completed"}><Trace.Title>{running ? "Working" : "Completed"}</Trace.Title></Trace.Line></Trace.Trigger>
        <Trace.Content forceMount>
          <Trace.Collapsible>
            <Trace.Trigger>Tool details</Trace.Trigger>
            <Trace.Content><pre>Retrieved article</pre></Trace.Content>
          </Trace.Collapsible>
        </Trace.Content>
      </Trace.Collapsible>
    </Trace>;
  }

  it("follows execution state and preserves nested expansion when reopened", () => {
    const { rerender } = render(<Progress running />);
    fireEvent.click(screen.getByRole("button", { name: "Tool details" }));
    expect(screen.getByText("Retrieved article")).toBeVisible();
    rerender(<Progress running={false} />);
    expect(screen.getByRole("button", { name: "Completed" })).toHaveAttribute("aria-expanded", "false");
    expect(screen.getByText("Retrieved article")).not.toBeVisible();
    fireEvent.click(screen.getByRole("button", { name: "Completed" }));
    expect(screen.getByText("Retrieved article")).toBeVisible();
  });

  it("has no axe violations for expanded details and status text", async () => {
    const { container } = render(<Trace>
      <Trace.Collapsible defaultOpen>
        <Trace.Trigger><Trace.Line status="error"><Trace.Icon>!</Trace.Icon><Trace.Title>Search failed</Trace.Title><Trace.Description>3s</Trace.Description></Trace.Line></Trace.Trigger>
        <Trace.Content><p>The search could not complete.</p></Trace.Content>
      </Trace.Collapsible>
      <Trace.Line status="running" role="status"><Trace.Title>Retrying…</Trace.Title></Trace.Line>
    </Trace>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
