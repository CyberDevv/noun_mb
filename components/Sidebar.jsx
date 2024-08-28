"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const Sidebar = () => {
  const pathName = usePathname();

  const NavItem = ({ label, link }) => {
    return (
      <li>
        <Link href={label === "Dashboard" ? "/" : `/${link || label?.toLowerCase()}`}>
          <Button
            className={`h-auto w-full space-x-4 hover:no-underline font-inter text-sm leading-[18px] rounded-xl tracking-[0.2px] text-82 start py-4 px-5 ${
              pathName === `/${link || label?.toLowerCase()}` ? "bg-E6F text-00" : ""
            }`}
            variant="ghost"
          >
            <Image
              src={`/svg/${link || label?.toLowerCase()}${
                `/${link || label?.toLowerCase()}` === pathName ? "-active" : ""
              }${
                pathName === "/" && label === "Dashboard" ? "-active" : ""
              }.png`}
              width={18}
              height={18}
              alt={label}i
              className="object-none"
            />
            <span>{label}</span>
          </Button>
        </Link>
      </li>
    );
  };

  return (
    <aside className="fixed w-full h-screen bg-white border-r-2 border-f2 max-w-[240px]">
      <Image
        src="/images/logo.png"
        width={90}
        height={90}
        alt="logo"
        className="object-contain mx-auto my-12"
      />

      <ul className="px-2.5">
        <NavItem label="Dashboard" />
        <NavItem label="Account" />
        <NavItem label="Transactions" />
        <NavItem label="Loans" />
        <NavItem label="Savings" />
        <NavItem label="Cards" />
        <NavItem label="Insurance" />
        <NavItem label="NOUN Wallets" link="wallets" />
        <NavItem label="Investment" />
        <NavItem label="Staff" />
        <NavItem label="Settings" />
      </ul>
    </aside>
  );
};

export default Sidebar;
