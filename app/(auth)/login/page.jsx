"use client";

import FormField from "@/components/FormField";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [checked, setChecked] = React.useState(false);

  return (
    <>
      <h6 className="text-2xl font-medium text-E6 leading-[24px] font-mulish">
        Welcome Back,
      </h6>

      <form className="mt-[30px] space-y-[18px]">
        <FormField
          label="Username"
          value={username}
          setValue={setUsername}
          placeholder={"Admin"}
        />
        <FormField
          label="Password"
          value={password}
          setValue={setPassword}
          type="password"
          placeholder={"************"}
        />

        <div className="flex items-center space-x-2.5">
          <Checkbox
            id="terms"
            checked={checked}
            onCheckedChange={() => setChecked(!checked)}
          />
          <label
            htmlFor="terms"
            className="leading-[18px] font-inter tracking-[0.2px] text-E6 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Remember Me
          </label>
        </div>

        <Link href= "/">
          <Button className="!mt-8 w-full px-8 py-4 text-lg bg-gradient-to-br from-06 to-04 font-inter leading-[32px] font-medium h-auto rounded-[16px] hover:bg-gradient-to-bl transition-backgroundImage">
            <span>Log In</span>
            <Image
              src="/svg/arrow-right.svg"
              width={32}
              height={32}
              alt="checked"
            />
          </Button>
        </Link>
      </form>
    </>
  );
};

export default Page;
