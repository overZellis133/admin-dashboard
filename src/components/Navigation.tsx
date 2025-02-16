'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-800 text-gray-100 p-6 flex flex-col shrink-0">
      <div className="text-xl font-bold mb-8 text-yellow-400">BUILD WITH AI</div>
      
      <button className="bg-yellow-400 text-gray-900 rounded-lg px-4 py-2 mb-8 flex items-center gap-2 hover:bg-yellow-500 transition-colors">
        <span>+</span> New Report
      </button>
      
      <nav className="space-y-2">
        <Link 
          href="/dashboard" 
          className={`flex items-center gap-2 p-2 rounded-lg ${
            pathname === '/dashboard' ? 'bg-gray-700' : 'hover:bg-gray-700'
          }`}
        >
          <span className="w-5 h-5">📊</span>
          Dashboard
        </Link>
        <Link 
          href="#" 
          className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-lg"
        >
          <span className="w-5 h-5">📄</span>
          Blank Page
        </Link>
        <Link 
          href="#" 
          className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-lg"
        >
          <span className="w-5 h-5">📋</span>
          Tables
        </Link>
        <Link 
          href="#" 
          className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-lg"
        >
          <span className="w-5 h-5">📝</span>
          Forms
        </Link>
        <Link 
          href="#" 
          className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-lg"
        >
          <span className="w-5 h-5">📑</span>
          Tabbed Content
        </Link>
        <Link 
          href="#" 
          className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-lg"
        >
          <span className="w-5 h-5">📅</span>
          Calendar
        </Link>
      </nav>
      
      <div className="mt-auto space-y-4">
        <Link 
          href="/" 
          className="w-full bg-gray-700 text-gray-200 rounded-lg px-4 py-2 flex items-center justify-center gap-2 hover:bg-gray-600 transition-colors"
        >
          <span>🚪</span> Log Out
        </Link>
        <button className="w-full bg-gray-700 text-yellow-400 rounded-lg px-4 py-2 flex items-center justify-center gap-2 hover:bg-gray-600 transition-colors border border-yellow-400">
          ⭐ Upgrade to Pro!
        </button>
      </div>
    </aside>
  );
} 