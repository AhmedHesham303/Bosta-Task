import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../services/getProduct";

export function useGetProduct(id: string | undefined) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
  });
}
