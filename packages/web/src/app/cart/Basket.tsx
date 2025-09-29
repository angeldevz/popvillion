"use client";
import { useCart } from "@hooks/useCart";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { formatPrice } from "@utils/text";

export default function Basket() {
  const { cart } = useCart();
  const header = ["Name", "Price"];
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {header.map((item) => (
              <TableCell key={item} sx={{ fontWeight: "600" }}>
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{formatPrice(item.price ?? 0)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
