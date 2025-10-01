"use client";
import { Box, Typography } from "@mui/material";
import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";
import Image from "next/image";
import LocationIcon from "./characters.ico";

const CambridgeLocation = {
  lat: 14.5674852,
  lng: 121.1075846,
};
export function OurLocation() {
  if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
    return;
  }

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexFlow: "column",
        gap: 2,
        alignItems: "start",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "1.5rem", md: "2rem", lg: "3rem" },
          color: "primary.contrastText",
          textAlign: { xs: "center", md: "left" },
          mb: 4,
        }}
      >
        Treasure Map
      </Typography>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <Map
          defaultCenter={CambridgeLocation}
          zoom={15}
          style={{ width: "100%", height: "50vh" }}
          mapId={process.env.NEXT_PUBLIC_MAP_ID}
          colorScheme="DARK"
        >
          <AdvancedMarker position={CambridgeLocation}>
            <Image
              src={LocationIcon}
              alt="Location Icon"
              width={80}
              height={80}
              className="hover:scale-300 transition-transform duration-200 ease-in-out"
            />
          </AdvancedMarker>
        </Map>
      </APIProvider>
    </Box>
  );
}
