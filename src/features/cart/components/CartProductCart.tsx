import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import type { Product } from "@/@types/Product";
import UpdateQuantityBtn from "@/components/common/UpdateQantityBtn";
import { useCartStore } from "@/store/cart";
import RemoveCartBtn from "./RemoveCartBtn";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  onIncrementQantity: (product: Product) => void;
  onDecremenntQuantity: (product: Product) => void;
  onRemove: (product: Product) => void;
}

export default function CartProductCard({
  product,
  onIncrementQantity,
  onDecremenntQuantity,
  onRemove,
}: ProductCardProps) {
  const { id, title, price, category, image } = product;
  const quantity = useCartStore(
    (state) => state.products.find((p) => p.id === id)?.quantity ?? 0,
  );

  const handleIncrement = (product: Product) => {
    onIncrementQantity(product);
    toast.success("One more item added");
  };
  const handleDecrement = (product: Product) => {
    onDecremenntQuantity(product);
    toast.success("One item added deleted");
  };
  const handleRemove = (product: Product) => {
    onRemove(product);
    toast.success("Removed from the cart");
  };

  return (
    <Card className="group flex flex-col h-full hover:shadow-md transition-shadow duration-200">
      <CardHeader className="p-4 bg-gray-50 h-48 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-200"
        />
      </CardHeader>

      <CardContent className="flex flex-col gap-2 p-4 flex-1">
        <Badge variant="secondary" className="w-fit capitalize text-xs">
          {category}
        </Badge>

        <p className="text-sm font-medium text-foreground line-clamp-2 min-h-[2.5rem]">
          {title}
        </p>

        <p className="text-lg font-bold mt-auto">${price.toFixed(2)}</p>
      </CardContent>

      <CardFooter className="flex gap-2 p-4 pt-0">
        <UpdateQuantityBtn
          value={quantity}
          incrementAction={() => handleIncrement(product)}
          decrementAction={() => handleDecrement(product)}
        />

        <RemoveCartBtn action={() => handleRemove(product)} />
      </CardFooter>
    </Card>
  );
}
