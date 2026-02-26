import { useNavigate } from "react-router";
import WithLoadingAndError from "@/components/HOCs/WithLoadingAndError";
import ProductsContainer from "@/features/display/components/product/ProductContainer";
import { useGetProducts } from "@/features/display/hooks/services/useGetProducts";
import type { Product } from "@/@types/Product";
import { addToCart } from "@/lib/storeStorage";

export default function ProductListing() {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetProducts();
  const hasNoData = data?.products.length === 0;
  const handleCartClick = (product: Product) => {
    addToCart(product);
  };

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
        onAddToCart={(product: Product) => handleCartClick(product)}
      />
    </WithLoadingAndError>
  );
}
