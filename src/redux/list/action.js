import {
  GET_LIST,
  GET_LIST_SUCCESS,
  GET_LIST_FAILURE,
  CLEAR_STATE,
} from "./../actions";

export const getList = string => ({
  type: GET_LIST,
  payload: { string },
});
export const getListSuccess = list => ({
  type: GET_LIST_SUCCESS,
  payload: { list },
});
export const getListFailure = message => ({
  type: GET_LIST_FAILURE,
  payload: { message },
});

export const clearState = () => ({
  type: CLEAR_STATE,
});
