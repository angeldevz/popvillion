import { List, ListItemButton } from "@mui/material";
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
        gap: { xs: 1, md: 4 },
        fontWeight: "bold",
      }}
    >
      {headerMenu.map((item) => (
        <ListItemButton
          LinkComponent={Link}
          key={item.name}
          href={item.href}
          sx={{
            ":hover": {
              textDecoration: "underline",
              textUnderlineOffset: "1rem",
              color: "primary.main",
              backgroundColor: "transparent",
            },
            ...(pathname === item.href
              ? {
                  textDecoration: "underline",
                  textUnderlineOffset: "1rem",
                  color: "primary.main",
                  backgroundColor: "transparent",
                }
              : {}),
          }}
        >
          {item.name}
        </ListItemButton>
      ))}
    </List>
  );
}
