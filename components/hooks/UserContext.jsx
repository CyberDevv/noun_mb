"use client";

import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { destroyCookie, parseCookies } from "nookies";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const { _token } = parseCookies();

  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (user && _token) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [_token, user]);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);

    router.push("/login");
    localStorage.removeItem("user");
    destroyCookie(null, "_token");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
