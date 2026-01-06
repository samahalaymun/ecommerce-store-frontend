import { createBrowserRouter } from "react-router-dom";
import PageContainer from "@/layouts/PageContainer";
import Home from "@/pages/Home";
import ProductDetails from "@/pages/ProductDetails";
import ProductsList from "@/pages/ProductsList";
import ProductsLayout from "@/layouts/ProductsLayout";
import ErrorPage from "@/pages/ErrorPage";
import About from "@/pages/About";
import Auth from "@/pages/Auth";
import ProtectedRoute from "@/components/ProtectedRoute";
import AppLayout from "@/layouts/AppLayout";
import WishList from "@/pages/WishList";

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
            path: "products",
            element: <ProductsLayout />,
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
