import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import type { Product } from "@/@types/Product";
import { useCartStore } from "@/store/cart";
import AddToCartBtn from "./AddToCartBtn";
import UpdateQantityBtn from "../../../../components/common/UpdateQantityBtn";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  onViewDetails: (id: number) => void;
}

export default function ProductCard({
  product,
  onViewDetails,
}: ProductCardProps) {
  const { id, title, price, category, image } = product;
  const { addToCart, incrementQuantity, decrementQuantity } = useCartStore();
  const exists = useCartStore((state) =>
    state.products.some((p) => p.id === id),
  );
  const quantity = useCartStore(
    (state) => state.products.find((p) => p.id === id)?.quantity ?? 0,
  );
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

      <CardFooter className="grid grid-cols-2 gap-2 p-4 pt-0 items-center">
        {" "}
        <Button
          size="sm"
          className="flex-1 gap-1 text-xs"
          onClick={() => onViewDetails(id)}
        >
          <Eye className="h-3 w-3" />
          View Details
        </Button>
        {exists ? (
          <div className="flex-1">
            <UpdateQantityBtn
              value={quantity}
              incrementAction={() => handleIncrement(product)}
              decrementAction={() => handleDecrement(product)}
            />
          </div>
        ) : (
          <AddToCartBtn action={() => handleAddClick(product)} />
        )}
      </CardFooter>
    </Card>
  );
}
