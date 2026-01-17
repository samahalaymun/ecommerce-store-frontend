import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

function NavDropDownItem({
  onClick,
  items
}: {
  onClick?: () => void;
  items?:any[]
}) {
  const { pathname } = useLocation();
  const isShopActive = pathname.startsWith("/products");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span
          className={cn(
            "cursor-pointer text-sm transform ease-in duration-100    hover:scale-110 text-muted-foreground  hover:text-primary hover:bg-muted flex items-center gap-1.25 px-2 py-1.5 rounded-md font-bold transition-colors",
            isShopActive && "text-foreground"
          )}
        >
          Shop
          <ChevronDown size={20} />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        {items?.map((item, index) => (
          <DropdownMenuItem
            onClick={onClick}
            key={index + "-" + item.slug}
            asChild
          >
            <Link
              className={cn(
                "cursor-pointer",
                pathname === `/products/category/${item.slug}` &&
                  "font-bold text-foreground bg-muted"
              )}
              to={`/products/category/${item?.slug}`}
            >
              {item.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default NavDropDownItem;
