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
        <NavigationMenu className="flex justify-between w-full relative">
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

            {/* 公司簡介 - simple button */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} px-2`}
              >
                <Link href="/about">公司簡介</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* 不動產管理 - dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>不動產管理</NavigationMenuTrigger>
              <NavigationMenuContent className="absolute left-0 mt-2 min-w-[12rem] bg-white text-black rounded-md shadow-lg border p-2 z-50">
                <ul className="flex flex-col gap-2">
                  {navItems[1].links.map((link) => (
                    <DropdownLink key={link.href} href={link.href} label={link.label} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* 投資與租賃 - dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>投資與租賃</NavigationMenuTrigger>
              <NavigationMenuContent className="absolute left-0 mt-2 min-w-[12rem] bg-white text-black rounded-md shadow-lg border p-2 z-50">
                <ul className="flex flex-col gap-2">
                  {navItems[2].links.map((link) => (
                    <DropdownLink key={link.href} href={link.href} label={link.label} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* 聯繫我們 - simple button */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} px-2`}
              >
                <Link href="/contact">聯繫我們</Link>
              </NavigationMenuLink>
              
            </NavigationMenuItem>
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
      { href: "/management/otsuka", label: "東京都豐島區大塚" },
      { href: "/management/ebisu", label: "渋谷區惠比壽" },
      { href: "/management/ginza", label: "中央區銀座2丁目" },
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
    label: "聯繫",
    links: [
      { href: "/contact/info", label: "聯絡資訊" },
      { href: "/contact/form", label: "聯絡表單" },
      { href: "/contact/map", label: "交通位置" },
    ],
  },
]
