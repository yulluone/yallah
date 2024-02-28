"use client";

import { useState } from "react";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { classnames } from "@/utils/classnames";
import { Toaster } from "react-hot-toast";

export default function InterfaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  //toggle sidebar
  function toggleSideBar() {
    console.log("toggling sidebar");
    if (!sidebarOpen) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  }
  return (
    <div className=" flex min-h-screen w-full  flex-col bg-light-100 dark:bg-dark-100 dark:text-white text-black ">
      {/* fixed */}
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSideBar} />
      <Header sidebarOpen={sidebarOpen} sidebarToggle={toggleSideBar} />
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          className: "dark:bg-dark-500 dark:text-light",
        }}
      />
      {/* main content */}

      <div
        style={{}}
        className={` w-full !pt-16 px-5 lg:pl-[300px] ${
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
      </div>

      {/* <BottomNavigation /> */}
      {/* <ModalContainer /> */}
      {/* <DrawersContainer /> */}
    </div>
  );
}
