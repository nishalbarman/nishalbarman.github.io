import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/home/HomePage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default AllRoutes;
