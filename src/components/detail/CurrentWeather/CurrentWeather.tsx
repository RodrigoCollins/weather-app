import React from "react";
import { Box, Avatar, Paper, Typography } from "@mui/material";
import { CurrentWeather as CurrentWeatherType } from "@/types/currentWeather";
import { WeatherInfo } from "./_components";
import { weatherData } from "./_utils/weatherData";

type CurrentWeatherProps = {
  current: CurrentWeatherType;
};

export const CurrentWeather: React.FC<CurrentWeatherProps> = ({ current }) => {
  return (
    <Box mb={4}>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h5" gutterBottom>
          Clima Actual
        </Typography>
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar
            src={`https:${current.condition.icon}`}
            alt={current.condition.text}
            sx={{ width: 64, height: 64, mr: 2 }}
          />
          <Box>
            <Typography variant="h6">
              Temperatura: {current.temp_c}°C ({current.temp_f}°F)
            </Typography>
            <Typography>
              Se siente como: {current.feelslike_c}°C ({current.feelslike_f}°F)
            </Typography>
            <Typography>Descripción: {current.condition.text}</Typography>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" gap={2}>
          {weatherData.map((data) => (
            <WeatherInfo
              key={data.label}
              icon={data.icon}
              label={data.label}
              value={data.value(current)}
            />
          ))}
        </Box>
      </Paper>
    </Box>
  );
};
