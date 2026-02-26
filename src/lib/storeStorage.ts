import type { Cart } from "@/@types/Cart";
import type { Product } from "@/@types/Product";

const CART_KEY = "cart";
const emptyCart: Cart = { products: [], totalPrice: 0 };

export const getCart = (): Cart => {
  const data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : emptyCart;
};

export const saveCart = (products: Product[], totalPrice: number): void => {
  localStorage.setItem(CART_KEY, JSON.stringify({ products, totalPrice }));
};

export const clearCart = (): void => {
  localStorage.removeItem(CART_KEY);
};
