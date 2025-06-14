// src/app/(root)/layout.tsx

import "../styles/globals.css";
import { ReactNode } from "react";
import { Navbar } from "@/components/navbar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <head />
      <body className="bg-white text-[#1c1c1c]">
        {/* Custom Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="max-w-7xl mx-auto px-6 py-12">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-12 border-t py-6 text-center text-sm text-gray-500">
          © 2025 猿楽管理株式会社
        </footer>
      </body>
    </html>
  );
}
