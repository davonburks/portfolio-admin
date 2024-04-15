"use client";
import { createClient } from "@/utils/supabase/client";
import { Button } from "../ui/button";
import { SiGithub } from "react-icons/si";
import { usePathname } from "next/navigation";

export default function LoginForm() {
    const pathname = usePathname()
  const supabase = createClient();
  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: location.origin + "/auth/callback?next="+pathname,
      },
    });
  };
  return (
    <Button variant={"outline"} className="flex items-center gap-2" onClick={handleLogin}>
      <SiGithub />
      Login
    </Button>
  );
}
