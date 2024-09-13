import React from "react";
import { useFutureWeather } from "@/hooks";
import { useParams } from "react-router-dom";
import { CurrentWeather, Forecast, LocationDetails } from "@/components/detail";
import { Loader } from "@/components/loaders";
import NotFound from "../notfound/NotFound";

const Detail: React.FC = () => {
  const { cityName } = useParams();
  const { futureForecast, isLoading, error } = useFutureWeather(cityName);

  if (isLoading) return <Loader />;
  if (error) return <NotFound />;
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
