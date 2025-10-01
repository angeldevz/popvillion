"use client";
import { SuspenseLoading } from "@components/Loading";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { Box, Typography } from "@mui/material";
import { lazy } from "react";

const Collections = lazy(() => import("./Collections"));

export default function Featured() {
  return (
    <Box
      maxWidth={"lg"}
      sx={{
        minHeight: "70vh",
        width: "100%",
        mx: "auto",
        display: "flex",
        flexFlow: "column",
        flexWrap: "wrap",
        gap: 4,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "1.5rem", md: "2rem", lg: "3rem" },
          color: "primary.contrastText",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <AutoAwesomeIcon className="text-3xl mr-4" />
        Featured Collections
      </Typography>
      <Typography variant="body1">
        Exclusive access to limited edition and hard-to-find collectibles. Build
        your dream collection with us!
      </Typography>
      <SuspenseLoading label="Loading all the collections...">
        <Collections />
      </SuspenseLoading>
    </Box>
  );
}
