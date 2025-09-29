import { Box, CircularProgress } from "@mui/material";
import { PropsWithChildren, Suspense } from "react";

export function Loading({ children }: PropsWithChildren) {
  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "column",
        gap: 4,
        alignItems: "center",
        mx: "auto",
        my: 10,
      }}
    >
      <CircularProgress color="inherit" />
      <span>{children}</span>
    </Box>
  );
}

interface SuspenseLoadingProps {
  label: string;
  children: React.ReactNode;
}

export function SuspenseLoading({ label, children }: SuspenseLoadingProps) {
  return (
    <Suspense
      fallback={
        <Box
          sx={{
            display: "flex",
            flexFlow: "column",
            gap: 4,
            alignItems: "center",
            mx: "auto",
            my: 10,
          }}
        >
          <CircularProgress color="inherit" />
          <span>{label}</span>
        </Box>
      }
    >
      {children}
    </Suspense>
  );
}
