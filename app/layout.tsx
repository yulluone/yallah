import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RecoilRoot } from "recoil";
import MyRootLayout from "@/layouts/root-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyRootLayout>{children}</MyRootLayout>
        {/* <script src="../node_modules/flowbite/dist/flowbite.min.js"></script> */}
      </body>
    </html>
  );
}
