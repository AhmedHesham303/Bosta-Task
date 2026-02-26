import { useNavigate, useParams } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useGetProduct } from "@/features/display/hooks/services/useGetProduc";
import WithLoadingAndError from "@/components/HOCs/WithLoadingAndError";
import { useCartStore } from "@/store/cart";
import type { Product } from "@/@types/Product";
import { toast } from "sonner";
import UpdateQuantityBtn from "@/components/common/UpdateQantityBtn";
import AddToCartBtn from "@/features/display/components/product/AddToCartBtn";

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
  const handleAddClick = (product: Product) => {
    addToCart(product);
    toast.success("Added to cart successfully");
  };

  const handleIncrement = (product: Product) => {
    incrementQuantity(product);
    toast.success("One more item added");
  };
  const handleDecrement = (product: Product) => {
    decrementQuantity(product);
    toast.success("One item added deleted");
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

        <Card className="grid md:grid-cols-2 gap-8 p-6">
          <div className="flex items-center justify-center bg-gray-50 rounded-lg p-6">
            <img
              src={product?.image}
              alt={product?.title}
              className="max-h-[400px] object-contain"
            />
          </div>

          <CardContent className="flex flex-col gap-4 p-0">
            <Badge variant="secondary" className="w-fit capitalize text-sm">
              {product?.category}
            </Badge>

            <h1 className="text-2xl font-bold">{product?.title}</h1>

            <p className="text-muted-foreground leading-relaxed">
              {product?.description}
            </p>

            <p className="text-lg font-bold ">${product?.price.toFixed(2)}</p>

            {product && exists ? (
              <UpdateQuantityBtn
                value={quantity}
                incrementAction={() => handleIncrement(product)}
                decrementAction={() => handleDecrement(product)}
              />
            ) : product ? (
              <AddToCartBtn action={() => handleAddClick(product)} />
            ) : null}
          </CardContent>
        </Card>
      </div>
    </WithLoadingAndError>
  );
}
