import { Box } from "@mui/material";
import Image from "next/image";
import Logo from "./logo-circle.png";
import Characters from "./characters.png";

export function HeaderLogo() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: { xs: "15%", md: "auto" },
        position: "relative",
        ":hover .scale-img": { transform: "scale(1.5)" },
        ":hover .main-img": { filter: "blur(4px)",  },
      }}
      component={"a"}
      href="/"
    >
      <Image className="main-img transition-all duration-500" src={Logo} alt="PopVillion Logo" width={160} height={160} />
      <Image
        src={Characters}
        alt="PopVillion Logo"
        width={160}
        height={160}
        className="scale-img transition-all duration-500 absolute top-0 right-0"
      />
    </Box>
  );
}
