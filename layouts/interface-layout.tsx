"use client";

import { useState } from "react";
import Header from "@/components/header";

export default function InterfaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  //toggle sidebar
  function toggleSideBar() {
    if (!sidebarOpen) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  }
  return (
    <div>
      <div className="flex min-h-screen w-full flex-col bg-gray-50 dark:bg-gray-950 dark:text-white text-black">
        <Header sidebarIsOpen={sidebarOpen} sidebarToggle={toggleSideBar} />

        {/* <Toaster position="top-center" reverseOrder={false} /> */}
        <div className="flex flex-1">
          {/* <Sidebar sidebarIsOpen={sidebarIsOpen} />
           */}
          sidebar
          <main
            style={{}}
            className={`flex w-full flex-col ${
              sidebarOpen
                ? "main-content-sidebar-open"
                : "main-content-sidebar-closed"
            }`}
          >
            {children}
          </main>
        </div>
        {/* <BottomNavigation /> */}
      </div>
      {/* <ModalContainer /> */}
      {/* <DrawersContainer /> */}
    </div>
  );
}
