// Reducer: this is where actions are committed.

// We import the actions that this reducer needs
import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "../actions/types";

// We initiate a state which all reducer needs
const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};

// Reducer takes in a state and action
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // if action.type matches GET_LOGS
    case GET_LOGS:
      // return altered state
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;