/* eslint-disable import/no-anonymous-default-export */
import {
  GET_TECHS,
  SET_LOADING,
  ADD_TECH,
  DELETE_TECH,
} from "../actions/types";

const initState = {
  techs: null,
  loading: false,
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false,
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false,
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter((t) => t.id !== action.payload),
        loading: false,
      };
    default:
      return state;
  }
};
