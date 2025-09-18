import { Box, Container } from "@mui/material";
import Link from "next/link";

export function Footer() {
  return (
    <Box component="footer" sx={{ p: 4, mt: 'auto' }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 2,
          fontSize: "0.875rem",
          color: "text.secondary",
        }}
      >
        <span>
          © {new Date().getFullYear()} Marco Collectibles. Curated by{" "}
          <Link
            href="https://www.facebook.com/AtomicSiopaoTv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline text-primary"
          >
            AtomicSiopaoTV
          </Link>
        </span>
        <span>See a fave? 🎁 Some pieces are open to offers — say hi!</span>
      </Container>
    </Box>
  );
}
