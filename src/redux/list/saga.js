import {
  all,
  fork,
  call,
  put,
  takeEvery,
} from "redux-saga/effects";

import { GET_LIST } from "./../actions";
import {
  getListSuccess,
  getListFailure,
} from "./action";

import { viewList } from "./../../data/api";

export function* watchGetList() {
  yield takeEvery(GET_LIST, getList);
}

const ViewListAsync = async payload =>
  await viewList(payload.string);

function* getList({ payload }) {
  try {
    const users = yield call(
      ViewListAsync,
      payload
    );
    if (!users.message) {
      yield put(getListSuccess(users));
    } else {
      yield put(getListFailure(users.message));
    }
  } catch (err) {
    yield put(getListFailure(err));
  }
}

export default function* rootSaga() {
  yield all([fork(watchGetList)]);
}
