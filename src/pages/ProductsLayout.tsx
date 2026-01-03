import { Outlet, useParams } from "react-router-dom";
import Breadcrumbs from "@/features/productsList/components/Breadcrumbs";
import CategoryCards from "@/features/productsList/components/CategoryCards";
import { formatCategory } from "@/features/productsList/utils";

export default function ProductsLayout() {
  const { category } = useParams<{ category?: string }>();
  const breadcrumbs = [
    { label: "Home", to: "/" },

    category ? { label: "Shop", to: "/products" } : { label: "Shop" },

    ...(category
      ? [
          {
            label: formatCategory(category),
          },
        ]
      : []),
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background px-4 lg:px-10">
      {/* Header Section */}
      <div className="">
        <div className="py-6  flex flex-col md:flex-row justify-between md:items-start items-center gap-7.5">
          <h3 className="font-bold text-foreground">
            {category ? formatCategory(category) : "Shop"}
          </h3>
          <Breadcrumbs items={breadcrumbs} />
        </div>

        {/* Category Cards */}
        <CategoryCards />
      </div>

      {/* Outlet for child routes (products list, product details, etc.) */}
      <div className="pb-12">
        <Outlet />
      </div>
    </div>
  );
}
