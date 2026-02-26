import { Button } from "@/components/ui/button";
import CartCardsContainer from "@/features/cart/components/CartCardsContainer";
import { useCartStore } from "@/store/cart";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router";

export default function Cart() {
  const navigate = useNavigate();
  const {
    products,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    totalPrice,
  } = useCartStore();
  if (products.length === 0) {
    return (
      <div className="flex flex-col gap-4 items-center justify-center my-auto">
        <ShoppingCart className="w-40 h-40" />
        <Button variant={"outline"} onClick={() => navigate("/")}>
          Your cart is empty click to go to products page
        </Button>
      </div>
    );
  }
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
