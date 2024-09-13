import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { paths } from "../../routes/paths";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate(paths.home);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="80vh"
      textAlign="center"
    >
      <Typography variant="h4" component="h1" gutterBottom>
        ¡Ups! Página no encontrada 🌧️
      </Typography>
      <Typography variant="h6" component="p" color="textSecondary" gutterBottom>
        Parece que se nos escapó esta página con el viento 💨
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleNavigateHome}
        sx={{ mt: 2 }}
      >
        Volver al Inicio
      </Button>
    </Box>
  );
};

export default NotFound;
