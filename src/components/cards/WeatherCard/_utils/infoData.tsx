import {
  Water as HumidityIcon,
  Air as WindIcon,
  Compress as PressureIcon,
  Visibility as VisibilityIcon,
  WbSunny as UvIcon,
  Update as UpdateIcon,
} from "@mui/icons-material";

interface CurrentWeather {
  humidity: number;
  wind_kph: number;
  wind_dir: string;
  pressure_mb: number;
  vis_km: number;
  uv: number;
  last_updated: string;
}

export const infoItems = [
  {
    icon: <HumidityIcon sx={{ color: "#1abc9c", mr: 1 }} />,
    label: "Humedad",
    value: (current: CurrentWeather) => `${current.humidity}%`,
  },
  {
    icon: <WindIcon sx={{ color: "#3498db", mr: 1 }} />,
    label: "Viento",
    value: (current: CurrentWeather) =>
      `${current.wind_kph} kph, dirección ${current.wind_dir}`,
  },
  {
    icon: <PressureIcon sx={{ color: "#e67e22", mr: 1 }} />,
    label: "Presión",
    value: (current: CurrentWeather) => `${current.pressure_mb} mb`,
  },
  {
    icon: <VisibilityIcon sx={{ color: "#9b59b6", mr: 1 }} />,
    label: "Visibilidad",
    value: (current: CurrentWeather) => `${current.vis_km} km`,
  },
  {
    icon: <UvIcon sx={{ color: "#f39c12", mr: 1 }} />,
    label: "Índice UV",
    value: (current: CurrentWeather) => `${current.uv}`,
  },
  {
    icon: <UpdateIcon sx={{ color: "#7f8c8d", mr: 1 }} />,
    label: "Última actualización",
    value: (current: CurrentWeather) => current.last_updated,
  },
];
