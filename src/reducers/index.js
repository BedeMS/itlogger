import { combineReducers } from "redux";
import logReducer from "./logReducer";

// This is the reducer that gets sent to the Store.
// It combines all the reducers of the application and
// stores them in one central location.
export default combineReducers({
  // When in the view and we want to access our specific state which is sent 
  // from our specific reducer, we have to match the name on here
  log: logReducer,
});
