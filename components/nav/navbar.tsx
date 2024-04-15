import Link from "next/link";
import { Button } from "../ui/button";
import { SiGithub } from "react-icons/si";
import LoginForm from "./loginForm";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <div className="group">
        <Link href="/">Davon Blog</Link>
        <div className="h-1 w-0 group-hover:"></div>
      </div>
      <LoginForm />
    </nav>
  );
}
