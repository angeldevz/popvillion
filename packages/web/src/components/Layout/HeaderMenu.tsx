import { List, ListItem, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function HeaderMenu() {
  const pathname = usePathname();

  const headerMenu = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "/collections" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <List
      sx={{
        display: "flex",
        flexFlow: { xs: "column", md: "row" },
        gap: { md: 1, lg: 2, xl: 4 },
        fontWeight: "bold",
      }}
    >
      {headerMenu.map((item) => (
        <ListItem key={item.name}>
          <Typography
            component={Link}
            href={item.href}
            sx={{
              ":hover": {
                textDecoration: "underline",
                textUnderlineOffset: "1rem",
                color: "primary.light",
                backgroundColor: "transparent",
              },
              ...(pathname === item.href
                ? {
                    textDecoration: "underline",
                    textUnderlineOffset: "1rem",
                    color: "primary.light",
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
