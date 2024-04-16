"use client";
import { Button } from "@/components/ui/button";
import { createBrowserClient } from "@supabase/ssr";
import { usePathname } from "next/navigation";
import React from "react";
import { DiGithub } from "react-icons/di";
import { PiGithubLogo } from "react-icons/pi";
import { SiGithub } from "react-icons/si";

export default function LoginForm() {
	const pathname = usePathname();
	const supabase = createBrowserClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);

	const handleLogin = () => {
		supabase.auth.signInWithOAuth({
			provider: "github",
			options: {
				redirectTo: `${location.origin}/auth/callback?next=${pathname}`,
			},
		});
	};

	return (
		<Button
			className="flex items-center gap-2"
			variant="outline"
			onClick={handleLogin}
		>
			<SiGithub /> Login
		</Button>
	);
}