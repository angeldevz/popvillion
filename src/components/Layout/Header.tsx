"use client";

import { Box, Container } from "@mui/material";
import { HeaderMenu } from "./HeaderMenu";
import { DrawerMenu } from "./DrawerMenu";
import { HeaderText } from "./HeaderText";
import { HeaderLogo } from "./HeaderLogo";

export function Header() {
  return (
    <header>
      <Container
        maxWidth="xl"
        sx={{
          width: "100%",
          py: 4,
          display: "flex",
          alignItems: "center",
          flexFlow: { xs: "row-reverse", md: "row" },
          justifyContent: { xs: "left", md: "space-between" },
          gap: 2,
        }}
      >
        <HeaderText />
        <HeaderLogo />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <HeaderMenu />
        </Box>
        <DrawerMenu />
      </Container>
    </header>
  );
}
