import type { Product } from "@/@types/Product";

export const createProduct = async (data: Product) => {
  const res = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to create product");
  }

  return res.json();
};
