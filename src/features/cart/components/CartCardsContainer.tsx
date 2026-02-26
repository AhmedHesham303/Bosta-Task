import type { Product } from "@/@types/Product";
import CartProductCard from "./CartProductCart";

type CartCardsContainerProps = {
  products: Product[];
  onIncrementQantity: (product: Product) => void;
  onDecremenntQuantity: (product: Product) => void;
  onRemove: (product: Product) => void;
};
export default function CartCardsContainer({
  products,
  onIncrementQantity,
  onDecremenntQuantity,
  onRemove,
}: CartCardsContainerProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products?.map((product) => (
        <CartProductCard
          key={product.id}
          product={product}
          onIncrementQantity={() => onIncrementQantity(product)}
          onDecremenntQuantity={() => onDecremenntQuantity(product)}
          onRemove={() => onRemove(product)}
        />
      ))}
    </div>
  );
}
