import { PRODUCTS_LIMIT } from "../constants/productsLimit";
import type { Product } from "../types/Product";

export const paginateProducts = (
  products: Product[],
  page: number = 1,
  limit: number = PRODUCTS_LIMIT,
) => {
  const start = (page - 1) * limit;
  const end = start + limit;
  return products.slice(start, end);
};
