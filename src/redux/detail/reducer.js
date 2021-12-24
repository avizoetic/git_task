import {
  GET_DETAIL,
  GET_DETAIL_SUCCESS,
  GET_DETAIL_FAILURE,
  CLEAR_STATE,
} from "./../actions";

const initialState = {
  requesting: false,
  error: "",
  detail: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL:
      return {
        ...state,
        requesting: true,
      };
    case GET_DETAIL_SUCCESS:
      console.log("reducer", action);
      return {
        ...state,
        requesting: false,
        detail: action.payload.detail,
      };
    case GET_DETAIL_FAILURE:
      return {
        ...state,
        requesting: false,
        error: action.payload.message,
      };

    case CLEAR_STATE:
      return {
        requesting: false,
        error: "",
        detail: [],
      };
    default:
      return state;
  }
};
