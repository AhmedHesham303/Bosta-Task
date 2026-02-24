// // ─── API Models ───────────────────────────────────────────────────────────────

// export interface ProductRating {
//   rate: number;
//   count: number;
// }

// export interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   rating: ProductRating;
// }

// // ─── Cart ─────────────────────────────────────────────────────────────────────

// export interface CartItem extends Product {
//   quantity: number;
// }

// // ─── Auth ─────────────────────────────────────────────────────────────────────

// export interface AuthUser {
//   id: number;
//   username: string;
//   token: string;
// }

// export interface LoginPayload {
//   username: string;
//   password: string;
// }

// // ─── Form Values ──────────────────────────────────────────────────────────────

// export interface CreateProductFormValues {
//   title: string;
//   description: string;
//   price: number | "";
//   category: string;
//   image: string;
// }

// // ─── Sorting / Filtering ─────────────────────────────────────────────────────

// export type SortOrder = "asc" | "desc";

// export type SortField = "price" | "category";

// export interface ProductFilters {
//   category: string; // "" means all
//   sortField: SortField;
//   sortOrder: SortOrder;
//   page: number;
//   pageSize: number;
// }
