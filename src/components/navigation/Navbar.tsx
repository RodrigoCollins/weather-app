import { useAuth } from "@/context";
import { paths } from "@/routes/paths";
import colors from "@/theme/colors";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";

const navItems = [
  {
    text: "Inicio",
    path: paths.home,
  },
  {
    text: "Favoritos",
    path: paths.favorites,
  },
];

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: colors.text_light, cursor: "pointer" }}
            onClick={() => navigate(paths.home)}
            aria-label="Volver al inicio"
            tabIndex={0}
          >
            Weather App ☀️
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map(({ text, path }) => (
              <Button
                key={text}
                component={Link}
                to={path}
                sx={{
                  color: colors.text_light,
                  fontSize: "1rem",
                  textTransform: "none",
                  padding: "8px 16px",
                  "&:focus": {
                    outline: "2px solid #fff",
                  },
                }}
                aria-label={`Navegar a ${text}`}
              >
                {text}
              </Button>
            ))}
          </Box>
          <Button
            sx={{
              color: colors.text_light,
              fontSize: "1rem",
              textTransform: "none",
              padding: "8px 16px",
              "&:focus": {
                outline: "2px solid #fff",
              },
            }}
            aria-label={`Cerrar Sesion`}
            onClick={() => logout()}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
