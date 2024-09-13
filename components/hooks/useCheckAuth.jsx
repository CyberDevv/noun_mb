"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { fetcher } from "@/utils/swrFetcher";
import { UserContext } from "./UserContext";

const useCheckAuth = (url) => {
  const { logout } = React.useContext(UserContext);

  const router = useRouter();

  const { data, isValidating } = useSWR(url, fetcher);

  useEffect(() => {
    if (data?.status === 401) {
      logout();
    }
  }, [data, logout, router]);

  return { data, isValidating };
};

export default useCheckAuth;
