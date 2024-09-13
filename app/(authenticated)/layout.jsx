"use client";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import React from "react";
import { UserContext } from "@/components/hooks/UserContext";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";

const Layout = ({ children }) => {
  const {_token} = parseCookies()
  
  const { user, logout } = React.useContext(UserContext);

  const router = useRouter();

  React.useEffect(() => {
    if (!user && !_token) logout();
  }, [_token, logout, router, user]);

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
