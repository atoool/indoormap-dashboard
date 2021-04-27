import { LoginContext } from "contexts/LoginContext";
import useLoginListener from "hooks/useLoginListener";
import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "views/Dashboard";
import UserProfile from "views/UserProfile";

const Router = () => {
  const [loading, setLoading] = useState(true);
  const { token } = useContext(LoginContext);
  const { onSetToken } = useContext(LoginContext);
  useLoginListener({ onSetToken });
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) {
    return <div />;
  }
  return (
    <BrowserRouter>
      <Switch>
        {token ? (
          <Route path="/" component={Dashboard} />
        ) : (
          <Route path="/" component={UserProfile} />
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
