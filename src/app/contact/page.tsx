import { Box, Container, Typography } from "@mui/material";

export default function Page() {
  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <Box sx={{ mb: 4, display: "flex", flexFlow: "column", gap: 8 }}>
        <Typography
          variant="h1"
          sx={{ fontWeight: "bold", fontSize: { xs: "1.5rem", lg: "3rem" } }}
        >
          Contact Us
        </Typography>
        <span>Please hesitate to contact us</span>
      </Box>
    </Container>
  );
}
