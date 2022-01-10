import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Wrapper from "../components/Wrapper/Wrapper";

import Tickets from "../pages/Tickets/Tickets";
import UsersGrid from "users/components/UsersGrid/UsersGrid";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route index element={<Navigate to="/tickets" />} />
        <Route path="tickets" element={<Tickets />} />
        <Route path="users" element={<UsersGrid />} />
        <Route path="*" element={<Navigate to="/tickets" />} />
      </Route>
    </Routes>
  );
}
