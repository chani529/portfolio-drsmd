import React from "react";
import { useRoutes } from "react-router-dom";
import { DefaultLayout } from "@components/layouts/index";
import Home from "@pages/Home";
import TestPage from "@pages/TestPage";
import Testpage2 from "@pages/TestPage2";
import Login from "@pages/auth/Login";

const Routes = () => {
  const routesConfig = useRoutes([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "test1", element: <TestPage /> },
        { path: "test2", element: <Testpage2 /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return routesConfig;
};

export default Routes;
