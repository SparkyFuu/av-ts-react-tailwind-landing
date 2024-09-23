import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Navbar from "./components/navbar/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-br from-[#090029]  to-[#4ade80]">
      <Navbar />
      <div className={`flex-1 flex flex-col ${sidebarOpen ? "ml-64" : ""}`}>
        <header className="p-4 bg-gray-800 text-white md:hidden">
          <button onClick={toggleSidebar}>
            <FiMenu className="w-6 h-6" />
          </button>
        </header>
        <main className="p-4 flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
