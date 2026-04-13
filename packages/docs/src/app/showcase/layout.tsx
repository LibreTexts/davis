import { ShowcaseShell } from './ShowcaseShell'

export const metadata = {
  title: 'Showcase — Davis Design System',
  description:
    'A kitchen-sink reference page demonstrating Davis components in a real application context, annotated with design-system rationale.',
}

export default function ShowcaseLayout({ children }: { children: React.ReactNode }) {
  return <ShowcaseShell>{children}</ShowcaseShell>
}
