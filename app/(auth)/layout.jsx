"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import React from "react";

const Layout = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <main className="bg-[#068A50] h-screen w-screen from-06 to-02 bg-gradient-to-br">
      <div className="w-full h-full bg-right-bottom bg-no-repeat bg-bank pt-[42px]">
        <div className="container_fluid">
          {/* Nav */}
          <nav className="between">
            <Image src="/svg/Logo.svg" width={73} height={73} alt="logo" />

            <DropdownMenu open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  className="text-lg font-medium text-white font-inter"
                  variant="ghost"
                >
                  <Image
                    src="/svg/change.svg"
                    className="mr-1"
                    width={24}
                    height={24}
                    alt="change"
                  />
                  Switch User
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-[217px] space-y-4 rounded-[8px] p-4"
              >
                <DropdownMenuItem>
                  <Image
                    src="/svg/admin.svg"
                    className="mr-2.5 text-4f text-sm leading-[16px] font-inter tracking-[0.2px]"
                    width={24}
                    height={24}
                    alt="change"
                  />
                  Admin Login
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Image
                    src="/svg/user.svg"
                    className="mr-2.5 text-4f text-sm leading-[16px] font-inter tracking-[0.2px]"
                    width={24}
                    height={24}
                    alt="change"
                  />
                  User Login
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* content */}
          <div className="h-[calc(100vh-116px)] col-center">
            <div className=" col-center">
              <Image src="/svg/Logo.svg" width={98} height={98} alt="logo" />
              
              <div className="mt-8 bg-01 w-[452px] rounded-[20px] p-[30px]">
                {children}
              </div>
              <Button className="self-end mt-6 text-E6 font-inter tracking-[0.2px] leading-[18px]" variant="link">
                Lost Password?
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
