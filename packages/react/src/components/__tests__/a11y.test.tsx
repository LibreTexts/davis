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
      <IconButton aria-label="Close">
        <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M6 6l8 8M6 14l8-8" /></svg>
      </IconButton>
    );
  });
});

describe("Input", () => {
  it("has no a11y violations with label", async () => {
    await expectNoA11yViolations(
      <div>
        <label htmlFor="test-input">Email</label>
        <Input id="test-input" />
      </div>
    );
  });

  it("has no a11y violations with aria-label", async () => {
    await expectNoA11yViolations(<Input aria-label="Search" />);
  });
});

describe("Textarea", () => {
  it("has no a11y violations with label", async () => {
    await expectNoA11yViolations(
      <div>
        <label htmlFor="test-textarea">Message</label>
        <Textarea id="test-textarea" />
      </div>
    );
  });
});

describe("Select", () => {
  it("has no a11y violations with label", async () => {
    await expectNoA11yViolations(
      <div>
        <label htmlFor="test-select">Country</label>
        <Select
          id="test-select"
          options={[
            { value: "us", label: "United States" },
            { value: "uk", label: "United Kingdom" },
          ]}
        />
      </div>
    );
  });
});

describe("Checkbox", () => {
  it("has no a11y violations with label", async () => {
    await expectNoA11yViolations(<Checkbox label="Accept terms" />);
  });
});

describe("Radio", () => {
  it("has no a11y violations within RadioGroup", async () => {
    await expectNoA11yViolations(
      <RadioGroup
        label="Pick one"
        name="test-radio-single"
        options={[{ value: "a", label: "Option A" }]}
      />
    );
  });
});

describe("RadioGroup", () => {
  it("has no a11y violations", async () => {
    await expectNoA11yViolations(
      <RadioGroup
        label="Choose an option"
        name="test-group"
        options={[
          { value: "a", label: "Option A" },
          { value: "b", label: "Option B" },
        ]}
      />
    );
  });
});

describe("Switch", () => {
  it("has no a11y violations", async () => {
    await expectNoA11yViolations(<Switch label="Enable notifications" />);
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
});

describe("Badge", () => {
  it("has no a11y violations", async () => {
    await expectNoA11yViolations(<Badge>New</Badge>);
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
