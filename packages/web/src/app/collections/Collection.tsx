"use client";
import { PrimaryButton } from "@components/Button/PrimaryButton";
import { CollectionFragmentFragment } from "@generated/index";
import { useCart } from "@hooks/useCart";
import { Tag } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Grow,
} from "@mui/material";
import { useEffect, useState } from "react";

interface Props {
  collection: CollectionFragmentFragment;
}

export function Collection({ collection }: Props) {
  const { addToCart, cart } = useCart();

  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const isAdded = cart.some((item) => item.id === collection.id);
    setIsAdded(isAdded);
  }, [cart]);

  function add() {
    addToCart(collection);
  }

  return (
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
          //   action={
          //     <IconButton
          //       aria-label="remove"
          //       onClick={() => removeCollection(collection)}
          //     >
          //       <TrashIcon />
          //     </IconButton>
          //   }
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
          {isAdded ? (
            <Button variant="contained" disabled>
              Added!
            </Button>
          ) : collection.negotiable ? (
            <PrimaryButton>Send offer</PrimaryButton>
          ) : (
            <Button
              variant="contained"
              sx={{ backgroundColor: "success.dark" }}
              onClick={add}
            >
              Add to Cart
            </Button>
          )}
        </CardActions>
      </Card>
    </Grow>
  );
}
