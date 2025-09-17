import { Box } from "@mui/material";
import Image from "next/image";
import Logo from "./logo-circle.png";

export function HeaderLogo() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: { xs: "15%", md: "auto" },
      }}
      component={"a"}
      href="/"
    >
      <Image src={Logo} alt="PopVillion Logo" width={160} height={160} />
    </Box>
  );
}