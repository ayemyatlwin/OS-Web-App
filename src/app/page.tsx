"use client";
import styles from "./page.module.css";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    router.replace("/user");
  }, []);
  return (
    <div>
      <h2>This is home page</h2>
    </div>
  );
}
