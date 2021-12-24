import { all } from "redux-saga/effects";
import listSaga from "./list/saga";
import detailSaga from "./detail/saga";

export default function* rootSaga(getState) {
  yield all([listSaga(), detailSaga()]);
}
