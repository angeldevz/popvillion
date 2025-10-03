import { SectionATF } from "@components/Layout/Section";
import { Facebook } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import { OurLocation } from "./OurLocation";

export default function Page() {
  return (
    <Container maxWidth="xl">
      <SectionATF>
        <Box sx={{ py: 4, display: "flex", flexFlow: "row", gap: 8 }}>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexFlow: "column",
              gap: 2,
              alignItems: "start",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1.5rem", md: "2rem", lg: "3rem" },
                color: "primary.contrastText",
                textAlign: { xs: "center", md: "left" },
                mb: 4,
              }}
            >
              Connect
            </Typography>
            <Typography variant="subtitle1" sx={{ fontSize: "1.2rem" }}>
              See something you love? Make a friendly offer and let's chat!
            </Typography>
            <Button
              startIcon={<Facebook />}
              href="https://m.me/AtomicSiopaoTv"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#0084FF" }}
            >
              Message us
            </Button>
            <Typography variant="subtitle1" sx={{ fontSize: "1rem" }}>
              Follow us for updates on new arrivals and exclusive deals!
            </Typography>
            
          </Box>
          <Box
            sx={{
              flex: 1,
            }}
          >
            <OurLocation />
          </Box>
        </Box>
      </SectionATF>
    </Container>
  );
}
