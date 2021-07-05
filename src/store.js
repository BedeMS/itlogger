// This is the standard way to create a store in Redux.
// We install redux, react-redux, redux-thunk, and redux-devtools-extension to our project to start.
// we also have to create our Reducer and import it to include in our store

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// initState can start as an empty object
const initialState = {};
// middleware is way to extend redux with custom functionality (extra features)
// What is thunk?
// Thunk is a middleware feature that allows us to write async functions.
// Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux
// One of the main use cases for this middleware is for handling
//  actions that might not be synchronous, for example, using axios
//  to send a GET request. Redux Thunk allows us to dispatch those 
// actions asynchronously and resolve each promise that gets returned.
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
