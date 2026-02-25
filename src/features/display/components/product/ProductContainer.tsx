import WithPagination from "@/components/HOCs/WithPagination";
import type { Product } from "../../types/Product";
import ProductCard from "./ProductCard";
import ProductsFilter from "./filters";
import { PRODUCTS_LIMIT } from "../../constants/productsLimit";

interface ProductsContainerProps {
  products: Product[] | undefined;
  total: number;
  pages?: number;
  onViewDetails: (id: number) => void;
  onAddToCart?: (product: Product) => void;
}
export default function ProductsContainer({
  products,
  total,
  pages = 1,
  onViewDetails,
  onAddToCart,
}: ProductsContainerProps) {
  return (
    <WithPagination
      enabled={total > PRODUCTS_LIMIT}
      pages={pages}
      wrapperClassName="mb-4"
    >
      <div className=" flex flex-col gap-4">
        <ProductsFilter />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewDetails}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </WithPagination>
  );
}
