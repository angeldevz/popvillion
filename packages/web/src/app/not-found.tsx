"use client";
import { Box, Container, Typography } from "@mui/material";
import Sadness from "./_assets/sadness.png";
import Image from "next/image";
interface Props {
  error: Error;
}
export default function Error(_: Props) {
  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 4,
        gap: 4,
        margin: "auto",
        display: "flex",
        flexFlow: "row",
        flexWrap: "wrap-reverse",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexFlow: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          align="center"
          color="primary.light"
        >
          Oh no! 😭
        </Typography>
        <Typography variant="body1" component="p" align="center">
          Uh-oh! This Pop! is vaulted — and so is the page you're looking for.
        </Typography>
      </Box>
      <Image src={Sadness} alt="Sadness" width={336} height={367} className="w-auto h-60 lg:h-auto" />
    </Container>
  );
}
