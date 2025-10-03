"use client";
import { useCart } from "@hooks/useCart";
import TrashIcon from "@mui/icons-material/Delete";
import { Box, Button, Typography } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRowId,
  GridRowSelectionModel,
} from "@mui/x-data-grid";
import { formatPrice } from "@utils/text";
import { useMemo, useState } from "react";

export default function Basket() {
  const cart = useCart((state) => state.cart);
  const removeFromCartById = useCart((state) => state.removeFromCartById);

  const [rowSelectionModel, setRowSelectionModel] =
    useState<GridRowSelectionModel>({
      type: "include",
      ids: new Set<GridRowId>([]),
    });

  const total = useMemo(
    () => cart.reduce((acc, item) => acc + (item.price ?? 0), 0),
    [cart]
  );

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "sticker",
      headerName: "Sticker",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 200,
      flex: 0.5,
    },
  ];

  const rows = cart.map((item) => ({
    id: item.id,
    name: item.name,
    sticker: item.sticker,
    price: formatPrice(item.price ?? 0),
  }));

  function removeItem() {
    rowSelectionModel.ids.forEach((id) => removeFromCartById(id as string));
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {
        <DataGrid
          checkboxSelection
          rows={rows}
          columns={columns}
          onRowSelectionModelChange={setRowSelectionModel}
          rowSelectionModel={rowSelectionModel}
        />
      }
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 4,
        }}
      >
        {rowSelectionModel.ids.size > 0 && (
          <Button variant="outlined" color="error" onClick={removeItem}>
            <TrashIcon /> Remove from Cart
          </Button>
        )}

        <Typography sx={{ fontWeight: 600, fontSize: "1.2rem", ml: "auto" }}>
          Total: {total > 0 ? formatPrice(total) : "0.00"}
        </Typography>
      </Box>
    </Box>
  );

  // return (
  //   <TableContainer sx={{ borderRadius: 3 }}>
  //     <Table size="medium">
  //       <TableHead sx={{ backgroundColor: "customBackground.dark" }}>
  //         <TableRow>
  //           {header.map((item) => (
  //             <TableCell
  //               key={item.id}
  //               sx={{
  //                 fontSize: "1.2rem",
  //                 fontWeight: 600,
  //                 width: item.width,
  //               }}
  //             >
  //               {item.label}
  //             </TableCell>
  //           ))}
  //         </TableRow>
  //       </TableHead>
  //       <TableBody
  //         sx={{
  //           backgroundColor: "customBackground.dark",
  //           p: 2,
  //           borderRadius: 3,
  //         }}
  //       >
  //         {cart.map((item) => (
  //           <TableRow key={item.id}>
  //             <TableCell padding="checkbox">
  //               <IconButton onClick={() => removeFromCart(item)}>
  //                 <TrashIcon />
  //               </IconButton>
  //             </TableCell>
  //             <TableCell>{item.name}</TableCell>
  //             <TableCell>{item.sticker}</TableCell>
  //             <TableCell>{formatPrice(item.price ?? 0)}</TableCell>
  //           </TableRow>
  //         ))}
  //       </TableBody>
  //     </Table>

  //   </TableContainer>
  // );
}
