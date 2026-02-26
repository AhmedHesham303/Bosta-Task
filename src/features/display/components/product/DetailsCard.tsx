// src/components/product/DetailsCard.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/@types/Product";
import UpdateQuantityBtn from "@/components/common/UpdateQantityBtn";
import AddToCartBtn from "@/features/display/components/product/AddToCartBtn";

interface DetailsCardProps {
  product: Product;
  exists: boolean;
  quantity: number;
  onAddToCart: (product: Product) => void;
  onIncrement: (product: Product) => void;
  onDecrement: (product: Product) => void;
}

export default function DetailsCard({
  product,
  exists,
  quantity,
  onAddToCart,
  onIncrement,
  onDecrement,
}: DetailsCardProps) {
  return (
    <Card className="grid md:grid-cols-2 gap-8 p-6">
      <div className="flex items-center justify-center bg-gray-50 rounded-lg p-6">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-[400px] object-contain"
        />
      </div>

      <CardContent className="flex flex-col gap-4 p-0">
        <Badge variant="secondary" className="w-fit capitalize text-sm">
          {product.category}
        </Badge>

        <h1 className="text-2xl font-bold">{product.title}</h1>

        <p className="text-muted-foreground leading-relaxed">
          {product.description}
        </p>

        <p className="text-lg font-bold">${product.price.toFixed(2)}</p>

        {exists ? (
          <UpdateQuantityBtn
            value={quantity}
            incrementAction={() => onIncrement(product)}
            decrementAction={() => onDecrement(product)}
          />
        ) : (
          <AddToCartBtn action={() => onAddToCart(product)} />
        )}
      </CardContent>
    </Card>
  );
}
