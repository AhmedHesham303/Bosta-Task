// import { Loader2, PackageX, AlertCircle } from "lucide-react";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import ProductCard from "./ProductCard";
// import type { Product } from "@/types";

// // ─── Props ────────────────────────────────────────────────────────────────────

// interface ProductsContainerProps {
//   products: Product[];
//   isLoading: boolean;
//   isError: boolean;
//   errorMessage?: string;
//   onViewDetails: (id: number) => void;
//   onAddToCart?: (product: Product) => void;
// }

// // ─── Sub-components (co-located, small, no need for separate files) ───────────

// function LoadingState() {
//   return (
//     <div className="flex flex-col items-center justify-center py-24 gap-3 text-gray-500">
//       <Loader2 className="h-10 w-10 animate-spin text-primary" />
//       <p className="text-sm">Loading products…</p>
//     </div>
//   );
// }

// function ErrorState({ message }: { message: string }) {
//   return (
//     <Alert variant="destructive" className="max-w-lg mx-auto mt-10">
//       <AlertCircle className="h-4 w-4" />
//       <AlertTitle>Something went wrong</AlertTitle>
//       <AlertDescription>{message}</AlertDescription>
//     </Alert>
//   );
// }

// function EmptyState() {
//   return (
//     <div className="flex flex-col items-center justify-center py-24 gap-3 text-gray-400">
//       <PackageX className="h-12 w-12" />
//       <p className="text-base font-medium">No products found</p>
//       <p className="text-sm">Try adjusting your filters or search.</p>
//     </div>
//   );
// }

// // ─── Main Component ───────────────────────────────────────────────────────────

// export default function ProductsContainer({
//   products,
//   isLoading,
//   isError,
//   errorMessage = "Failed to load products. Please try again later.",
//   onViewDetails,
//   onAddToCart,
// }: ProductsContainerProps) {
//   if (isLoading) return <LoadingState />;

//   if (isError) return <ErrorState message={errorMessage} />;

//   if (products.length === 0) return <EmptyState />;

//   return (
//     <div
//       className="
//         grid gap-6
//         grid-cols-1
//         sm:grid-cols-2
//         md:grid-cols-3
//         lg:grid-cols-4
//         xl:grid-cols-5
//       "
//     >
//       {products.map((product) => (
//         <ProductCard
//           key={product.id}
//           product={product}
//           onViewDetails={onViewDetails}
//           onAddToCart={onAddToCart}
//         />
//       ))}
//     </div>
//   );
// }
