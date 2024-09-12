import { helperTextConfig } from "@/utils/favoritesHelper";
import { Box, Typography } from "@mui/material";

export const HelperText: React.FC = () => {
  return (
    <Box mt={3} sx={{ textAlign: "left" }}>
      <Typography variant="h6" gutterBottom>
        {helperTextConfig.title}
      </Typography>
      <Typography variant="body1">{helperTextConfig.description}</Typography>
      <Box component="ul" pl={2} mt={1}>
        {helperTextConfig.steps.map((step) => (
          <Typography key={step} component="li" variant="body1">
            {step}
          </Typography>
        ))}
      </Box>
      <Typography variant="body2" mt={2}>
        {helperTextConfig.footer}
      </Typography>
    </Box>
  );
};
