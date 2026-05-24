import React from "react";
import Navbar from "./components/navbar/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-[#071013] text-slate-100">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
