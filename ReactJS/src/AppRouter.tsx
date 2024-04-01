import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FetchUseEffect from "./useEffectVSuseQuery/FetchUseEffect";
import FetchUseQuery from "./useEffectVSuseQuery/FetchUseQuery";
import Layout from "./components/Layout";
import routerConfig from "./utils/routerConfig";

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
