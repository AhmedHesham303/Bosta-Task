import { Button } from "@/components/ui/button";
import CartCardsContainer from "@/features/cart/components/CartCardsContainer";
import CartTotalPrice from "@/features/cart/components/CartTotalPrice ";
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
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Your Items
        </h1>

        <CartTotalPrice totalPrice={totalPrice} />
      </div>

      <div className="h-px bg-gray-200" />

      <CartCardsContainer
        products={products}
        onIncrementQantity={incrementQuantity}
        onDecremenntQuantity={decrementQuantity}
        onRemove={removeFromCart}
      />
    </div>
  );
}
