---
title: Component Patterns
description: Composable examples showing how Davis components work together in real-world scenarios
---

# Component Patterns

Composable examples showing how Davis components work together in real-world scenarios.

---

## Form with Validation

A complete form with field validation, error states, and submission:

```tsx
import { Input, Textarea, Select, Button, Alert } from "@libretexts/davis-react";

function ContactForm() {
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  return (
    <form className="max-w-2xl space-y-6" onSubmit={handleSubmit}>
      {submitted && (
        <Alert variant="success" title="Message sent!">
          We'll get back to you within 24 hours.
        </Alert>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="First Name"
          required
          variant={errors.firstName ? "error" : "default"}
          error={errors.firstName}
        />
        <Input
          label="Last Name"
          required
          variant={errors.lastName ? "error" : "default"}
          error={errors.lastName}
        />
      </div>

      <Input
        label="Email"
        type="email"
        required
        variant={errors.email ? "error" : "default"}
        error={errors.email}
      />

      <Select
        label="Subject"
        options={[
          { value: "general", label: "General Inquiry" },
          { value: "support", label: "Technical Support" },
          { value: "feedback", label: "Feedback" },
        ]}
      />

      <Textarea
        label="Message"
        required
        rows={4}
        variant={errors.message ? "error" : "default"}
        error={errors.message}
      />

      <div className="flex gap-3 justify-end">
        <Button variant="outline" type="button">Cancel</Button>
        <Button type="submit">Send Message</Button>
      </div>
    </form>
  );
}
```

---

## Card Grid

A responsive grid of cards, typical for course listings or resource libraries:

```tsx
import { Card, Badge, Avatar } from "@libretexts/davis-react";

function CourseGrid({ courses }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <Card key={course.id} variant="default">
          <Card.Image src={course.image} alt={course.title} />
          <Card.Body>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="primary" size="sm">{course.subject}</Badge>
              <Badge variant="default" size="sm">{course.level}</Badge>
            </div>
            <h3 className="font-semibold text-lg mb-1">{course.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{course.description}</p>
            <div className="flex items-center gap-2">
              <Avatar size="xs" name={course.instructor} />
              <span className="text-sm text-gray-500">{course.instructor}</span>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
```

---

## Confirmation Dialog

A destructive action confirmation with proper focus management:

```tsx
import { Dialog, Button } from "@libretexts/davis-react";

function DeleteConfirmation({ open, onClose, onConfirm, itemName }) {
  return (
    <Dialog open={open} onClose={onClose} size="sm">
      <Dialog.Header>
        <Dialog.Title>Delete {itemName}?</Dialog.Title>
        <Dialog.Description>
          This action cannot be undone. The item and all associated data
          will be permanently removed.
        </Dialog.Description>
      </Dialog.Header>
      <Dialog.Footer>
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="destructive" onClick={onConfirm}>
          Delete
        </Button>
      </Dialog.Footer>
    </Dialog>
  );
}
```

---

## Notification Feedback

Using the notification system for async operation feedback:

```tsx
import { Button, useNotifications } from "@libretexts/davis-react";

function SaveButton({ onSave }) {
  const { addNotification } = useNotifications();

  const handleSave = async () => {
    try {
      await onSave();
      addNotification({
        variant: "success",
        title: "Saved",
        message: "Your changes have been saved.",
        duration: 4000,
      });
    } catch (error) {
      addNotification({
        variant: "error",
        title: "Save failed",
        message: "Something went wrong. Please try again.",
        duration: 6000,
      });
    }
  };

  return <Button onClick={handleSave}>Save Changes</Button>;
}
```

Wrap your app with `NotificationsProvider`:

```tsx
import { NotificationsProvider } from "@libretexts/davis-react";

function App() {
  return (
    <NotificationsProvider position="top-right">
      <YourApp />
    </NotificationsProvider>
  );
}
```

---

## Empty State

A centered empty state with call-to-action:

```tsx
import { EmptyState, Button } from "@libretexts/davis-react";

function EmptyCoursesView() {
  return (
    <EmptyState
      title="No courses yet"
      description="Get started by creating your first course. You can add
        content, assignments, and invite students."
      action={
        <Button>Create Course</Button>
      }
    />
  );
}
```

---

## Loading Patterns

### Full-page loading

```tsx
import { Spinner } from "@libretexts/davis-react";

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <Spinner size="lg" />
    </div>
  );
}
```

### Inline loading (button)

```tsx
import { Button, Spinner } from "@libretexts/davis-react";

function SubmitButton({ loading }) {
  return (
    <Button disabled={loading}>
      {loading && <Spinner size="xs" color="white" />}
      {loading ? "Saving..." : "Save"}
    </Button>
  );
}
```

### Skeleton loading (custom)

```tsx
function CardSkeleton() {
  return (
    <div className="border border-gray-200 rounded-lg p-6 animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-4" />
      <div className="h-3 bg-gray-200 rounded w-full mb-2" />
      <div className="h-3 bg-gray-200 rounded w-5/6" />
    </div>
  );
}
```
