"use client";
import { CollectionItem } from "@components/Cart/CollectionItem";
import { useFeaturedSuspenseQuery } from "@generated/index";
import { List, ListItem } from "@mui/material";

export default function FeaturedCollections() {
  const { data } = useFeaturedSuspenseQuery();
  return (
    <List
      sx={{
        py: 4,
        mx: "auto",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      }}
    >
      {data?.featured?.map((collection) => (
        <ListItem key={collection.id}>
          <CollectionItem collection={collection} />
        </ListItem>
      ))}
    </List>
  );
}
