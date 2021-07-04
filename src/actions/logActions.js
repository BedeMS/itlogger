// what is the difference b/t Actions and
// going straight to the reducer folder?

import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "./types";

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
  // if we want to make an async call, that's where redux thunk
  // comes in. Instead of returning an object like we would for
  // a sync function, it allows us to return a function that gets
  // a "dispatch" method as an arg which lets us dispatch to our
  // reducer. We also have 'getState' available to us if we need it
  try {
    setLoading();

    const res = await fetch("/logs");
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
