import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function AddToCartBtn({ action }: { action: () => void }) {
  return (
    <Button size="sm" variant="outline" onClick={action}>
      <ShoppingCart className="h-4 w-4" />
    </Button>
  );
}
