export const getCategories = async (): Promise<string[]> => {
  const res = await fetch("https://fakestoreapi.com/products/categories");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json() || [];
};
