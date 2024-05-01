import React from "react";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import routerConfig from "./utils/routerConfig";
import Layout from "@components/Layout";
import FetchUseEffect from "@useEffectVSuseQuery/FetchUseEffect";
import FetchUseQuery from "@useEffectVSuseQuery/FetchUseQuery";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//   },
//   {
//     path: routerConfig.fetchUseEffect,
//     element: <FetchUseEffect />,
//   },
//   {
//     path: routerConfig.fetchUseQuery,
//     element: <FetchUseQuery />,
//   },
// ]);

const AppRouter: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout />} />
        <Route
          path={routerConfig.fetchUseEffect}
          element={<FetchUseEffect />}
        />
        <Route path={routerConfig.fetchUseQuery} element={<FetchUseQuery />} />
      </Routes>
      {/* <RouterProvider router={router} /> */}
    </>
  );
};

export default AppRouter;
