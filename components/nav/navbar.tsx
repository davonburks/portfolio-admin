"use client"
import React from 'react';
import Link from "next/link";
import LoginForm from "./loginForm";
import { useUser } from "@/lib/store/user";  // Make sure this path is correct

export default function Navbar() {
  const user = useUser(state => state.user);  // Accessing user state correctly

  return (
    <nav className="flex items-center justify-between">
      <div className="group">
        <Link href="/">Davon Blog</Link>
        <div className="h-1 w-0 group-hover:w-full transition-width duration-300"></div>
      </div>
      {user?.id ? <h1>Profile</h1> : <LoginForm />}
    </nav>
  );
}
