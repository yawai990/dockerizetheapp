"use client";
import React, { FormEvent } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const handlerSubmit = async (e: any) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const signInstatus = await signIn("credentials", {
      username: data.get("username"),
      password: data.get("password"),
      redirect: false,
    });

    if (signInstatus && !signInstatus.error) {
      console.log(signInstatus);
      router.push("/dashboard");
    } else {
      alert("something went wrong in login page");
    }
  };
  return (
    <form action="" onSubmit={handlerSubmit}>
      <label htmlFor="">UserName</label>
      <input type="text" name="username" className="text-black" />

      <label htmlFor="">Password</label>
      <input type="text" name="password" className="text-black" />

      <button>Login</button>
    </form>
  );
};

export default Login;
