'use client'

import { useState } from 'react'
import {
  Alert,
  Avatar,
  AvatarGroup,
  Badge,
  Breadcrumb,
  Button,
  Card,
  Divider,
  EmptyState,
  FormSection,
  Grid,
  Heading,
  Input,
  Pagination,
  Select,
  Stack,
  StatCard,
  Switch,
  Tabs,
  Text,
} from '@libretexts/davis-react'
import type { BadgeVariant, SelectOption } from '@libretexts/davis-react'

// ---------------------------------------------------------------------------
// DesignNote
// A callout that explains *why* a particular Davis pattern is used here.
// It renders as an <aside> so screen readers can distinguish it from main
// content, and it is visually offset with a primary accent border.
// ---------------------------------------------------------------------------
function DesignNote({ children }: { children: React.ReactNode }) {
  return (
    <aside
      className="my-4 border-l-4 border-primary/40 bg-primary/5 px-4 py-3 text-sm text-neutral-700 rounded-r-lg"
      aria-label="Design note"
    >
      <span className="font-semibold text-primary">Design note: </span>
      {children}
    </aside>
  )
}

// ---------------------------------------------------------------------------
// Mock data — typed explicitly so TypeScript infers literal union types
// (e.g. status: "Published" | "Draft") rather than widening to string.
// ---------------------------------------------------------------------------

type Assignment = {
  id: number
  title: string
  type: string
  dueDate: string
  status: 'Published' | 'Draft'
  submissions: string
}

const ASSIGNMENTS: Assignment[] = [
  { id: 1, title: 'Lab Report 1: Cell Biology',      type: 'Lab Report',   dueDate: 'Apr 14, 2026', status: 'Published', submissions: '128 / 142' },
  { id: 2, title: 'Reading Quiz — Chapter 3',        type: 'Quiz',         dueDate: 'Apr 16, 2026', status: 'Published', submissions: '97 / 142'  },
  { id: 3, title: 'Midterm Essay',                   type: 'Essay',        dueDate: 'Apr 21, 2026', status: 'Published', submissions: '0 / 142'   },
  { id: 4, title: 'Group Presentation',              type: 'Presentation', dueDate: 'May 1, 2026',  status: 'Draft',     submissions: '0 / 142'   },
  { id: 5, title: 'Final Exam',                      type: 'Exam',         dueDate: 'May 15, 2026', status: 'Draft',     submissions: '0 / 142'   },
]

type Student = { id: number; name: string; email: string }

const STUDENTS: Student[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@university.edu'  },
  { id: 2, name: 'Bob Smith',     email: 'bob@university.edu'    },
  { id: 3, name: 'Carol White',   email: 'carol@university.edu'  },
  { id: 4, name: 'David Lee',     email: 'david@university.edu'  },
]

// Six avatars so AvatarGroup can demonstrate its max/overflow behaviour
const AVATAR_NAMES = ['Alice Johnson', 'Bob Smith', 'Carol White', 'David Lee', 'Eve Chen', 'Frank Brown']

type Resource = { id: number; title: string; meta: string }

const RESOURCES: Resource[] = [
  { id: 1, title: 'Lecture Slides — Week 1',                  meta: 'PDF · 4.2 MB · Uploaded April 8'  },
  { id: 2, title: 'Lab Safety Guidelines',                    meta: 'PDF · 1.1 MB · Uploaded April 1'  },
  { id: 3, title: 'Supplementary Reading: DNA Replication',   meta: 'PDF · 2.8 MB · Uploaded April 10' },
]

const TERM_OPTIONS: SelectOption[] = [
  { value: 'sp26', label: 'Spring 2026' },
  { value: 'fa26', label: 'Fall 2026'   },
  { value: 'sp27', label: 'Spring 2027' },
]

const VISIBILITY_OPTIONS: SelectOption[] = [
  { value: 'public',  label: 'Public'                    },
  { value: 'private', label: 'Private (enrolled only)'   },
]

