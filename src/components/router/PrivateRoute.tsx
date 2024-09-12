import { useAuth } from "@/context";
import { paths } from "@/routes/paths";
import { RouteProps } from "@/routes/routes";
import { Navigate } from "react-router-dom";

type Props = {
  routeProps: RouteProps;
};

const PrivateRoute: React.FC<Props> = ({ routeProps }) => {
  const { loggedIn } = useAuth();

  return loggedIn ? <routeProps.element /> : <Navigate to={paths.login} />;
};

export default PrivateRoute;
