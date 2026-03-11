---
title: Component Patterns
description: Composable examples showing how Davis components work together in real-world scenarios
---

# Component Patterns

Composable examples showing how Davis components work together in real-world scenarios.

---

## Form with Validation

A complete form with field validation, error states, and submission:

{% framework-tabs %}
{% tab framework="react" %}

```tsx
import { Input, Textarea, Select, Button, Alert } from "@libretexts/davis-react";
import { useState } from "react";

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
          name="firstName"
          label="First Name"
          required
          variant={errors.firstName ? "error" : "default"}
          errorMessage={errors.firstName}
        />
        <Input
          name="lastName"
          label="Last Name"
          required
          variant={errors.lastName ? "error" : "default"}
          errorMessage={errors.lastName}
        />
      </div>

      <Input
        name="email"
        label="Email"
        type="email"
        required
        variant={errors.email ? "error" : "default"}
        errorMessage={errors.email}
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
        name="message"
        label="Message"
        required
        rows={4}
        variant={errors.message ? "error" : "default"}
        errorMessage={errors.message}
      />

      <div className="flex gap-3 justify-end">
        <Button variant="outline" type="button">Cancel</Button>
        <Button type="submit">Send Message</Button>
      </div>
    </form>
  );
}
```

{% /tab %}
{% tab framework="vue" %}

```vue
<script setup>
import { Input, Textarea, Select, Button, Alert } from '@libretexts/davis-vue';
import { ref } from 'vue';

const errors = ref({});
const submitted = ref(false);

function handleSubmit(event) {
  // Handle form submission
}
</script>

<template>
  <form class="max-w-2xl space-y-6" @submit="handleSubmit">
    <Alert v-if="submitted" variant="success" title="Message sent!">
      We'll get back to you within 24 hours.
    </Alert>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Input
        name="firstName"
        label="First Name"
        required
        :variant="errors.firstName ? 'error' : 'default'"
        :error-message="errors.firstName"
      />
      <Input
        name="lastName"
        label="Last Name"
        required
        :variant="errors.lastName ? 'error' : 'default'"
        :error-message="errors.lastName"
      />
    </div>

    <Input
      name="email"
      label="Email"
      type="email"
      required
      :variant="errors.email ? 'error' : 'default'"
      :error-message="errors.email"
    />

    <Select
      label="Subject"
      :options="[
        { value: 'general', label: 'General Inquiry' },
        { value: 'support', label: 'Technical Support' },
        { value: 'feedback', label: 'Feedback' },
      ]"
    />

    <Textarea
      name="message"
      label="Message"
      required
      :rows="4"
      :variant="errors.message ? 'error' : 'default'"
      :error-message="errors.message"
    />

    <div class="flex gap-3 justify-end">
      <Button variant="outline" type="button">Cancel</Button>
      <Button type="submit">Send Message</Button>
    </div>
  </form>
</template>
```

Coming soon

{% /tab %}
{% /framework-tabs %}

---

## Card Grid

A responsive grid of cards, typical for course listings or resource libraries:

{% framework-tabs %}
{% tab framework="react" %}

```tsx
import { Card, Badge, Avatar } from "@libretexts/davis-react";

function CourseGrid({ courses }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <Card key={course.id} variant="default">
          <Card.Header image={{ src: course.image, alt: course.title }} />
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

{% /tab %}
{% tab framework="vue" %}

```vue
<script setup>
import { Card, CardHeader, CardBody, Badge, Avatar } from '@libretexts/davis-vue';

defineProps({
  courses: Array
});
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <Card v-for="course in courses" :key="course.id" variant="default">
      <CardHeader :image="{ src: course.image, alt: course.title }" />
      <CardBody>
        <div class="flex items-center gap-2 mb-2">
          <Badge variant="primary" size="sm">{{ course.subject }}</Badge>
          <Badge variant="default" size="sm">{{ course.level }}</Badge>
        </div>
        <h3 class="font-semibold text-lg mb-1">{{ course.title }}</h3>
        <p class="text-sm text-gray-600 mb-3">{{ course.description }}</p>
        <div class="flex items-center gap-2">
          <Avatar size="xs" :name="course.instructor" />
          <span class="text-sm text-gray-500">{{ course.instructor }}</span>
        </div>
      </CardBody>
    </Card>
  </div>
</template>
```

Coming soon

{% /tab %}
{% /framework-tabs %}

---

## Confirmation Dialog

A destructive action confirmation with proper focus management:

{% framework-tabs %}
{% tab framework="react" %}

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

{% /tab %}
{% tab framework="vue" %}

```vue
<script setup>
import { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogFooter, Button } from '@libretexts/davis-vue';

defineProps({
  open: Boolean,
  itemName: String
});

const emit = defineEmits(['close', 'confirm']);
</script>

<template>
  <Dialog :open="open" @close="emit('close')" size="sm">
    <DialogHeader>
      <DialogTitle>Delete {{ itemName }}?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. The item and all associated data
        will be permanently removed.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline" @click="emit('close')">
        Cancel
      </Button>
      <Button variant="destructive" @click="emit('confirm')">
        Delete
      </Button>
    </DialogFooter>
  </Dialog>
</template>
```

Coming soon

{% /tab %}
{% /framework-tabs %}

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
