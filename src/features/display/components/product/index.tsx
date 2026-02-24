// import { ShoppingCart, Eye } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";
// import type { Product } from "@/types";

// // ─── Props ────────────────────────────────────────────────────────────────────

// interface ProductCardProps {
//   product: Product;
//   onViewDetails: (id: number) => void;
//   onAddToCart?: (product: Product) => void; // optional – bonus feature
// }

// // ─── Component ────────────────────────────────────────────────────────────────

// export default function ProductCard({
//   product,
//   onViewDetails,
//   onAddToCart,
// }: ProductCardProps) {
//   const { id, title, price, category, image } = product;

//   return (
//     <Card className="group flex flex-col h-full overflow-hidden transition-shadow duration-300 hover:shadow-lg">
//       {/* Image */}
//       <CardHeader className="p-4 flex items-center justify-center bg-gray-50 h-52">
//         <img
//           src={image}
//           alt={title}
//           className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
//         />
//       </CardHeader>

//       {/* Content */}
//       <CardContent className="flex flex-col gap-2 p-4 flex-1">
//         {/* Category badge */}
//         <Badge variant="secondary" className="w-fit capitalize text-xs">
//           {category}
//         </Badge>

//         {/* Title */}
//         <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 leading-snug">
//           {title}
//         </h3>

//         {/* Price */}
//         <p className="mt-auto text-lg font-bold text-gray-900">
//           ${price.toFixed(2)}
//         </p>
//       </CardContent>

//       {/* Actions */}
//       <CardFooter className="flex gap-2 p-4 pt-0">
//         <Button
//           variant="default"
//           size="sm"
//           className="flex-1 gap-1"
//           onClick={() => onViewDetails(id)}
//         >
//           <Eye className="h-4 w-4" />
//           View Details
//         </Button>

//         {onAddToCart && (
//           <Button
//             variant="outline"
//             size="sm"
//             aria-label="Add to cart"
//             onClick={() => onAddToCart(product)}
//           >
//             <ShoppingCart className="h-4 w-4" />
//           </Button>
//         )}
//       </CardFooter>
//     </Card>
//   );
// }
