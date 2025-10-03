"use client";
// theme.ts
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    customBackground: {
      main: string;
      light: string;
      dark: string;
    };
  }
  interface PaletteOptions {
    customBackground?: {
      main?: string;
      light?: string;
      dark?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    mode: "dark", // fits both Joker's chaos and Deadpool's edginess
    primary: {
      main: "#2ECC71", // Joker green (swapped from secondary)
      light: "#58d68d",
      dark: "#1e8449",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#6A0DAD", // Joker purple (swapped from primary)
      light: "#9b4de0",
      dark: "#4a0879",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#2ECC71", // Joker green
      light: "#58d68d",
      dark: "#1e8449",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#E50914", // Joker’s blood red smile
      light: "#ff4c58",
      dark: "#a00008",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#FFD700", // Joker’s golden vest
      light: "#ffea61",
      dark: "#c7a600",
      contrastText: "#000000",
    },
    info: {
      main: "#B0BEC5", // Deadpool steel gray
      light: "#eceff1",
      dark: "#808e95",
      contrastText: "#000000",
    },
    background: {
      default: "#121212", // dark neutral background
      paper: "#1E1E1E",
    },
    customBackground: {
      main: "rgba(255, 255, 255, 0.1)",
      light: "rgba(255, 255, 255, 0.5)",
      dark: "rgba(0, 0, 0, 0.5)",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B0BEC5", // Deadpool gray for subtlety
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: { fontSize: "2.5rem", fontWeight: 700, color: "#2ECC71" }, // Joker green (swapped)
    h2: { fontSize: "2rem", fontWeight: 600, color: "#B71C1C" }, // Deadpool crimson
    h3: { fontSize: "1.8rem", fontWeight: 500, color: "#6A0DAD" }, // Joker purple (swapped)
    h4: { fontSize: "1.6rem" },
    h5: { fontSize: "1.2rem" },
    h6: { fontSize: "1rem" },
    subtitle1: { fontSize: ".8rem" },
    subtitle2: { fontSize: ".8rem" },
    body1: { color: "#FFFFFF" },
    body2: { color: "#B0BEC5" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          backgroundImage: "url('/background.jpg')",
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
          borderRadius: "12px",
          textTransform: "none",
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: "#229954", // swapped to green
          "&:hover": { backgroundColor: "#2ECC71" },
        },
        containedSecondary: {
          backgroundColor: "#6A0DAD", // swapped to purple
          "&:hover": { backgroundColor: "#4a0879" },
        },
        outlinedPrimary: {
          border: "2px solid #2ECC71",
          color: "#2ECC71",
          "&:hover": {
            border: "2px solid #1e8449",
            backgroundColor: "rgba(46, 204, 113, 0.1)", // subtle green tint
          },
        },
        outlinedSecondary: {
          border: "2px solid #6A0DAD",
          backgroundColor: "rgba(106, 13, 173, 0.2)", // subtle purple tint
          color: "#FFFFFF",
          "&:hover": {
            border: "2px solid #9b4de0",
            backgroundColor: "rgba(106, 13, 173, 0.5)", // subtle purple tint
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#000000", // strong contrast navbar
        },
      },
    },
  },
});

export default theme;
