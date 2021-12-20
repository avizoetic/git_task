import { combineReducers } from "redux";
import listReducer from "./list/reducer";

const reducers = combineReducers({
  listReducer,
});

export default reducers;
