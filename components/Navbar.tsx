import {
  HomeIcon,
  LayoutDashboard,
  LogInIcon,
  ShoppingCartIcon,
} from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
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

        <Link href="/dashboard">
          <div className="flex gap-2 items-center justify-center cursor-pointer hover:text-[#6886e0]">
            <LayoutDashboard />
            <p>Admin</p>
          </div>
        </Link>

        <Link href="/login">
          <div className="flex gap-2 items-center justify-center cursor-pointer hover:text-[#6886e0]">
            <LogInIcon />
            <p>Sign In</p>
          </div>
        </Link>

        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
