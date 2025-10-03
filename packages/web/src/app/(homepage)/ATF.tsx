import {
  PrimaryButton,
  SecondaryButton,
} from "@components/Button/PrimaryButton";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Hero from "./_assets/hero-image.png";

export function ATF() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexFlow: { xs: "column-reverse", md: "row" },
        flexWrap: "wrap",
        gap: 4,
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          gap: 8,
          px: { xs: 2, md: 4 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", md: "2rem", lg: "3rem" },
            color: "primary.contrastText",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Welcome to <br />
          Atomic Siopao's Collectibles Emporium
        </Typography>
        <Typography
          component={"h2"}
          variant="subtitle1"
          sx={{ fontSize: "1.2rem" }}
        >
          A happy little vault of fun collectibles, from Funko Pops to quirky
          treasures! Someday, these cuties might be up for adoption. 🌟
        </Typography>
        <Box
          sx={{ display: "flex", flexFlow: "row", gap: 2, flexWrap: "wrap" }}
        >
          <PrimaryButton LinkComponent={Link} href="/collections/">
            Browse Collections
          </PrimaryButton>
          <SecondaryButton LinkComponent={Link} href="/contact/">
            Let's talk
          </SecondaryButton>
        </Box>
      </Box>
      <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <Image
          src={Hero}
          alt="Hero Image"
          width={500}
          height={500}
          className="w-50 md:w-70 lg:w-80 xl:w-auto"
          fetchPriority="high"
          priority
        />
      </Box>
    </Box>
  );
}
