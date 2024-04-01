import React from "react";
import routerConfig from "../utils/routerConfig";

const Layout: React.FC = () => {
  return (
    <>
      <div className="flex gap-4 flex-wrap">
        <a href={routerConfig.fetchUseEffect}>Fetch UseEffect</a>
        <a href={routerConfig.fetchUseQuery}>Fetch UseQuery</a>
      </div>
    </>
  );
};

export default Layout;
