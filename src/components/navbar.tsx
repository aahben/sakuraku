"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function Navbar() {
  return (
    <div className="w-full border-b shadow-sm bg-background">
      <div className="relative max-w-screen-xl mx-auto px-4 py-4">
        <NavigationMenu className="flex justify-between w-full">
          <NavigationMenuList className="flex gap-6 items-center">
            {/* Home */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} text-lg font-bold px-2`}
              >
                <Link href="/">猿楽管理株式会社</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Dropdown menus */}
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                <NavigationMenuContent className="mt-2 w-48 bg-popover text-popover-foreground rounded-md border shadow-md p-2">
                  <ul className="grid w-[200px] gap-1">
                    {item.links.map((link) => (
                      <DropdownLink key={link.href} href={link.href} label={link.label} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}

function DropdownLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block rounded-sm px-3 py-2 text-sm font-normal transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          {label}
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

const navItems = [
  {
    label: "公司簡介",
    links: [
      { href: "/about/overview", label: "公司概況" },
      { href: "/about/history", label: "成立背景" },
      { href: "/about/team", label: "經營團隊" },
    ],
  },
  {
    label: "不動產管理",
    links: [
      { href: "/management/services", label: "服務項目" },
      { href: "/management/process", label: "管理流程" },
      { href: "/management/faq", label: "常見問題" },
    ],
  },
  {
    label: "投資與租賃",
    links: [
      { href: "/investment/properties", label: "物件資訊" },
      { href: "/investment/strategy", label: "投資策略" },
      { href: "/investment/lease", label: "租賃服務" },
    ],
  },
  {
    label: "聯繫我們",
    links: [
      { href: "/contact/info", label: "聯絡資訊" },
      { href: "/contact/form", label: "聯絡表單" },
      { href: "/contact/map", label: "交通位置" },
    ],
  },
]
