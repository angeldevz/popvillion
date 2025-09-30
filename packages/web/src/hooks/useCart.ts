import { CollectionItemFragmentFragment } from "@generated/index";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartState = {
  cart: CollectionItemFragmentFragment[];
};

export type CartActions = {
  setCart: (cart: CollectionItemFragmentFragment[]) => void;
  addToCart: (item: CollectionItemFragmentFragment) => void;
  removeFromCart: (item: CollectionItemFragmentFragment) => void;
};

export type CartStore = CartState & CartActions;

export const defaultCartState: CartState = {
  cart: [],
};

export const useCart = create<CartStore>()(
  persist(
    (set) => ({
      ...defaultCartState,
      setCart: (cart: CollectionItemFragmentFragment[]) => set({ cart }),
      addToCart: (item: CollectionItemFragmentFragment) =>
        set((state) => ({ cart: [...state.cart, item] })),
      removeFromCart: (item: CollectionItemFragmentFragment) =>
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

// Sync across tabs
window.addEventListener("storage", (event) => {
  if (event.key === "cart-store") {
    useCart.persist.rehydrate(); // re-read from localStorage
  }
});
