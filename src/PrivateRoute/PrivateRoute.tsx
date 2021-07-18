import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts"

type PvRoute = {
  path: string;
  component: any;
};

export default function PrivateRoute({ path, component }: PvRoute) {
  const { auth } = useAuth();
  return auth?.token ? (
    <Route component={component} path={path} />
  ) : (
    <Redirect to="/login" />
  );
}
