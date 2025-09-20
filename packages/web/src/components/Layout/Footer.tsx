import { Box, Container } from "@mui/material";
import Link from "next/link";

export function Footer() {
  return (
    <Box component="footer" sx={{ py: 8, px: 2, mt: "auto" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 1,
          fontSize: "0.875rem",
          color: "text.secondary",
        }}
      >
          <span>© {new Date().getFullYear()} Marco Collectibles.</span>
          <span>
            Curated by{" "}
            <Link
              href="https://www.facebook.com/AtomicSiopaoTv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline text-primary"
            >
              AtomicSiopaoTV.
            </Link>
          </span>
      </Container>
    </Box>
  );
}
