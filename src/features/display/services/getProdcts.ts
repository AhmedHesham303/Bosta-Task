import type { Product } from "@/@types/Product";
import { PRODUCTS_LIMIT } from "../constants/productsLimit";
import { paginateProducts } from "../lib/paginateProducts";

interface ProductFilters {
  sort?: string | null;
  category?: string | null;
  page?: number;
  limit?: number;
}
export const getProducts = async (
  filters?: ProductFilters,
): Promise<{
  products: Product[];
  total: number;
  pages: number;
}> => {
  const { sort, category, page = 1, limit = PRODUCTS_LIMIT } = filters ?? {};

  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) throw new Error("Failed to fetch products");

  let products: Product[] = await res.json();

  if (category && category !== "all") {
    products = products.filter((p) => p.category === category);
  }

  if (sort === "asc") {
    products = [...products].sort((a, b) => a.price - b.price);
  } else if (sort === "desc") {
    products = [...products].sort((a, b) => b.price - a.price);
  }

  const total = products.length;
  const pages = Math.ceil(total / limit);

  products = paginateProducts(products, page, limit);

  return { products, total, pages };
};
