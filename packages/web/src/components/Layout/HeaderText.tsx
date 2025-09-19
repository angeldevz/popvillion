"use client";

import { Box, Typography } from "@mui/material";

export function HeaderText() {
  return (
    <Box sx={{ display: "flex", flexFlow: "column", alignItems: "flex-start" }}>
      <Typography
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
        Atomic Siopao
      </Typography>
      <Typography
        component={"span"}
        variant="subtitle2"
        sx={{
          fontSize: "1rem",
          color: "text.secondary",
        }}
      >
        Blast Into a World of Fun Finds!
      </Typography>
    </Box>
  );
}
