import { routes } from "@/routes/routes";
import { Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const Router = () => {
  return routes.map(({ routeProps }) => {
    return (
      <Route
        key={routeProps.path}
        path={routeProps.path}
        element={
          routeProps.private ? (
            <PrivateRoute routeProps={routeProps} />
          ) : (
            <routeProps.element />
          )
        }
      />
    );
  });
};

export default Router;
