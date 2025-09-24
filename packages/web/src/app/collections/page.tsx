'use client'
import { Box, Container, List, ListItem, Typography } from "@mui/material";
import { useCollectionsQuery } from "@generated/index";
import Image from "next/image";


export default function Page() {
  const { data, loading, error } = useCollectionsQuery();
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4, display: "flex", flexFlow: "column", gap: 4 }}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", md: "2rem", lg: "3rem" },
            color: "primary.contrastText",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Collections
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "text.secondary", fontSize: "1.2rem" }}
        >
          Take a joyful stroll through our shelf of favorites. See something you
          love? Make a friendly offer and let's chat!
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexFlow: "column", gap: 4 }}>
        <List>
          {data?.collections?.map((collection) => (
            <ListItem key={collection.id}>
              <Typography variant="h2">{collection.name}</Typography>
              <Typography variant="body1">{collection.remarks}</Typography>
              <Image src={collection.pictures[0]} alt="Picture" width={200} height={200} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
}
