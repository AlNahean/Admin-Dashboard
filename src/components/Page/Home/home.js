import React, { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "../../Context";
import { Link } from "react-router-dom";
// import { useState } from "react";
// import "./Home.scss";

//
import FullLeftNav from "../Shared/LeftNavBar/FullLeftNav";
import ShortLeftNav from "../Shared/LeftNavBar/ShortLeftNav";
import FixedLeftNav from "../Shared/LeftNavBar/FixedLeftNav";
import LeftNavBar from "../Shared/LeftNavBar/LeftNavBar";
import MainNavbar from "../Shared/MainNavBar/MainNavbar";
import MainContent from "./Components/MainContent";
import Navbar from "../Shared/NavBar/Navbar";

const Home = () => {
  const { test, showLeftNav } = useGlobalContext();

  // const [fullDashNav, setFullDashNav] = useState(false);
  // const [showLeftNav, setShowLeftNav] = useState(true);

  const mainContentAction = (e) => {
    // console.log("n");
    // cancelTopNavDropDown();// from context later removed
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="main-wrapper ecommerse-dashboard">
      <Navbar />
      {/* {showLeftNav && (
        <div
          style={{ height: "700px", width: "260px", minWidth: "260px" }}
        ></div>
      )}
      <div className=" fixed-navbar-wrapper" style={{ zIndex: 1000 }}>
        <LeftNavBar />
        <MainNavbar style={{ zIndex: 1000 }} />
      </div> */}

      {/* <div className="dashboard-main full-size" style={{ zIndex: 1 }}>
        <div
          style={{ marginTop: "70px" }}
          className="main-content"
          onClick={(e) => {
            mainContentAction(e);
          }}
        > */}
      <MainContent />
      {/* </div>
      </div> */}
    </div>
  );
};

export default Home;
