import { Box, Container, Typography } from "@mui/material";

export function Footer() {
  return (
    <Box component="footer" sx={{ p: 5 }}>
      <Container>
        <Typography variant="body2" align="center" color="white">
          © {new Date().getFullYear()} PopVillion Collections. All rights
          reserved.
        </Typography>
      </Container>
    </Box>
  );
}
