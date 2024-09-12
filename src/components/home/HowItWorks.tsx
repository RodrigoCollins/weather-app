import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { howItWorksData } from "@/utils/howItWorksData";

const HowItWorks: React.FC = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      sx={{ mt: 4, mb: 4, alignItems: { xs: "flex-start", md: "center" } }}
    >
      <Typography variant="h2" tabIndex={0}>
        ¿Cómo Funciona?
      </Typography>

      <List
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          width: "100%",
          justifyContent: "center",
          mt: 3,
        }}
        role="list"
        aria-label="Pasos para buscar el clima y agregar ciudades a favoritos"
      >
        {howItWorksData.map(({ id, emoji, step, description }) => (
          <ListItem
            key={id}
            role="listitem"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", md: "auto" },
              padding: 1,
              border: isDesktop ? "1px solid #ccc" : "none",
              borderRadius: isDesktop ? "8px" : "none",
            }}
          >
            <ListItemText
              primary={
                <Typography variant="body1" aria-label={`Paso ${id}: ${step}`}>
                  {emoji} <strong>{`${id}. ${step}`}</strong>
                </Typography>
              }
              secondary={description}
              sx={{ textAlign: isDesktop ? "center" : "left" }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default HowItWorks;
