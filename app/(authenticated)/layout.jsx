import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-[240px,1fr]">
      <div>
        <Sidebar />
      </div>
      <section>
        <Navbar />
        <main className="p-5">{children}</main>
      </section>
    </div>
  );
};

export default Layout;
