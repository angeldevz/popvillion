import { SectionATF } from "@components/Layout/Section";
import { SuspenseLoading } from "@components/Loading";
import { Box, Container, Typography } from "@mui/material";
import { lazy } from "react";
const Collections = lazy(() => import("./Collections"));

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
            Collections
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: "1.2rem" }}>
            Take a joyful stroll through our shelf of favorites. See something
            you love? Make a friendly offer and let's chat!
          </Typography>
        </Box>
        <SuspenseLoading label="Loading all the collections...">
          <Collections />
        </SuspenseLoading>
      </SectionATF>
    </Container>
  );
}
