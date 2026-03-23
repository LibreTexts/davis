---
title: React Hook Form
description: Wiring Davis form components to react-hook-form
---

# React Hook Form Integration

Davis form components work as both controlled and uncontrolled inputs, making them compatible with `react-hook-form` out of the box.

---

## Installation

Install `react-hook-form` as a dependency. It is not bundled with Davis.

```bash
npm install react-hook-form
```

---

## Basic Form

Use `register()` to connect Davis inputs directly to the form. Most uncontrolled inputs (Input, Textarea, Select, Checkbox, Switch) work with `register()` without any wrapper.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
import { useForm } from 'react-hook-form';
import { Input, Textarea, Select, Checkbox, Switch, Button } from '@libretexts/davis-react';

type FormValues = {
  name: string;
  email: string;
  role: string;
  bio: string;
  newsletter: boolean;
  notifications: boolean;
};

export default function BasicForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input
        label="Name"
        {...register('name', { required: 'Name is required' })}
        error={!!errors.name}
        errorMessage={errors.name?.message}
      />
      <Input
        label="Email"
        type="email"
        {...register('email', { required: 'Email is required' })}
        error={!!errors.email}
        errorMessage={errors.email?.message}
      />
      <Select
        label="Role"
        options={[
          { value: 'engineer', label: 'Engineer' },
          { value: 'designer', label: 'Designer' },
          { value: 'manager', label: 'Manager' },
        ]}
        {...register('role', { required: 'Role is required' })}
        error={!!errors.role}
        errorMessage={errors.role?.message}
      />
      <Textarea
        label="Bio"
        {...register('bio')}
      />
      <Checkbox label="Subscribe to newsletter" {...register('newsletter')} />
      <Switch label="Enable notifications" {...register('notifications')} />
      <Button type="submit">Submit</Button>
    </form>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Displaying Errors

Davis form inputs accept `error` (boolean) and `errorMessage` (string) props. Map `formState.errors` to these props as shown above.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
import { useForm } from 'react-hook-form';
import { Input } from '@libretexts/davis-react';

export default function ErrorExample() {
  const { register, handleSubmit, formState: { errors } } = useForm<{ email: string }>();

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <Input
        label="Email"
        type="email"
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Enter a valid email address',
          },
        })}
        error={!!errors.email}
        errorMessage={errors.email?.message}
      />
    </form>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Controlled Components

Some components manage their own state and need `react-hook-form`'s `Controller` wrapper: `Combobox`, `NumberInput`, and `RadioGroup`.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
import { useForm, Controller } from 'react-hook-form';
import { Combobox, NumberInput, RadioGroup, Button } from '@libretexts/davis-react';

const FRAMEWORK_OPTIONS = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
];

type FormValues = {
  framework: { value: string; label: string } | null;
  quantity: number;
  priority: string;
};

export default function ControlledForm() {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: { quantity: 1, priority: 'medium' },
  });

  return (
    <form onSubmit={handleSubmit(console.log)} className="flex flex-col gap-4">
      <Controller
        name="framework"
        control={control}
        rules={{ required: 'Please select a framework' }}
        render={({ field, fieldState }) => (
          <Combobox
            label="Framework"
            options={FRAMEWORK_OPTIONS}
            value={field.value}
            onChange={field.onChange}
            error={!!fieldState.error}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name="quantity"
        control={control}
        render={({ field }) => (
          <NumberInput
            label="Quantity"
            value={field.value}
            onChange={field.onChange}
            min={1}
            max={99}
          />
        )}
      />
      <Controller
        name="priority"
        control={control}
        render={({ field }) => (
          <RadioGroup
            label="Priority"
            options={[
              { value: 'low', label: 'Low' },
              { value: 'medium', label: 'Medium' },
              { value: 'high', label: 'High' },
            ]}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
Coming soon
{% /tab %}
{% /framework-tabs %}

---

## FormSection Composition

Use `FormSection` to organize long forms into logical groups. Each section can independently render validation errors.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
import { useForm } from 'react-hook-form';
import { FormSection, Input, Select, Textarea, Stack, Button } from '@libretexts/davis-react';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  bio: string;
};

export default function MultiSectionForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <Stack gap="lg">
        <FormSection
          title="Personal Information"
          description="Your name and contact details."
        >
          <Stack gap="md">
            <Input
              label="First name"
              {...register('firstName', { required: 'First name is required' })}
              error={!!errors.firstName}
              errorMessage={errors.firstName?.message}
            />
            <Input
              label="Last name"
              {...register('lastName', { required: 'Last name is required' })}
              error={!!errors.lastName}
              errorMessage={errors.lastName?.message}
            />
            <Input
              label="Email"
              type="email"
              {...register('email', { required: 'Email is required' })}
              error={!!errors.email}
              errorMessage={errors.email?.message}
            />
          </Stack>
        </FormSection>

        <FormSection
          title="Work Details"
          description="Your role and department."
        >
          <Stack gap="md">
            <Select
              label="Department"
              options={[
                { value: 'engineering', label: 'Engineering' },
                { value: 'design', label: 'Design' },
                { value: 'product', label: 'Product' },
              ]}
              {...register('department')}
            />
            <Textarea
              label="Bio"
              {...register('bio')}
              helperText="Tell us a bit about yourself."
            />
          </Stack>
        </FormSection>

        <div className="flex justify-end gap-3">
          <Button variant="outline" type="button">Cancel</Button>
          <Button type="submit">Save Changes</Button>
        </div>
      </Stack>
    </form>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Validation with Zod

Use `@hookform/resolvers` with Zod for schema-based validation. This keeps validation logic separate from the UI.

```bash
npm install @hookform/resolvers zod
```

{% framework-tabs %}
{% tab framework="react" %}
```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input, Select, Button } from '@libretexts/davis-react';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Enter a valid email address'),
  role: z.string().min(1, 'Please select a role'),
});

type FormValues = z.infer<typeof schema>;

export default function ZodForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(console.log)} className="flex flex-col gap-4">
      <Input
        label="Name"
        {...register('name')}
        error={!!errors.name}
        errorMessage={errors.name?.message}
      />
      <Input
        label="Email"
        type="email"
        {...register('email')}
        error={!!errors.email}
        errorMessage={errors.email?.message}
      />
      <Select
        label="Role"
        options={[
          { value: 'engineer', label: 'Engineer' },
          { value: 'designer', label: 'Designer' },
        ]}
        {...register('role')}
        error={!!errors.role}
        errorMessage={errors.role?.message}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
Coming soon
{% /tab %}
{% /framework-tabs %}
