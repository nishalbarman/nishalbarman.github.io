import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/home/HomePage";
import RentingDetails from "../Pages/details/renting_app";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/renting-details-page" element={<RentingDetails />} />
    </Routes>
  );
}

export default AllRoutes;
