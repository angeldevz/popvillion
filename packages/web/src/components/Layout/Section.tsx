import { Container } from "@mui/material";
import { HTMLAttributes } from "react";

export function SectionATF({
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <Container
      component={"section"}
      maxWidth="xl"
      sx={{ minHeight: "80vh", width: "100%" }}
      {...rest}
    >
      {children}
    </Container>
  );
}

export function SectionAlternate({
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <Container
      component={"section"}
      disableGutters
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        width: "100%",
        py: 10,
        backgroundColor: "customBackground.main",
        backdropFilter: "blur(50px)",
        border: 1,
        borderColor: "customBackground.main",
      }}
      {...rest}
    >
      {children}
    </Container>
  );
}

export function SectionPlain({
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <Container
      id="feature"
      component={"section"}
      sx={{
        minHeight: "100vh",
        width: "100%",
        py: 10,
      }}
      {...rest}
    >
      {children}
    </Container>
  );
}
