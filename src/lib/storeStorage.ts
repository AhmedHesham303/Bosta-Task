// import type { Cart } from "@/@types/Cart";
// import type { Product } from "@/@types/Product";

import type { Cart } from "@/@types/Cart";
import type { Product } from "@/@types/Product";

const CART_KEY = "cart";
const emptyCart: Cart = { products: [], totalPrice: 0 };

export const getCart = (): Cart => {
  const data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : emptyCart;
};

export const addToCart = (product: Product) => {
  const { products, totalPrice } = getCart();
  let updatedProducts;

  const alreadyExist = products.find((p) => p.id === product.id);

  if (alreadyExist) {
    updatedProducts = products.map((p) =>
      p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p,
    );
  } else {
    updatedProducts = [...products, { ...product, quantity: 1 }];
  }

  const updatedTotalPrice = totalPrice + product.price;

  const updatedCart = {
    products: updatedProducts,
    totalPrice: updatedTotalPrice,
  };
  localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
};

export const removeFromCart = (product: Product) => {
  const { products, totalPrice } = getCart();
  let updatedProducts;
  const updatedTotalPrice = totalPrice - product.price;
  const alreadyExist = products.find((p) => p.id === product.id);
  if (!alreadyExist) return;
  if (alreadyExist && alreadyExist.quantity > 1) {
    updatedProducts = products.map((p) =>
      p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p,
    );
  } else {
    updatedProducts = products.filter((p) => p.id !== product.id);
  }

  const updatedCart: Cart = {
    products: updatedProducts,
    totalPrice: updatedTotalPrice,
  };
  localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
};
