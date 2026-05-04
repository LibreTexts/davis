/**
 * Automated accessibility tests for all Davis React components.
 *
 * Uses axe-core (via vitest-axe) to verify each component produces
 * no WCAG 2 violations in its default state. These tests catch
 * regressions like missing ARIA attributes, insufficient contrast
 * in inline styles, and invalid role usage.
 *
 * Note: axe-core detects ~57% of WCAG issues. Manual testing with
 * screen readers is still required for each component.
 */
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { axe } from "vitest-axe";

import { Button } from "../button";
import { IconButton } from "../icon-button";
import { Input } from "../input";
import { Textarea } from "../textarea";
import { Select } from "../select";
import { Checkbox } from "../checkbox";
import { Radio } from "../radio";
import { RadioGroup } from "../radio-group";
import { Switch } from "../switch";
import { Alert } from "../alert";
import { Badge } from "../badge";
import { Spinner } from "../spinner";
import { Link } from "../link";
import { Avatar, AvatarGroup } from "../avatar";
import { Card } from "../card";
import { EmptyState } from "../empty-state";
import { VisuallyHidden } from "../visually-hidden";
import { SkipLink } from "../skip-link";
import { LiveAnnouncerProvider, useAnnounce } from "../live-announcer";
import { Combobox } from "../combobox";
import { Listbox } from "../listbox";

// Helper: renders component and checks for axe violations
async function expectNoA11yViolations(ui: React.ReactElement) {
  const { container } = render(ui);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
}

describe("Button", () => {
  it("has no a11y violations in default state", async () => {
    await expectNoA11yViolations(<Button>Click me</Button>);
  });

  it("has no a11y violations when disabled", async () => {
    await expectNoA11yViolations(<Button disabled>Disabled</Button>);
  });

  it("has no a11y violations for all variants", async () => {
    const variants = ["primary", "secondary", "tertiary", "destructive", "ghost", "outline"] as const;
    for (const variant of variants) {
      await expectNoA11yViolations(<Button variant={variant}>{variant}</Button>);
    }
  });
});

describe("IconButton", () => {
  it("has no a11y violations with aria-label", async () => {
    await expectNoA11yViolations(
      <IconButton
        aria-label="Close"
        icon={<svg aria-hidden="true" viewBox="0 0 20 20"><path d="M6 6l8 8M6 14l8-8" /></svg>}
      />
    );
  });
});

describe("Input", () => {
  it("has no a11y violations with label", async () => {
    await expectNoA11yViolations(
      <Input name="test-input" label="Email" />
    );
  });

  it("has no a11y violations with aria-label", async () => {
    await expectNoA11yViolations(<Input name="search" label="Search" aria-label="Search" />);
  });
});

describe("Textarea", () => {
  it("has no a11y violations with label", async () => {
    await expectNoA11yViolations(
      <Textarea name="test-textarea" label="Message" />
    );
  });
});

describe("Select", () => {
  it("has no a11y violations with label", async () => {
    await expectNoA11yViolations(
      <Select
        name="test-select"
        label="Country"
        placeholder="Select a country"
        options={[
          { value: "us", label: "United States" },
          { value: "uk", label: "United Kingdom" },
        ]}
      />
    );
  });
});

describe("Checkbox", () => {
  it("has no a11y violations with label", async () => {
    await expectNoA11yViolations(<Checkbox name="accept-terms" label="Accept terms" />);
  });
});

describe("Radio", () => {
  it("has no a11y violations within RadioGroup", async () => {
    await expectNoA11yViolations(
      <RadioGroup label="Pick one" name="test-radio-single">
        <Radio value="a" label="Option A" />
      </RadioGroup>
    );
  });
});

describe("RadioGroup", () => {
  it("has no a11y violations", async () => {
    await expectNoA11yViolations(
      <RadioGroup label="Choose an option" name="test-group">
        <Radio value="a" label="Option A" />
        <Radio value="b" label="Option B" />
      </RadioGroup>
    );
  });

  it("has no a11y violations with options prop", async () => {
    await expectNoA11yViolations(
      <RadioGroup
        label="Billing cycle"
        name="billing"
        options={[
          { value: "monthly", label: "Monthly" },
          { value: "annual", label: "Annual" },
        ]}
      />
    );
  });
});

