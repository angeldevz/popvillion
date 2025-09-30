"use client";
import { useCart } from "@hooks/useCart";
import { PropsWithChildren, useEffect } from "react";
import { GraphQLProvider } from "./GraphQLProvider";
import { LayoutProvider } from "./LayoutProvider";

export function AppProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    // Sync across tabs
    window.addEventListener("storage", (event) => {
      if (event.key === "cart-store") {
        useCart.persist.rehydrate(); // re-read from localStorage
      }
    });
  }, []);
  return (
    <LayoutProvider>
      <GraphQLProvider>{children}</GraphQLProvider>
    </LayoutProvider>
  );
}
