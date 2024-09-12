import { ReactNode } from "react";
import { matchPath, useLocation } from "react-router-dom";
import { routes } from "@/routes/routes";
import { PrivateLayout } from "./PrivateLayout";
import { PublicLayout } from "./PublicLayout";

type Props = {
  children: ReactNode;
};

export const MainLayout: React.FC<Props> = ({ children }) => {
  const location = useLocation();

  const currentRoute = routes.find((route) =>
    matchPath(route.routeProps.path, location.pathname)
  );

  const isPrivate = currentRoute?.routeProps.private ?? false;

  if (isPrivate) return <PrivateLayout>{children}</PrivateLayout>;

  return <PublicLayout>{children}</PublicLayout>;
};
