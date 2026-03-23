---
title: Dashboard Template
description: Metrics overview with cards, stats, and progress indicators
---

# Dashboard Template

A metrics overview layout with stat cards, progress indicators, and activity lists. Suitable for admin panels, analytics dashboards, and monitoring views.

**Key Davis components:** Stack, Grid, Card, Heading, Text, Badge, Progress, Spinner

---

## Template

{% framework-tabs %}
{% tab framework="react" %}
```tsx
import {
  Stack,
  Grid,
  Card,
  Heading,
  Text,
  Badge,
  Progress,
  Spinner,
} from '@libretexts/davis-react';

const stats = [
  { label: 'Total Users',    value: '12,430', change: '+8%',  trend: 'up'   },
  { label: 'Active Today',   value: '1,892',  change: '+3%',  trend: 'up'   },
  { label: 'Churn Rate',     value: '2.4%',   change: '-0.2%', trend: 'down' },
  { label: 'Revenue',        value: '$84,200', change: '+12%', trend: 'up'   },
];

const projects = [
  { name: 'Redesign Launch', progress: 75,  status: 'primary' as const },
  { name: 'API Migration',   progress: 40,  status: 'warning' as const },
  { name: 'Mobile App',      progress: 92,  status: 'success' as const },
];

const activity = [
  { user: 'Alice Johnson',  action: 'Created project',  time: '2m ago',  status: 'success' as const },
  { user: 'Bob Smith',      action: 'Updated settings', time: '15m ago', status: 'default' as const },
  { user: 'Carol White',    action: 'Invited member',   time: '1h ago',  status: 'primary' as const },
];

export default function DashboardTemplate() {
  return (
    <Stack gap="xl">
      {/* Page header */}
      <Stack gap="xs">
        <Heading level={1}>Dashboard</Heading>
        <Text color="muted">Welcome back. Here's what's happening.</Text>
      </Stack>

      {/* Stat cards */}
      <Grid cols={4} gap="md">
        {stats.map((stat) => (
          <Card key={stat.label} padding="md">
            <Card.Body>
              <Stack gap="xs">
                <Text size="sm" color="muted">{stat.label}</Text>
                <Heading level={3}>{stat.value}</Heading>
                <Badge variant={stat.trend === 'up' ? 'success' : 'danger'} size="sm">
                  {stat.change}
                </Badge>
              </Stack>
            </Card.Body>
          </Card>
        ))}
      </Grid>

      <Grid cols={2} gap="md">
        {/* Project progress */}
        <Card>
          <Card.Header>
            <Heading level={4}>Project Progress</Heading>
          </Card.Header>
          <Card.Body>
            <Stack gap="lg">
              {projects.map((project) => (
                <Stack key={project.name} gap="xs">
                  <div className="flex justify-between">
                    <Text size="sm" weight="medium">{project.name}</Text>
                    <Text size="sm" color="muted">{project.progress}%</Text>
                  </div>
                  <Progress value={project.progress} variant={project.status} />
                </Stack>
              ))}
            </Stack>
          </Card.Body>
        </Card>

        {/* Recent activity */}
        <Card>
          <Card.Header>
            <Heading level={4}>Recent Activity</Heading>
          </Card.Header>
          <Card.Body>
            <Stack gap="md">
              {activity.map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <Stack gap="xs">
                    <Text size="sm" weight="medium">{item.user}</Text>
                    <Text size="sm" color="muted">{item.action}</Text>
                  </Stack>
                  <div className="flex items-center gap-2">
                    <Badge variant={item.status} size="sm">{item.action.split(' ')[0]}</Badge>
                    <Text size="xs" color="muted">{item.time}</Text>
                  </div>
                </div>
              ))}
            </Stack>
          </Card.Body>
        </Card>
      </Grid>
    </Stack>
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
| `Stack` | Vertical spacing between all major sections |
| `Grid` | Responsive 4-column stat cards and 2-column lower panels |
| `Card` | Contained surface for each stat and panel |
| `Heading` | Page title (h1) and panel titles (h4) |
| `Text` | Subtitle, labels, and secondary content |
| `Badge` | Status indicators and trend labels |
| `Progress` | Visual completion bar for each project |
