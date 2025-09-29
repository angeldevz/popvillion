import { PropsWithChildren } from "react";
import { GraphQLProvider } from "./GraphQLProvider";
import { LayoutProvider } from "./LayoutProvider";

export function AppProvider({ children }: PropsWithChildren) {
  return (
    <LayoutProvider>
      <GraphQLProvider>{children}</GraphQLProvider>
    </LayoutProvider>
  );
}
