import { Fab, FabProps } from "@mui/material";
import Link from "next/link";

export function FloatingButton({ children, ...rest }: FabProps) {
  return (
    <Fab
      LinkComponent={Link}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce"
      {...rest}
    >
      {children}
    </Fab>
  );
}
