// what is the difference b/t Actions and
// going straight to the reducer folder?

import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
} from "./types";

// export const getLogs = () => {
// if we want to make an async call, that's where redux thunk
// comes in. Instead of returning an object like we would for
// a sync function, it allows us to return a function that gets
// a "dispatch" method as an arg which lets us dispatch to our
// reducer. We also have 'getState' available to us if we need it

//   return async (dispatch) => {
//     setLoading();

//     const res = await fetch("/logs");
//     const data = await res.json();

//     dispatch({
//       type: GET_LOGS,
//       payload: data,
//     });
//   };
// };

// ^^Above code refactored
//Get logs from server
export const getLogs = () => async (dispatch) => {
  // if we want to make an async call, that's where redux THUNK
  // comes in. Instead of returning an object like we would for
  // a sync function, it allows us to return a function that gets
  // a "dispatch" method as an arg which lets us dispatch to our
  // reducer. We also have 'getState' available to us if we need it
  try {
    setLoading();

    const res = await fetch("/logs");
    const data = await res.json();

    // Dispatch an action type and a payload (data)
    dispatch({
      type: GET_LOGS,
      payload: data,
    });
    
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Set current Log
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();

    // Send a POST request
    const res = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // get Data
    const data = await res.json();

    // dispatch to our reducers
    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (err) {
    // dispatch to our reducers
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();

    // Get Data request
    await fetch(`/logs/${id}`, { method: "DELETE" });

    // dispatch to our reducers
    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (err) {
    // dispatch to our reducers
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();

    // Get Data request
    const res = await fetch(`/logs/${log.id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    // dispatch to our reducers
    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (err) {
    // dispatch to our reducers
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Search logs from server
export const searchLogs = (text) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();

    // Dispatch an action type and a payload (data)
    dispatch({
      type: SEARCH_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};
