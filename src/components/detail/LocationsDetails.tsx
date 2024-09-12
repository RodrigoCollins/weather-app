import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import {
  LocationOn as LocationOnIcon,
  AccessTime as AccessTimeIcon,
  LocationCity as LocationCityIcon,
} from "@mui/icons-material";

type Location = {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime: string;
};

type LocationDetailsProps = {
  location: Location;
};

export const LocationDetails: React.FC<LocationDetailsProps> = ({
  location,
}) => (
  <Box mb={4}>
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        <LocationCityIcon sx={{ mr: 1 }} /> {location.name}
      </Typography>
      <Typography variant="h6">
        <LocationOnIcon sx={{ mr: 1 }} /> {location.region}, {location.country}
      </Typography>
      <Typography>
        <LocationOnIcon sx={{ mr: 1 }} /> Latitud: {location.lat} | Longitud:{" "}
        {location.lon}
      </Typography>
      <Typography>
        <AccessTimeIcon sx={{ mr: 1 }} /> Zona Horaria: {location.tz_id}
      </Typography>
      <Typography>
        Hora Local: {new Date(location.localtime).toLocaleString()}
      </Typography>
    </Paper>
  </Box>
);
