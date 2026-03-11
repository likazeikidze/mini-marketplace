import {
  HomeIcon,
  LayoutDashboard,
  LogInIcon,
  LogOutIcon,
  ShoppingCartIcon,
} from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

async function logout() {
  "use server";
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/");
}

const Navbar = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let role = null;

  if (user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    role = profile?.role;
  }

  return (
    <nav className="flex justify-between items-center p-6 w-full">
      <Link href="/">
        <div className="flex gap-2 items-center justify-center cursor-pointer hover:text-[#6886e0]">
          <HomeIcon />
          <p>Home</p>
        </div>
      </Link>

      <div className="flex gap-4 items-center justify-center">
        <Link href="/cart">
          <div className="flex gap-2 items-center justify-center cursor-pointer hover:text-[#6886e0]">
            <ShoppingCartIcon />
            <p>Cart</p>
          </div>
        </Link>

        {role === "admin" && (
          <Link href="/dashboard">
            <div className="flex gap-2 items-center justify-center cursor-pointer hover:text-[#6886e0]">
              <LayoutDashboard />
              <p>Dashboard</p>
            </div>
          </Link>
        )}

        {user ? (
          <form action={logout}>
            <button className="flex gap-2 items-center justify-center cursor-pointer hover:text-[#6886e0]">
              <LogOutIcon />
              <p>Logout</p>
            </button>
          </form>
        ) : (
          <Link href="/login">
            <div className="flex gap-2 items-center justify-center cursor-pointer hover:text-[#6886e0]">
              <LogInIcon />
              <p>Log In</p>
            </div>
          </Link>
        )}

        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
