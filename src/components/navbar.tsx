"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <header className="w-full bg-[#ecebe4] shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between mb-6">
        {/* Logo + Company Name */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/monkey-logo.jpg"
            alt="Logo"
            className="h-8 w-auto max-w-[32px] object-contain"
          />
          <span className="text-xl font-bold text-[#1c1c1c] whitespace-nowrap">
            猿楽管理株式会社
          </span>
        </Link>

        {/* Navigation Menu */}
        <nav className="flex items-center gap-x-6 text-sm font-medium text-[#1c1c1c]">
          {/* Dropdown: 公司介紹 / 服務 */}
          <NavigationMenu>
            <NavigationMenuList className="flex">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:text-[#daddd8] transition bg-transparent">
                  公司介紹
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white p-4 shadow rounded mt-2">
                  <ul className="grid gap-2 w-[200px]">
                    <li>
                      <Link href="/services#management" className="hover:text-[#1c1c1c]">
                        不動產管理
                      </Link>
                    </li>
                    <li>
                      <Link href="/services#consulting" className="hover:text-[#1c1c1c]">
                        顧問服務
                      </Link>
                    </li>
                    <li>
                      <Link href="/services#listing" className="hover:text-[#1c1c1c]">
                        物件刊登
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Static Links */}
          <Link href="/gallery" className="hover:text-[#daddd8] transition">
            持有不動產
          </Link>
          <Link href="/contact" className="hover:text-[#daddd8] transition">
            聯繫
          </Link>
        </nav>
      </div>
    </header>
  );
}
