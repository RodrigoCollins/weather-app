import { Box, CircularProgress } from "@mui/material";

export const Loader: React.FC = () => {
  return (
    <Box display="flex" justifyContent="center" mt={3}>
      <CircularProgress />
    </Box>
  );
};
