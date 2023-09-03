import React from "react";
import { Outlet } from "react-router-dom";

const GeneralComp = () => {
  return (
    <div>
      <h1>General Route</h1>
      <Outlet />
    </div>
  );
};

export default GeneralComp;
