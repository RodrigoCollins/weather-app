import React from "react";
import { WeatherApiResponse } from "@/types/currentWeather";
import { Typography, Box } from "@mui/material";
import { Loader } from "@/components/loaders";
import HowItWorks from "./HowItWorks/HowItWorks";
import { WeatherCard } from "@/components/cards";

interface SearchResultProps {
  data: WeatherApiResponse | undefined;
  error: string | null;
  isLoading: boolean;
}

export const ResultDetail: React.FC<SearchResultProps> = ({
  data,
  error,
  isLoading,
}) => {
  if (isLoading) return <Loader />;

  if (error) {
    return (
      <Box display="flex" justifyContent="center" mt={3}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  if (!data) {
    return <HowItWorks />;
  }

  return (
    <Box
      mt={4}
      display="flex"
      justifyContent="center"
      sx={{ maxWidth: { xs: "100%", md: "100%" }, mx: "auto" }}
    >
      <WeatherCard data={data} />
    </Box>
  );
};
