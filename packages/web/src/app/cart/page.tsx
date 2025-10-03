import { SectionATF } from "@components/Layout/Section";
import { Box, Container, Typography } from "@mui/material";
import Basket from "./Basket";

export default function Page() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <SectionATF>
        <Box sx={{ mb: 4, display: "flex", flexFlow: "column", gap: 4 }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", md: "2rem", lg: "3rem" },
              color: "primary.contrastText",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Basket
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: "1.2rem" }}>
            Oh! You have items in your basket. Take a look!
          </Typography>
        </Box>
        <Basket />
      </SectionATF>
    </Container>
  );
}
