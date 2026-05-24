import React from "react";
import Navbar from "./components/navbar/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
