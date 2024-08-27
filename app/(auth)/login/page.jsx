"use client";

import FormField from "@/components/FormField";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { setCookie } from "nookies";
import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { UserContext } from "@/components/hooks/UserContext";

const Page = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const { login } = React.useContext(UserContext);
  
  const { toast } = useToast();

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username)
      return toast({
        description: "Email is required",
        variant: "destructive",
      });
    if (!password)
      return toast({
        description: "Password is required",
        variant: "destructive",
      });

    setLoading(true);

    const formData = new FormData();
    formData.append("email", username);
    formData.append("password", password);

    await axios
      .post("/api/auth/login", formData)
      .then((res) => {
        let resData = res?.data?.data;

        // store user
        setCookie(null, "_token", resData?.token, {
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
          path: "/",
        });

        resData.token = null;

        login(resData);

        setLoading(false);

        toast({
          description: "Redirecting...",
        });

        router.push("/");
      })
      .catch((err) => {
        console.log("err >>>>", err.response.data);
        toast({
          description: err?.response?.data?.message,
          variant: "destructive",
        });

        setLoading(false);
      });
  };

  return (
    <>
      <h6 className="text-2xl font-medium text-E6 leading-[24px] font-mulish">
        Welcome Back,
      </h6>

      <form className="mt-[30px] space-y-[18px]" onSubmit={handleSubmit}>
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

        <Button
          className="!mt-8 w-full px-8 py-4 text-lg bg-gradient-to-br from-06 to-04 font-inter leading-[32px] font-medium h-auto rounded-[16px] hover:bg-gradient-to-bl transition-backgroundImage"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <Loader2 className="h-[36px] w-[36px] animate-spin" />
          ) : (
            <>
              <span>Log In</span>
              <Image
                src="/svg/arrow-right.svg"
                width={32}
                height={32}
                alt="checked"
              />
            </>
          )}
        </Button>
      </form>
    </>
  );
};

export default Page;
