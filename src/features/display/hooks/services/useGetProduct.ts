import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/getProdcts";

export function useGetProducts() {
  const [searchParams] = useSearchParams();

  const filters = useMemo(() => {
    return {
      page: Number(searchParams.get("page") ?? 10),
    };
  }, [searchParams]);

  return useQuery({
    queryKey: ["products", filters],
    queryFn: () => getProducts(filters.page),
  });
}
