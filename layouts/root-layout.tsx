"use client";

import { RecoilRoot } from "recoil";
import InterfaceLayout from "./interface-layout";
import { ThemeProvider } from "next-themes";

export default function MyRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <InterfaceLayout>{children}</InterfaceLayout>
      </ThemeProvider>
    </RecoilRoot>
  );
}