describe("Switch", () => {
  it("has no a11y violations", async () => {
    await expectNoA11yViolations(<Switch label="Enable notifications" checked={false} onChange={() => {}} />);
  });
});

describe("Alert", () => {
  it("has no a11y violations for all variants", async () => {
    const variants = ["info", "success", "warning", "error"] as const;
    for (const variant of variants) {
      await expectNoA11yViolations(
        <Alert variant={variant} message={`This is a ${variant} alert.`} />
      );
    }
  });

  it("has no a11y violations with title", async () => {
    await expectNoA11yViolations(
      <Alert title="Heads up" message="This is an informational alert." />
    );
  });

  it("renders title as h2 by default", () => {
    const { container } = render(
      <Alert title="Heads up" message="This is an informational alert." />
    );
    const heading = container.querySelector("h2");
    expect(heading).not.toBeNull();
    expect(heading!.textContent).toBe("Heads up");
  });

  it("renders title with custom heading level", () => {
    const { container } = render(
      <Alert title="Heads up" message="Info" asHeading="h4" />
    );
    expect(container.querySelector("h4")).not.toBeNull();
  });

  it("renders title as p when asHeading is p", () => {
    const { container } = render(
      <Alert title="Heads up" message="Info" asHeading="p" />
    );
    expect(container.querySelector("h2")).toBeNull();
    const paragraphs = container.querySelectorAll("p");
    const titleP = Array.from(paragraphs).find((p) => p.textContent === "Heads up");
    expect(titleP).not.toBeUndefined();
  });
});

describe("Badge", () => {
  it("has no a11y violations", async () => {
    await expectNoA11yViolations(<Badge label="New" />);
  });
});

describe("Spinner", () => {
  it("has no a11y violations", async () => {
    await expectNoA11yViolations(<Spinner />);
  });

  it("has no a11y violations with text", async () => {
    await expectNoA11yViolations(<Spinner text="Loading..." />);
  });
});

describe("Link", () => {
  it("has no a11y violations", async () => {
    await expectNoA11yViolations(<Link href="/about">About</Link>);
  });

  it("has no a11y violations for external link", async () => {
    await expectNoA11yViolations(
      <Link href="https://example.com" external>
        Example
      </Link>
    );
  });
});

describe("Avatar", () => {
  it("has no a11y violations with alt text", async () => {
    await expectNoA11yViolations(<Avatar alt="Jane Doe" />);
  });
});

describe("AvatarGroup", () => {
  it("has no a11y violations", async () => {
    await expectNoA11yViolations(
      <AvatarGroup>
        <Avatar alt="Jane" />
        <Avatar alt="John" />
      </AvatarGroup>
    );
  });
});

describe("Card", () => {
  it("has no a11y violations", async () => {
    await expectNoA11yViolations(
      <Card>
        <Card.Body>Card content</Card.Body>
      </Card>
    );
  });
});

describe("EmptyState", () => {
  it("has no a11y violations", async () => {
    await expectNoA11yViolations(
      <EmptyState
        title="No results"
        description="Try adjusting your search."
      />
    );
  });
});

describe("VisuallyHidden", () => {
  it("has no a11y violations", async () => {
    await expectNoA11yViolations(
      <VisuallyHidden>Screen reader only text</VisuallyHidden>
    );
  });
});

describe("SkipLink", () => {
  it("has no a11y violations", async () => {
    await expectNoA11yViolations(
      <div>
        <SkipLink />
        <main id="main-content">Content</main>
      </div>
    );
  });

  it("renders with correct href", () => {
    const { container } = render(<SkipLink targetId="content" />);
    const link = container.querySelector("a");
    expect(link).toHaveAttribute("href", "#content");
  });

  it("renders with custom text", () => {
    const { getByText } = render(<SkipLink>Skip navigation</SkipLink>);
    expect(getByText("Skip navigation")).toBeInTheDocument();
  });
});

