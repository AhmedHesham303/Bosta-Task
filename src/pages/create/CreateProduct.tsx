import { Button } from "@/components/ui/button";
import CreateProductForm from "@/features/create/components/CreateProductForm";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

export default function CreateProduct() {
  const navigate = useNavigate();

  return (
    <div>
      <Button
        variant="ghost"
        className="mb-6 gap-2"
        onClick={() => navigate("/products-listing")}
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Products
      </Button>

      <CreateProductForm />
    </div>
  );
}
