---
title: Form Page Template
description: Multi-section data entry form with validation and alerts
---

# Form Page Template

A multi-section data entry form with field-level validation, error alerts, and a sticky footer action bar. Suitable for settings pages, user profiles, and configuration forms.

**Key Davis components:** FormSection, Input, Select, Combobox, NumberInput, Checkbox, Button, Alert, Stack

---

## Template

{% framework-tabs %}
{% tab framework="react" %}
```tsx
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Stack,
  Heading,
  Text,
  FormSection,
  Input,
  Select,
  NumberInput,
  Checkbox,
  Button,
  Alert,
} from '@libretexts/davis-react';

type ProfileFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  seats: number;
  newsletter: boolean;
  terms: boolean;
};

export default function FormPageTemplate() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormValues>({
    defaultValues: { seats: 1, newsletter: false, terms: false },
  });

  const onSubmit = async (data: ProfileFormValues) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log(data);
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap="xl">
        {/* Page header */}
        <Stack gap="xs">
          <Heading level={1}>Account Settings</Heading>
          <Text color="muted">Manage your personal information and preferences.</Text>
        </Stack>

        {/* Success alert */}
        {submitted && (
          <Alert variant="success" title="Changes saved" onClose={() => setSubmitted(false)}>
            Your account settings have been updated successfully.
          </Alert>
        )}

        {/* Personal information */}
        <FormSection
          title="Personal Information"
          description="Your name and contact details."
        >
          <Stack gap="md">
            <div className="grid grid-cols-2 gap-4">
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
            </div>
            <Input
              label="Email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
              })}
              error={!!errors.email}
              errorMessage={errors.email?.message}
            />
          </Stack>
        </FormSection>

        {/* Organization */}
        <FormSection
          title="Organization"
          description="Your role and seat allocation."
        >
          <Stack gap="md">
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
            <Controller
              name="seats"
              control={control}
              render={({ field }) => (
                <NumberInput
                  label="Seats"
                  value={field.value}
                  onChange={field.onChange}
                  min={1}
                  max={50}
                  helperText="Number of seats for your team."
                />
              )}
            />
          </Stack>
        </FormSection>

        {/* Preferences */}
        <FormSection title="Preferences">
          <Stack gap="sm">
            <Checkbox
              label="Subscribe to product updates and newsletter"
              {...register('newsletter')}
            />
            <Checkbox
              label="I agree to the terms and conditions"
              {...register('terms', { required: 'You must agree to the terms' })}
              error={!!errors.terms}
              errorMessage={errors.terms?.message}
            />
          </Stack>
        </FormSection>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
          <Button variant="outline" type="button">Cancel</Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Saving...' : 'Save Changes'}
          </Button>
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

## Component Responsibilities

| Component | Role in this template |
|---|---|
| `FormSection` | Groups related fields under a labelled fieldset with a description |
| `Input` | Text, email, and password fields |
| `Select` | Role dropdown with a closed option list |
| `NumberInput` | Bounded numeric input for seat count |
| `Checkbox` | Boolean toggle for preferences and agreements |
| `Alert` | Success/error feedback shown after form submission |
| `Button` | Submit (primary) and Cancel (outline) actions |
