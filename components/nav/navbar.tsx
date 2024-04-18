"use client"
import React from 'react';
import Link from "next/link";
import LoginForm from "./loginForm";
import { useUser } from "@/lib/store/user";  // Make sure this path is correct
import Profile from './profile';

export default function Navbar() {
  const user = useUser(state => state.user);  // Accessing user state correctly

  return (
    <nav className="w-full justify-between items-center flex p-5 xl:p-0">
      <div className="group">
        <Link href="/">Davon Blog</Link>
        <div className="h-1 w-0 group-hover:w-full transition-width duration-300"></div>
      </div>
      {user?.id ? <Profile/> : <LoginForm />}
    </nav>
  );
}
