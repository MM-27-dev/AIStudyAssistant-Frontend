// components/Layout/DashboardLayout.jsx
import React from "react";
import Sidebar from "../components/ChatPage/Sidebar";
import TopBar from "../components/ChatPage/TopBar";


export default function DashboardLayout({ children }) {
  return (
    <div className="h-full bg-[#0E0E1B] flex text-base font-poppins overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