describe("LiveAnnouncer", () => {
  it("has no a11y violations", async () => {
    await expectNoA11yViolations(
      <LiveAnnouncerProvider>
        <div>App content</div>
      </LiveAnnouncerProvider>
    );
  });

  it("renders polite and assertive live regions", () => {
    const { container } = render(
      <LiveAnnouncerProvider>
        <div>App content</div>
      </LiveAnnouncerProvider>
    );
    const polite = container.querySelector('[aria-live="polite"]');
    const assertive = container.querySelector('[aria-live="assertive"]');
    expect(polite).toBeInTheDocument();
    expect(assertive).toBeInTheDocument();
  });

  function AnnounceTestComponent() {
    const announce = useAnnounce();
    return (
      <button type="button" onClick={() => announce("Hello")}>
        Announce
      </button>
    );
  }

  it("provides announce function via hook", () => {
    const { getByText } = render(
      <LiveAnnouncerProvider>
        <AnnounceTestComponent />
      </LiveAnnouncerProvider>
    );
    expect(getByText("Announce")).toBeInTheDocument();
  });
});

describe("Combobox", () => {
  it("has no a11y violations in default state", async () => {
    await expectNoA11yViolations(
      <Combobox value={null} onChange={() => {}}>
        <Combobox.Label>Framework</Combobox.Label>
        <Combobox.Input aria-label="Framework" />
        <Combobox.Options static>
          <Combobox.Option value="react">React</Combobox.Option>
          <Combobox.Option value="vue">Vue</Combobox.Option>
        </Combobox.Options>
      </Combobox>
    );
  });

  it("has no a11y violations when disabled", async () => {
    await expectNoA11yViolations(
      <Combobox value={null} onChange={() => {}} disabled>
        <Combobox.Input aria-label="Framework" />
        <Combobox.Options static>
          <Combobox.Option value="react">React</Combobox.Option>
        </Combobox.Options>
      </Combobox>
    );
  });

  it("has no a11y violations with label", async () => {
    await expectNoA11yViolations(
      <Combobox value={null} onChange={() => {}}>
        <Combobox.Label>Pick a framework</Combobox.Label>
        <Combobox.Input />
        <Combobox.Options static>
          <Combobox.Option value="react">React</Combobox.Option>
        </Combobox.Options>
      </Combobox>
    );
  });

  it("has no a11y violations in multiple mode with pre-selected value", async () => {
    await expectNoA11yViolations(
      <Combobox value={["react"] as unknown as string} onChange={() => {}} multiple>
        <Combobox.Label>Frameworks</Combobox.Label>
        <Combobox.Input
          aria-label="Frameworks"
          displayValue={(v) => (v as unknown as string[]).join(", ")}
        />
        <Combobox.Options static>
          <Combobox.Option value="react">React</Combobox.Option>
          <Combobox.Option value="vue">Vue</Combobox.Option>
        </Combobox.Options>
      </Combobox>
    );
  });
});

describe("Listbox", () => {
  it("has no a11y violations in default state", async () => {
    await expectNoA11yViolations(
      <Listbox value={null} onChange={() => {}}>
        <Listbox.Label>Framework</Listbox.Label>
        <Listbox.Button aria-label="Framework" />
        <Listbox.Options static>
          <Listbox.Option value="react">React</Listbox.Option>
          <Listbox.Option value="vue">Vue</Listbox.Option>
        </Listbox.Options>
      </Listbox>
    );
  });

  it("has no a11y violations when disabled", async () => {
    await expectNoA11yViolations(
      <Listbox value={null} onChange={() => {}} disabled>
        <Listbox.Button aria-label="Framework" />
        <Listbox.Options static>
          <Listbox.Option value="react">React</Listbox.Option>
        </Listbox.Options>
      </Listbox>
    );
  });

  it("has no a11y violations with label", async () => {
    await expectNoA11yViolations(
      <Listbox value={null} onChange={() => {}}>
        <Listbox.Label>Pick a framework</Listbox.Label>
        <Listbox.Button />
        <Listbox.Options static>
          <Listbox.Option value="react">React</Listbox.Option>
        </Listbox.Options>
      </Listbox>
    );
  });

  it("has no a11y violations in multiple mode with pre-selected value", async () => {
    await expectNoA11yViolations(
      <Listbox
        value={["react"] as unknown as string}
        onChange={() => {}}
        multiple
      >
        <Listbox.Label>Frameworks</Listbox.Label>
        <Listbox.Button
          aria-label="Frameworks"
          displayValue={(v) => (Array.isArray(v) ? (v as string[]).join(", ") : "")}
        />
        <Listbox.Options static>
          <Listbox.Option value="react">React</Listbox.Option>
          <Listbox.Option value="vue">Vue</Listbox.Option>
        </Listbox.Options>
      </Listbox>
    );
  });
});
