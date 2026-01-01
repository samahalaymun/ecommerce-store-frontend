import { Menu, Search, ShoppingCart } from "lucide-react";
import Logo from "./Logo";
import ActionNavItem from "./ActionNavItem";
import { useState } from "react";
import MobileDrawer from "./MobileDrawer";

function MobileNav() {
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <>
      <nav
        aria-label="Mobile navigation"
        className="flex items-center justify-between px-4 h-14 border-b bg-background"
      >
        <Logo />
        <div className="flex gap-4">
          <ActionNavItem
            icon={<Search size={18} />}
            onClick={() => console.log("click")}
            className="text-foreground"
          />
          <ActionNavItem
            icon={<ShoppingCart size={18} />}
            onClick={() => console.log("click")}
            value="1"
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
