import { useNavigate } from "react-router";
import WithLoadingAndError from "@/components/HOCs/WithLoadingAndError";
import ProductsContainer from "@/features/display/components/product/ProductContainer";
import { useGetProducts } from "@/features/display/hooks/services/useGetProduct";

export default function ProductListing() {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetProducts();
  const hasNoData = data?.products.length === 0;
  return (
    <WithLoadingAndError
      isError={isError}
      isLoading={isLoading}
      hasNoData={hasNoData}
    >
      <ProductsContainer
        products={data?.products}
        total={data?.total || 1}
        pages={data?.pages}
        onViewDetails={(id) => navigate(`/products/${id}`)}
      />
    </WithLoadingAndError>
  );
}
