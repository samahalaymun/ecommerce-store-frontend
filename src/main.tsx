import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryProvider } from "@/lib/reactQuery/QueryProvider.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "@/app/router.tsx";
import { NuqsAdapter } from "nuqs/adapters/react";
import { ThemeProvider } from "next-themes";
import { WishlistProvider } from "@/features/WishList/context/WishlistContext";
import { CartProvider } from "@/features/shoppingbag/context/CartContext";
import "./assets/css/App.css";
import "./assets/css/animations.css";

import { AuthProvider } from "./features/authentication/context/AuthContext";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryProvider>
        <WishlistProvider>
          <CartProvider>
            <AuthProvider>
              <NuqsAdapter>
                <RouterProvider router={router} />
              </NuqsAdapter>
            </AuthProvider>
          </CartProvider>
        </WishlistProvider>
      </QueryProvider>
    </ThemeProvider>
  </StrictMode>
);
