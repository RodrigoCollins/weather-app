import React, { createContext, useState, useEffect } from "react";

interface AuthContextProps {
  loggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(() => {
    const storedStatus = sessionStorage.getItem("loggedIn");
    return storedStatus ? JSON.parse(storedStatus) : false;
  });

  useEffect(() => {
    sessionStorage.setItem("loggedIn", JSON.stringify(loggedIn));
  }, [loggedIn]);

  const login = () => {
    setLoggedIn(true);
  };

  const logout = () => {
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
