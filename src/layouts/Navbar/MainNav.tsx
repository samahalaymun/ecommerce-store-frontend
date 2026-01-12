import Logo from "./Logo";
import { Heart } from "lucide-react";
import ActionNavItem from "./ActionNavItem";
import AuthActions from "./AuthActions";
import NavItems from "./NavItems";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useWishlist } from "@/features/WishList/context/WishlistContext";
import ShoppingBagDrawer from "@/features/shoppingbag/components/ShoppingBagDrawer";

function MainNav() {
  const navigate = useNavigate();
  const { items: favorites } = useWishlist();

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
            <AuthActions  />
            <ThemeToggle className="text-primary" />
            <ShoppingBagDrawer className="text-primary" />
            <ActionNavItem
              icon={<Heart size={15} />}
              onClick={() => navigate("/favorites")}
              value={favorites.length}
              className="text-primary"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MainNav;
