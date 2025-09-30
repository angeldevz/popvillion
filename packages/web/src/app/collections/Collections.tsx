"use client";
import { PremiumButton } from "@components/Button/PrimaryButton";
import { CollectionItem } from "@components/Cart/CollectionItem";
import { useCollectionsSuspenseQuery } from "@generated/index";
import { Box, List, ListItem } from "@mui/material";
import Link from "next/link";

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
            <CollectionItem collection={collection} />
          </ListItem>
        ))}
      </List>

      <PremiumButton
        href="/cart/"
        LinkComponent={Link}
        sx={{ alignSelf: "center" }}
      >
        Go to Basket
      </PremiumButton>
    </Box>
  );
}
