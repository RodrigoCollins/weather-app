import {
  WbSunny as WbSunnyIcon,
  AcUnit as AcUnitIcon,
  Cloud as CloudIcon,
  Grain as UvIndexIcon,
  Opacity as OpacityIcon,
} from "@mui/icons-material";
import { DayForecast } from "@/types/forecastWeather";

type ForecastDataItem = {
  icon: React.ElementType;
  label: string;
  value: (day: DayForecast) => string | number;
  color: string;
};

export const forecastData: ForecastDataItem[] = [
  {
    icon: WbSunnyIcon,
    label: "Temp Máx",
    value: (day) => `${day.maxtemp_c}°C (${day.maxtemp_f}°F)`,
    color: "#e74c3c",
  },
  {
    icon: CloudIcon,
    label: "Temp Mín",
    value: (day) => `${day.mintemp_c}°C (${day.mintemp_f}°F)`,
    color: "#3498db",
  },
  {
    icon: OpacityIcon,
    label: "Probabilidad de Lluvia",
    value: (day) => `${day.daily_chance_of_rain}%`,
    color: "#1abc9c",
  },
  {
    icon: AcUnitIcon,
    label: "Probabilidad de Nieve",
    value: (day) => `${day.daily_chance_of_snow}%`,
    color: "#3498db",
  },
  {
    icon: UvIndexIcon,
    label: "Índice UV",
    value: (day) => day.uv,
    color: "#e67e22",
  },
];
