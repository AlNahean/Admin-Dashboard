import React, { useState, useEffect, useReducer, useContext } from "react";
// import axios from "axios";
import { Chart, registerables } from "chart.js";

import Reducer from "./Reducer";
Chart.register(...registerables); //vvi must do

const AppContext = React.createContext();
const initialState = {
  loading: true,
  firstName: "Nahean",
  lastName: "Fardous",
};

const getNavStatus = () => {
  let navStatus = localStorage.getItem("data-left-nav");
  if (navStatus === "show") {
    return true;
  } else {
    return false;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [test, setTest] = useState("Context Text");
  const [showLeftNav, setShowLeftNav] = useState(getNavStatus());
  const [showTopNavDropdown, setShowTopNavDropdown] = useState({
    flags: false,
    nottification: false,
    more: false,
  });
  const [showSettings, setShowSettings] = useState(false);
  const [boxCustomize, setBoxCustomize] = useState(false);
  const [isDarkMode, setISDarkmode] = useState(true);

  // console.log(test);
  //sasasas
  //asasas
  return (
    <AppContext.Provider
      value={{
        ...state,
        test,
        showLeftNav,
        setShowLeftNav,
        showTopNavDropdown,
        setShowTopNavDropdown,
        showSettings,
        setShowSettings,
        boxCustomize,
        setBoxCustomize,
        isDarkMode,
        setISDarkmode,
        Chart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider }; //so i would normally use this line in the future child but becouse i am returning right now i would use ---useglobalContext-- hook ine next pages.
