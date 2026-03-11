import { FrameworkSelector } from '@/components/FrameworkSelector';

export default function ComponentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mb-6 flex justify-end">
        <FrameworkSelector variant="pill" />
      </div>
      {children}
    </>
  );
}
