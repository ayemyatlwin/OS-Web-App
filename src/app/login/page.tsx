"use client";
import { FormEvent, useEffect, useState } from "react";
import { Button } from "@mui/material";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function Login() {
  const router = useRouter();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { user, status } = useUser();
  const [shoudMountLoginForm, setShoudMountLoginForm] =
    useState<boolean>(false);

  console.log("user", user);

  useEffect(() => {
    if (status == "authenticated" && user) {
      router.replace("/user");
    } else if (status == "unauthenticated") {
      setShoudMountLoginForm(true);
    }
  }, [status, user]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("LLLL");

    try {
      if (userName && password) {
        const signInRes = await signIn("credentials", {
          user_name: userName,
          password: password,
          callbackUrl: "/",
          redirect: false,
        });
        console.log("RES SIGN", signInRes);

        if (signInRes?.ok && signInRes?.status === 200) {
          router.replace("/user");
        } else {
          return null;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  if (!shoudMountLoginForm) return <h1>Loading...</h1>;

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
            autoComplete="off"
          />
        </div>

        <div>
          <input
            type={"password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          />
        </div>
        <Button
          style={{
            marginTop: 5,
            width: "100%",
            backgroundColor: "green",
            color: "#fff",
          }}
          sx={{
            px: 6,
            bgcolor: "#fff",
            color: "#fff",
          }}
          variant="contained"
          type="submit"
        >
          Sign in
        </Button>
      </form>
    </div>
  );
}
