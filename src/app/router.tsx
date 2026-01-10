import { createBrowserRouter } from "react-router-dom";
import PageContainer from "@/layouts/PageContainer";
import Home from "@/pages/Home";
import ProductDetails from "@/pages/ProductDetails";
import ProductsList from "@/pages/ProductsList";
import ProductsLayout from "@/layouts/ProductsLayout";
import ErrorPage from "@/pages/ErrorPage";
import { QueryErrorBoundary } from "@/lib/reactQuery/QueryErrorBoundary";
import About from "@/pages/About";
import Auth from "@/pages/Auth";
import AppLayout from "@/layouts/AppLayout";
import WishList from "@/pages/WishList";
import Cart from "@/pages/Shoppingbag";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },

      {
        element: <PageContainer />,
        children: [
          { path: "about", element: <About /> },
          { path: "auth", element: <Auth /> },
          {
            path: "favorites",
            element: <WishList />,
          },
          {
            path: "shoppingbag",
            element: <Cart />,
          },
          {
            path: "products",
            element: (
              <QueryErrorBoundary>
                <ProductsLayout />
              </QueryErrorBoundary>
            ),
            children: [
              { index: true, element: <ProductsList /> },
              { path: "category/:category", element: <ProductsList /> },
              { path: ":id", element: <ProductDetails /> },
            ],
          },
        ],
      },
    ],
  },
]);
