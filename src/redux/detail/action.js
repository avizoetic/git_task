import {
  GET_DETAIL,
  GET_DETAIL_SUCCESS,
  GET_DETAIL_FAILURE,
  // CLEAR_STATE,
} from "../actions";

export const getDetail = (string) => ({
  type: GET_DETAIL,
  payload: { string },
});
export const getDetailSuccess = (detail) => ({
  type: GET_DETAIL_SUCCESS,
  payload: { detail },
});
export const getDetailFailure = (message) => ({
  type: GET_DETAIL_FAILURE,
  payload: { message },
});

// export const clearState = () => ({
//   type: CLEAR_STATE,
// });
