import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}
