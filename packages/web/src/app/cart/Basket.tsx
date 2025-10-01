"use client";
import { useCart } from "@hooks/useCart";
import TrashIcon from "@mui/icons-material/Delete";
import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { formatPrice } from "@utils/text";
import { useMemo } from "react";

export default function Basket() {
  const cart = useCart((state) => state.cart);
  const removeFromCart = useCart((state) => state.removeFromCart);

  const total = useMemo(
    () => cart.reduce((acc, item) => acc + (item.price ?? 0), 0),
    [cart]
  );

  const header = [
    {
      id: "action",
      label: "",
      width: 10,
    },
    {
      id: "name",
      label: "Name",
    },
    {
      id: "sticker",
      label: "Sticker",
    },
    {
      id: "price",
      label: "Price",
    },
  ];

  return (
    <TableContainer sx={{ borderRadius: 3 }}>
      <Table size="medium">
        <TableHead sx={{ backgroundColor: "customBackground.dark" }}>
          <TableRow>
            {header.map((item) => (
              <TableCell
                key={item.id}
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  width: item.width,
                }}
              >
                {item.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody
          sx={{
            backgroundColor: "customBackground.dark",
            p: 2,
            borderRadius: 3,
          }}
        >
          {cart.map((item) => (
            <TableRow key={item.id}>
              <TableCell padding="checkbox">
                <IconButton onClick={() => removeFromCart(item)}>
                  <TrashIcon />
                </IconButton>
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.sticker}</TableCell>
              <TableCell>{formatPrice(item.price ?? 0)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box sx={{ display: "flex", justifyContent: "right", mt: 4, mr: 16 }}>
        <Typography sx={{ fontWeight: 600, fontSize: "1.2rem" }}>
          Total: {formatPrice(total)}
        </Typography>
      </Box>
    </TableContainer>
  );
}
