"use client";

import { useState } from "react";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { classnames } from "@/utils/classnames";

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
    <div className="flex min-h-screen  overflow-hidden w-full bg-gray-50 dark:bg-dark dark:text-white text-black ">
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSideBar} />
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
      <div
        className={classnames(
          "w-full"
          // sidebarOpen && "opacity-0 pointer-none !lg:opacity-100"
        )}
        style={sidebarOpen ? { opacity: 0.5 } : {}}
        onClick={() => sidebarOpen && toggleSideBar()}
      >
        <Header sidebarOpen={sidebarOpen} sidebarToggle={toggleSideBar} />

        <main
          style={{}}
          className={classnames("flex flex-col lg:main-content-lg pt-16")}
        >
          <div className="pl-96">{children}</div>
        </main>
      </div>
      {/* <BottomNavigation /> */}
      {/* <ModalContainer /> */}
      {/* <DrawersContainer /> */}
    </div>
  );
}
