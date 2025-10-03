"use client";
import { useCart } from "@hooks/useCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, List, ListItem, Typography } from "@mui/material";
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
        <Badge
          badgeContent={cart.length}
          color="secondary"
          sx={{
            display: "flex",
            flexFlow: "row",
            gap: 1,
            alignItems: "center",
          }}
        >
          Cart <ShoppingCartIcon sx={{ fontSize: "1rem" }} />
        </Badge>
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
                color: "primary.main",
                backgroundColor: "transparent",
              },
              ...(pathname === item.href
                ? {
                    textDecoration: "underline",
                    textUnderlineOffset: ".5rem",
                    color: "primary.main",
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
