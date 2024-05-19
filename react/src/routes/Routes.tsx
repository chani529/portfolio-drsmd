import React from "react";
import { useRoutes } from "react-router-dom";
import { DefaultLayout } from "@components/layouts/index";
import Home from "@pages/Home";
import Login from "@pages/auth/Login";

const Routes = () => {
  const routesConfig = useRoutes([
    {
      path: "/home",
      element: <DefaultLayout />,
      children: [{ index: true, element: <Home /> }],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return routesConfig;
};

export default Routes;
