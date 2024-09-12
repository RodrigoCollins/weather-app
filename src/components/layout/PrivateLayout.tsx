import { ReactNode } from "react";
import { Footer, Navbar } from "@/components/navigation";
import { Container } from "@mui/material";

type Props = {
  children: ReactNode;
};

export const PrivateLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl" sx={{ paddingTop: 1, paddingBottom: 4 }}>
        {children}
      </Container>
      <Footer />
    </>
  );
};
