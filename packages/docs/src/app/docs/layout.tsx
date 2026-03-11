import { DocsHeader } from '@/components/DocsHeader';
import { FrameworkProvider } from '@/lib/framework-context';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DocsHeader />
      <FrameworkProvider>
        {children}
      </FrameworkProvider>
    </>
  );
}
