import { PropsWithChildren } from "react";
import { LayoutProvider } from "./LayoutProvider";
import { GraphQLProvider } from "./GraphQLProvider";

export function AppProvider({ children }: PropsWithChildren) {
  return (
    <LayoutProvider>
      <GraphQLProvider>{children}</GraphQLProvider>
    </LayoutProvider>
  );
}
