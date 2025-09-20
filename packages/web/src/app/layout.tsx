import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@styles/globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
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

const title = "Atomic Siopao Universe | Blast Into a World of Fun Finds!";
const description =
  "Step into the Atomic Siopao Universe — your playful vault of awesome collectibles, from Funko Pops to rare quirky finds! Who knows? Someday, these cuties could be yours. 🚀";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://d3fu52h97rrvnu.cloudfront.net/",
    siteName: "Atomic Siopao Universe",
    images: [
      {
        url: "https://d3fu52h97rrvnu.cloudfront.net/og-image.png", // Absolute URL
        width: 1200,
        height: 630,
        alt: "Welcome to Atomic Siopao Universe",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <ThemeProvider theme={theme} >
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
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
