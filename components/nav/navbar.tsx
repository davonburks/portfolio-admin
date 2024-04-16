import Link from "next/link";
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
