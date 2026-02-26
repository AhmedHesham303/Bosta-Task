import { useNavigate, useParams } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import WithLoadingAndError from "@/components/HOCs/WithLoadingAndError";
import { useCartStore } from "@/store/cart";
import { toast } from "sonner";
import type { Product } from "@/@types/Product";
import { useGetProduct } from "@/features/display/hooks/services/useGetProduc";
import DetailsCard from "@/features/display/components/product/DetailsCard";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product, isLoading, isError } = useGetProduct(id);

  const exists = useCartStore((state) =>
    state.products.some((p) => p.id === Number(id)),
  );

  const quantity = useCartStore(
    (state) => state.products.find((p) => p.id === Number(id))?.quantity ?? 0,
  );

  const { incrementQuantity, decrementQuantity, addToCart } = useCartStore();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success("Added to cart successfully");
  };

  const handleIncrement = (product: Product) => {
    incrementQuantity(product);
    toast.success("One more item added");
  };

  const handleDecrement = (product: Product) => {
    decrementQuantity(product);
    toast.success("One item removed");
  };

  return (
    <WithLoadingAndError isError={isError} isLoading={isLoading}>
      <div className="container mx-auto py-10 px-4">
        <Button
          variant="ghost"
          className="mb-6 gap-2"
          onClick={() => navigate("/products-listing")}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Button>

        {product && (
          <DetailsCard
            product={product}
            exists={exists}
            quantity={quantity}
            onAddToCart={handleAddToCart}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        )}
      </div>
    </WithLoadingAndError>
  );
}
