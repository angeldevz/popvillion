import { Box, Typography, Button, Container } from "@mui/material";
import Image from "next/image";
import Hero from "./_assets/hero-image.png";

export default function Page() {
  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
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
            px: 4,
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontWeight: "bold", fontSize: { xs: "1.5rem", lg: "3rem" } }}
          >
            Welcome to PopVillion 🎉
          </Typography>
          <Typography variant="h6">
            A happy little vault of fun collectibles, from Funkos to quirky
            treasures! Someday, these cuties might be up for adoption. 🌟
          </Typography>
          <Button variant="contained" color="secondary" size="large">
            Shop Now
          </Button>
        </Box>
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <Image src={Hero} alt="Hero Image" width={500} height={500} className="w-auto h-60 lg:h-auto" />
        </Box>
      </Box>
    </Container>
  );
}
