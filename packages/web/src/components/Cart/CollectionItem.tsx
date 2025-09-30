"use client";
import {
  LightButton,
  PremiumButton,
  SecondaryButton,
} from "@components/Button/PrimaryButton";
import { CollectionItemFragmentFragment } from "@generated/index";
import { useCart } from "@hooks/useCart";
import { Tag } from "@mui/icons-material";
import CheckIcon from "@mui/icons-material/Check";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Grow,
} from "@mui/material";
import { useEffect, useState } from "react";

interface Props {
  collection: CollectionItemFragmentFragment;
}

export function CollectionItem({ collection }: Props) {
  const cart = useCart((state) => state.cart);
  const addToCart = useCart((state) => state.addToCart);

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
          display: "flex",
          flexFlow: "column",
          backgroundColor: "rgba(106, 13, 173, 0.15)", // Joker purple tint or // gold tint
          backdropFilter: "blur(30px)", // keeps the glassy look consistent
          borderRadius: 3,
          border: "1px solid rgba(255,255,255,0.1)",
          "&:hover": {
            backgroundColor: "rgba(106, 13, 173, 0.25)", // stronger tint on hover
          },
        }}
      >
        <CardHeader title={collection.name} subheader={collection.series} />
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
            <LightButton endIcon={<CheckIcon />}>Added!</LightButton>
          ) : collection.negotiable ? (
            <PremiumButton>Send offer</PremiumButton>
          ) : (
            <SecondaryButton variant="contained" onClick={add}>
              Add to Cart
            </SecondaryButton>
          )}
        </CardActions>
      </Card>
    </Grow>
  );
}
