import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { useAuth } from "../auth"

type PrivateRoute = {
  path: string;
  component: any;
};

export default function PrivateRoute({ path, component }: PrivateRoute) {
  // const { login } = useAuth()
  const login = true;
  return login ? (
    <Route component={component} path={path} />
  ) : (
    <Redirect to="/login" />
  );
}
