---
title: Detail Page Template
description: Record detail view with tabs, metadata card, and edit drawer
---

# Detail Page Template

A record detail view with a summary card, tabbed sections, and an edit Drawer. Suitable for user profiles, order details, and any entity detail page.

**Key Davis components:** Tabs, Card, Stack, Avatar, Badge, Drawer, Button, Heading, Text

---

## Template

{% framework-tabs %}
{% tab framework="react" %}
```tsx
import { useState } from 'react';
import {
  Stack,
  Grid,
  Heading,
  Text,
  Card,
  Avatar,
  Badge,
  Tabs,
  Drawer,
  Button,
  Input,
} from '@libretexts/davis-react';

const USER = {
  name:       'Alice Johnson',
  email:      'alice@example.com',
  role:       'Senior Engineer',
  department: 'Platform',
  status:     'active' as const,
  joined:     'January 15, 2023',
  location:   'San Francisco, CA',
};

const ACTIVITY = [
  { action: 'Deployed v2.4.0 to production', date: '2024-03-20' },
  { action: 'Closed PR #482: Fix auth middleware', date: '2024-03-19' },
  { action: 'Opened issue #490: Rate limit errors', date: '2024-03-18' },
];

export default function DetailPageTemplate() {
  const [editOpen, setEditOpen] = useState(false);

  return (
    <>
      <Stack gap="xl">
        {/* Summary card */}
        <Card>
          <Card.Body>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <Avatar name={USER.name} size="xl" />
                <Stack gap="xs">
                  <Heading level={2}>{USER.name}</Heading>
                  <Text color="muted">{USER.role} · {USER.department}</Text>
                  <Badge variant={USER.status === 'active' ? 'success' : 'default'}>
                    {USER.status}
                  </Badge>
                </Stack>
              </div>
              <Button variant="outline" onClick={() => setEditOpen(true)}>
                Edit Profile
              </Button>
            </div>
          </Card.Body>
        </Card>

        {/* Tabs */}
        <Tabs>
          <Tabs.List>
            <Tabs.Tab>Overview</Tabs.Tab>
            <Tabs.Tab>Activity</Tabs.Tab>
            <Tabs.Tab>Settings</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panels>
            {/* Overview panel */}
            <Tabs.Panel>
              <Grid cols={2} gap="md" className="mt-4">
                <Card padding="md">
                  <Card.Body>
                    <Stack gap="sm">
                      <Heading level={5}>Contact</Heading>
                      <div>
                        <Text size="xs" color="muted">Email</Text>
                        <Text size="sm">{USER.email}</Text>
                      </div>
                      <div>
                        <Text size="xs" color="muted">Location</Text>
                        <Text size="sm">{USER.location}</Text>
                      </div>
                      <div>
                        <Text size="xs" color="muted">Joined</Text>
                        <Text size="sm">{USER.joined}</Text>
                      </div>
                    </Stack>
                  </Card.Body>
                </Card>
                <Card padding="md">
                  <Card.Body>
                    <Stack gap="sm">
                      <Heading level={5}>Work</Heading>
                      <div>
                        <Text size="xs" color="muted">Department</Text>
                        <Text size="sm">{USER.department}</Text>
                      </div>
                      <div>
                        <Text size="xs" color="muted">Role</Text>
                        <Text size="sm">{USER.role}</Text>
                      </div>
                    </Stack>
                  </Card.Body>
                </Card>
              </Grid>
            </Tabs.Panel>

            {/* Activity panel */}
            <Tabs.Panel>
              <Stack gap="sm" className="mt-4">
                {ACTIVITY.map((item, i) => (
                  <Card key={i} padding="sm">
                    <Card.Body>
                      <div className="flex justify-between items-center">
                        <Text size="sm">{item.action}</Text>
                        <Text size="xs" color="muted">{item.date}</Text>
                      </div>
                    </Card.Body>
                  </Card>
                ))}
              </Stack>
            </Tabs.Panel>

            {/* Settings panel */}
            <Tabs.Panel>
              <Card className="mt-4">
                <Card.Body>
                  <Text color="muted">Settings for this user will appear here.</Text>
                </Card.Body>
              </Card>
            </Tabs.Panel>
          </Tabs.Panels>
        </Tabs>
      </Stack>

      {/* Edit drawer */}
      <Drawer open={editOpen} onClose={setEditOpen} size="md">
        <Drawer.Header>
          <Drawer.Title>Edit Profile</Drawer.Title>
          <Drawer.Close />
        </Drawer.Header>
        <Drawer.Body>
          <Stack gap="md">
            <Input label="First name" defaultValue="Alice" />
            <Input label="Last name" defaultValue="Johnson" />
            <Input label="Email" type="email" defaultValue={USER.email} />
            <Input label="Location" defaultValue={USER.location} />
          </Stack>
        </Drawer.Body>
        <Drawer.Footer>
          <Button variant="outline" onClick={() => setEditOpen(false)}>Cancel</Button>
          <Button onClick={() => setEditOpen(false)}>Save Changes</Button>
        </Drawer.Footer>
      </Drawer>
    </>
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
| `Card` | Summary card surface and detail panels within tabs |
| `Avatar` | User profile picture with name fallback |
| `Badge` | Status indicator (active/inactive) |
| `Tabs` | Organizes overview, activity, and settings into switchable views |
| `Drawer` | Edit panel that slides in from the right without leaving the page |
| `Stack` | Vertical spacing between all content blocks |
| `Grid` | Side-by-side card layout in the Overview tab |
| `Button` | Primary action (Edit Profile) and Drawer actions |
