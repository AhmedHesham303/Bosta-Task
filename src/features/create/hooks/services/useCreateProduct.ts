import { useMutation } from "@tanstack/react-query";
import { createProduct } from "../../services/createProduct";
import { toast } from "sonner";
import type { Product } from "@/@types/Product";

export const useCreateProduct = () => {
  return useMutation({
    mutationFn: (data: Product) => createProduct(data),

    onSuccess: () => {
      toast.success("Product created successfully");
    },

    onError: () => {
      toast.error("Failed to create product");
    },
  });
};
