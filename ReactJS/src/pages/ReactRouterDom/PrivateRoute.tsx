import React from "react";
import { useNavigate } from "react-router-dom";

interface PrivateRouterProps {
  Component: React.ComponentType<unknown>; // or specify specific props here
}

const PrivateRouter: React.FC<PrivateRouterProps> = ({ Component }) => {
  const is_authorized = true;

  const navigate = useNavigate();

  React.useEffect(() => {
    if (!is_authorized) {
      return navigate("/login");
    }
  }, [navigate]);

  return <Component />;
};

export default PrivateRouter;
