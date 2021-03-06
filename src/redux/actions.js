// All Actions global variable here

// AUTH
export const GET_LIST = "GET_LIST";
export const GET_LIST_SUCCESS = "GET_LIST_SUCCESS";
export const GET_LIST_FAILURE = "GET_LIST_FAILURE";

export const GET_DETAIL = "GET_DETAIL";
export const GET_DETAIL_SUCCESS = "GET_DETAIL_SUCCESS";
export const GET_DETAIL_FAILURE = "GET_DETAIL_FAILURE";
export const CLEAR_STATE = "CLEAR_STATE";

// Export everything from every action
export * from "./list/action";
export * from "./detail/action";
