import CartCardsContainer from "@/features/cart/CartCardsContainer";
import { useCartStore } from "@/store/cart";

export default function Cart() {
  const {
    products,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    totalPrice,
  } = useCartStore();

  return (
    <div>
      <h1>Yuor items</h1>
      <CartCardsContainer
        products={products}
        onIncrementQantity={incrementQuantity}
        onDecremenntQuantity={decrementQuantity}
        onRemove={removeFromCart}
      />
      <h2>total price {totalPrice}</h2>
    </div>
  );
}
