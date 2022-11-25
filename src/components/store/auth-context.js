import React, { useState } from "react";

const authContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const userLoggedIn = !!token;
  const loginHandler = (token, user) => {
    setToken(token);
    setUser(user);
  };
  const logoutHandler = () => {
    setToken(null);
    setUser(null);
  };
  const contextValue = {
    token: token,
    isLoggedIn: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    user: user,
  };

  return <authContext.Provider value={contextValue}>{props.children}</authContext.Provider>;
};

export default authContext;
