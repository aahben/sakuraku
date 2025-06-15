import { ReactNode } from "react"
import { Navbar } from "@/components/navbar"
import { ImageSlider } from "@/components/ImageSlider"
import { Metadata } from "next"
import "./globals.css" // ← optional if you have global styles

export const metadata: Metadata = {
  title: "猿楽管理株式会社",
  description: "東京の不動産管理と投資に特化した会社",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-background text-foreground">
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 shadow-md bg-background">
            <Navbar />
          </header>

          <section>
            <ImageSlider />
          </section>

          <main className="flex-1 px-4 py-8 max-w-screen-xl mx-auto w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
