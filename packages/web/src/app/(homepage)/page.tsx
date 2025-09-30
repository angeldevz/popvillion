import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { Container, Fab } from "@mui/material";
import Link from "next/link";
import { ATF } from "./ATF";
import Featured from "./Featured";

export default function Page() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ py: 4, display: "flex", flexFlow: "column", gap: 4, width: "100%" }}
    >
      <Container
        component={"section"}
        maxWidth="xl"
        sx={{ minHeight: "80vh", width: "100%" }}
      >
        <ATF />
        <Fab
          color="info"
          aria-label="go to feature"
          href="#feature"
          LinkComponent={Link}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        >
          <AutoAwesomeIcon />
        </Fab>
      </Container>
      <Container
        id="feature"
        component={"section"}
        disableGutters
        maxWidth={false}
        sx={{
          minHeight: "100vh",
          width: "100%",
          py: 10,
          backgroundColor: "background.paper",
          backdropFilter: "blur(50px)",
          border: 1,
          borderColor: "background.paper",
        }}
        // className="backdrop-blur-md border border-white/10"
      >
        <Featured />
      </Container>
    </Container>
  );
}
