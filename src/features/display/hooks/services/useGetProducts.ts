import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/getProdcts";

export function useGetProducts() {
  const [searchParams] = useSearchParams();

  const filters = useMemo(() => {
    return {
      page: Number(searchParams.get("page") ?? 1),
      limit: Number(searchParams.get("limit") ?? 10),
      sort: searchParams.get("sort"),
      category: searchParams.get("category"),
    };
  }, [searchParams]);

  return useQuery({
    queryKey: ["products", filters],
    queryFn: () => getProducts(filters),
  });
}
