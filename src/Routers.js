import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Home.js";
import Coordinator from "./Components/Coordinator";
import Materials from "./Components/Materials";
import Reward from "./Components/Rewards";
import Privacy from "./Components/Security";

const Routers = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cordinator" element={<Coordinator />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/rewards" element={<Reward />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routers;
