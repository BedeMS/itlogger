import { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

import SearchBar from "./components/layout/SearchBar";

function App() {
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  });

  return (
    <Fragment>
      <SearchBar></SearchBar>
    </Fragment>
  );
}

export default App;
