import { lazy } from "react";
import { paths } from "./paths";

const Home = lazy(() => import("@pages/home/Home"));
const Favorites = lazy(() => import("@/pages/favorites/Favorites"));
const Detail = lazy(() => import("@/pages/detail/Detail"));
const Login = lazy(() => import("@pages/login/Login"));

export type RouteProps = {
  path: string;
  private: boolean;
  element:
    | React.LazyExoticComponent<() => React.ReactElement>
    | React.ComponentType;
};
export type LayoutProps = {
  name: string;
};

export type Route = {
  routeProps: RouteProps;
  layoutProps: LayoutProps;
};

export const routes: Route[] = [
  {
    routeProps: {
      path: paths.home,
      element: Home,
      private: true,
    },
    layoutProps: {
      name: "Inicio",
    },
  },
  {
    routeProps: {
      path: paths.favorites,
      element: Favorites,
      private: true,
    },
    layoutProps: {
      name: "Favoritos",
    },
  },
  {
    routeProps: {
      path: paths.detail,
      element: Detail,
      private: true,
    },
    layoutProps: {
      name: "Detalle",
    },
  },
  {
    routeProps: {
      path: paths.login,
      element: Login,
      private: false,
    },
    layoutProps: {
      name: "Ingresar",
    },
  },
];
