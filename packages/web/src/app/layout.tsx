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

const title = "PopVillion 🎁 | A Playful World of Collectibles";
const description =
  "Welcome to PopVillion — a happy little vault of fun collectibles, from Funko Pops to quirky treasures! Someday, these cuties might be up for adoption. 🌟";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://d3fu52h97rrvnu.cloudfront.net/",
    siteName: "PopVillion",
    images: [
      {
        url: "https://d3fu52h97rrvnu.cloudfront.net/og-image.png", // Absolute URL
        width: 1200,
        height: 630,
        alt: "Welcome to PopVillion",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
              justifyContent: "flex-start",
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
