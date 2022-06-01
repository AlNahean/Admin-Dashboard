import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Custom from "./Styles/NavGroup/Custom";
<li className="">
  <Link to="" className="card-section-grid text-decoration-none">
    <div></div>
    <div>
      <small>Analytics</small>
    </div>

    <small>
      <span className="badge bg-danger center">New</span>
    </small>
  </Link>
</li>;
// Array format
let dashboardLeftNavDataArray = [
  {
    title: "",
  },
];
//Object format
let dashboardLeftNavDataObject = {
  navigation: {
    title: "",
  },
};
let leftNavDashboardData = [
  {
    id: 1,
    title: "Analitics",
    link: "analytics",
    isNew: false,
  },
  {
    id: 2,
    title: "E-commerse",
    link: "e-commerse",
    isNew: false,
  },
  {
    id: 3,
    title: "Projects",
    link: "projects",
    isNew: false,
  },
  {
    id: 4,
    title: "E-wallet",
    link: "e-wallet",
    isNew: true,
  },
];
let leftNavCustomData = [
  {
    id: 1,
    title: "Profile",
    link: "profile",
    isNew: false,
  },
  {
    id: 2,
    title: "Profile 2",
    link: "profile-2",
    isNew: false,
  },
  {
    id: 3,
    title: "Invoice",
    link: "invoice",
    isNew: false,
  },
  {
    id: 4,
    title: "FAQ",
    link: "faq",
    isNew: false,
  },
  {
    id: 5,
    title: "Pricing",
    link: "pricing",
    isNew: false,
  },
  {
    id: 6,
    title: "Maintainance",
    link: "maintainance",
    isNew: false,
  },
  {
    id: 7,
    title: "Starter",
    link: "starter",
    isNew: false,
  },
  {
    id: 8,
    title: "Timeline",
    link: "timeline",
    isNew: false,
  },
  {
    id: 9,
    title: "Landing",
    link: "landing",
    isNew: false,
  },
];

const FullLeftNav = () => {
  const [showPageNavDashboard, setShowPageNavDashboard] = useState(true);
  const [showPageNavCustom, setShowPageNavCustom] = useState(true);
  return (
    <>
      <div className="dummy-left-nav">
        <div className="full-left-nav">
          <div className="card h-100 w-100 ">
            {/* Page Header */}
            <Link
              to={"/"}
              className="card-header bg-primary"
              style={{ height: "70px", textDecoration: "none" }}
            >
              <img src="./images/logo/logo.png" alt="" />
            </Link>
            <div className="card-body left-nav-item overflow-auto custom-scrollbar-sm">
              {/**********************************************************************************************************
               ***************************************Navigation********************************************
               ***********************************************************************************************************/}
              <div className=" d-flex flex-column w-100">
                <h5>
                  <small>{"Navigation".toUpperCase()}</small>
                </h5>
                {/* NavGroupSwitcher----Dashboard */}
                <div
                  className="card-section-grid collapse-header p-2"
                  onClick={() => {
                    setShowPageNavDashboard(!showPageNavDashboard);
                  }}
                >
                  <div className="center" style={{ fontSize: "1.2rem" }}>
                    <AiOutlineHome />
                  </div>
                  <h5 className=" mb-0">Dashboard</h5>
                  <span
                    className=" badge bg-success"
                    // style={{ marginBottom: "0px" }}
                  >
                    4
                  </span>
                </div>

                {/* NavGroupItems-- */}
                {showPageNavDashboard && (
                  <ul className=" list-unstyled left-nav-collapse text-muted">
                    {leftNavDashboardData.map((item) => {
                      return (
                        <li className=" " key={item.id}>
                          <Link
                            to={`/${item.link}`}
                            className="card-section-grid text-decoration-none ct-hover"
                            onClick={() => {}}
                          >
                            <div></div>
                            <div>
                              <h5>
                                <small>{item.title}</small>
                              </h5>
                            </div>
                            <span className=" badge bg-danger center">
                              {item.isNew && "New"}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
              {/**********************************************************************************************************
               ***************************************Custom********************************************
               ***********************************************************************************************************/}
              {/* <Custom /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullLeftNav;
