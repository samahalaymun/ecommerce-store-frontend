import { createBrowserRouter } from "react-router-dom";
import PageContainer from "@/layouts/PageContainer";
import Home from "@/pages/Home";
import ProductDetails from "@/pages/ProductDetails";
import ProductsList from "@/pages/ProductsList";
import ProductsLayout from "@/pages/ProductsLayout";
import ErrorPage from "@/pages/ErrorPage";

export const router = createBrowserRouter([
  {
    element: <PageContainer />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
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
]);
