import type { Product } from "../../types/Product";
import ProductCard from "./ProductCard";
import ProductsFilter from "./filters";

interface ProductsContainerProps {
  products: Product[] | undefined;
  onViewDetails: (id: number) => void;
  onAddToCart?: (product: Product) => void;
}

export default function ProductsContainer({
  products,
  onViewDetails,
  onAddToCart,
}: ProductsContainerProps) {
  return (
    <div className="p-4 flex flex-col gap-4">
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
  );
}
