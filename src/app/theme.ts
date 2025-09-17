"use client";
// theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#63a4ff", // collectible blue (lighter for dark mode)
      light: "#8ecaff",
      dark: "#004ba0",
      contrastText: "#000000",
    },
    secondary: {
      main: "#ff6f60", // funko red (pops better on dark)
      light: "#ff8a80",
      dark: "#ab000d",
      contrastText: "#000000",
    },
    background: {
      default: "#121212", // dark background
      paper: "#1e1e1e",   // slightly lighter surfaces (cards, modals)
    },
    text: {
      primary: "#ffffff", // white text for readability
      secondary: "#b0b0b0", // muted gray
      disabled: "#666666",
    },
    success: {
      main: "#81c784",
      light: "#a5d6a7",
      dark: "#388e3c",
      contrastText: "#000",
    },
    warning: {
      main: "#ffb74d",
      light: "#ffcc80",
      dark: "#f57c00",
      contrastText: "#000",
    },
    info: {
      main: "#4fc3f7",
      light: "#81d4fa",
      dark: "#0288d1",
      contrastText: "#000",
    },
    error: {
      main: "#ef5350",
      light: "#e57373",
      dark: "#c62828",
      contrastText: "#000",
    },
    divider: "#333333",
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    body1: { fontSize: "1rem", lineHeight: 1.6 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: {
    borderRadius: 12, // softer, friendly look
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          backgroundImage: "url('./background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          "&::after": {
            content: '""',
            position: "fixed",
            width: "100%",
            height: "100%",
            inset: 0,
            zIndex: -1,
            backdropFilter: "blur(10px)", // 🔹 Glass blur
            backgroundColor: "rgba(0,0,0,0.7)", // darker overlay for dark mode
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 16px rgba(0,0,0,0.5)", // stronger shadow for dark
        },
      },
    },
  },
});

export default theme;
