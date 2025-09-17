"use client";

import { Box, Typography } from "@mui/material";

export function HeaderText() {
  return (
    <Box>
      <Typography
        variant="h6"
        component="a"
        href="/"
        sx={{
          flexGrow: 1,
          textDecoration: "none",
          color: "inherit",
          fontWeight: 700,
          fontSize: "1.5rem",
        }}
      >
        PopVillion
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: "1rem",
          color: "text.secondary",
        }}
      >
        A Playful World of Collectibles
      </Typography>
    </Box>
  );
}