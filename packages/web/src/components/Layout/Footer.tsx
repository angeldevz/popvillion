import { WavingHandOutlined } from "@mui/icons-material";
import { Box, Container } from "@mui/material";
import Link from "next/link";

export function Footer() {
  return (
    <Box component="footer" sx={{ py: 8, px: 2, mt: "auto" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 4,
          fontSize: "0.875rem",
          color: "text.secondary",
        }}
      >
        <span className="flex flex-row gap-2 flex-wrap">
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
        </span>
        <span className="flex flex-row gap-2 flex-wrap">
          <span>See a fave?</span>
          <span>
            Some pieces are open to offers — say hi!{" "}
            <WavingHandOutlined sx={{ fontSize: "1rem" }} />
          </span>
        </span>
      </Container>
    </Box>
  );
}
