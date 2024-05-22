"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import useUser from "@/hooks/useUser";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const { user, status } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (status == "unauthenticated" && pathname !== "/login") {
      router.replace("/login");
    }
  }, [status]);

  if (status == "loading") return <h1>Loading</h1>;
  return (
    <div style={{ backgroundColor: "#F8F8F8" }}>
      {pathname !== "/login" ? (
        <div style={{}}>
          {status == "authenticated" ? (
            <div
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                {children}
              </div>
            </div>
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      ) : (
        children
      )}
    </div>
  );
}
