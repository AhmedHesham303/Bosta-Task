import { useNavigate, useParams } from "react-router";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useGetProduct } from "@/features/display/hooks/services/useGetProduc";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product } = useGetProduct(id);

  if (!product) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-muted-foreground">
          Product not found. Please go back.
        </p>
      </div>
    );
  }

  const { title, description, category, price, image } = product;

  return (
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
            src={image}
            alt={title}
            className="max-h-[400px] object-contain"
          />
        </div>

        <CardContent className="flex flex-col gap-4 p-0">
          <Badge variant="secondary" className="w-fit capitalize text-sm">
            {category}
          </Badge>

          <h1 className="text-2xl font-bold">{title}</h1>

          <p className="text-muted-foreground leading-relaxed">{description}</p>

          <p className="text-lg font-bold ">${price.toFixed(2)}</p>

          <Button className="mt-4 gap-2 w-fit">
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
