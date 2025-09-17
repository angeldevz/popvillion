import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Header } from "@components/Layout/Header";
import theme from "../utils/theme";
import { Footer } from "@components/Layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PopVillion 🎁 | A Playful World of Collectibles",
  description:
    "Welcome to PopVillion — a happy little vault of fun collectibles, from Funkos to quirky treasures! Someday, these cuties might be up for adoption. 🌟",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            sx={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Header />
            <main>{children}</main>
            <Footer />
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
