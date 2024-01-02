"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8">
        <aside className="sticky top-8 hidden w-[290px] shrink-0 lg:block">
          <Sidebar />
        </aside>

        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
