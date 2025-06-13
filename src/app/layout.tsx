import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import ImageSlider from "@/components/ImageSlider";

export const metadata = {
  title: "猿楽管理株式会社",
  description: "東京の不動産管理・賃貸",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-[#fafaff] text-[#1c1c1c] font-sans antialiased">
        <Navbar />
        <ImageSlider />
        <main className="max-w-7xl mx-auto px-4 md:px-6 py-10">
          {children}
        </main>
        <footer className="bg-[#1c1c1c] text-[#fafaff] text-center py-6 mt-24">
          <p className="text-sm tracking-wide">
            &copy; 2024 猿楽管理株式会社. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
