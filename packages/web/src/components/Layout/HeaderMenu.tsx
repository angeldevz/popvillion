"use client";
import { useCart } from "@hooks/useCart";
import { List, ListItem, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function HeaderMenu() {
  const pathname = usePathname();
  const cart = useCart((state) => state.cart);

  const headerMenu = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "/collections/" },
    { name: "Contact", href: "/contact/" },
    {
      name: (
        <span className="flex flex-row gap-2">
          <span>Cart</span>
          <span>({cart.length})</span>
        </span>
      ),
      href: "/cart",
    },
  ];
  return (
    <List
      sx={{
        display: "flex",
        flexFlow: { xs: "column", md: "row" },
        fontWeight: "bold",
      }}
    >
      {headerMenu.map((item, index) => (
        <ListItem key={index}>
          <Typography
            component={Link}
            href={item.href}
            sx={{
              textDecoration: "none",
              ":hover": {
                textDecoration: "underline",
                textUnderlineOffset: ".5rem",
                color: "secondary.light",
                backgroundColor: "transparent",
              },
              ...(pathname === item.href
                ? {
                    textDecoration: "underline",
                    textUnderlineOffset: ".5rem",
                    color: "secondary.light",
                    backgroundColor: "transparent",
                  }
                : {}),
            }}
          >
            {item.name}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
}
