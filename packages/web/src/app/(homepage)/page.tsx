import { FloatingButton } from "@components/Button/FloatingButton";
import {
  SectionAlternate,
  SectionATF,
  SectionPlain,
} from "@components/Layout/Section";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { Container } from "@mui/material";
import About from "./About";
import { ATF } from "./ATF";
import Featured from "./Featured";

export default function Page() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ py: 4, display: "flex", flexFlow: "column", gap: 4, width: "100%" }}
    >
      <SectionATF>
        <ATF />
        <FloatingButton aria-label="go to feature" href="#feature">
          <AutoAwesomeIcon />
        </FloatingButton>
      </SectionATF>
      <SectionAlternate>
        <About />
      </SectionAlternate>
      <SectionPlain>
        <Featured />
      </SectionPlain>
    </Container>
  );
}
