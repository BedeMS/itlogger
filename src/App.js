import { useEffect, Fragment } from "react";
// import 'materialize-css';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";
import { Provider } from "react-redux";
import store from "./store";

// We initiated our functional component App()
function App() {
  // what is useEffect?
  // useEffect is a lifecycle function that gets called everytime
  // there is a change in the state or the component is being rendered
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  });

  return (
    // What is the Provider?
    // This is how our components that are wrapped in this Provided are able 
    // to consume our store. Also known as subscriber.
    // What is the store?
    // Store is where all of state is held along with middlewares and reducers for our actions
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
