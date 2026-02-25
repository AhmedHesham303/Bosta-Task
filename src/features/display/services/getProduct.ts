import type { Product } from "../types/Product";

export const getProduct = async (id: string | undefined): Promise<Product> => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json() || [];
};
