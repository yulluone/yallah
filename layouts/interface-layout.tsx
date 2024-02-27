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
    <div className=" flex min-h-screen w-full  flex-col bg-gray-50 dark:bg-dark dark:text-white text-black ">
      {/* fixed */}
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSideBar} />
      <Header sidebarOpen={sidebarOpen} sidebarToggle={toggleSideBar} />
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
      {/* main content */}
      <div className="flex flex-1">
        <main
          style={{}}
          className={`flex w-full flex-col pt-16 lg:pl-[300px] ${
            sidebarOpen
              ? "main-content-sidebar-open"
              : "main-content-sidebar-closed"
          }`}
        >
          {children}
          <style>
            {`
          @media (min-width: 1024px) {
            .lg\\:pl-\\[300px\\] {
              padding-left: 300px;
            }
          }
        `}
          </style>
        </main>
      </div>
      {/* <BottomNavigation /> */}
      {/* <ModalContainer /> */}
      {/* <DrawersContainer /> */}
    </div>
  );
}
