import { all, fork, call, put, takeEvery } from "redux-saga/effects";

import { GET_DETAIL } from "../actions";
import { getDetailSuccess, getDetailFailure } from "./action";

import { viewDetail } from "../../data/api";

export function* watchGetDetail() {
  yield takeEvery(GET_DETAIL, getDetail);
}

const ViewDetailAsync = async (payload) => await viewDetail(payload.string);

function* getDetail({ payload }) {
  try {
    const users = yield call(ViewDetailAsync, payload);
    if (!users.message) {
      yield put(getDetailSuccess(users));
    } else {
      yield put(getDetailFailure(users.message));
    }
  } catch (err) {
    yield put(getDetailFailure(err));
  }
}

export default function* rootSaga() {
  yield all([fork(watchGetDetail)]);
}
