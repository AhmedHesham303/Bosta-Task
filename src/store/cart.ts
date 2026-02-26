import type { Product } from "@/@types/Product";
import {
  getCart,
  addToCart as addToCartLS,
  removeFromCart as removeFromCartLS,
  decrementQuantity as decrementQuantityLS,
  incremrntQuantity as incrementQuantityLS,
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
  loadCart: () => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
  products: getCart().products,
  totalPrice: getCart().totalPrice,

  loadCart: () => {
    const { products, totalPrice } = getCart();
    set({ products, totalPrice });
  },

  addToCart: (product: Product) => {
    addToCartLS(product);
    get().loadCart();
  },

  incrementQuantity: (product: Product) => {
    incrementQuantityLS(product);
    get().loadCart();
  },

  decrementQuantity: (product: Product) => {
    decrementQuantityLS(product);
    get().loadCart();
  },

  removeFromCart: (product: Product) => {
    removeFromCartLS(product);
    get().loadCart();
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
