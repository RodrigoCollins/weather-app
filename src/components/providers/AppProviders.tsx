import theme from "@/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { MainLayout } from "@components/layout/MainLayout";
import { AuthProvider } from "@/context/AuthContext";
import { FavoritesProvider } from "@/context/FavoritesContext";

type Props = {
  children: ReactNode;
};

export const AppProviders: React.FC<Props> = ({ children }) => {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <ThemeProvider theme={theme}>
          <MainLayout>{children}</MainLayout>
          <CssBaseline />
        </ThemeProvider>
      </FavoritesProvider>
    </AuthProvider>
  );
};
