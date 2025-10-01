"use client";
import { Box, Card, Typography } from "@mui/material";

export default function About() {
  const data = [
    {
      title: "Personal Collection",
      description:
        "These are pieces from my own collection, carefully selected and maintained. Each item has been part of my journey as a collector.",
    },
    {
      title: "Open to Discussion",
      description:
        "While these items are special to me, some may be available for the right home. Feel free to reach out and let's have a friendly chat!",
    },
    {
      title: "Collector to Collector",
      description:
        "I understand the joy of collecting! Whether you're interested in purchasing or just want to chat about our shared hobby, I'm here.",
    },
  ];
  return (
    <Box
      maxWidth={"lg"}
      sx={{
        minHeight: "70vh",
        width: "100%",
        mx: "auto",
        display: "flex",
        flexFlow: "column",
        flexWrap: "wrap",
        gap: 4,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "1.5rem", md: "2rem", lg: "3rem" },
          color: "primary.contrastText",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        About Us
      </Typography>
      <Typography variant="body1">
        Welcome to our personal treasure trove! This is my carefully curated
        collection of Funko Pops, anime figures, and collectibles that I've
        gathered with love over the years.
      </Typography>

      <Box
        sx={{
          py: 4,
          mx: "auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 4,
        }}
      >
        {data.map((item, index) => (
          <Card
            variant="outlined"
            key={index}
            sx={{
              padding: 4,
              borderRadius: 3,
              background: "linear-gradient(145deg, #4a0879 0%, #6a0dad 100%)",
              display: "flex",
              flexFlow: "column",
              gap: 2,
              boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
              transition: "all 0.2s ease",
              "&:hover": {
                filter: "brightness(1.1)", // subtle hover effect
                transform: "translateY(-2px)",
              },
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: 600 }}>
              {item.title}
            </Typography>
            <Typography variant="subtitle2">{item.description}</Typography>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
