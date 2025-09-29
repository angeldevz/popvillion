import { CollectionFragmentFragment } from "@generated/index";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartState = {
  cart: CollectionFragmentFragment[];
};

export type CartActions = {
  setCart: (cart: CollectionFragmentFragment[]) => void;
  addToCart: (item: CollectionFragmentFragment) => void;
  removeFromCart: (item: CollectionFragmentFragment) => void;
};

export type CartStore = CartState & CartActions;

export const defaultCartState: CartState = {
  cart: [],
};

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      ...defaultCartState,
      total: () => get().cart.reduce((acc, item) => acc + (item.price ?? 0), 0),
      setCart: (cart: CollectionFragmentFragment[]) => set({ cart }),
      addToCart: (item: CollectionFragmentFragment) =>
        set((state) => ({ cart: [...state.cart, item] })),
      removeFromCart: (item: CollectionFragmentFragment) =>
        set((state) => ({
          cart: state.cart.filter((c) => c.id !== item.id),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-store",
    }
  )
);
