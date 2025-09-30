"use client";
import { Box, Typography } from "@mui/material";

export default function Featured() {
  return (
    <Box
      maxWidth={"lg"}
      sx={{
        minHeight: "70vh",
        width: "100%",
        display: "flex",
        flexFlow: "column",
        flexWrap: "wrap",
        gap: 4,
        alignItems: "center",
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
        About Us
      </Typography>
      <Typography variant="body1">
        Welcome to our personal treasure trove! This is my carefully curated
        collection of Funko Pops, anime figures, and collectibles that I've
        gathered with love over the years.
      </Typography>
    </Box>
  );
}
