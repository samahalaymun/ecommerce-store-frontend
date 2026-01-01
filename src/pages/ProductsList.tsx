import { ProductsQueryProvider } from "@/features/productsList/context/ProductsQueryContext";
import ProductsListContent from "@/features/productsList/components/ProductsListContent";

function ProductsList() {
return (
    <ProductsQueryProvider>
      <ProductsListContent />
    </ProductsQueryProvider>
  );
}

export default ProductsList;
