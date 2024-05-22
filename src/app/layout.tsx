import "./globals.css";
import type { Metadata } from "next";
import ThemeRegistry from "./ThemeRegistry";
import React from "react";
import { Baloo_2 } from "next/font/google";
import NextAuthProvider from "./components/NextAuthProvider";
import Layout from "./components/Layout";

const baloo2 = Baloo_2({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Myan Ants",
  description: "Myan Ants",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={baloo2.className}>
        <>
          <NextAuthProvider>
            <ThemeRegistry options={{ key: "mui" }}>
              <Layout>{children}</Layout>
              {/* {children} */}
            </ThemeRegistry>
          </NextAuthProvider>
        </>
      </body>
    </html>
  );
}
