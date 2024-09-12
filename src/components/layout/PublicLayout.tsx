import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const PublicLayout: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};
