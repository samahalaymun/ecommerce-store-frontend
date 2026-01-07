import { Heart, Menu, Search, ShoppingCart } from "lucide-react";
import Logo from "./Logo";
import ActionNavItem from "./ActionNavItem";
import { useState } from "react";
import MobileDrawer from "./MobileDrawer";
import ThemeToggle from "./ThemeToggle";
import { useNavigate } from "react-router-dom";

function MobileNav() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav
        aria-label="Mobile navigation"
        className="flex items-center justify-between px-4 h-14 border-b bg-background"
      >
        <Logo />
        <div className="flex gap-1">
          <ThemeToggle className="text-foreground" />
          <ActionNavItem
            icon={<ShoppingCart size={18} />}
            onClick={() => console.log("click")}
            value="1"
            className="text-foreground"
          />
          <ActionNavItem
            icon={<Heart size={15} />}
            onClick={() => navigate("/favorites")}
            value={0}
            className="text-foreground"
          />
          <ActionNavItem
            icon={<Menu size={18} />}
            onClick={() => setOpen((prev) => !prev)}
            className="text-foreground"
          />
        </div>
      </nav>
      <MobileDrawer open={open} />
    </>
  );
}

export default MobileNav;
