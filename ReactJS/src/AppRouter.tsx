import React from "react";
import { Route, Routes } from "react-router-dom";
import routerConfig from "./utils/routerConfig";
import Layout from "@components/Layout";
import FetchUseEffect from "@pages/useEffectVSuseQuery/FetchUseEffect";
import FetchUseQuery from "@pages/useEffectVSuseQuery/FetchUseQuery";
import PDFRenderer from "@pages/PDFRenderer/PDFRenderer";

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
        <Route path={routerConfig.PDFRenderer} element={<PDFRenderer />} />
      </Routes>
      {/* <RouterProvider router={router} /> */}
    </>
  );
};

export default AppRouter;
