import { CurrentWeather } from "@/types/currentWeather";
import {
  Air as AirIcon,
  Opacity as PressureGageIcon,
  Grain as GrainIcon,
  Visibility as VisibilityIcon,
  WbSunny as UvIndexIcon,
  Cloud as CloudIcon,
  Thunderstorm as ThunderstormIcon,
  SvgIconComponent,
} from "@mui/icons-material";

type WeatherDataItem = {
  icon: SvgIconComponent;
  label: string;
  value: (current: Partial<CurrentWeather>) => string | number;
};

export const weatherData: WeatherDataItem[] = [
  {
    icon: PressureGageIcon,
    label: "Humedad",
    value: (current: any) => `${current.humidity}%`,
  },
  {
    icon: AirIcon,
    label: "Viento",
    value: (current: any) =>
      `${current.wind_kph} km/h (${current.wind_mph} mph) ${current.wind_dir}`,
  },
  {
    icon: GrainIcon,
    label: "Presión",
    value: (current: any) =>
      `${current.pressure_mb} mb (${current.pressure_in} in)`,
  },
  {
    icon: VisibilityIcon,
    label: "Precipitación",
    value: (current: any) =>
      `${current.precip_mm} mm (${current.precip_in} in)`,
  },
  {
    icon: UvIndexIcon,
    label: "Índice UV",
    value: (current: any) => current.uv,
  },
  {
    icon: CloudIcon,
    label: "Cobertura de Nubes",
    value: (current: any) => `${current.cloud}%`,
  },
  {
    icon: ThunderstormIcon,
    label: "Ráfagas",
    value: (current: any) =>
      `${current.gust_kph} km/h (${current.gust_mph} mph)`,
  },
];
