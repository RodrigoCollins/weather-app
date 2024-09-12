import React from "react";
import { Box, Typography } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";

type WeatherInfoProps = {
  icon: SvgIconComponent;
  label: string;
  value: string | number;
};

export const WeatherInfo: React.FC<WeatherInfoProps> = ({
  icon: Icon,
  label,
  value,
}) => (
  <Box display="flex" alignItems="center">
    <Icon sx={{ width: 24, height: 24 }} />
    <Typography ml={1}>
      {label}: {value}
    </Typography>
  </Box>
);
