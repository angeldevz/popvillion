"use client";
import { useCollectionsSuspenseQuery } from "@generated/index";
import { Box, List, ListItem } from "@mui/material";
import { Collection } from "./Collection";

export default function Collections() {
  const { data } = useCollectionsSuspenseQuery();
  return (
    <Box sx={{ display: "flex", flexFlow: "column", gap: 4 }}>
      <List
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        }}
      >
        {data?.collections?.map((collection) => (
          <ListItem key={collection.id}>
            <Collection collection={collection} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
