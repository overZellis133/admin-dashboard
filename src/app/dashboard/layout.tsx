import { Navigation } from "@/components/Navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen h-screen">
      <Navigation />
      <main className="flex-1 overflow-y-auto bg-gray-900">
        {children}
      </main>
    </div>
  );
} 