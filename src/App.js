import React, { Fragment, useEffect } from "react";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogsModal from "./components/logs/AddLogsModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    //Init Marerializejs
    M.AutoInit();
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogsModal />
        <AddTechModal />
        <EditLogModal />
        <TechListModal />
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
