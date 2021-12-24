import { combineReducers } from "redux";
import listReducer from "./list/reducer";
import detailReducer from "./detail/reducer";

const reducers = combineReducers({
  listReducer,
  detailReducer,
});

export default reducers;
