import { createBrowserRouter } from "react-router-dom";
import PageContainer from "@/layouts/PageContainer";
import Home from "@/pages/Home";
import ProductDetails from "@/pages/ProductDetails";
import ProductsList from "@/pages/ProductsList";
import ErrorPage from "@/pages/ErrorPage";

export const router = createBrowserRouter([
  {
    element: <PageContainer />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <ProductsList /> },
      { path: "/products/category/:category", element: <ProductsList /> },
      { path: "/products/:id", element: <ProductDetails /> },
    ],
  },
]);
