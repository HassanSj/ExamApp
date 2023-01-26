import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Main/Home.js";
import Coordinator from "./Components/Coordinator/Coordinator";
import Materials from "./Components/Materials/Materials";
import Reward from "./Components/Rewards";
import Privacy from "./Components/Security";
import Modals from "./Components/Modals.js";
import HomeRedux from "./Components/HomeRedux.js";

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
          <Route path="/modal" element={<Modals />} />
          <Route path="/redux" element={<HomeRedux />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routers;
