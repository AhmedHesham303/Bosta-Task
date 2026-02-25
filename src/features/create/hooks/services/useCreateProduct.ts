import { useMutation } from "@tanstack/react-query";
import type { Product } from "../../../display/types/Product";
import { createProduct } from "../../services/createProduct";
import { toast } from "sonner";

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
