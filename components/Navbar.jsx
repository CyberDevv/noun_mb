"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { UserContext } from "./hooks/UserContext";
import React from "react";

const Sidebar = () => {
  const pathName = usePathname();

  const { user } = React.useContext(UserContext);

  return (
    <header className="py-4 bg-white px-[50px] divide-y-2 divide-E0">
      <div className="space-x-4 end">
        <Image
          src="/svg/theme_toggle.svg"
          width={24}
          height={24}
          alt="theme_toggle"
        />
        <Image
          src="/svg/notification.svg"
          width={24}
          height={24}
          alt="notification"
        />
        <div className="border-l border-E3 p-2.5 start space-x-2">
          <Image
            src="/svg/solar_user.svg"
            width={24}
            height={24}
            alt="solar_user"
          />

          <div className="">
            <h6 className="font-medium font-inter tracking-[0.2px] leading-[28px] text-4F">
              {user?.fullName}
            </h6>
            <p className="text-sm font-inter tracking-[0.2px] leading-[28px] text-4F">
              {user?.roleId}
            </p>
          </div>
        </div>
      </div>
      <h6 className="font-medium font-inter text-[24px] tracking-[0.2px] leading-[28px] text-82 pt-[49px] mt-2.5">
        {pathName === "/"
          ? "Dashboard"
          : pathName.replace(
              /^\/(.*)/,
              (match, p1) => p1.charAt(0).toUpperCase() + p1.slice(1)
            )}
      </h6>
    </header>
  );
};

export default Sidebar;
