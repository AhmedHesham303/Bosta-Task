import type { Product } from "../types/Product";

export const paginateProducts = (
  products: Product[],
  page: number,
  limit: number,
) => {
  const start = (page - 1) * limit;
  const end = start + limit;
  return products.slice(start, end);
};
