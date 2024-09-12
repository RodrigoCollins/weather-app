import React, { useRef, useEffect } from "react";
import { TextField, Button, CircularProgress, Box } from "@mui/material";

interface SearchFormProps {
  isLoading: boolean;
  onSearch: (query: string) => void;
}

export const SearchForm: React.FC<SearchFormProps> = ({
  isLoading,
  onSearch,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputRef.current) {
      const query = inputRef.current.value.trim();
      if (query) {
        onSearch(query);
      }
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        justifyContent: "center",
        mt: 2,
        maxWidth: { xs: "100%", md: "80%" },
        mx: "auto",
      }}
      aria-label="Formulario de búsqueda de clima"
    >
      <TextField
        label="Ingrese el nombre de la ciudad"
        variant="outlined"
        inputRef={inputRef}
        disabled={isLoading}
        size="small"
        required
        aria-label="Campo de búsqueda para el clima por ciudad"
        sx={{ minWidth: { xs: 250, md: 400 } }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isLoading}
        aria-label={isLoading ? "Buscando clima" : "Buscar clima"}
        aria-busy={isLoading ? "true" : undefined}
      >
        {isLoading ? <CircularProgress size={20} /> : "Buscar"}
      </Button>
    </Box>
  );
};
