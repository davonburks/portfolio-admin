import { useUser } from "@/lib/store/user";
import React from "react";
import Image from "next/image";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { Button } from "../ui/button";
import { DashboardIcon, LockOpen1Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import { createBrowserClient } from "@supabase/ssr";

export default function Profile() {
  const user = useUser((state) => state.user);
  const setUser = useUser((state) => state.setUser);
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(undefined);
  };
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Image
            src={user?.user_metadata.avatar_url}
            alt={user?.user_metadata.user_name}
            width={50}
            height={50}
            className="rounded-full ring-2 ring-green-500"
          />
        </PopoverTrigger>
        <PopoverContent
          className="space-y-3 divide-y p-2 bg-primary-foreground rounded"
          side="bottom"
        >
          <div className="px-4">
            <p className="text-sm">{user?.user_metadata.user_name}</p>
            <p className="text-sm text-gray-500">{user?.user_metadata.email}</p>
          </div>
          <hr />
          <Link href="/dashboard">
            <Button
              variant="ghost"
              className="w-full flex justify-between items-center"
            >
              Dashboard <DashboardIcon />
            </Button>
          </Link>
          <Button
            variant="ghost"
            className="w-full flex justify-between items-center"
            onClick={handleLogout}
          >
            Log out <LockOpen1Icon />
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
}
