import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import WithLoadingAndError from "@/components/HOCs/WithLoadingAndError";
import ProductsContainer from "@/features/display/components/product/ProductContainer";
import type { Product } from "@/features/display/types/Product";

export default function ProductListing() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data: Product[] = await res.json();
        setProducts(data);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <WithLoadingAndError isLoading={isLoading}>
      <ProductsContainer
        products={products}
        onViewDetails={(id) => navigate(`/products/${id}`)}
      />
    </WithLoadingAndError>
  );
}
