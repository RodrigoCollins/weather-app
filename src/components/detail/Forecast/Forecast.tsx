import React from "react";
import { Typography, Box, Paper, Stack } from "@mui/material";
import { DayForecast } from "@/types/forecastWeather";
import { formatDate } from "@/helpers/dateFormat";
import { forecastData } from "./_utils/forecastData";

type ForecastProps = {
  forecast: {
    forecastday: {
      date: string;
      day: DayForecast;
    }[];
  };
};

export const Forecast: React.FC<ForecastProps> = ({ forecast }) => (
  <Box mb={4}>
    <Typography variant="h5" gutterBottom>
      Pronóstico a 5 Días
    </Typography>

    <Box
      sx={{ display: { xs: "block", md: "flex" }, gap: 2, flexWrap: "wrap" }}
    >
      {forecast.forecastday.map((day) => (
        <Paper
          key={day.date}
          elevation={3}
          sx={{
            padding: 3,
            borderRadius: "8px",
            marginBottom: 2,
          }}
        >
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{ color: "#2c3e50", fontWeight: 600 }}
          >
            {formatDate(day.date)}
          </Typography>

          <Typography variant="body1" gutterBottom sx={{ color: "#34495e" }}>
            {day.day.condition.text}
          </Typography>

          <Stack spacing={2}>
            {forecastData.map((item) => (
              <Box key={item.label} display="flex" alignItems="center">
                <item.icon sx={{ width: 28, height: 28, color: item.color }} />
                <Typography
                  ml={1}
                  sx={{ fontWeight: "bold", color: item.color }}
                >
                  {item.label}: {item.value(day.day)}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Paper>
      ))}
    </Box>
  </Box>
);
