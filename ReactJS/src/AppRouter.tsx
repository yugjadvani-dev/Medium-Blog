import React from "react";
import { Route, Routes } from "react-router-dom";
import routerConfig from "./utils/routerConfig";
import Layout from "@components/Layout";
import FetchUseEffect from "@pages/useEffectVSuseQuery/FetchUseEffect";
import FetchUseQuery from "@pages/useEffectVSuseQuery/FetchUseQuery";
import PDFRenderer from "@pages/PDFRenderer/PDFRenderer";
import ProductList from "@pages/ReactRouterDom/ProductList";
import ProductDetail from "@pages/ReactRouterDom/ProductDetail";
import Dashboard from "@pages/ReactRouterDom/Dashboard";
import PrivateRouter from "@pages/ReactRouterDom/PrivateRoute";

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
//   {
//     path: routerConfig.PDFRenderer,
//     element: <PDFRenderer />,
//   },
// ]);

const AppRouter: React.FC = () => {
  return (
    <>
      <Routes>
        <Route
          path={"/"}
          element={<Layout />}
        />
        <Route
          path={routerConfig.fetchUseEffect}
          element={<FetchUseEffect />}
        />
        <Route
          path={routerConfig.fetchUseQuery}
          element={<FetchUseQuery />}
        />
        <Route
          path={routerConfig.PDFRenderer}
          element={<PDFRenderer />}
        />{" "}
        <Route
          path={routerConfig.reactRouterDom}
          element={<ProductList />}
        />
        <Route
          path={routerConfig.productDetailId}
          element={<ProductDetail />}
        />
        <Route
          path={routerConfig.dashboard}
          element={<PrivateRouter Component={Dashboard} />}
        />
      </Routes>
      {/* <RouterProvider router={router} /> */}
    </>
  );
};

export default AppRouter;
