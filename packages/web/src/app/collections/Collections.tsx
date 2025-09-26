"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Grow,
  List,
  ListItem,
} from "@mui/material";
import { useCollectionsSuspenseQuery } from "@generated/index";
import { PrimaryButton } from "@components/Button/PrimaryButton";
import { Tag } from "@mui/icons-material";

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
            <Grow in={true} timeout={200}>
              <Card
                variant="elevation"
                sx={{
                  width: "100%",
                  height: "100%",
                  p: 2,
                  rounded: 8,
                  display: "flex",
                  flexFlow: "column",
                  gap: 2,
                  boxShadow: "primary.main",
                }}
              >
                <CardHeader
                  title={collection.name}
                  subheader={collection.series}
                />
                <CardContent>
                  {collection.sticker && (
                    <Chip
                      icon={<Tag />}
                      label={collection.sticker}
                      variant="outlined" // Or 'filled' for a solid background
                    />
                  )}
                </CardContent>
                <CardActions
                  sx={{
                    mt: "auto",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {collection.negotiable ? (
                    <PrimaryButton>Send offer</PrimaryButton>
                  ) : (
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "success.dark" }}
                    >
                      Add to Cart
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grow>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
