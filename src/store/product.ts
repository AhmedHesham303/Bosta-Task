import { create } from "zustand";

const useProduct = create((set) => ({
  image: "",
  name: "",
  quantity: 0,
  price: 0,
  incrementQuantity: () => set((state) => ({ quantity: state.quantity + 1 })),
  decrementQuantity: () => set((state) => ({ quantity: state.quantity - 1 })),
}));
