import type { Product } from "../../types/Product";
import ProductCard from "./ProductCard";

interface ProductsContainerProps {
  products: Product[];
  onViewDetails: (id: number) => void;
  onAddToCart?: (product: Product) => void;
}

export default function ProductsContainer({
  products,
  onViewDetails,
  onAddToCart,
}: ProductsContainerProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onViewDetails={onViewDetails}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}
