import {
  GET_LIST,
  GET_LIST_SUCCESS,
  GET_LIST_FAILURE,
  CLEAR_STATE,
} from "./../actions";

const initialState = {
  requesting: false,
  error: "",
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        requesting: true,
      };
    case GET_LIST_SUCCESS:
      console.log("reducer", action);
      return {
        ...state,
        requesting: false,
        list: action.payload.list,
      };
    case GET_LIST_FAILURE:
      return {
        ...state,
        requesting: false,
        error: action.payload.message,
      };

    case CLEAR_STATE:
      return {
        requesting: false,
        error: "",
        list: [],
      };
    default:
      return state;
  }
};
