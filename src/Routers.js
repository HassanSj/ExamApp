import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Home.js";
import Coordinator from "./Components/Coordinator";
import Materials from "./Components/Materials";
const Routers = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cordinator" element={<Coordinator />} />
          <Route path="/materials" element={<Materials />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routers;
