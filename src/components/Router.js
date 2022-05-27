import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Page/Home/home";
import Error from "./Page/Error/Error";
import Ecommerse from "./Page/DashboardGroup/Ecommerse/Ecommerse";
import Analytics from "./Page/DashboardGroup/Analytics/Analytics";
import Projects from "./Page/DashboardGroup/Projects/Projects";
import EWallet from "./Page/DashboardGroup/E-Wallet/E-Wallet";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path="/home" caseSensitive={false} element={<Home />} />
        <Route
          path="/analytics"
          caseSensitive={false}
          element={<Analytics />}
        />
        <Route
          path="/e-commerse"
          caseSensitive={false}
          element={<Ecommerse />}
        />
        <Route path="/e-wallet" caseSensitive={false} element={<EWallet />} />
        <Route path="/projects" caseSensitive={false} element={<Projects />} />

        <Route path="*" caseSensitive={false} element={<Error />} />
      </Routes>
    </Router>
  );
};

export default Routing;
