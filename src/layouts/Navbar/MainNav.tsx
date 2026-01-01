import Logo from "./Logo";
import {  Heart, Search, ShoppingCart } from "lucide-react";
import ActionNavItem from "./ActionNavItem";
import AuthActions from "./AuthActions";
import NavItems from "./NavItems";

function MainNav() {
  return (
    <nav
      aria-label="Main navigation"
      className="px-10 py-4 w-full bg-background border-b"
    >
      <div className="flex gap-10 items-center w-full ">
        <Logo />
        <div className="flex justify-between items-center w-full">
           <NavItems className="flex-row" />

          <div className="flex items-center gap-3.75">
            <AuthActions />
            <ActionNavItem
              icon={<Search size={15} />}
              onClick={() => console.log("click")}
              className="text-primary"
            />
            <ActionNavItem
              icon={<ShoppingCart size={15} />}
              onClick={() => console.log("click")}
              value="1"
              className="text-primary"
            />

            <ActionNavItem
              icon={<Heart size={15} />}
              onClick={() => console.log("click")}
              value="2"
              className="text-primary"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MainNav;
