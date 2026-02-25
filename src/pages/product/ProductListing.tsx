import { useNavigate } from "react-router";
import WithLoadingAndError from "@/components/HOCs/WithLoadingAndError";
import ProductsContainer from "@/features/display/components/product/ProductContainer";
import { useGetProducts } from "@/features/display/hooks/services/useGetProduct";
import { paginateProducts } from "@/features/display/lib/paginateProducts";

export default function ProductListing() {
  const navigate = useNavigate();

  const { data: products, isLoading, isError } = useGetProducts();
  const page = 2;
  const paginatedProducts = paginateProducts(products || [], page, 5);
  return (
    <WithLoadingAndError isError={isError} isLoading={isLoading}>
      <ProductsContainer
        products={paginatedProducts}
        onViewDetails={(id) => navigate(`/products/${id}`)}
      />
    </WithLoadingAndError>
  );
}
