import { Box, Container, Link } from "@mui/material";

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
            color="secondary"
            className="underline-offset-4"
          >
            AtomicSiopaoTV.
          </Link>
        </span>
      </Container>
    </Box>
  );
}
