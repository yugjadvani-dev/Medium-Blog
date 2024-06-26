import React from "react";
import routerConfig from "../utils/routerConfig";
import { Link } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <div className="flex gap-4 flex-wrap">
        <Link to={routerConfig.fetchUseEffect}>Fetch UseEffect</Link>
        <Link to={routerConfig.fetchUseQuery}>Fetch @tanstack/react-query</Link>
        <Link to={routerConfig.PDFRenderer}>@react-pdf/renderer</Link>
        <Link to={routerConfig.reactRouterDom}>react-router-dom</Link>
      </div>
    </>
  );
};

export default Layout;
