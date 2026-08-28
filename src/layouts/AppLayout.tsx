import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";

interface AppLayoutProps {
  children: ReactNode;
}

/** Reusable shell: desktop sidebar, top header, responsive mobile nav. */
export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background lg:grid lg:grid-cols-[17rem_1fr]">
      <aside className="hidden lg:block lg:h-screen lg:sticky lg:top-0">
        <Sidebar />
      </aside>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 px-4 py-6 lg:px-8 lg:py-8">
          <div className="mx-auto w-full max-w-6xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
