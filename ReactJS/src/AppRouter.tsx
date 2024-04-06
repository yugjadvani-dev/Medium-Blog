import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routerConfig from "./utils/routerConfig";
import Layout from "@components/Layout";
import FetchUseEffect from "@useEffectVSuseQuery/FetchUseEffect";
import FetchUseQuery from "@useEffectVSuseQuery/FetchUseQuery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: routerConfig.fetchUseEffect,
    element: <FetchUseEffect />,
  },
  {
    path: routerConfig.fetchUseQuery,
    element: <FetchUseQuery />,
  },
]);

const AppRouter: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRouter;
