import React from "react";
import { useFutureWeather } from "@/hooks";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { CurrentWeather, Forecast, LocationDetails } from "@/components/detail";
import { Loader } from "@/components/loaders";

const Detail: React.FC = () => {
  const { cityName } = useParams();
  const { futureForecast, isLoading, error } = useFutureWeather(cityName);

  if (isLoading) return <Loader />;
  if (error)
    return (
      <Typography variant="h6" color="error">
        Error al cargar los datos
      </Typography>
    );
  if (!futureForecast) return null;

  const { location, current, forecast } = futureForecast;

  return (
    <>
      <LocationDetails location={location} />
      <CurrentWeather current={current} />
      <Forecast forecast={forecast} />
    </>
  );
};

export default Detail;
