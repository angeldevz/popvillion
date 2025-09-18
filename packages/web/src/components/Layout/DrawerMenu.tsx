"use client";

import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import useWindowSize from "@hooks/useWindowSize";
import { HeaderMenu } from "./HeaderMenu";
import { HeaderText } from "./HeaderText";

export function DrawerMenu() {
  const windowSize = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (windowSize.width > 600) {
      setIsOpen(false);
    }
  }, [windowSize]);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <Box sx={{ display: { xs: "block", md: "none" } }}>
      <IconButton onClick={toggle}>
        <MenuIcon />
      </IconButton>
      <Drawer open={isOpen} onClose={toggle} anchor="left">
        <Box sx={{ display: "flex", flexDirection: "column", p: 2, gap: 4 }}>
          <HeaderText />
          <HeaderMenu />
        </Box>
      </Drawer>
    </Box>
  );
}
