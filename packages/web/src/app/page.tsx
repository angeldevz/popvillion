import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";
import Hero from "./_assets/hero-image.png";
import { PrimaryButton } from "@components/Button/PrimaryButton";

export default function Page() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box
        sx={{
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
            Atomic Siopao's Emporium!
          </Typography>
          <Typography
            component={"h2"}
            variant="subtitle1"
            sx={{ color: "text.secondary", fontSize: "1.2rem" }}
          >
            A happy little vault of fun collectibles, from Funko Pops to quirky
            treasures! Someday, these cuties might be up for adoption. 🌟
          </Typography>
          <PrimaryButton>Shop Now</PrimaryButton>
        </Box>
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <Image
            src={Hero}
            alt="Hero Image"
            width={500}
            height={500}
            className="w-50 md:w-70 lg:w-80 xl:w-auto"
          />
        </Box>
      </Box>
    </Container>
  );
}
