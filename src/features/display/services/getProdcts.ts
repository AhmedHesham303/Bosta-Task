import type { Product } from "../types/Product";

export const getProducts = async (limit: number = 10): Promise<Product[]> => {
  const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json() || [];
};
