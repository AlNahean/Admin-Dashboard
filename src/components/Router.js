import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Page/Home/home";
import Error from "./Page/Error/Error";
import Ecommerse from "./Page/DashboardGroup/Ecommerse/Ecommerse";
import Analytics from "./Page/DashboardGroup/Analytics/Analytics";
import Projects from "./Page/DashboardGroup/Projects/Projects";
import EWallet from "./Page/DashboardGroup/E-Wallet/E-Wallet";

//PageGroup
import Profile from "./Page/PagesGroup/Profile/Profile";
import Profile2 from "./Page/PagesGroup/Profile2/Profile2";
import Invoice from "./Page/PagesGroup/Invoice/Invoice";
import FAQ from "./Page/PagesGroup/FAQ/FAQ";
import Pricing from "./Page/PagesGroup/Pricing/Pricing";
import Maintainance from "./Page/PagesGroup/Maintainance/Maintainance";
import Starter from "./Page/PagesGroup/Starter/Starter";
import Timeline from "./Page/PagesGroup/Timeline/Timeline";
import Landing from "./Page/PagesGroup/Landing/Landing";

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

        {/* Page group */}

        <Route
          path="/page-group/profile"
          caseSensitive={false}
          element={<Profile />}
        />
        <Route
          path="/page-group/profile-2"
          caseSensitive={false}
          element={<Profile2 />}
        />
        <Route
          path="/page-group/invoice"
          caseSensitive={false}
          element={<Invoice />}
        />
        <Route path="/page-group/faq" caseSensitive={false} element={<FAQ />} />
        <Route
          path="/page-group/pricing"
          caseSensitive={false}
          element={<Pricing />}
        />
        <Route
          path="/page-group/maintainance"
          caseSensitive={false}
          element={<Maintainance />}
        />
        <Route
          path="/page-group/starter"
          caseSensitive={false}
          element={<Starter />}
        />
        <Route
          path="/page-group/timeline"
          caseSensitive={false}
          element={<Timeline />}
        />
        <Route
          path="/page-group/landing"
          caseSensitive={false}
          element={<Landing />}
        />
        {/* <Route
          path="/page-group/landing"
          component={() => {
            window.location.href = "https://nahean.netlify.app/";
            return null;
          }}
        /> */}

        <Route path="*" caseSensitive={false} element={<Error />} />
      </Routes>
    </Router>
  );
};

export default Routing;
