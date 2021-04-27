import React from "react";

export const LoginContext = React.createContext({
  token: null,
  onSetToken: () => {},
});

export const LoginContextProvider = ({ children }) => {
  const [token, setToken] = React.useState(null);
  const onSetToken = (val) => {
    setToken(val);
  };
  const value = { token, onSetToken };
  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};
