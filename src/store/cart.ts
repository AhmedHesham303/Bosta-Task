import type { Product } from "@/@types/Product"
import { create } from "zustand"
type CartStore = {
  products: Product[],
  totalPrice:number,
  addProduct: () => void,
  removeProduct:()=>void,
}
export const useCartStore<CartStore> = create((set) => ({
  products:,
  totalPrice:,
  addProduct: () => set((state) => ({
    console.log("added");
    
  }))
  removeProduct: () => set((state) => ({
    console.log("removed");
    
  }))
})); 