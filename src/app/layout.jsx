import { Inter } from "next/font/google";
import "@/styles/globals.css";

import "normalize.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ポートフォリオサイト",
  description: "中森 章のポートフォリオサイト",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
