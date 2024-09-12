import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { infoItems } from "../_utils/infoData";

const InfoBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

type Props = {
  current: {
    humidity: number;
    wind_kph: number;
    wind_dir: string;
    pressure_mb: number;
    vis_km: number;
    uv: number;
    last_updated: string;
  };
};

export const CardInfo: React.FC<Props> = ({ current }) => (
  <Stack spacing={1.5}>
    {infoItems.map(({ icon, label, value }) => (
      <InfoBox key={label}>
        {icon}
        <Typography variant="body2" color="textSecondary">
          {label}: <strong>{value(current)}</strong>
        </Typography>
      </InfoBox>
    ))}
  </Stack>
);
