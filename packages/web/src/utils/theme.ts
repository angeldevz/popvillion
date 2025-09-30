"use client";
// theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // fits both Joker's chaos and Deadpool's edginess
    primary: {
      main: "#6A0DAD", // Joker purple
      light: "#9b4de0", // lighter purple
      dark: "#4a0879", // deeper tone
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#2ECC71", // Joker green
      light: "#58d68d",
      dark: "#1e8449",
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
      paper: "rgba(255, 255, 255, 0.1)",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B0BEC5", // Deadpool gray for subtlety
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: { fontWeight: 700, color: "#6A0DAD" }, // Joker purple
    h2: { fontWeight: 600, color: "#B71C1C" }, // Deadpool crimson
    h3: { fontWeight: 500, color: "#2ECC71" }, // Joker green
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
          backgroundColor: "#6A0DAD",
          "&:hover": { backgroundColor: "#4a0879" },
        },
        containedSecondary: {
          backgroundColor: "#B71C1C",
          "&:hover": { backgroundColor: "#7f0000" },
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