function assignmentBadgeVariant(status: Assignment['status']): BadgeVariant {
  return status === 'Published' ? 'success' : 'default'
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function ShowcasePage() {
  const [currentPage, setCurrentPage]       = useState<number>(1)
  const [term, setTerm]                     = useState<string>('sp26')
  const [visibility, setVisibility]         = useState<string>('public')
  const [lateSubmissions, setLateSubmissions] = useState<boolean>(false)

  return (
    <Stack gap="2xl">

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 1 — Breadcrumb                                              */}
      {/* ------------------------------------------------------------------ */}
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/courses">Courses</Breadcrumb.Item>
          <Breadcrumb.Item isCurrent>BIOL 101: Introduction to Biology</Breadcrumb.Item>
        </Breadcrumb>
        <DesignNote>
          <code>Breadcrumb</code> wraps a semantic <code>&lt;nav aria-label=&quot;Breadcrumb&quot;&gt;</code>,
          giving screen readers a distinct navigation landmark. The <code>isCurrent</code> prop
          renders <code>aria-current=&quot;page&quot;</code> on the final item instead of making it a link —
          linking to the page you are already on adds keyboard noise with no benefit.
        </DesignNote>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 2 — Page Header (H1)                                        */}
      {/* ------------------------------------------------------------------ */}
      <div>
        <Stack direction="horizontal" justify="between" align="center">
          <Stack gap="xs">
            <Heading level={1}>BIOL 101: Introduction to Biology</Heading>
            <Text as="p" color="muted">Spring 2026 · 142 students enrolled</Text>
          </Stack>
          <Stack direction="horizontal" gap="sm">
            <Button variant="secondary">Export Report</Button>
            <Button variant="primary">Add Assignment</Button>
          </Stack>
        </Stack>
        <DesignNote>
          <strong>H1 is used exactly once per page</strong> and represents its unique title.
          It is the primary entry point for heading-based navigation in screen readers (NVDA,
          JAWS, VoiceOver all provide a &quot;jump to H1&quot; shortcut). The enrollment
          subtitle uses <code>Text as=&quot;p&quot;</code> — not a heading — because it supplements
          the title without introducing a new document section.
        </DesignNote>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 3 — Stat Cards                                              */}
      {/* ------------------------------------------------------------------ */}
      <section aria-label="Key metrics">
        <DesignNote>
          An <code>aria-label</code> on the <code>&lt;section&gt;</code> creates a named
          landmark region without requiring a visible heading — appropriate here because the
          stat cards themselves communicate the section&apos;s purpose visually.{' '}
          <code>Grid cols=&#123;4&#125; gap=&quot;md&quot;</code> (1.5 rem / <code>gap-6</code>)
          gives breathing room without waste. All four metrics sit at the same information
          hierarchy, so a uniform grid is semantically correct over a Stack. <strong>Davis
          StatCard</strong> renders the trend direction as both a coloured icon and text —
          colour is never the sole differentiator (WCAG 1.4.1).
        </DesignNote>
        <Grid cols={4} gap="md">
          <StatCard
            label="Students Enrolled"
            value="142"
            trend={{ direction: 'up', value: '+12', label: 'since last term' }}
          />
          <StatCard
            label="Assignments Published"
            value="24"
            trend={{ direction: 'neutral', value: '0 change' }}
          />
          <StatCard
            label="Avg. Completion Rate"
            value="78%"
            variant="success"
            trend={{ direction: 'up', value: '+5%', label: 'vs last week' }}
          />
          <StatCard
            label="Overdue Submissions"
            value="8"
            variant="danger"
            trend={{ direction: 'down', value: '-3', label: 'since Monday' }}
          />
        </Grid>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 4 — Alerts                                                  */}
      {/* ------------------------------------------------------------------ */}
      <section aria-labelledby="notices-heading">
        <Heading level={2} id="notices-heading">Course Notices</Heading>
        <DesignNote>
          <strong>H2 marks a landmark section</strong> subordinate to the H1 page title.
          Davis <code>Alert</code> always renders <code>role=&quot;alert&quot;</code>, which
          live-announces the message to screen readers on mount — so use it intentionally.
          Colour is paired with a distinct icon per variant (WCAG 1.4.1). The{' '}
          <code>success</code> alert is <code>dismissible</code> because once acknowledged
          it has served its purpose; <code>warning</code> and <code>info</code> persist
          because they require ongoing user attention.
        </DesignNote>
        <Stack gap="sm">
          <Alert
            variant="warning"
            title="Submission deadline tonight"
            message="Assignment 5 is due at 11:59 PM. 23 students have not yet submitted."
          />
          <Alert
            variant="info"
            title="Grading rubric updated"
            message="The rubric for Assignment 3 was updated on April 10. Please review before grading."
          />
          <Alert
            variant="success"
            title="Midterm grades published"
            message="Grades for the Midterm Exam have been released to students."
            dismissible
          />
        </Stack>
      </section>

      <Divider />

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 5 — Tabs                                                    */}
      {/* ------------------------------------------------------------------ */}
      <section aria-labelledby="content-heading">
        <Heading level={2} id="content-heading">Course Content</Heading>
        <DesignNote>
          Tabs organise parallel content categories — Assignments, Students, Grades, and
          Settings — so only one panel is in the DOM at a time. Davis <code>Tabs</code> is
          built on HeadlessUI, which manages <code>role=&quot;tablist&quot;</code>,{' '}
          <code>role=&quot;tab&quot;</code>, <code>aria-selected</code>, and{' '}
          <code>role=&quot;tabpanel&quot;</code> automatically. Arrow-key navigation between
          tabs is provided out of the box (WCAG 2.1 keyboard pattern for tabs). No extra
          ARIA attributes are needed from the caller.
        </DesignNote>
        <Tabs variant="line" defaultIndex={0}>
          <Tabs.List>
            <Tabs.Tab>Assignments (24)</Tabs.Tab>
            <Tabs.Tab>Students (142)</Tabs.Tab>
            <Tabs.Tab>Grades</Tabs.Tab>
            <Tabs.Tab>Settings</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panels>

            {/* ---- Assignments tab panel ---- */}
            <Tabs.Panel>
              <Stack gap="md" className="pt-4">
                <Stack direction="horizontal" justify="between" align="center">
                  <Heading level={3}>Assignments</Heading>
                  <Badge label="24 total" />
                </Stack>
                <DesignNote>
                  <strong>H3 is used here</strong> because this heading is within the H2
                  &quot;Course Content&quot; region — maintaining H1 › H2 › H3 hierarchy
                  with no skipped levels (WCAG 1.3.1). A plain semantic{' '}
                  <code>&lt;table&gt;</code> is used rather than the full{' '}
                  <code>DataTable</code> from <code>@libretexts/davis-react-table</code>{' '}
                  because this is a read-only display with no sorting, filtering, or virtual
                  scrolling. A <code>&lt;caption className=&quot;sr-only&quot;&gt;</code>{' '}
                  is required by WCAG 1.3.1 so screen readers can announce the table&apos;s
                  purpose. Every <code>&lt;th&gt;</code> carries <code>scope=&quot;col&quot;</code>{' '}
                  to associate headers with data cells programmatically.
                </DesignNote>
                <div className="overflow-x-auto rounded-lg border border-neutral-200">
                  <table className="w-full text-sm border-collapse">
                    <caption className="sr-only">
                      Course assignments with type, due date, publication status, and submission counts
                    </caption>
                    <thead className="bg-neutral-50">
                      <tr>
                        <th scope="col" className="text-left py-3 px-4 font-medium text-neutral-600 border-b border-neutral-200">Title</th>
                        <th scope="col" className="text-left py-3 px-4 font-medium text-neutral-600 border-b border-neutral-200">Type</th>
                        <th scope="col" className="text-left py-3 px-4 font-medium text-neutral-600 border-b border-neutral-200">Due Date</th>
                        <th scope="col" className="text-left py-3 px-4 font-medium text-neutral-600 border-b border-neutral-200">Status</th>
                        <th scope="col" className="text-left py-3 px-4 font-medium text-neutral-600 border-b border-neutral-200">Submissions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                      {ASSIGNMENTS.map((a) => (
                        <tr key={a.id} className="hover:bg-neutral-50 transition-colors">
                          <td className="py-3 px-4 font-medium text-neutral-900">{a.title}</td>
                          <td className="py-3 px-4 text-neutral-600">{a.type}</td>
                          <td className="py-3 px-4 text-neutral-600">{a.dueDate}</td>
                          <td className="py-3 px-4">
                            <Badge label={a.status} variant={assignmentBadgeVariant(a.status)} />
                          </td>
                          <td className="py-3 px-4 text-neutral-600">{a.submissions}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <Pagination
                  page={currentPage}
                  totalPages={5}
                  onChange={setCurrentPage}
                />
              </Stack>
            </Tabs.Panel>

            {/* ---- Students tab panel ---- */}
            <Tabs.Panel>
              <Stack gap="md" className="pt-4">
                <Heading level={3}>Enrolled Students</Heading>
                <DesignNote>
                  Each student row pairs an <code>Avatar</code> with name and email.{' '}
                  <code>Avatar name=&quot;…&quot;</code> auto-derives initials from the name
                  prop so you never need to supply both <code>name</code> and{' '}
                  <code>initials</code>. The <code>AvatarGroup</code> below uses{' '}
                  <code>max=&#123;5&#125;</code>; the overflow renders as
                  &quot;+1&quot; with <code>aria-label=&quot;1 more users&quot;</code>,
                  so the count is communicated to screen readers without a visible number that
                  would clutter the layout.
                </DesignNote>
                <Stack gap="sm">
                  {STUDENTS.map((s) => (
                    <Stack
                      key={s.id}
                      direction="horizontal"
                      align="center"
                      justify="between"
                      className="p-3 rounded-lg border border-neutral-200 bg-white"
                    >
                      <Stack direction="horizontal" gap="sm" align="center">
                        <Avatar name={s.name} size="sm" />
                        <Stack gap="xs">
                          <Text as="p" weight="medium">{s.name}</Text>
                          <Text as="p" size="sm" color="muted">{s.email}</Text>
                        </Stack>
                      </Stack>
                      <Badge label="Active" variant="success" />
                    </Stack>
                  ))}
                </Stack>
                <Stack gap="xs">
                  <Text as="p" size="sm" color="muted">Preview of enrolled students:</Text>
                  <AvatarGroup max={5}>
                    {AVATAR_NAMES.map((name) => (
                      <Avatar key={name} name={name} size="sm" />
                    ))}
                  </AvatarGroup>
                  <Text as="p" size="sm" color="muted">Showing 5 of 142 students</Text>
                </Stack>
              </Stack>
            </Tabs.Panel>

            {/* ---- Grades tab panel ---- */}
            <Tabs.Panel>
              <div className="pt-4">
                <DesignNote>
                  <code>EmptyState</code> is preferred over a blank panel or disabled table.
                  It gives users orientation (&quot;why is nothing here?&quot;) and a clear
                  action path, reducing cognitive dead-ends. The action button leads the user
                  toward the next logical step rather than leaving them stuck.
                </DesignNote>
                <EmptyState
                  title="Grades not yet available"
                  description="Grade data will appear here once assignments are graded and grades are released to students."
                  action={
                    <Button variant="secondary" size="sm">
                      Go to Assignments
                    </Button>
                  }
                />
              </div>
            </Tabs.Panel>

            {/* ---- Settings tab panel ---- */}
            <Tabs.Panel>
              <Stack gap="lg" className="pt-4">
                <Heading level={3}>Course Settings</Heading>
                <DesignNote>
                  <code>FormSection</code> renders a <code>&lt;fieldset&gt;</code> with a{' '}
                  <code>&lt;legend&gt;</code>, grouping related controls semantically for
                  screen readers (WCAG 1.3.1). Each <code>Input</code> and{' '}
                  <code>Select</code>&apos;s <code>name</code> prop automatically wires the{' '}
                  <code>id</code> / <code>htmlFor</code> label association — no manual
                  pairing needed. <code>Switch.onChange</code> receives a raw{' '}
                  <code>boolean</code> (not a React event) because it wraps HeadlessUI&apos;s
                  toggle — pass a state setter directly.
                </DesignNote>
                <FormSection title="General" description="Basic course information visible to students.">
                  <Stack gap="md">
                    <Input
                      name="courseName"
                      label="Course Name"
                      defaultValue="BIOL 101: Introduction to Biology"
                    />
                    <Input
                      name="courseCode"
                      label="Course Code"
                      defaultValue="BIOL-101-SP26"
                    />
                    <Select
                      name="term"
                      label="Term"
                      placeholder="Select a term"
                      options={TERM_OPTIONS}
                      value={term}
                      onChange={(e) => setTerm(e.target.value)}
                    />
                  </Stack>
                </FormSection>
                <FormSection title="Access" description="Control who can view and enrol in this course.">
                  <Stack gap="md">
                    <Select
                      name="visibility"
                      label="Visibility"
                      placeholder="Select visibility"
                      options={VISIBILITY_OPTIONS}
                      value={visibility}
                      onChange={(e) => setVisibility(e.target.value)}
                    />
                    <Switch
                      label="Allow late submissions"
                      description="Students can submit assignments after the deadline without penalty."
                      checked={lateSubmissions}
                      onChange={setLateSubmissions}
                    />
                  </Stack>
                </FormSection>
                <Stack direction="horizontal" gap="sm">
                  <Button variant="primary">Save Changes</Button>
                  <Button variant="ghost">Cancel</Button>
                </Stack>
              </Stack>
            </Tabs.Panel>

          </Tabs.Panels>
        </Tabs>
      </section>

      <Divider />

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 6 — Resource Cards                                          */}
      {/* ------------------------------------------------------------------ */}
      <section aria-labelledby="resources-heading">
        <Heading level={2} id="resources-heading">Learning Resources</Heading>
        <DesignNote>
          <strong>H2 &quot;Learning Resources&quot;</strong> is a second landmark section,
          parallel to &quot;Course Content&quot; — both are immediate children of the H1
          content area. <code>Grid cols=&#123;3&#125; gap=&quot;md&quot;</code> works well
          at the content width established by the layout container. Placing actions in{' '}
          <code>Card.Footer</code> rather than <code>Card.Body</code> ensures the footer
          always aligns at the same vertical position regardless of body content length,
          keeping the grid visually balanced. <code>variant=&quot;outline&quot;</code> is
          used (rather than <code>elevated</code>) because these cards are content items, not
          interactive surfaces — a subtle border communicates grouping without implying
          clickability.
        </DesignNote>
        <Grid cols={3} gap="md">
          {RESOURCES.map((r) => (
            <Card key={r.id} variant="outline">
              <Card.Body>
                <Stack gap="xs">
                  <Heading level={3}>{r.title}</Heading>
                  <Text as="p" size="sm" color="muted">{r.meta}</Text>
                  <Badge label="Available" variant="success" size="sm" />
                </Stack>
              </Card.Body>
              <Card.Footer>
                <Stack direction="horizontal" gap="sm">
                  <Button variant="secondary" size="sm">Preview</Button>
                  <Button variant="ghost" size="sm">Download</Button>
                </Stack>
              </Card.Footer>
            </Card>
          ))}
        </Grid>
      </section>

    </Stack>
  )
}
