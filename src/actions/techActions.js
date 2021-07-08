import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from "./types";

// Get Techs from Server
export const getTechs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/techs");
    const data = await res.json();

    // Dispatch an action type and a payload (data)
    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const addTech = (tech) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();

    // Dispatch an action type and a payload (data)
    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Set Loading to True
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
