import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Build With AI",
  description: "AI-powered dashboard for managing reports and analytics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Check if the current path is the landing page
  const isLandingPage = typeof window !== 'undefined' && window.location.pathname === '/';

  return (
    <html lang="en">
      <body className={cn(inter.className, "flex h-screen bg-gray-900")}>
        {!isLandingPage && (
          <nav className="w-[240px] bg-gray-800 text-gray-100 p-6 flex flex-col">
            <div className="text-xl font-bold mb-8 text-yellow-400">BUILD WITH AI</div>
            
            <button className="bg-yellow-400 text-gray-900 rounded-lg px-4 py-2 mb-8 flex items-center gap-2 hover:bg-yellow-500 transition-colors">
              <span>+</span> New Report
            </button>
            
            <div className="space-y-2">
              <a href="#" className="flex items-center gap-2 p-2 bg-gray-700 rounded-lg">
                <span className="w-5 h-5">📊</span>
                Dashboard
              </a>
              <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-lg">
                <span className="w-5 h-5">📄</span>
                Blank Page
              </a>
              <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-lg">
                <span className="w-5 h-5">📋</span>
                Tables
              </a>
              <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-lg">
                <span className="w-5 h-5">📝</span>
                Forms
              </a>
              <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-lg">
                <span className="w-5 h-5">📑</span>
                Tabbed Content
              </a>
              <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-lg">
                <span className="w-5 h-5">📅</span>
                Calendar
              </a>
            </div>
            
            <div className="mt-auto">
              <button className="w-full bg-gray-700 text-yellow-400 rounded-lg px-4 py-2 flex items-center justify-center gap-2 hover:bg-gray-600 transition-colors border border-yellow-400">
                ⭐ Upgrade to Pro!
              </button>
            </div>
          </nav>
        )}
        
        <main className={cn("flex-1 overflow-auto", {
          "w-full": isLandingPage
        })}>
          {children}
        </main>
      </body>
    </html>
  );
}
