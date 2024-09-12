import { useLoginForm } from "@/hooks";
import colors from "@/theme/colors";
import { TextField, Button, Box, Typography, Container } from "@mui/material";

const LoginPage: React.FC = () => {
  const { values, errors, handleInputChange, handleSubmit } = useLoginForm();

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: colors.primary,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
          margin: 4,
          borderRadius: 2,
          boxShadow: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom color="primary">
          Inicia Sesión
        </Typography>
        <Typography variant="h6" gutterBottom color="textSecondary">
          Weather App ☀️
        </Typography>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
            maxWidth: "400px",
          }}
        >
          <TextField
            label="Correo electrónico"
            variant="outlined"
            fullWidth
            name="email"
            value={values.email}
            onChange={handleInputChange}
            error={Boolean(errors.email)}
            helperText={errors.email}
          />
          <TextField
            label="Contraseña"
            type="password"
            variant="outlined"
            fullWidth
            name="password"
            value={values.password}
            onChange={handleInputChange}
          />
          <Button variant="contained" color="primary" type="submit">
            Iniciar Sesión
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default LoginPage;
