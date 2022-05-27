import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
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
let dashboardLeftNavData = [
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

const FullLeftNav = () => {
  const [showDashboardPageNav, setShowDashboardPageNav] = useState(true);
  return (
    <>
      <div className="dummy-left-nav">
        <div className="full-left-nav">
          <div className="card h-100 w-100 ">
            <Link
              to={"/"}
              className="card-header bg-primary"
              style={{ height: "70px", textDecoration: "none" }}
            >
              <img src="./images/logo/logo.png" alt="" />
            </Link>
            <div className="card-body left-nav-item">
              <h5>
                <small>{"Navigation".toUpperCase()}</small>
              </h5>
              <div
                className="card-section-grid collapse-header p-2"
                onClick={() => {
                  setShowDashboardPageNav(!showDashboardPageNav);
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
              {showDashboardPageNav && (
                <ul className=" list-unstyled left-nav-collapse text-muted">
                  {dashboardLeftNavData.map((item) => {
                    return (
                      <li className=" ct-hover" key={item.id}>
                        <Link
                          to={`/${item.link}`}
                          className="card-section-grid text-decoration-none"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default FullLeftNav;
