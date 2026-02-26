import type { Product } from "@/@types/Product";
import {
  getCart,
  saveCart,
  clearCart as clearCartLS,
} from "@/lib/storeStorage";
import { create } from "zustand";

interface CartStore {
  products: Product[];
  totalPrice: number;
  getProductQuantity: (productId: number) => number;
  isInCart: (productId: number) => boolean;
  getProductStatus: (productId: number) => {
    exists: boolean;
    quantity: number;
  };
  addToCart: (product: Product) => void;
  incrementQuantity: (product: Product) => void;
  decrementQuantity: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
  products: getCart().products,
  totalPrice: getCart().totalPrice,

  addToCart: (product: Product) => {
    set((state) => {
      const products = [...state.products, { ...product, quantity: 1 }];
      const totalPrice = state.totalPrice + product.price;
      saveCart(products, totalPrice);
      return { products, totalPrice };
    });
  },

  incrementQuantity: (product: Product) => {
    set((state) => {
      const products = state.products.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p,
      );
      const totalPrice = state.totalPrice + product.price;
      saveCart(products, totalPrice);
      return { products, totalPrice };
    });
  },

  decrementQuantity: (product: Product) => {
    set((state) => {
      const products = state.products.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p,
      );
      const totalPrice = state.totalPrice - product.price;
      saveCart(products, totalPrice);
      return { products, totalPrice };
    });
  },

  removeFromCart: (product: Product) => {
    set((state) => {
      const products = state.products.filter((p) => p.id !== product.id);
      const totalPrice = state.totalPrice - product.price * product.quantity;
      saveCart(products, totalPrice);
      return { products, totalPrice };
    });
  },

  clearCart: () => {
    clearCartLS();
    set({ products: [], totalPrice: 0 });
  },

  getProductQuantity: (productId: number) => {
    const item = get().products.find((p) => p.id === productId);
    return item ? item.quantity : 0;
  },

  isInCart: (productId: number) => {
    return get().products.some((p) => p.id === productId);
  },

  getProductStatus: (productId: number) => {
    const item = get().products.find((p) => p.id === productId);
    return { exists: !!item, quantity: item?.quantity || 0 };
  },
}));
