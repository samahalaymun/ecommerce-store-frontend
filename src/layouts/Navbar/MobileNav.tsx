import { Heart, Menu } from "lucide-react";
import Logo from "./Logo";
import ActionNavItem from "./ActionNavItem";
import { useState } from "react";
import MobileDrawer from "./MobileDrawer";
import ThemeToggle from "./ThemeToggle";
import { useWishlist } from "@/features/WishList/context/WishlistContext";
import ShoppingBagDrawer from "@/features/shoppingbag/components/ShoppingBagDrawer";
import { useNavigate } from "react-router-dom";

function MobileNav() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { items } = useWishlist();

  return (
    <>
      <nav
        aria-label="Mobile navigation"
        className="flex items-center justify-between px-4 h-14 border-b bg-background"
      >
        <Logo />
        <div className="flex gap-1">
          <ThemeToggle className="text-foreground" />
          <ShoppingBagDrawer className="text-foreground" />
          <ActionNavItem
            icon={<Heart size={15} />}
            onClick={() => navigate("/favorites")}
            value={items.length}
            className="text-foreground"
          />
          <ActionNavItem
            icon={<Menu size={18} />}
            onClick={() => setOpen((prev) => !prev)}
            className="text-foreground"
          />
        </div>
      </nav>
      <MobileDrawer onClose={() => setOpen(!open)} open={open} />
    </>
  );
}

export default MobileNav;
