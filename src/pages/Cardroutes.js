import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./ContactUs";
import { MoreLogic } from "./MoreLogic";
import { CardLogic } from "./CardDetails";
import SideNav from "../components/SideNav";

const Cardroutes = () => {
  return (
    <Routes>
      <Route element={<SideNav />}>
        <Route index element={<ContactUs />} />
        <Route path="new" element={<MoreLogic />} />
        <Route path=":singlecard" element={<CardLogic />} />
      </Route>
    </Routes>
  );
};

export default Cardroutes;
